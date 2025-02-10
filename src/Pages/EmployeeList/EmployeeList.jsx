import "./EmployeeList.css";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, TextField } from "@mui/material";
import data from "../../data/Employee";

export default function EmployeeList() {
  const columns = [
    {
      field: "firstName",
      headerName: "First name",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "lastName",
      headerName: "Last name",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
        field: "StartDate",
        headerName: "Start Date",
        flex: 1,
        headerAlign: "center",
        align: "center",
        sortComparator: (v1, v2) => new Date(v1.split('/').reverse().join('-')) - new Date(v2.split('/').reverse().join('-'))
      },
    {
      field: "Department",
      headerName: "Department",

      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
        field: "DateOfBirth",
        headerName: "Date Of Birth",
        flex: 1,
        headerAlign: "center",
        align: "center",
        sortComparator: (v1, v2) => new Date(v1.split('/').reverse().join('-')) - new Date(v2.split('/').reverse().join('-'))
      },
    {
      field: "Street",
      headerName: "Street",

      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "City",
      headerName: "City",

      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "State",
      headerName: "State",

      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "ZipCode",
      headerName: "Zip Code",

      flex: 1,
      headerAlign: "center",
      align: "center",
    },
  ];

  const [search, setSearch] = useState("");
  // Fonction de filtrage
  const filteredEmployees = data.filter((data) =>
    `${data.firstName} ${data.lastName} ${data.StartDate} ${data.Department} ${data.DateOfBirth} ${data.Street} ${data.City} ${data.State} ${data.ZipCode}`
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
      <Paper sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={filteredEmployees}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[15,20, 50, 100]}
          sx={{ border: 0 }}
          rowSelection={false}
        />
      </Paper>
    </section>
  );
}
