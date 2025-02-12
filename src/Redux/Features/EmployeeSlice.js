import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  startDate: "",
  department: "",
  dateOfBirth: "",
  street: "",
  city: "",
  state: "",
  zipCode: ""
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployee: (state, action) => {
      return { ...state, ...action.payload }; // Met à jour chaque champ avec les nouvelles valeurs
    }
  }
});

export const { setEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
