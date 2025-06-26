import { Category } from "../models/Category";

export const GetCategories = async (req, res) => {
  try {
    const categories = await Category.find({});

    if (!categories || categories.length === 0) {
      return res.status(404).json({ message: "Không có danh mục nào" });
    }
    res.status(200).json({
      message: "Hiển thị danh sách danh mục thành công",
      data: categories,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Lỗi server" });
  }
};

export const CraeteCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const existed = await Category.findOne({ name });
    if (existed) {
      return res.status(400).json({ message: "Tên danh mục đã tồn tại" });
    }
    const category = await Category.create(req.body);
    console.log("category", category);
    res.status(200).json({
      message: "Tạo danh mục thành công",
      data: category,
    });
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).json({ message: "Lỗi server" });
  }
};
