import { http } from "../../config";
import { apiDetailPost, apiGetPost, apiUpdatePost } from "./urls";

const GetPost = () => http.get(apiGetPost);
const CreatePost = (body: any) => http.post(apiGetPost, body);
const UpdatePost = (id: string, body: any) => http.put(apiUpdatePost(id), body);
const DatailPost = (id: string) => http.get(apiDetailPost(id));

export const PostService = {
  GetPost,
  CreatePost,
  UpdatePost,
  DatailPost,
};
