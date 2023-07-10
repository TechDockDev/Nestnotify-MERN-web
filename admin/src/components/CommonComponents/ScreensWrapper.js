import { Stack } from "@mui/material";
import React from "react";

const ScreensWrapper = ({ children }) => {
   return (
      <Stack
         sx={{
            width:"100%",
            minHeight:{xs:`calc(100vh - 48px)`, md:`calc(100vh - 60px)`},
            maxWidth: {xs:"100%",md:`calc(100% - 250px)`},
            boxSizing:"border-box",
            padding:"20px",
            marginTop:{xs:"48px", md:"60px"},
            bgcolor:"#ECF2F8",
         }}>
         {children}
      </Stack>
   );
};

export default ScreensWrapper;
