import mongoose, { Schema } from "mongoose";
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true, // Đảm bảo tên danh mục là duy nhất
    },
    description: {
      type: String,
      default: "", // Mô tả có thể để trống
    },
    createdAt: {
      type: Date,
      default: Date.now, // Ngày tạo mặc định là ngày hiện tại
    },
  },
  {
    timestamps: true, // Tự động thêm trường createdAt và updatedAt
  }
);
export const Category = mongoose.model("Category", CategorySchema);
