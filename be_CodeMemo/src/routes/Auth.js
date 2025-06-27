import { Router } from "express";
import { Login, Register } from "../controller/Auth";
export const AuthRouter = Router();

AuthRouter.post("/register", Register);
AuthRouter.post("/login", Login);
