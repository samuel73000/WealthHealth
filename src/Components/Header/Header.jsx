import "./Header.css";
import {Button} from "@mui/material";
export default function Header() {
  return (
    <header>
      <h1 className="titre-header">HRnet</h1>
      <Button variant="outlined" sx={{marginRight: "1%"}}>View Current Employees</Button>
    </header>
  );
}