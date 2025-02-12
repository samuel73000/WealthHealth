import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./Features/EmployeeSlice"; // Assure-toi que le nom du fichier est correct

const store = configureStore({
  reducer: {
    employee: employeeReducer, // On enregistre le reducer sous le nom "employee"
  }
});

export default store;
