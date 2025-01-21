import "./CreateEmployee.css";
import { TextField } from "@mui/material";
export default function CreateEmployee() {
  return (
    <main className="main-create-employee">
      <section className="container-1-create-employee">
      <h2>Create Employee</h2>
        <TextField id='outlined-basic' label='First Name' variant='outlined' />
        <TextField id='outlined-basic' label='Last Name' variant='outlined' />
        <TextField id='outlined-basic' label='Date of Birth' variant='outlined'/>
        <TextField id='outlined-basic'label='Start Date'variant='outlined'/>
      </section>
<section className="container-2-create-employee">
<fieldset className="container-2-create-employee">
<legend>Address</legend>
<TextField id='outlined-basic' label='Street' variant='outlined' />
<TextField id='outlined-basic' label='City' variant='outlined' />
<TextField id='outlined-basic' label='State' variant='outlined' />
<TextField id='outlined-basic' label='Zip Code' variant='outlined' />
</fieldset>
</section>
    </main>
  );
}
