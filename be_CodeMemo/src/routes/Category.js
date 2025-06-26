import { Router } from "express";
import { CraeteCategory, GetCategories } from "../controller/Category";

export const CategoryRouter = Router();

CategoryRouter.get("/", GetCategories);
CategoryRouter.post("/", CraeteCategory);
