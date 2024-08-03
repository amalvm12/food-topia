import express from "express";
import authMiddleWare from "../middleware/auth.js"
import { placeOrder ,verifyOrder,userOrder,listOrders,updateStatus} from "../controllers/orderController.js";


const orderRouter = express.Router();

orderRouter.post("/place",authMiddleWare , placeOrder);
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userorders",authMiddleWare,userOrder)
orderRouter.get("/list",listOrders)
orderRouter.post("/status",updateStatus)


export default orderRouter;
