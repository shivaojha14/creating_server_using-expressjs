import mongoose from "mongoose";
import { DB_NAME } from "../constent.js";


const connectDB = async () => {
  try {
    const conetionInstance =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`Connected to the database !! on Host ${conetionInstance.connection.host}`);
    //console.log("Connected to the database");
  } catch (error) {
    console.log(error, "Error connecting to the database");
    //throw new Error("Error connecting to the database");
    process.exit(1);
  }
}

export default connectDB;