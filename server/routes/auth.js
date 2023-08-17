const express = require( 'express');
const User = require('../models/User.js')
// import mongoose from 'mongoose'

// const User = mongoose.model('user');
const router = express.Router();

router.post('/register', (req, res)=>{
    const {username, email, password} = req.body;
    if(!username || !email || !password ){
        return res.status(422).json({error: "Register: Please add all detals"})
    }
    User.findOne({email: email})
    .then((saveduser)=>{
        if(saveduser){
            return res.status(422).json({error: "user already exists with this email"})
        }
    })
    const newUser = new User({
        username,
        email,
        password
    })
    newUser.save()
    .the(user =>{
        res.json({message: "Account created suuccessfully"})
    })
    .catch((err)=>{
        console.log(err)
    })
})


module.exports = router