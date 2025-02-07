import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";


//app configuration

const app = express()
const port = 4000

//middleware

app.use(express.json())
app.use(cors())

//Database connection

connectDB();

// API endpoint

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("It is working 1")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

//mongodb+srv://Dinedash:<db_password>@cluster0.qt2rl.mongodb.net/?
// mongodb+srv://Dinedash:ravi%40%40@cluster0.qt2rl.mongodb.net/DineDash?retryWrites=true&w=majority    true passord changed for this @@


