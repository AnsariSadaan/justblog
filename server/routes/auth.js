const router = require("express").Router();
const User = require("../models/User");
const bcryptjs = require("bcryptjs");

router.post("/register", (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(422).json({ error: "SignUp:- Please add all details" })
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "User already Exists with this email" });
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
    
        // try {
        //     const salt = await bcrypt.genSalt(10);
        //     const hashedPass = await bcrypt.hash(req.body.password, salt);
        //     const newUser = new User({
        //         username: req.body.username,
        //         email: req.body.email,
        //         password: hashedPass,
        //     });
    
        //     const user = await newUser.save();
        //     res.status(200).json(user);
        // } catch (err) {
        //     res.status(500).json(err);
        // }
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(422).json({ error: "login :- please add all details" })
    }
    User.findOne({ username: username }).then((savedUser) => {
        if (!savedUser) {
            return res.status(422).json({ error: "Invalid username or password" })
        }
        bcryptjs.compare(password, savedUser.password)
            .then(doMatch => {
                if (doMatch) {
                    res.json({ message: "successfully logged in" })
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