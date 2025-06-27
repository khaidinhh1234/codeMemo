import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { Login, Resgister } from "../../features/auth/AuthService";
import { errors } from "./../../../node_modules/immer/src/utils/errors";
import { toast } from "react-toastify";
type AuthProps = {
  login?: string;
};

type FormData = {
  email: string;
  password: string;
  confirmPassword?: string;
};

const Auth = ({ login = "register" }: AuthProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit } = useForm<FormData>();
  const [type, setType] = useState(true);
  const [type2, setType2] = useState(true);

  const onSubmit = (data: FormData) => {
    if (login === "login") {
      dispatch(Login(data));
    } else {
      if (data.password !== data.confirmPassword) {
        toast.error("Mật khẩu không khớp!");
        return;
      }
      dispatch(Resgister(data));
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>{login === "login" ? "Đăng nhập" : "Tạo tài khoản"}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type={type ? "password" : "text"}
              {...register("password")}
              placeholder="Nhập mật khẩu"
              onClick={() => setType(!type)}
            />
          </div>
          {login !== "login" && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Nhập lại mật khẩu</label>
              <input
                type={type2 ? "password" : "text"}
                id="cofirmPassword"
                {...register("confirmPassword")}
                onClick={() => setType2(!type2)}
                placeholder="Nhập lại mật khẩu"
              />
            </div>
          )}
          <button type="submit">
            {login === "login" ? "Đăng nhập" : "Tạo tài khoản"}
          </button>

          <p className="register-link">
            Chưa có tài khoản?{" "}
            <a href={login === "login" ? "/register" : "/login"}>
              {login !== "login" ? "Đăng nhập" : "Tạo tài khoản"}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
