import React, { useContext } from "react";
import { DataContext } from "../../AppContext";
import { Alert, Snackbar } from "@mui/material";

const NotificationSnackbar = () => {
   const {
      severity,
      message,
      openSnackbar,
      setOpenSnackbar,
   } = useContext(DataContext);
   return (
      <Snackbar open={openSnackbar} autoHideDuration={2000} onClose={() => setOpenSnackbar(false)} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
         <Alert variant="filled" severity={severity} sx={{ width: "100%" }} onClose={() => setOpenSnackbar(false)}>
            {message}
         </Alert>
      </Snackbar>
   );
};


export default NotificationSnackbar;
