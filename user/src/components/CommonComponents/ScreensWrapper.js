import { Stack } from "@mui/material";
import React from "react";

const ScreensWrapper = ({ children }) => {
   return (
      <Stack
         sx={{
            width:"100%",
            minHeight:{xs:`calc(100vh - 54px)`, md:`calc(100vh - 64px)`},
            boxSizing:"border-box",
            padding:"20px",
            marginTop:{xs:"56px", md:"64px"},
            // bgcolor:"green"
         }}>
         {children}
      </Stack>
   );
};

export default ScreensWrapper;
