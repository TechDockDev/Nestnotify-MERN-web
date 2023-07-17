import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

const InvestorForm = () => {
   const [formValues, setFormValues] = React.useState({ firstName: "" });

   const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
   };
   return (
      <Grid item container xs={11} sm={6} px={2}>
         <Grid item xs={12} textAlign={"center"}>
            <Typography
               variant="h1"
               sx={{
                  color: "#0D507D",
                  fontSize: "40px",
                  fontWeight: 500,
               }}>
               Interested to know more?
            </Typography>
            <Typography
               variant="h1"
               sx={{
                  fontSize: "24px",
                  fontWeight: 600,
               }}>
               Connect with us now!
            </Typography>
         </Grid>
         {/* === 👇FORM component👇 ===*/}
         <Grid component={"form"} item container xs={11}>
            {/* ===    === */}
            <Grid item xs={11} md={6}>
               <TextField label={"First Name"} name="firstName" value={formValues.firstName} onChange={handleChange} placeholder="Your first name" />
            </Grid>
            {/* ===    === */}
         </Grid>
         {/* ===👆FORM component👆 ===*/}
      </Grid>
   );
};

export default InvestorForm;
