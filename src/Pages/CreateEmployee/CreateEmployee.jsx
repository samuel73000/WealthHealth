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
    setDepartment(e.target.value);
  };
  const handleChangeState = (e, SelectChangeEvent) => {
    setState(e.target.value);
  };





 // Fonction à passer en prop
 const handleOpen = () => {
const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const dateOfBirth = document.getElementById('Date-of-Birth').value;
const startDate = document.getElementById('Start-Date').value;
const street = document.getElementById('street').value;
const city = document.getElementById('city').value;
const state = document.getElementById('state').value;
const zipcode = document.getElementById('zipcode').value;
const department = document.getElementById('department').value;
console.log('First Name: ' + firstName);
console.log('Last Name: ' + lastName);
console.log('Date of Birth: ' + dateOfBirth);
console.log('Start Date: ' + startDate);
console.log('Street: ' + street);
console.log('City: ' + city);
console.log('State: ' + state);
console.log('Zip Code: ' + zipcode);
console.log('Department: ' + department);
};





  return (
    <section className='main-create-employee'>
      <form className='container-create-employee'>
        <h2>Create Employee</h2>
        <TextField id='firstName' label='First Name' variant='outlined' />
        <TextField id='lastName' label='Last Name' variant='outlined' />
        <DateTimePicker label='Date of Birth' id='Date-of-Birth' />
        <DateTimePicker label='Start Date' id='Start-Date' />
      </form>
      <form className='container-create-employee'>
        <fieldset className='container-create-employee'>
          <legend>Address</legend>
          <TextField id='street' label='Street' variant='outlined' />
          <TextField id='city' label='City' variant='outlined' />

          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel>State</InputLabel>
            <Select value={State} label='State'id="state" onChange={handleChangeState}>
              {States.map((States, index) => (
                <MenuItem value={index}>{States.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField id='zipcode' label='Zip Code' variant='outlined' />
        </fieldset>
      </form>
      <form className='container-create-employee'>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel>Department</InputLabel>
          <Select
           id="department"
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
        <PortalModal onOpen={handleOpen} />   
      </form>
    </section>
  );
}
