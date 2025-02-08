import "./EmployeeList.css";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

export default function EmployeeList() {


    const columns = [
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'StartDate',
          headerName: 'Start Date',
          type: 'number',
          width: 100,
        },
        {
            field:"Department",
            headerName:"Department",
            width: 130
        },
        {
            field:"DateOfBirth",
            headerName:"Date Of Birth",
            type: 'number',
            width: 130
        },
        {
            field:"Street",
            headerName:"Street",
            width: 130
        },
        {
         field:"City",
            headerName:"City",
            width: 130
        },
        {
            field:"State",
               headerName:"State",
               width: 130
           },
           {
            field:"ZipCode",
               headerName:"Zip Code",
               width: 130
           },
        
      ];
      
      const data = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', StartDate: 1 , Department: "Sales", DateOfBirth: 20, Street: "1234 Main St" ,City: "Winterfell" ,State: "CA",ZipCode: 12345},
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', StartDate: 42 , Department: "Sales",DateOfBirth: 20,Street: "1234 Main St",City: "Winterfell",State: "CA",ZipCode: 12345},
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', StartDate: 45, Department: "Sales",DateOfBirth: 20 ,Street: "1234 Main St",City: "Winterfell",State: "CA",ZipCode: 12345},
        { id: 4, lastName: 'Stark', firstName: 'Arya', StartDate: 16 , Department: "Sales",DateOfBirth: 20 ,Street: "1234 Main St",City: "Winterfell",State: "CA",ZipCode: 12345},
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', StartDate: null , Department: "Sales",DateOfBirth: 20,Street: "1234 Main St",City: "Winterfell",State: "CA",ZipCode: 12345},
        { id: 6, lastName: 'Melisandre', firstName: null, StartDate: 150, Department: "Sales",DateOfBirth: 20 ,Street: "1234 Main St",City: "Winterfell",State: "CA",ZipCode: 12345},
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', StartDate: 44, Department: "Sales",DateOfBirth: 20,Street: "1234 Main St" ,City: "Winterfell",State: "CA",ZipCode: 12345},
        { id: 8, lastName: 'Frances', firstName: 'Rossini', StartDate: 36, Department: "Sales",DateOfBirth: 20 ,Street: "1234 Main St",City: "Winterfell",State: "CA",ZipCode: 12345},
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', StartDate: 65 , Department: "Sales",DateOfBirth: 20,Street: "1234 Main St",City: "Winterfell",State: "CA",ZipCode: 12345},
      ];

      const paginationModel = { page: 0, pageSize: 5 };

    return (

        <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10 ,20 , 50 ,100]}

          sx={{ border: 0 }}
        />
      </Paper>
    )
}