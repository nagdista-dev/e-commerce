import mongoose from "mongoose";
import "dotenv/config";
console.log(process.env.MONGO_URI)
const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("DB connected successfully", conn.connection.host);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
