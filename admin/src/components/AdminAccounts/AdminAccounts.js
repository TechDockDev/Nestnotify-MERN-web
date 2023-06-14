import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";

const AdminAccounts = () => {
   const columns = [
      {
         //   field: '#',
         headerName: "#",
         width: 50,
         valueGetter: ( row ) => {
        //    return row.api?.getRowIndexRelativeToVisibleRows(index?.row?._id) + 1,
         }
      },
      {
         field: "image",
         headerName: "Image",
         width: 150,
         renderCell: (params) => {
            console.log(params);
            
            return <img src={params.row.image} alt="" style={{width:"50px", height:"50px", borderRadius:"50%"}}/>;
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
         field: "action",
         headerName: "Action",
         width: 150,
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
            columns={columns}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
               toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
               },
            }}
         />
      </>
   );
};

export default AdminAccounts;
