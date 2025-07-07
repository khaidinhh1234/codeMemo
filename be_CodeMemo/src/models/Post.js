import mongoose, { Schema } from "mongoose";

const postSchame = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 250,
    },
    photo: {
      type: String,
      // required: true,
    },
    textarea: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
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
    status: {
      type: String,
      enum: ["0", "1", "2"], // Trạng thái bài viết
      default: "0", // 0: Chưa duyệt, 1: Đã duyệt, 2: Từ chối
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
