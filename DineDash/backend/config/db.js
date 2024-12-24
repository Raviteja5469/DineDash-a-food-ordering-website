import mongoose from "mongoose";

export const connectDB = async() => {
     await mongoose.connect('mongodb+srv://Dinedash:ravi%40%40@cluster0.qt2rl.mongodb.net/DineDash?retryWrites=true&w=majority').then(()=>console.log("Database connected"));
}