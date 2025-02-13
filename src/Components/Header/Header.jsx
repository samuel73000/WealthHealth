import "./Header.css";
import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation(); // Récupère l'objet location

  return (
    <header>
        <h1 className="titre-header">HRnet</h1>
      <div className="header-container-buttons">
        {/* Vérifie location.pathname au lieu de location */}
        {location.pathname !== "/" && (
          <Link to="/">
            <Button variant="outlined">Create new Employees</Button>
          </Link>
        )}
        {location.pathname !== "/EmployeeList" && (
          <Link to="/EmployeeList">
            <Button variant="outlined">View Current Employees</Button>
          </Link>
        )}
      </div>
    </header>
  );
}
