import express from "express"
import { getHorlicksSales , addHorlicksSales} from "../controllers/horlicks.controller.js";

const horlicksRouter = express.Router()

horlicksRouter.post("/add", addHorlicksSales );
horlicksRouter.get("/get", getHorlicksSales );

export default horlicksRouter ;