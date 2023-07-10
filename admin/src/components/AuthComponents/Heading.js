import { Typography } from "@mui/material";
import React from "react";

const Heading = ({ children }) => {
   return (
      <Typography
         variant="h1"
         sx={{
            fontSize: { xs: "25px", md: "28px" },
            fontWeight: "600",
         }}>
         {children}
      </Typography>
   );
};

export default Heading;
