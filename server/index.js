const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/auth.js');
const mongoose = require('mongoose');
const User = require( './models/User.js');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
dotenv.config();
app.use(cors());
app.use("/server/auth",router);
app.use(express.json())

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