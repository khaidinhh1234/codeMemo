import { AuthRouter } from "./Auth.js";
import { CategoryRouter } from "./Category.js";
import { PostRouter } from "./Post.js";
import { UploadRouter } from "./Upload.js";
export const Routes = (app) => {
  app.use("/api/v1", AuthRouter);
  app.use("/api/v1/post", PostRouter);
  app.use("/api/v1/category", CategoryRouter);
  app.use("/api/v1/upload", UploadRouter);
};
