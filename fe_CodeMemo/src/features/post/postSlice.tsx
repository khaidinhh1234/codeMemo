import { createSlice } from "@reduxjs/toolkit";
import { GetPosts } from "./PostService";
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
    builder.addCase(GetPosts.fulfilled, (state: any, action: any) => {
      state.post = action.payload;
    });
  },
});

export default PostSlice.reducer;
