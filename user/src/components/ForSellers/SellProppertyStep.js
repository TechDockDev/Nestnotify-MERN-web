import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const SellProppertyStep = () => {
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
               Post your Property in 3 Simple Steps
            </Typography>
            <Typography
               sx={{
                  color: "#2298BC",
                  fontSize: "18px",
                  fontWeight: "500",
               }}>
              Let’s have a look on how you will be posting for your property
            </Typography>
         </Grid>
         <Grid item xs={11} sm={2.9}  mb={{xs:2, sm:0}} textAlign={"center"}>
         <Box component="img" src="/assets/propertyDetails.svg" />

            <Typography
               variant="h6"
               sx={{
                  fontWeight: 600,
                  color: "#0D507D",
                  fontSize: "18px",
                  mb:1
               }}>
              Add details of property
            </Typography>
            <Typography fontWeight={"16px"}>Begin by telling us the few details about your property like your property type, location, no. of rooms etc.</Typography>
         </Grid>
         <Grid item xs={11} sm={2.9}  mb={{xs:2, sm:0}} textAlign={"center"}>
         <Box component="img" src="/assets/photos.svg" />

            <Typography
               variant="h6"
               sx={{
                  fontWeight: 600,
                  color: "#0D507D",
                  fontSize: "18px",
                  mb:1

               }}>
               Upload Photos & Videos
            </Typography>
            <Typography>Upload photos and videos of your property either via your desktop device or from your mobile phone</Typography>
         </Grid>
         <Grid item xs={11} sm={2.9}textAlign={"center"}>
            <Box component="img" src="/assets/owenership.svg" />
            <Typography
               variant="h6"
               sx={{
                  fontWeight: 600,
                  color: "#0D507D",
                  fontSize: "18px",
                  mb:1

               }}>
               Add Pricing & Ownership
            </Typography>
            <Typography>Just update property’s ownership details & your expected price & your property is ready for posting</Typography>
         </Grid>
      </Grid>
   );
};

export default SellProppertyStep;

