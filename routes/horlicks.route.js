import express from "express"
import { getHorlicksSales , addHorlicksSales} from "../controllers/horlicks.controller.js";

const horlicksRouter = express.Router()

horlicksRouter.post("/add", addHorlicksSales );
horlicksRouter.get("/get", getHorlicksSales );
horlicksRouter.get("/health",async(req,res)=>{
    console.log("Healthy")
    res.status(200).json({success:true, message:"Healthy"})
})

export default horlicksRouter ;