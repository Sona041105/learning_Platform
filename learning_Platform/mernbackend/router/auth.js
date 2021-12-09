const express = require('express');
const router = express.Router();
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');

require('../db/conn');
const User = require("../models/userSchema");

router.get("/", (req,res) => {
  
    res.send("index router js"); 
})


// using promises
// router.post('/register',(req,res)=>{
    
//     const {name,email,phone,work,password,cpassword }= req.body;
    
//     if(!name ||!email ||!phone ||!work ||!password || !cpassword ){
          
//          return res.status(422).json({error: "fill all fields"});
//     }
   
//     User.findOne({email: email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error: "user already exists with that email"});
//         }
//         const user = new User({name:name,email:email,phone,work,password,cpassword});

//         user.save().then(()=>{
//             res.status(201).json({message:"user registerd successfully"});
//         }).catch((err)=> res.status(500).json({error:"failed registered"}));
//     }).catch((err)=> {
//         console.log(err);
//     })

    
   
// });

router.post('/register', async (req,res)=>{
    
    const {name,email,phone,work,password,cpassword }= req.body;
    
    if(!name ||!email ||!phone ||!work ||!password || !cpassword ){
          
         return res.status(422).json({error: "Please fill all the  fields"});
    }

        try{
            const userExist = await User.findOne({email: email})

            if(userExist){
               return res.status(422).json({error: "user already exists with that email"});
             }else if(password != cpassword)
             {
                return res.status(422).json({error: "user already exists with that email"});
             }
     
             const user = new User({name:name,email:email,phone,work,password,cpassword});
                
             const userRegister= await user.save();
     
             if(userRegister){
                 res.status(201).json({message:"user registerd successfully"});
             }else
             {
                 res.status(500).json({error:"failed registered"});
             }

        } catch (err) {
            console.log(err);
        }   
   
});


router.post('/signin',async (req,res)=>{
    try{
       const {email,password}=req.body;
       if(!email || !password)
       {
           return res.status(400).json({error: "Please fill all the  fields"});
       }

       const userLogin =await User.findOne({email:email});
       if(!userLogin)
       {
           return res.status(400).json({error:"Invalid details"});
       }

       const isMatch = await bcrypt.compare(password,userLogin.password);
       if(!isMatch){
            return res.status(400).json({error:"Invalid details"});
       }
        
          const token = await userLogin.generateAuthToken();
          res.cookie("jwttoken",token,{
                expires:new Date(Date.now()+ 25892000000),
                httpOnly:true
          });
          
          res.json({message:"user signin successfully"})
       
       

    }catch (err){
        console.log(err);
    }

})

router.get('/logout',(req,res)=>{
    console.log("logout Page");
    res.clearCookie('jwttoken');
    res.redirect("/");
    res.status(200).send("User logout");
})



module.exports = router;