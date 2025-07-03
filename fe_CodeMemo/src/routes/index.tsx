import { Route, Routes } from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import LayoutUser from "../components/layout/layoutUser";
import LayoutAdmin from "../components/layout/layoutAdmin";
import Dashboard from "../pages/Admin/Dashboad/Dashboad";
import Post from "../pages/Admin/Post/Post";
import Category from "../pages/Admin/Category/Category";
import User from "../pages/Admin/User/User";
import UpdateNow from "../pages/Admin/UpdateNow/UpdateNow";
import Notfound from "../pages/Admin/NotFound/Notfound";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Auth login="login" />} />
      <Route path="/register" element={<Auth />} />
      <Route path="/" element={<LayoutUser />} />
      <Route path="/admin" element={<LayoutAdmin />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="post" element={<Post />} />
        <Route path="category" element={<Category />} />
        <Route path="user" element={<User />} />
        <Route path="settings" element={<h1>Settings</h1>} />
        <Route path="update" element={<UpdateNow />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
};

export default Router;
