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
    // mongoose.connect("mongodb+srv://BetaCoders:user123@cluster1.8mecegs.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    // .then(() => {
    //     console.log("Connected to database...");
    // }).catch((error) => {
    //     console.log(error);
    // });
};

export default connectDB;
