const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

router.post("/", (req, res) => {
    const newPost = new Post(req.body);
    newPost.save()
        .then(savedPost => {
            res.status(200).json(savedPost);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Post.findById(req.params.id)
    .then(post =>{
        if(post.username === req.body.username){
            Post.findByIdAndUpdate(req.params.id,{
                    $set : req.body,
                },
                {
                    new: true
                })
                .then(updatePost =>{
                    return res.status(200).json(updatePost);
                })
                .catch(err => {
                    return res.status(500).json(err);
                })
        }
        else {
            return res.status(401).json("you can update only ypur post");
        }
    })
    .catch(err => {
        return res.status(500).json(err)
    })
})

router.delete("/:id", (req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            if (post.username === req.body.username) {
                post.deleteOne()
                    .then(() => {
                        res.status(200).json("Post has been deleted...");
                    })
                    .catch(err => {
                        res.status(500).json(err);
                    });
            } else {
                res.status(401).json("You can delete only your post!");
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//get post
router.get("/:id", (req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            res.status(200).json(post);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});


// get all post

router.get("/", (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;

    let postPromise;

    if (username) {
        postPromise = Post.find({ username });
    } else if (catName) {
        postPromise = Post.find({
            categories: {
                $in: [catName],
            },
        });
    } else {
        postPromise = Post.find();
    }

    postPromise
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});


module.exports = router;
