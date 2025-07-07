import { Outlet } from "react-router-dom";
import FooterAdmin from "../footer/footerAdmin";
import SidebarAdmin from "../SidebarAdmin/SidebarAdmin";
import HeaderAdmin from "./../header/HeaderAdmin";

const LayoutAdmin = () => {
  return (
    <div className="admin-layout">
      <HeaderAdmin />
      <div className="admin-main">
        <SidebarAdmin />
        <main className="admin-content ">
          <Outlet />
        </main>{" "}
      </div>
      <FooterAdmin />
    </div>
  );
};

export default LayoutAdmin;
