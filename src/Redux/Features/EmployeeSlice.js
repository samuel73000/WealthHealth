import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [],
  nextId: 0, // Compteur pour générer un nouvel ID unique
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      // Créer un nouvel employé avec un ID unique
      const newEmployee = {
        id: state.nextId,  // L'ID sera égal à nextId
        ...action.payload, // Ajouter les données de l'employé
      };
      
      // Ajouter le nouvel employé au tableau
      state.employees.push(newEmployee);
      
      // Incrémenter nextId pour le prochain employé
      state.nextId += 1;
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
