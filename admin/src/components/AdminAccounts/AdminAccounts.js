import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { FormControlLabel, Switch, Button, Grid, Typography, } from "@mui/material";
import { GridToolbarQuickFilter } from "@mui/x-data-grid";
const AdminAccounts = () => {

   // *************************************************
   const CustomeToolBar = () => {
      return (
         <Grid
            container
            boxSizing={"border-box"}
            width={"100%"}
            sx={{
               justifyContent: "center",
               alignItems: "center",
               padding: "20px 0px",
               borderRadius: "10px",
            }}>
            {/*  <======👇 Table heading (left corner)👇  ======> */}
            <Grid item sm={3} xs={12}>
               <Typography
                  sx={{
                     width: "100%",
                     fontWeight: "600",
                     borderLeft: "4px solid #2298BC",
                     padding: "10px",
                  }}>
                  Admin Accounts
               </Typography>
            </Grid>
            {/* <======👆 Table heading (left corner)👆  ======> */}
            {/*  <======👇 SearchBar quickFilter👇  ======> */}
            <Grid item sm={5} xs={12} textAlign={{ sm: "right" }} mt={{ xs: 1, sm: 0 }} boxSizing={"border-box"}>
               <GridToolbarQuickFilter
                  fullWidth
                  variant="outlined"
                  size="small"
                  sx={{
                     marginX: "10px",

                     padding: "0px",
                     "& .MuiOutlinedInput-root": {
                        borderRadius: "30px",
                        color: "rgba(158, 158, 158, 1)",
                        borderColor: "rgba(158, 158, 158, 1)",
                     },
                     "& input": {
                        padding: "0px",
                     },
                  }}
               />
            </Grid>
            {/* <======👆 SearchBar quickFilter👆  ======> */}
            {/*  <======👇 add a new Admin BTN👇  ======> */}
            <Grid item sm={4} xs={12} mt={{ xs: 1, sm: 0 }} textAlign={{ sm: "right" }} boxSizing={"border-box"}>
               <Button
                  variant="contained"
                  disableElevation
                  sx={{
                     borderRadius: "30px",
                     paddingX: "12px",
                     marginX: "10px",
                  }}
                  size="small">
                  + Add Addmin
               </Button>
            </Grid>
            {/* <======👆 add a new Admin BTN👆  ======> */}
         </Grid>
      );
   };
   // *************************************************

   const columns = [
      {
         //   field: '#',
         headerName: "#",
         width: 50,
         sortable: false,
         valueGetter: (row) => {
            return row.api?.getRowIndexRelativeToVisibleRows(row?.row?.id) + 1;
         },
      },
      {
         field: "image",
         headerName: "Image",
         width: 150,
         renderCell: (params) => {
            console.log(params);

            return <img src={params.row.image} alt="" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />;
         },
      },
      {
         field: "name",
         headerName: "Name",
         width: 150,
      },
      {
         field: "phone",
         headerName: "Phone",
         width: 150,
      },
      {
         field: "email",
         headerName: "Email",
         width: 150,
      },
      {
         field: "active",
         headerName: "Active",
         width: 100,
         renderCell: (params) => {
            return (
               <>
                  <FormControlLabel control={<Switch defaultChecked />} />
               </>
            );
         },
      },
      {
         field: "view",
         headerName: "View",
         width: 80,
         sortable: false,
         renderCell: (params) => {
            return (
               <>
                  <Button>View</Button>
               </>
            );
         },
      },
   ];

   const rows = [
      {
         id: 1,
         image: "https://picsum.photos/200",
         name: "John Doe",
         phone: "111222333",
         email: "111@mail.com",
         action: "pending",
      },
      {
         id: 2,
         image: "https://picsum.photos/200",
         name: "John Doe",
         phone: "111222333",
         email: "111@mail.com",
         action: "pending",
      },
      {
         id: 3,
         image: "https://picsum.photos/200",
         name: "John Doe",
         phone: "111222333",
         email: "111@mail.com",
         action: "pending",
      },
      {
         id: 4,
         image: "https://picsum.photos/200",
         name: "John Doe",
         phone: "111222333",
         email: "111@mail.com",
         action: "pending",
      },
      {
         id: 5,
         image: "https://picsum.photos/200",
         name: "Radhe",
         phone: "111222333",
         email: "111@mail.com",
         action: "pending",
      },
   ];

   return (
      <>
         <DataGrid
            rows={rows}
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            disableRowSelectionOnClick
            columns={columns}
            rowHeight={60}
            slots={{ toolbar: CustomeToolBar }}
            slotProps={{
               toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
               },
            }}
            sx={{
               border: "none",
               background: "white",
               borderRadius: "10px",
               "& .MuiDataGrid-columnHeaders": {
                  bgcolor: "#ECF2F8",
               },
            }}
         />
      </>
   );
};

export default AdminAccounts;
