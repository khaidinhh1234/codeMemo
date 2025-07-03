import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { PostService } from "../../service/Post";

export const GetPosts = createAsyncThunk("post/getPosts", async () => {
  try {
    const data = await PostService.GetPost();
    console.log(data);
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
