import "./CreateEmployee.css";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as React from "react";
import States from "../../data/States";
import DateTimePicker from "../../Components/DateTimePicker/DateTimePicker";
import PortalModal from "../../Components/PortalModal/PortalModal";

export default function CreateEmployee() {
  const [Department, setDepartment] = React.useState("");
  const [State, setState] = React.useState("");
  const handleChangeDepartment = (e, SelectChangeEvent) => {
    //function to change the department
    setDepartment(e.target.value);
  };
  const handleChangeState = (e, SelectChangeEvent) => {
    // function to change the state
    setState(e.target.value);
  };

  return (
    <main className='main-create-employee'>
      <form className='container-create-employee'>
        <h2>Create Employee</h2>
        <TextField id='outlined-basic' label='First Name' variant='outlined' />
        <TextField id='outlined-basic' label='Last Name' variant='outlined' />
        <DateTimePicker label='Date of Birth' id='Date-of-Birth' />
        <DateTimePicker label='Start Date' id='Start-Date' />
      </form>
      <form className='container-create-employee'>
        <fieldset className='container-create-employee'>
          <legend>Address</legend>
          <TextField id='outlined-basic' label='Street' variant='outlined' />
          <TextField id='outlined-basic' label='City' variant='outlined' />

          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel>State</InputLabel>
            <Select value={State} label='State' onChange={handleChangeState}>
              {States.map((States, index) => (
                <MenuItem value={index}>{States.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField id='outlined-basic' label='Zip Code' variant='outlined' />
        </fieldset>
      </form>
      <form className='container-create-employee'>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel>Department</InputLabel>
          <Select
            value={Department}
            label='Department'
            onChange={handleChangeDepartment}>
            <MenuItem value={10}>Sales</MenuItem>
            <MenuItem value={20}>Marketing</MenuItem>
            <MenuItem value={40}>Engineering</MenuItem>
            <MenuItem value={50}>Human Resources</MenuItem>
            <MenuItem value={60}>Legal</MenuItem>
          </Select>
        </FormControl>     
        <PortalModal />   
      </form>
    </main>
  );
}
