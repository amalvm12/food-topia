import mongoose from "mongoose";

 
 export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://amalvm73:food1227@cluster0.wpgbjlh.mongodb.net/food-app')
    .then(()=>console.log("DB Connected"))
        
    
}