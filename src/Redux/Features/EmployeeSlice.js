import { createSlice } from "@reduxjs/toolkit";
import Data from "../../data/Employee"; // Importer les employés existants

const initialState = {
  employees: [...Data], // Utiliser Data comme valeur initiale
  nextId: Data.length, // Définir l'ID de départ sur la taille actuelle de Data
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      const newEmployee = {
        id: state.nextId,  
        ...action.payload,
      };
      state.employees.push(newEmployee);
      state.nextId += 1;
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
