import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./assets/scss/Content.scss";
import "./assets/scss/FooterAdmin.scss";
import "./assets/scss/HeaderAdmin.scss";
import "./assets/scss/LayoutAdmin.scss";
import "./assets/scss/login.scss";
import "./assets/scss/SidebarAdmin.scss";
import "./assets/scss/Modal.scss";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store.ts";
createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </StrictMode>
);
