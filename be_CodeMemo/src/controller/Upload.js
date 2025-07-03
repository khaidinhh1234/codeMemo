import { Upload } from "../models/Upload";

export const UploadImage = async (req, res) => {
  try {
    const file = req.body;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const data = await Upload.create(file);
    if (!data) {
      return res.status(500).json({ message: "Failed to upload image" });
    }
    res.status(200).json({
      message: "Upload Hình ảnh thành công",
      data: {
        asset_id: data.asset_id,
        url: data.url,
        format: data.format,
      },
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const GetImage = async (req, res) => {
  try {
    const images = await Upload.find();
    if (!images || images.length === 0) {
      return res.status(404).json({ message: "No images found" });
    }
    res.status(200).json({
      message: "Hiển thị hình ảnh thành công",
      data: images,
    });
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
