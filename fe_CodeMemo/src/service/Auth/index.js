import { http } from "../../config";
import { apiLogin, apiRegister } from "./urls";
const Login = (body) => http.post(apiLogin, body);
const Register = (body) => http.post(apiRegister, body);

export const AuthService = {
  Login,
  Register,
};
