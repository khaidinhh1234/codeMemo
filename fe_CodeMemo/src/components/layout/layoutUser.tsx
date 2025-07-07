import { Outlet } from "react-router-dom";

const LayoutUser = () => {
  return (
    <div>
      <header className="fb-header">
        {/* Left */}
        <div className="header-left">
          <img
            src="https://designreset.com/cork/html/src/assets/img/logo.svg"
            alt="logo"
            className="logo"
            width="200px"
            height="50px"
          />
          <div className="search-box">
            <i className="fa fa-search" />
            <input type="text" placeholder="Tìm kiếm trên CodeMemo" />
          </div>
        </div>
        {/* Center */}
        <div className="header-center">
          <div className="icon active">
            <i className="fa-solid fa-house"></i>
          </div>
          <div className="icon">
            <i className="fa-solid fa-clapperboard-play"></i>
          </div>
          <div className="icon">
            <i className="fa fa-store" />
          </div>
          <div className="icon">
            <i className="fa fa-gamepad" />
          </div>
        </div>
        {/* Right */}
        <div className="header-right">
          <div className="circle">
            <i className="fa fa-th" />
          </div>
          <div className="circle">
            <i className="fa-solid fa-comments"></i>
          </div>
          <div className="circle">
            <i className="fa fa-bell" />
          </div>
          <img
            src="https://res.cloudinary.com/khaidinhh/image/upload/v1751520007/n6ajdilkrz7oova8hu2w.png"
            className="avatar"
          />
        </div>
      </header>

      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default LayoutUser;
