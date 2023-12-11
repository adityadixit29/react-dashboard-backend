import express from "express";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import sectorRouter from "./routes/sector.js";
import cors from "cors";
config();

const app = express();
//middlewares
app.use(express.json());
app.use(cookieParser());
//cors
app.use(
    cors({
      origin: [process.env.FRONTEND_URL], // The URL of your frontend application
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
  
//api
app.use("/api/v1/sector", sectorRouter);
//test page
app.get('/',(req,res)=>{
    res.send("running")
})
export default app;