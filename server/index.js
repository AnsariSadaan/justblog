const express = require('express')
const mongoose = require('mongoose')
const authRoute = require("./routes/auth");

const app = express();
app.use(express.json());
const PORT = 3000;

app.use("/server/auth", authRoute);

mongoose.connect('mongodb+srv://justblog:justblog@justblog.irnphgb.mongodb.net/')
.then(()=>console.log("Database Connected Successfully"))
.catch((err)=>{console.log(err)})

app.listen(PORT, ()=>{
    console.log(`server is running on port no : ${PORT}`)
})