import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Components/Header/Header";
import CreateEmployee from "./Pages/CreateEmployee/CreateEmployee";
import Footer from "./Components/Footer/Footer";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <CreateEmployee />
    <Footer />
  </StrictMode>
);
