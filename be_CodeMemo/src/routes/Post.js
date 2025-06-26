import { Router } from "express";
import { CreatePost, GetPosts } from "../controller/Post";

export const PostRouter = Router();

PostRouter.get("/", GetPosts);
PostRouter.post("/", CreatePost);
