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
import { z } from "zod";
import Modal from "modalp14oc";

export default function CreateEmployee() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    DateOfBirth: "",
    StartDate: "",
    Street: "",
    City: "",
    State: "",
    ZipCode: "",
    Department: "",
  });
  const [error, setError] = useState(false);

  // Définir un schéma de validation Zod
  const Schema = z.object({
    FirstName: z
      .string()
      .min(2) // Minimum 2 caractères
      .regex(/^[A-Za-z\s]+$/), // Validation pour les lettres
    LastName: z
      .string()
      .min(2) // Minimum 2 caractères
      .regex(/^[A-Za-z\s]+$/), // Validation pour les lettres
    DateOfBirth: z.string().nonempty(), // Validation pour la date
    StartDate: z.string().nonempty(), // Validation pour la date
    Street: z.string().min(5), // Minimum 5 caractères
    City: z.string().min(3), // Minimum 3 caractères
    State: z.string().nonempty(), // Validation pour l'état
    ZipCode: z.string().regex(/^\d{5}$/), // Validation pour les 5 chiffres
    Department: z.string().nonempty(), // Validation pour le département
  });

  const handleOpen = (e) => {
    const DateOfBirth = document.getElementById("Date-of-Birth").value;
    const StartDate = document.getElementById("Start-Date").value;
    setFormData((prevData) => ({
      ...prevData,
      DateOfBirth: DateOfBirth,
      StartDate: StartDate,
    }));

    // Validation des données avant de soumettre
    const result = Schema.safeParse(formData);
    if (!result.success) {
      setError(true);
      return false;
    }

    // Dispatch des données dans Redux
    dispatch(addEmployee(formData));

    // Réinitialisation du formulaire
    setFormData({
      FirstName: "",
      LastName: "",
      DateOfBirth: "",
      StartDate: "",
      Street: "",
      City: "",
      State: "",
      ZipCode: "",
      Department: "",
    });
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
              value={formData.FirstName}
              id='firstName'
              label='First Name'
              variant='outlined'
              sx={{ width: "100%" }}
              error={error && !formData.FirstName}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  FirstName: e.target.value,
                }))
              }
            />
            <TextField
              value={formData.LastName}
              id='lastName'
              label='Last Name'
              variant='outlined'
              sx={{ width: "100%" }}
              error={error && !formData.LastName}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  LastName: e.target.value,
                }))
              }
            />
          </div>
          <div className='container-create-employee'>
            <DateTimePicker
              label='Date of Birth'
              id='Date-of-Birth'
              value={formData.DateOfBirth}
              error={error && !formData.DateOfBirth}
            />
            <DateTimePicker
              label='Start Date'
              id='Start-Date'
              value={formData.StartDate}
              error={error && !formData.StartDate}
            />
          </div>
          <div className='container-create-employee'>
            <TextField
              value={formData.Street}
              id='street'
              label='Street'
              variant='outlined'
              sx={{ width: "100%" }}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  Street: e.target.value,
                }))
              }
              error={error && !formData.Street}
            />
            <TextField
              value={formData.City}
              label='City'
              variant='outlined'
              sx={{ width: "100%" }}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  City: e.target.value,
                }))
              }
              error={error && !formData.City}
            />
          </div>
          <div className='container-create-employee'>
            <FormControl sx={{ m: 1, minWidth: 250, width: "80%" }}>
              <InputLabel>State</InputLabel>
              <Select
                sx={{ width: "100%" }}
                error={error && !formData.State}
                value={formData.State}
                label='State'
                id='state'
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    State: e.target.value,
                  }))
                }
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
              value={formData.ZipCode}
              error={error && !formData.ZipCode}
              label='Zip Code'
              variant='outlined'
              sx={{ width: "100%" }}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  ZipCode: e.target.value,
                }))
              }
            />
            <FormControl sx={{ m: 1, minWidth: 250, width: "80%" }}>
              <InputLabel>Department</InputLabel>
              <Select
                sx={{ width: "100%" }}
                error={error && !formData.Department}
                id='department'
                value={formData.Department}
                label='Department'
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    Department: e.target.value,
                  }))
                }>
                <MenuItem value={"Sales"}>Sales</MenuItem>
                <MenuItem value={"Marketing"}>Marketing</MenuItem>
                <MenuItem value={"Engineering"}>Engineering</MenuItem>
                <MenuItem value={"Human Resources"}>Human Resources</MenuItem>
                <MenuItem value={"Legal"}>Legal</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='container-create-employee'>
            <Modal
              onOpen={handleOpen}
              texteModal='Employee Created!'
              nameButton='open'
            />
          </div>
        </form>
      </div>
    </section>
  );
}
