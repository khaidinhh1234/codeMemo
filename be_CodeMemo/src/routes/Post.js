import { Router } from "express";
import {
  CreatePost,
  GetPostId,
  GetPosts,
  UpdatePost,
} from "../controller/Post";

export const PostRouter = Router();

PostRouter.get("/", GetPosts);
PostRouter.post("/", CreatePost);
PostRouter.get("/:id", GetPostId);
PostRouter.put("/:id", UpdatePost);
