import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Components/Header/Header";
import CreateEmployee from "./Pages/CreateEmployee/CreateEmployee";
import Footer from "./Components/Footer/Footer";
import EmployeeList from "./Pages/EmployeeList/EmployeeList";
import { Provider } from "react-redux";
import store from "./Redux/Store";
createRoot(document.getElementById("root")).render(
  <StrictMode>
     <Provider store={store}>
    <Router>
    <Header />
    <main>
    <Routes>
    <Route path="/" element={<CreateEmployee />}/>
    <Route path="/EmployeeList" element={<EmployeeList />}/>
    <Route path="*" element={<div>404</div>}/>
    </Routes>
    </main>
    <Footer />
    </Router>
    </Provider>
  </StrictMode>
);
