import express from "express"
import cors  from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"
import userRouter from "./routes/userRoutes.js"
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"




// app config

const app = express()
const port =process.env.PORT || 4000;


// middleware
app.use(express.json())
app.use(cors())

// DB connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
// image storage
app.use("/image",express.static("uploads"))
// user route
app.use("/api/user",userRouter)
// cart route
app.use("/api/cart",cartRouter)
// order route
app.use("/api/order", orderRouter)


app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`Server started on portNumber ${port}  `);
})

// mongodb+srv://amalvm73:food1227@cluster0.wpgbjlh.mongodb.net/?