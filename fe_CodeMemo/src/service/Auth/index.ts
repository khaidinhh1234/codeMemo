import { http } from "../../config";
import { apiLogin, apiRegister } from "./urls";
const Login = (body: any) => http.post(apiLogin, body);
const Register = (body: any) => http.post(apiRegister, body);

export const AuthService = {
  Login,
  Register,
};
