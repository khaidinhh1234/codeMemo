import { Router } from "express";
import { GetImage, UploadImage } from "../controller/Upload";

export const UploadRouter = Router();

UploadRouter.post("/", UploadImage);
UploadRouter.get("/", GetImage);
