import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '', 
  lastName: '',
  StartDate: '',
  Department: '',
  DateOfBirth: '',
  Street: '',
  City: '',
  State: '',
  ZipCode: ''
};

// Création du slice pour gérer l'état lié à l'utilisateur
const employeeSlice = createSlice({
  name: 'employee',  // Nom du slice
  initialState,   // État initial
  reducers: {     // Actions pour modifier l'état
    // Action pour mettre à jour le nom d'utilisateur
    setEmployee: (state, action) => {
      state.firstName = action.payload;
        state.lastName = action.payload;
        state.StartDate = action.payload;
        state.Department = action.payload;
        state.DateOfBirth = action.payload;
        state.Street = action.payload;
        state.City = action.payload;
        state.State = action.payload;
        state.ZipCode = action.payload;
    },
  },
});

export const { setEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
