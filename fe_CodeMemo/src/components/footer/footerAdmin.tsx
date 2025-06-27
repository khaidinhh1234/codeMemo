import React from "react";

const FooterAdmin = () => {
  return (
    <footer className="admin-footer">
      <div className="footer-left">
        <span className="footer-brand">
          © {new Date().getFullYear()} CodeMemo
        </span>
        <span className="footer-version">v1.0.0</span>
      </div>

      <div className="footer-links">
        <a href="/about">Giới thiệu</a>
        <a href="/privacy">Chính sách</a>
        <a href="mailto:support@codememo.app">Liên hệ</a>
        <a
          href="https://github.com/your-repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </footer>
  );
};

export default FooterAdmin;
