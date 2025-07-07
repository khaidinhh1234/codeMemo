import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store.ts";
import DeSignScss from "./assets/scss/index.tsx";
createRoot(document.getElementById("root")!).render(
  <DeSignScss>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </DeSignScss>
  // </StrictMode>
);
