import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { PostService } from "../../service/Post";

export const GetPosts = createAsyncThunk("post/getPosts", async () => {
  try {
    const data = await PostService.GetPost();
    if (data?.status === 200) {
      return data?.data?.posts;
    }
    if (data?.data?.message) {
      toast.error(data.data.error);
      return;
    }
  } catch (error: any) {
    toast.error(
      error?.response?.data?.message ||
        "Lấy danh sách bài viết thất bại, vui lòng thử lại sau!"
    );
  }
});
export const CreatePost = createAsyncThunk(
  "post/createPost",
  async (payload: any, { rejectWithValue }) => {
    try {
      const data = await PostService.CreatePost(payload);
      if (data?.status === 201) {
        toast.success("Tạo bài viết thành công!");
        return data.data.post;
      }
      if (data?.data?.message) {
        toast.error(data.data.message);
        return rejectWithValue(data.data.message);
      }
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          "Tạo bài viết thất bại, vui lòng thử lại sau!"
      );
      return rejectWithValue(error);
    }
  }
);
export const DatailPost = createAsyncThunk(
  "post/dateilPost",
  async (id: string) => {
    try {
      const data = await PostService.DatailPost(id);
      if (data?.status === 200) {
        return data.data.post;
      }
      if (data?.data?.message) {
        toast.error(data.data.message);
        return;
      }
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          "Lấy chi tiết bài viết thất bại, vui lòng thử lại sau!"
      );
    }
  }
);
export const UpdatePost = createAsyncThunk(
  "post/updatePost",
  async ({ id, payload }: { id: string; payload: any }) => {
    try {
      const data = await PostService.UpdatePost(id, payload);
      if (data?.status === 200) {
        toast.success("Cập nhật bài viết thành công!");
        return data.data.post;
      }
      if (data?.data?.message) {
        toast.error(data.data.message);
        return;
      }
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          "Cập nhật bài viết thất bại, vui lòng thử lại sau!"
      );
      return;
    }
  }
);
