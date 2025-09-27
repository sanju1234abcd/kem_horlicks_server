import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import horlicksRouter from "./routes/horlicks.route.js";

dotenv.config({
    path: "./.env"
})
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "http://localhost:5173",
}))

app.use("/api/v1/horlicks",horlicksRouter)

const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

await dbConnect().then(() => {
    app.listen(3000, () => {
        console.log("Server started on port 3000");
    });

    app.get("/", (req, res) => {
        res.send("Hello, World!");
    });
    
    setInterval(async() => {
        await fetch(`https://kem-horlicks-server.onrender.com/api/v1/horlicks/health`,{method:"GET"});
    }, 14 * 60 * 1000);
    
    
});