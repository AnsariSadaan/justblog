const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcryptjs = require("bcryptjs");


//update

    router.put("/:id", (req, res) => {
        if (req.body.userId === req.params.id) {
            if (req.body.password) {
                bcryptjs.genSalt(10)
                    .then(salt => {
                        return bcryptjs.hash(req.body.password, salt);
                    })
                    .then(hashedPassword => {
                        req.body.password = hashedPassword;

                        // Now, update the user
                        User.findByIdAndUpdate(
                            req.params.id,
                            {
                                $set: req.body,
                            },
                            { new: true }
                        )
                            .then(updatedUser => {
                                res.status(200).json(updatedUser);
                            })
                            .catch(err => {
                                res.status(500).json(err);
                            });

                    })
                    .catch(err => {
                        res.status(500).json(err);
                    });
            } else {
                User.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                )
                    .then(updatedUser => {
                        res.status(200).json(updatedUser);
                    })
                    .catch(err => {
                        res.status(500).json(err);
                    });
            }
        } else {
            res.status(401).json("You can update only your account!");
        }
    });

    // if (req.body.userId === req.params.id) {
    //     if (req.body.password) {
    //         const salt = await bcryptjs.genSalt(10);
    //         req.body.password = await bcryptjs.hash(req.body.password, salt);
    //     }
    //     try {
    //         const updatedUser = await User.findByIdAndUpdate(
    //             req.params.id,
    //             {
    //                 $set: req.body,
    //             },
    //             { new: true }
    //         );
    //         res.status(200).json(updatedUser);
    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // } else {
    //     res.status(401).json("You can update only your account!");
    // }

//Delete

router.delete('/:id', (req, res)=>{
    if(req.body.userId === req.params.id){
        User.findById(req.params.id)
        .then(user => {
            if(!user){
                return res.status(404).json({error: "user not found"}) 
            }
            // delete all post from the user
            Post.deleteMany({username : user.username})
            .then(()=>{
                return User.findByIdAndDelete(req.params.id);
            })
            .then(()=>{
                return res.status(200).json({message: "user has been deleted.."});
            })
            .catch(err =>{
                return res.status(404).json("User not found");
            })
        })
    }else {
        return res.status(401).json({message: "you can delete only your account"})
    }
})


//GET user

router.get("/:id", (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: "User not found!" });
            }
            const { password, ...others } = user._doc;
            res.status(200).json(others);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});



module.exports = router;