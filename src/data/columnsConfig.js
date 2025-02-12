const columnsConfig = [
    {
      field: "FirstName",
      headerName: "First name",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "LastName",
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
 export default columnsConfig;