 const express =require('express');
 const mongoose = require('mongoose');
 require('dotenv').config();
 const routes = require ('./routes/TaskRoutes')
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// app.get("/", (req, res) => {
    // res.send("hi iqra")
    //
// })

//next connect mongoose
mongoose.connect(process.env.MONGODB_URI)
.then(() =>console.log("mongodb connected . . ."))
.catch((err) => console.log(err));

app.use("/api" , routes)

 app.listen(PORT ,() => console.log(`server is running on port ${PORT}`))
    





