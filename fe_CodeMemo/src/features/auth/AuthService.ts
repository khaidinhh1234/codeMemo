import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { AuthService } from "../../service/Auth";
export const Login = createAsyncThunk("auth/login", async (Data: any) => {
  try {
    const data = await AuthService.Login(Data);
    if (data?.status === 200) {
      console.log(data);
      toast.success(data.data.message || "Đăng nhập thành công!");
      setTimeout(() => {
        if (data?.data?.data.role === "admin") {
          window.location.href = "/admin";
        } else {
          window.location.href = "/";
        }
      }, 2000);
      return data;
    }
    if (data?.data?.message) {
      toast.error(data.data.error);
      return;
    }
  } catch (error: any) {
    console.log(error);
    toast.error(
      error?.response?.data?.message ||
        "Đăng nhập thất bại, vui lòng thử lại sau!"
    );
  }
});

export const Resgister = createAsyncThunk(
  "auth/resgister",
  async (Data: any) => {
    try {
      const data = await AuthService.Register(Data);
      console.log(data);
      if (data?.status === 200) {
        toast.success(data.data.message);
        return data;
      }
      if (data?.data?.message) {
        toast.error(data?.data?.error);
        return;
      }
    } catch (error: any) {
      console.error(error);
      toast.error(
        error?.response?.data?.message ||
          "Đăng ký thất bại, vui lòng thử lại sau!"
      );
    }
  }
);
