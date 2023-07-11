import { DataGrid } from "@mui/x-data-grid";
import React, { useContext, useEffect, useState } from "react";
import { FormControlLabel, Switch, Button, Grid, Typography } from "@mui/material";
import { GridToolbarQuickFilter } from "@mui/x-data-grid";
import axios from "axios";
import { DataContext } from "../../AppContext";
import { useNavigate } from "react-router-dom";

const AdminAccounts = () => {
   const navigate = useNavigate();
   const [adminsData, setAdminsData] = useState([]);
   const [dataLoading, setDataLoading] = useState(false)
   const { snackbar } = useContext(DataContext);
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
                  onClick={()=>navigate("add-new-admin") }
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
            return <img src={params.row.image} alt="" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />;
         },
      },
      {
         field: "name",
         headerName: "Name",
         width: 150,
         valueGetter: (params) => {
            let name =  params?.row?.firstName + " "+  params?.row?.lastName 
            return name
         },
      },
      {
         field: "contactNumber",
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

   // <======👇 Get All Admins👇  ======>
   const getAllAdmins = async () => {
      try {
         setDataLoading(true)
         const { data } = await axios.get("/api/v1/admin/all/admins");
         console.log(data)
         setAdminsData(data.allAdmins);
         setDataLoading(false)
      } catch (error) {
         snackbar("error", error?.message);
         setDataLoading(false)
      }
   };
   // <======👆 Get All Admins👆  ======>
   useEffect(() => {
      getAllAdmins();
   }, []);
   console.log("---->",adminsData);

   return (
      <>
         <DataGrid
            rows={adminsData ? adminsData : []}
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            disableRowSelectionOnClick
            columns={columns}
            loading={dataLoading}
            getRowId={(row) => row._id}
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
