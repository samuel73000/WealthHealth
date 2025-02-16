import "./EmployeeList.css";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, TextField } from "@mui/material";
import data from "../../data/Employee";
import { useSelector } from "react-redux";
import columnsConfig from "../../data/columnsConfig";

export default function EmployeeList() {
  const [search, setSearch] = useState("");
  const employees = useSelector((state) => state.employee.employees);
  // Fonction de filtrage

  // mettre data a la place de employees pour afficher les données fictifs
  const filteredEmployees = data.filter((data) =>
    `${data.FirstName} ${data.LastName} ${data.StartDate} ${data.Department} ${data.DateOfBirth} ${data.Street} ${data.City} ${data.State} ${data.ZipCode}`
      .toLowerCase()
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const paginationModel = { page: 0, pageSize: 15 };

  return (
    <section className='main-employee-list'>
      <h2>Current Employees</h2>
      <TextField
        label='Search'
        variant='outlined'
        fullWidth
        margin='normal'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="container-tableau">
      <Paper sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={filteredEmployees}
          columns={columnsConfig}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[15, 20, 50, 100]}
          sx={{ border: 0, minWidth: "1000px" }}
          rowSelection={false}
        />
      </Paper>
      </div>
    </section>
  );
}
