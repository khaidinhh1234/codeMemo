import { NavLink } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    <>
      <aside className="sidebar-admin">
        <nav>
          <NavLink to={"/admin/dashboard"} className="sidebar-links">
            <i className="fa-solid fa-house"></i> Dashboard
          </NavLink>
          <NavLink to="/admin/post" className="sidebar-links">
            <i className="fa-solid fa-house"></i> Post
          </NavLink>
          <NavLink to="/admin/category" className="sidebar-links">
            <i className="fa-solid fa-house"></i>Danh mục
          </NavLink>
          <NavLink to="/admin/user" className="sidebar-links">
            <i className="fa-solid fa-house"></i>Tài khoản
          </NavLink>
          <NavLink to="/admin/update" className="sidebar-links">
            <i className="fa-solid fa-house"></i>Cài đặt
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default SidebarAdmin;
