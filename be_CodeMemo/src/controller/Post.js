import { Post } from "../models/Post";

export const GetPosts = async (req, res) => {
  try {
    const post = await Post.find({}).populate("categoryId", "name description");
    if (!post || post.length === 0) {
      return res.status(404).json({ message: "Không có thông tin" });
    }
    res.status(200).json({
      message: "Hiển thị danh sách thành công",
      posts: post,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const CreatePost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json({
      message: "Tạo bài viết thành công",
      post: post,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
