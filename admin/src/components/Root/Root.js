import React from "react";
import AppWrapper from "../CommonComponents/AppWrapper";
import NotificationSnackbar from "../CommonComponents/NotificationSnackbar";
// import Login from "../AuthComponents/Login";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";

const Root = () => {
   return (
      <AppWrapper>
          <Stack
         sx={{
            width: "100%",
            height: "100%",
            minHeight: "100vh",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:`url("/assets/loginbg.jpg")`,
            backgroundSize: "cover",
         }}>
            <Outlet/>
         </Stack>
         {/* <Login /> */}
         <NotificationSnackbar />
      </AppWrapper>
   );
};

export default Root;
