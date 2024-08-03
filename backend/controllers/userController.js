import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import validator from "validator"



// token generaction
const createToken =(id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// login user
const loginUser = async (req,res)=>{
    const {email,password}=req.body;
    try {
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success:false , message:"User Doesn't exist"})

        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false, message:"Invaild credentials"})
        }
        const token = createToken(user._id);
        res.json({success:true, token})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
        
    }

}

// register user

const registerUser = async (req,res)=>{
    const {name,password,email}= req.body;
    try {
        // checking is user already exist
        const exist = await userModel.findOne({email})
        if(exist){
            return res.json({success:false, message:"User already exist"})
        }
        // validating email 
        if(!validator.isEmail(email)){
            return res.json({success:false, message:" Please enter a valid email"})
        }
        // checking the passowrd length
        if(password.length <8){
            return res.json({success:false, message:"Please enter strong password"})
        }
        
        // hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password , salt)

        // new user
        const newUser = new userModel({
            name: name,
            email:email,
            password: hashedPassword
        })
          const user = await newUser.save()
          const token = createToken(user._id)
          res.json({success:true, token})
    } catch (error) {
        
        console.log(error);
        res.json({success:false, message:"Error in registeration"})
    }

}

export{
    loginUser,
    registerUser
}