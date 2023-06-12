import { Alert, Box, Snackbar, Typography } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "./AppContext";
function App() {

  const {
    severity,
    message,
    // snackbar,
    openSnackbar,
    setOpenSnackbar,
    // adminAuthData,
    // setAdminAuthData,
    // isLoggedIn,
    // setIsLoggedIn,
  } = useContext(DataContext);

   return (
      <Box className="App">
         <Typography fontWeight={"300"}>This is NestNotify Admin Side UI</Typography>
         <Typography fontWeight={"400"}>This is NestNotify Admin Side UI</Typography>
         <Typography fontWeight={"500"}>This is NestNotify Admin Side UI</Typography>
         <Typography fontWeight={"600"}>This is NestNotify Admin Side UI</Typography>
         <Typography fontWeight={"700"}>This is NestNotify Admin Side UI</Typography>
         <Typography fontWeight={"800"}>This is NestNotify Admin Side UI</Typography>

         {/*  👇==== notification Snackbar  ====  👇    */}
         <Snackbar open={openSnackbar} autoHideDuration={2000} onClose={() => setOpenSnackbar(false)} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
            <Alert variant="filled" severity={severity} sx={{ width: "100%" }} onClose={() => setOpenSnackbar(false)}>
               {message}
            </Alert>
         </Snackbar>
         {/* 👆 ==== notification Snackbar  ==== 👆   */}
      </Box>
   );
}

export default App;
