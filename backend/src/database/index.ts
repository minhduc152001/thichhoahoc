import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose.set("strictQuery", true);
    const mongoUri = process.env.MONGODB_URI;
    await mongoose.connect(mongoUri as string);
    console.log(`Mongodb is connected`);
  } catch (err) {
    console.log(err);
    throw new Error("Could not connect to mongodb");
  }
};

export default connectDb;
