import { legacy_createStore as createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../features/auth/Auth";
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
