import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import EnglishMenu from "./pages/EnglishMenu.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/qr-menu" element={<App />} />
      <Route path="/english-menu" element={<EnglishMenu />} />
    </Routes>
  </BrowserRouter>
);
