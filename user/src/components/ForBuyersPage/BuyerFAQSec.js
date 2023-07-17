import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";

const BuyerFAQSec = () => {
   return (
      <Grid container px={2} my={2}>
         <Grid item xs={12} textAlign={"left"} mb={3}>
            <Typography
               variant="h2"
               sx={{
                  fontWeight: 600,
                  color: "#0D507D",
                  fontSize: "38px",
                  mb: 1,
               }}>
               Frequently Asked Questions
            </Typography>
         </Grid>
         <Grid item xs={12}>
            {/* ====== */}
            <Accordion
               square
               elevation={0}
               sx={{
                  paddingY: "6px",
                  "&.MuiButtonBase-root": {
                     padding: "0px",
                  },
               }}>
               <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontSize={"20px"} fontWeight={500}>
                     What type of property I can post on NestNotify.com for selling/renting?
                  </Typography>
               </AccordionSummary>
               <AccordionDetails sx={{ padding: "0px" }}>
                  <Typography fontSize={"16px"}>
                     As an owner, agent, or builder, you can post all types of residential and commercial properties for rent, lease, or sale. On NestNotify.com, millions of people search for flats, houses, plots, office space, shops, showrooms, warehouses, commercial land, and agricultural land,
                     among others. NestNotify.com is the best property portal to sell or rent out your property fast!
                  </Typography>
               </AccordionDetails>
            </Accordion>
            {/* ====== */}
            {/* ====== */}
            <Accordion
               square
               elevation={0}
               sx={{
                //   borderY: "1px solid #D4DBDE",
                  paddingY: "6px",
                  "&.MuiButtonBase-root": {
                     padding: "0px",
                  },
               }}>
               <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontSize={"20px"} fontWeight={500}>
                     Is posting property for selling/renting on NestNotify.com FREE?
                  </Typography>
               </AccordionSummary>
               <AccordionDetails sx={{ padding: "0px" }}>
                  <Typography fontSize={"16px"}>
                     As an owner, agent, or builder, you can post all types of residential and commercial properties for rent, lease, or sale. On NestNotify.com, millions of people search for flats, houses, plots, office space, shops, showrooms, warehouses, commercial land, and agricultural land,
                     among others. NestNotify.com is the best property portal to sell or rent out your property fast!
                  </Typography>
               </AccordionDetails>
            </Accordion>
            {/* ====== */}
            {/* ====== */}
            <Accordion
               square
               elevation={0}
               sx={{
                //   borderY: "1px solid #D4DBDE",
                  paddingY: "6px",
                  "&.MuiButtonBase-root": {
                     padding: "0px",
                  },
               }}>
               <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontSize={"20px"} fontWeight={500}>
                     Can I sell/rent out my property on my own without paying brokerage?
                  </Typography>
               </AccordionSummary>
               <AccordionDetails sx={{ padding: "0px" }}>
                  <Typography fontSize={"16px"}>
                     As an owner, agent, or builder, you can post all types of residential and commercial properties for rent, lease, or sale. On NestNotify.com, millions of people search for flats, houses, plots, office space, shops, showrooms, warehouses, commercial land, and agricultural land,
                     among others. NestNotify.com is the best property portal to sell or rent out your property fast!
                  </Typography>
               </AccordionDetails>
            </Accordion>
            {/* ====== */}
            {/* ====== */}
            <Accordion
               square
               elevation={0}
               sx={{
                //   borderY: "1px solid #D4DBDE",
                  paddingY: "6px",
                  "&.MuiButtonBase-root": {
                     padding: "0px",
                  },
               }}>
               <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontSize={"20px"} fontWeight={500}>
                     How can I rent/sell my property faster?
                  </Typography>
               </AccordionSummary>
               <AccordionDetails sx={{ padding: "0px" }}>
                  <Typography fontSize={"16px"}>
                     As an owner, agent, or builder, you can post all types of residential and commercial properties for rent, lease, or sale. On NestNotify.com, millions of people search for flats, houses, plots, office space, shops, showrooms, warehouses, commercial land, and agricultural land,
                     among others. NestNotify.com is the best property portal to sell or rent out your property fast!
                  </Typography>
               </AccordionDetails>
            </Accordion>
            {/* ====== */}
            {/* ====== */}
            <Accordion
               square
               elevation={0}
               sx={{
                //   borderY: "1px solid #D4DBDE",
                  paddingY: "6px",
                  "&.MuiButtonBase-root": {
                     padding: "0px",
                  },
               }}>
               <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontSize={"20px"} fontWeight={500}>
                     Will I get genuine buyers & tenants even with free property listings?
                  </Typography>
               </AccordionSummary>
               <AccordionDetails sx={{ padding: "0px" }}>
                  <Typography fontSize={"16px"}>
                     As an owner, agent, or builder, you can post all types of residential and commercial properties for rent, lease, or sale. On NestNotify.com, millions of people search for flats, houses, plots, office space, shops, showrooms, warehouses, commercial land, and agricultural land,
                     among others. NestNotify.com is the best property portal to sell or rent out your property fast!
                  </Typography>
               </AccordionDetails>
            </Accordion>
            {/* ====== */}
         </Grid>
      </Grid>
   );
};

export default BuyerFAQSec;
