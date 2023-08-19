const express = require('express')
const mongoose = require('mongoose')
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const dotenv = require('dotenv')
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use("/server/auth", authRoute);
app.use("/server/users", usersRoute);
app.use("/server/posts", postRoute);
app.use("/server/categories", categoryRoute);

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Database Connected Successfully"))
.catch((err)=>{console.log(err)})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, "hello.jpeg");
    },
});

const upload = multer({ storage: storage });
app.post("/server/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});

app.listen(PORT, ()=>{
    console.log(`server is running on port no : ${PORT}`)
})