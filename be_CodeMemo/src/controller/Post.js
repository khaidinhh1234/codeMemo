import { Post } from "../models/Post";

export const GetPosts = async (req, res) => {
  try {
    const post = await Post.find({})
      .populate("categoryId", "name description")
      .sort({ createdAt: -1 });
    if (!post || post.length === 0) {
      return res.status(404).json({ message: "Không có thông tin" });
    }
    res.status(200).json({
      message: "Hiển thị danh sách thành công",
      posts: post,
    });
  } catch (error) {
    res.status(500).json({ message: error || "Internal server error" });
  }
};
export const CreatePost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json({
      message: "Tạo bài viết thành công",
      status: 201,
      post: post,
    });
  } catch (error) {
    res.status(500).json({ message: error || "Internal server error" });
  }
};

export const GetPostId = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Không có thông tin" });
    }
    res.status(200).json({
      message: "Hiển thị thông tin bài viết thành công",
      post: post,
    });
  } catch (error) {
    res.status(500).json({ message: error || "Internal server error" });
  }
};
export const UpdatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!post) {
      return res.status(404).json({ message: "Không có thông tin" });
    }
    res.status(200).json({
      message: "Cập nhật bài viết thành công",
      post: post,
    });
  } catch (error) {
    res.status(500).json({ message: error || "Internal server error" });
  }
};
