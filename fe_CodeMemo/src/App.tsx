import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Auth from "./pages/Auth/Auth";
import { Routes, Route } from "react-router-dom";
import LayoutUser from "./components/layout/layoutUser";
import { ToastContainer } from "react-toastify";
import LayoutAdmin from "./components/layout/layoutAdmin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Auth login="login" />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/" element={<LayoutUser />} />
        <Route path="/admin" element={<LayoutAdmin />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
