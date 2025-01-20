import "./CreateEmployee.css";
import {TextField} from "@mui/material";
export default function CreateEmployee() {
  return (
    <main>
      <h2>Create Employee</h2>
      <div>
      <TextField id="outlined-basic" label="First Name" variant="outlined" />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      </div>
    </main>
  );
}
