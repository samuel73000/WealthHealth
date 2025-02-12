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

import { useDispatch } from "react-redux";
import { setEmployee } from "../../Redux/Features/EmployeeSlice";

export default function CreateEmployee() {
  const dispatch = useDispatch();
  // États locaux du formulaire
  const [department, setDepartment] = React.useState("");
  const [state, setState] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [city, setCity] = React.useState("");
  const [zipCode, setZipCode] = React.useState("");





  const handleOpen = (e) => {
    const dateOfBirth = document.getElementById("Date-of-Birth").value;
    const startDate = document.getElementById("Start-Date").value;
    setDateOfBirth(dateOfBirth);
    setStartDate(startDate);

    // Vérifier les données envoyées
    const employeeData = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      street,
      city,
      state,
      zipCode,
      department,
    };

    console.log("Données envoyées à Redux :", employeeData);

    // Dispatch des données dans Redux
    dispatch(setEmployee(employeeData));

    // Réinitialisation du formulaire
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setStartDate("");
    setStreet("");
    setCity("");
    setState("");
    setZipCode("");
    setDepartment("");
  };



  
  return (
    <section className='main-create-employee'>
      <div className='container-all-create-employee'>
        <h2 className='title-create-employee'>Create Employee</h2>
        <form>
          <div className='container-create-employee'>
            <TextField
              id='firstName'
              label='First Name'
              variant='outlined'
              sx={{ width: "80%" }}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              id='lastName'
              label='Last Name'
              variant='outlined'
              sx={{ width: "80%" }}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className='container-create-employee'>
            <DateTimePicker
              label='Date of Birth'
              id='Date-of-Birth'
              value={dateOfBirth}
            />

            <DateTimePicker
              label='Start Date'
              id='Start-Date'
              value={startDate}
            />
          </div>
          <div className='container-create-employee'>
            <TextField
              id='street'
              label='Street'
              variant='outlined'
              sx={{ width: "80%" }}
              onChange={(e) => setStreet(e.target.value)}
            />
            <TextField
              label='City'
              variant='outlined'
              sx={{ width: "80%" }}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className='container-create-employee'>
            <FormControl sx={{ m: 1, minWidth: 250, width: "80%" }}>
              <InputLabel>State</InputLabel>
              <Select
                value={state}
                label='State'
                id='state'
                onChange={(e) => setState(e.target.value)}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                      width: 250,
                    },
                  },
                }}>
                {States.map((state, index) => (
                  <MenuItem key={index} value={state.name}>
                    {state.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label='Zip Code'
              variant='outlined'
              sx={{ width: "80%" }}
              onChange={(e) => setZipCode(e.target.value)}
            />
            <FormControl sx={{ m: 1, minWidth: 250, width: "80%" }}>
              <InputLabel>Department</InputLabel>
              <Select
                id='department'
                value={department}
                label='Department'
                onChange={(e) => setDepartment(e.target.value)}>
                <MenuItem value={"Sales"}>Sales</MenuItem>
                <MenuItem value={"Marketing"}>Marketing</MenuItem>
                <MenuItem value={"Engineering"}>Engineering</MenuItem>
                <MenuItem value={"Human Resources"}>Human Resources</MenuItem>
                <MenuItem value={"Legal"}>Legal</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='container-create-employee'>
            <PortalModal onOpen={handleOpen} />
            {/* <button className='button-create-employee' onClick={handleOpen}>
              Create Employee </button> */}
          </div>
        </form>
      </div>
    </section>
  );
}
