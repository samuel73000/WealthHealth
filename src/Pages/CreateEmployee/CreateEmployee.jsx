import "./CreateEmployee.css";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import States from "../../data/States";
import DateTimePicker from "../../Components/DateTimePicker/DateTimePicker";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../Redux/Features/EmployeeSlice";
import Modal from "modalp14oc";





export default function CreateEmployee() {
  const dispatch = useDispatch();
  // États locaux du formulaire
  const [Department, setDepartment] = useState("");
  const [State, setState] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [DateOfBirth, setDateOfBirth] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [Street, setStreet] = useState("");
  const [City, setCity] = useState("");
  const [ZipCode, setZipCode] = useState("");

  const [error, setError] = useState(false);


  const handleOpen = (e) => {
    const DateOfBirth = document.getElementById("Date-of-Birth").value;
    const StartDate = document.getElementById("Start-Date").value;
    setDateOfBirth(DateOfBirth);
    setStartDate(StartDate);

    // Vérification si un champ est vide
    if (
      !FirstName ||
      !LastName ||
      !DateOfBirth ||
      !StartDate ||
      !Street ||
      !City ||
      !State ||
      !ZipCode ||
      !Department
    ) {
      setError(true);
      return false; // Retourne false si un champ est vide
    }

    // Création de l'objet employé
    const employeeData = {
      FirstName,
      LastName,
      DateOfBirth,
      StartDate,
      Street,
      City,
      State,
      ZipCode,
      Department,
    };

    // Dispatch des données dans Redux
    dispatch(addEmployee(employeeData));

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
    setError(false);

    return true; // Retourne true si tout est OK
  };



  return (
    <section className='main-create-employee'>
      <div className='container-all-create-employee'>
        <h2 className='title-create-employee'>Create Employee</h2>
        <form>
          <div className='container-create-employee'>
            <TextField
              value={FirstName}
              id='firstName'
              label='First Name'
              variant='outlined'
              sx={{ width: "100%" }}
              error={error && !FirstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              value={LastName}
              id='lastName'
              label='Last Name'
              variant='outlined'
              sx={{ width: "100%" }}
              error={error && !LastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className='container-create-employee'>
            <DateTimePicker
              label='Date of Birth'
              id='Date-of-Birth'
              value={DateOfBirth}
              error={error && !DateOfBirth}
            />
            <DateTimePicker
              label='Start Date'
              id='Start-Date'
              value={StartDate}
              error={error && !StartDate}
            />
          </div>
          <div className='container-create-employee'>
            <TextField
              value={Street}
              id='street'
              label='Street'
              variant='outlined'
              sx={{ width: "100%" }}
              onChange={(e) => setStreet(e.target.value)}
              error={error && !Street}
            />
            <TextField
              value={City}
              label='City'
              variant='outlined'
              sx={{ width: "100%" }}
              onChange={(e) => setCity(e.target.value)}
              error={error && !City}
            />
          </div>
          <div className='container-create-employee'>
            <FormControl sx={{ m: 1, minWidth: 250, width: "80%" }}>
              <InputLabel>State</InputLabel>
              <Select
                sx={{ width: "100%" }}
                error={error && !State}
                value={State}
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
              value={ZipCode}
              error={error && !ZipCode}
              label='Zip Code'
              variant='outlined'
              sx={{ width: "100%" }}
              onChange={(e) => setZipCode(e.target.value)}
            />
            <FormControl sx={{ m: 1, minWidth: 250, width: "80%" }}>
              <InputLabel>Department</InputLabel>
              <Select
                sx={{ width: "100%" }}
                error={error && !Department}
                id='department'
                value={Department}
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
            <Modal onOpen={handleOpen} texteModal="Employee Created!" nameButton="open" />
          </div>
        </form>
      </div>
    </section>
  );
}
