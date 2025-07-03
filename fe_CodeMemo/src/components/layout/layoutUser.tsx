import { Outlet } from "react-router-dom";

const LayoutUser = () => {
  return (
    <div>
      <header>
        <h1>Welcome to User Layout</h1>
      </header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default LayoutUser;
