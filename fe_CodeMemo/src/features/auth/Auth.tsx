import { createSlice } from "@reduxjs/toolkit";
import { Login, Resgister } from "./AuthService";
interface AuthState {
  auth: any[];
  loading: boolean;
  error?: string;
}

const initialState: AuthState = {
  auth: [],
  loading: false,
  error: undefined,
};

const AuthSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Resgister.fulfilled, (state, action) => {
        state.auth.push(action.payload);
      })
      .addCase(Login.fulfilled, (state, action) => {
        state.auth.push(action.payload);
      });
  },
});
export default AuthSlice.reducer;
