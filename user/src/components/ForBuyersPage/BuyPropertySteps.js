import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const BuyPropertySteps = () => {
   return (
      <Grid container justifyContent={"space-around"} px={2} mb={5}>
         <Grid item xs={12} textAlign={"center"} mb={7}>
            <Typography
               variant="h2"
               sx={{
                  fontWeight: 600,
                  color: "#0D507D",
                  fontSize: "38px",
                  mb:1
               }}>
               Buy Property in 3 Simple Steps
            </Typography>
            <Typography
               sx={{
                  color: "#2298BC",
                  fontSize: "18px",
                  fontWeight: "500",
               }}>
               Let’s have a look on how you will be buying property
            </Typography>
         </Grid>
         <Grid item xs={11} sm={2.9}  mb={{xs:2, sm:0}} textAlign={"center"}>
         <Box component="img" src="/assets/Property.svg" />

            <Typography
               variant="h6"
               sx={{
                  fontWeight: 600,
                  color: "#0D507D",
                  fontSize: "18px",
                  mb:1
               }}>
               Evaluate Property
            </Typography>
            <Typography fontWeight={"16px"}>If the distribution of letters and is random, the reader will not be distracted from making.</Typography>
         </Grid>
         <Grid item xs={11} sm={2.9}  mb={{xs:2, sm:0}} textAlign={"center"}>
         <Box component="img" src="/assets/RealEstateAgent.svg" />

            <Typography
               variant="h6"
               sx={{
                  fontWeight: 600,
                  color: "#0D507D",
                  fontSize: "18px",
                  mb:1

               }}>
               Meeting with Agent
            </Typography>
            <Typography>If the distribution of letters and is random, the reader will not be distracted from making.</Typography>
         </Grid>
         <Grid item xs={11} sm={2.9}textAlign={"center"}>
            <Box component="img" src="/assets/Handshake.svg" />
            <Typography
               variant="h6"
               sx={{
                  fontWeight: 600,
                  color: "#0D507D",
                  fontSize: "18px",
                  mb:1

               }}>
               Close the Deal
            </Typography>
            <Typography>If the distribution of letters and is random, the reader will not be distracted from making.</Typography>
         </Grid>
      </Grid>
   );
};

export default BuyPropertySteps;
