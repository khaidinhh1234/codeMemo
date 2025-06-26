import { CategoryRouter } from "./Category.js";
import { PostRouter } from "./Post.js";
export const Routes = (app) => {
  app.use("/api/v1/post", PostRouter);
  app.use("/api/v1/category", CategoryRouter);
};
