import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Suppress the deprecation warning
mongoose.set('strictQuery', false);

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database...");
    }).catch((error) => {
        console.log(error);
    });
};

export default connectDB;
