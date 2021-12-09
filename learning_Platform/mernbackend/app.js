const dotenv = require("dotenv");
const express = require("express");
const path=require("path");
const app = express();
const mongoose =require("mongoose");

dotenv.config({path:'./config.env'});

const port =process.env.PORT ||  3000;

require('./db/conn');
// const User = require('./models/userSchema');


// we link the router files to make our route easy
app.use(express.json());
app.use(require('./router/auth'));






//middelware
function middleware(req, res, next) {
        console.log(`Hello middleware`);
         next();
}



app.get("/", (req,res) => {
  
     res.send("index"); 
})

app.get("/Myaccount",middleware,(req,res) => {
  
        res.send("Myaccount"); 
})

app.get("/profile",middleware,(req,res) => {
  
        res.send("profile"); 
})
app.get("/login", (req,res) => {
  
        res.send("login"); 
})
app.get("/register", (req,res) => {
  
        res.send("register"); 
})

 
app.listen(port,() => {

        console.log(`server is running at port no ${port}`);
})