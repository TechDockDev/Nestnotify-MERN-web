import { Grid } from "@mui/material";
import React from "react";
import InvestorForm from "./InvestorForm";

const ForInvestors = () => {
   return (
      <Grid
         container
         sx={{
            backgroundImage: { xs: "none", md: `url("/assets/contact-img.svg")` },
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
            // height: "600px",
            backgroundSize: { lg: "auto", md: "52%" },
            justifyContent: { xs: "center", md: "left" },
         }}>
         <InvestorForm />
      </Grid>
   );
};

export default ForInvestors;
