import mongoose from "mongoose";

export const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("Kết nối thành công với MongoDB");
  } catch (error) {
    console.error("Server error:", error);
  }
};
