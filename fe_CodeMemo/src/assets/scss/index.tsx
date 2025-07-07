import React from "react";
import "./Content.scss";
import "./FooterAdmin.scss";
import "./HeaderAdmin.scss";
import "./LayoutAdmin.scss";
import "./login.scss";
import "./SidebarAdmin.scss";
import "./Modal.scss";
import "./Loading.scss";
import "./homePage/home.scss";
// This file is used to import all SCSS files in the project
const DeSignScss: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <>{children}</>;
};

export default DeSignScss;
