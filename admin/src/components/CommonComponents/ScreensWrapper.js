import { Stack } from "@mui/material";
import React from "react";

const ScreensWrapper = ({ children }) => {
   return (
      <Stack
         sx={{
            width:"100%",
            maxWidth: {xs:"100%",md:`calc(100% - 250px)`},
            boxSizing:"border-box",
            padding:{xs:"20px",sm:"30px",},
            marginTop:{xs:"48px", md:"60px"}
         }}>
         {children}
      </Stack>
   );
};

export default ScreensWrapper;
