const HeaderAdmin = () => {
  return (
    <header className="admin-header">
      <div className="admin-content">
        <div className="header-left">
          <div className="logo-header">
            <img
              src="https://designreset.com/cork/html/src/assets/img/logo.svg"
              alt=""
            />
            <a href="/admin">
              <h1>CodeMemo</h1>
            </a>
          </div>
          <div className="sreach">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Sreach..." />
          </div>
        </div>
        <div className="header-right">
          <div className="icon-header-item">
            <i className="fa-solid fa-bell"></i>
          </div>
          <div className="icon-header-item">
            <i className="fa-solid fa-gear"></i>
          </div>{" "}
          <div className="icon-header-item">
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
        </div>
      </div>
      <div>
        <nav className="admin-nav">
          <ul>
            <li>
              <a href="/admin">
                <i className="fa-solid fa-house"></i> Trang chủ
              </a>
            </li>

            <li>
              <a href="/admin/users">
                <i className="fa-solid fa-computer-classic"></i>Lập trình
              </a>
            </li>

            <li>
              <a href="/admin/posts">
                {" "}
                <i className="fa-solid fa-file-xml"></i>Mẹo học
              </a>
            </li>
            <li>
              <a href="/admin/settings">
                <i className="fa-solid fa-file-pen"></i>Bài tập
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderAdmin;
