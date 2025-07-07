import { createSlice } from "@reduxjs/toolkit";
import { CreatePost, DatailPost, GetPosts, UpdatePost } from "./PostService";
interface PostState {
  post: any[];
  loading: boolean;
  error?: string;
}
const initialState: PostState = {
  post: [],
  loading: false,
  error: undefined,
};
const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(GetPosts.pending, (state: any) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(GetPosts.fulfilled, (state: any, action: any) => {
        state.post = action.payload;
      })
      .addCase(GetPosts.rejected, (state: any, action: any) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(CreatePost.fulfilled, (state: any, action: any) => {
        state.post.unshift(action.payload);
      })
      .addCase(UpdatePost.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.error = undefined;
        state.post = state.post.map((post: any) =>
          post._id === action.payload._id ? action.payload : post
        );
      });
  },
});

export default PostSlice.reducer;
