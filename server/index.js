import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
const app = express();
dotenv.config();
const PORT = 3000

app.use('/home', (req, res)=>{
    res.send("from server");
})

app.use('/about', (req, res)=>{
    res.send("from the bout page");
})

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Database connected successfuly"))
.catch((err)=>console.log(err));

app.listen(PORT, ()=>{
    console.log(`serveris running on port no ${PORT}`)
})