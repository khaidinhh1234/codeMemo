import { http } from "../../config";
import { apiUpload } from "./urls";

const GetUpload = () => http.get(apiUpload);
const CreateUpload = (body: any) => http.post(apiUpload, body);

export const UploadService = {
  GetUpload,
  CreateUpload,
};
