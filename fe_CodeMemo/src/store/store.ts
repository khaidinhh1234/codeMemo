import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../features/auth/Auth";
import PostReducer from "../features/post/postSlice";
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    post: PostReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
