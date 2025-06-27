import React from "react";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "./../header/HeaderAdmin";
import FooterAdmin from "../footer/footerAdmin";
import SidebarAdmin from "./../sildebarAdmin/SlibarAdmin";

const LayoutAdmin = () => {
  return (
    <div className="admin-layout">
      <HeaderAdmin />
      <div className="admin-main">
        <SidebarAdmin />
        <main className="">
          <Outlet />
        </main>{" "}
      </div>
      <FooterAdmin />
    </div>
  );
};

export default LayoutAdmin;
