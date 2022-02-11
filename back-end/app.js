// DEPENDENCIES

const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();


// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/",(req,res)=>{
    res.send("Get Snack'n at Snack-a-log!")
})

const snackController = require("./controllers/snackController")

app.use("/snacks",snackController);
EXPORT
module.exports = app;
