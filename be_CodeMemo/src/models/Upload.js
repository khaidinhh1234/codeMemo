import mongoose from "mongoose";

const SchemaUpload = new mongoose.Schema({
  asset_id: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  format: {
    type: String,
    required: true,
  },
});

export const Upload = mongoose.model("Upload", SchemaUpload);
