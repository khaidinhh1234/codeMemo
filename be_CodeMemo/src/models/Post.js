import mongoose, { Schema } from "mongoose";

const postSchame = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // Tham chiếu đến mô hình Category
      required: true, // Bắt buộc phải có danh mục
    },
    subject: {
      type: String,
    },
    level: {
      type: String,
    },
    tags: [String],

    author: {
      type: String,
    },

    views: { type: Number, default: 0 }, // Số lượt xem bài viết

    likes: { type: Number, default: 0 }, // Số lượt thích (nếu muốn sau này thêm)

    createdAt: Date, // Ngày tạo (nếu không dùng `timestamps`)

    updatedAt: Date,
  },
  {
    timestamps: true, // Tự động thêm trường createdAt và updatedAt
  }
);
export const Post = mongoose.model("Post", postSchame);
