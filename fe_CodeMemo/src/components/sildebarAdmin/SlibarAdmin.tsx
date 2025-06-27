import React from "react";
import { NavLink } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    <aside className="sidebar-admin">
      <nav>
        <NavLink to="/admin/dashboard" className="sidebar-links">
          {" "}
          <i className="fa-solid fa-house"></i> Dashboard
        </NavLink>
        <NavLink to="/admin/notes" className="sidebar-links">
          {" "}
          <i className="fa-solid fa-house"></i> Ghi chú
        </NavLink>
        <NavLink to="/admin/tags" className="sidebar-links">
          {" "}
          <i className="fa-solid fa-house"></i>Tags
        </NavLink>
        <NavLink to="/admin/favorites" className="sidebar-links">
          {" "}
          <i className="fa-solid fa-house"></i>Yêu thích
        </NavLink>
        <NavLink to="/admin/settings" className="sidebar-links">
          {" "}
          <i className="fa-solid fa-house"></i>Cài đặt
        </NavLink>
      </nav>
    </aside>
  );
};

export default SidebarAdmin;
