const router = require("express").Router();
const User = require("../models/User");
const bcryptjs = require("bcryptjs");


//register
router.post("/register", (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(422).json({ error: "SignUp:- Please add all details" })
    }
    User.findOne({ email: email } && {username : username})
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "User already Exists with this email or username" });
            }
            bcryptjs.hash(password, 12)
                .then(hashedpassword => {
                    const user = new User({
                        username: username,
                        email: email,
                        password: hashedpassword
                    })
                    user.save()
                        .then(user => {
                            res.json({ message: "Account Created Successfully" });
                        })
                        .catch(err => {
                            console.log(err);
                        })
                })
        })
        .catch(err => {
            console.log(err);
        })
});

//login

router.post('/login', async (req, res) => {

    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(422).json({ error: "login :- please add all details" })
    }
    const user = await User.findOne({ username: username }).then((savedUser) => {
        if (!savedUser) {
            return res.status(422).json({ error: "Invalid username or password" })
        }
        bcryptjs.compare(password, savedUser.password)
            .then(doMatch => {
                if (doMatch) {
                    res.status(200).json({messgae: "loggein successfully"})
                } else {
                    return res.status(422).json({ error: "invalid username or Password" })
                }
            })
            .catch(err => {
                console.log(err);
            })
    })
})




module.exports = router;