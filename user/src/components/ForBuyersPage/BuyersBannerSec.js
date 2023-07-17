import { Button, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const BuyersBannerSec = () => {
   return (
      <Grid container sx={{
        backgroundImage:{xs:"none",md:`url("/assets/forBuyresBannerImg.png")`},
        backgroundPosition:"center right",
        backgroundRepeat:"no-repeat",
        height:"600px",
        backgroundSize:{ lg:"auto",md:"52%"},
         justifyContent:{xs:"center", md:"left"}
      }}>
         <Grid item xs={11} sm={11} md={6} px={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Stack gap={3}>
               <Typography
                  variant="h1"
                  sx={{
                     fontWeight: 600,
                     color: "#0D507D",
                     fontSize: "32px",

                     "& span": {
                        color: "#2298BC",
                     },
                  }}>
                  Secure your
                  <span> dream property </span>
                  with guidance in real estate.
               </Typography>
               <List>
                  <ListItem>
                     <ListItemIcon
                        sx={{
                           color: "#68BC45",
                           padding: "0px",
                           minWidth: "0px",
                           "& svg": {
                              fontSize: "30px",
                           },
                        }}>
                        <CheckIcon />
                     </ListItemIcon>
                     <ListItemText
                        primaryTypographyProps={{
                           sx: {
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#0E3D4B",
                              ml: 1,
                           },
                        }}>
                        Unlock exclusive property listings.
                     </ListItemText>
                  </ListItem>
                  <ListItem>
                     <ListItemIcon
                        sx={{
                           color: "#68BC45",
                           padding: "0px",
                           minWidth: "0px",
                           "& svg": {
                              fontSize: "30px",
                           },
                        }}>
                        <CheckIcon />
                     </ListItemIcon>
                     <ListItemText
                        primaryTypographyProps={{
                           sx: {
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#0E3D4B",
                              ml: 1,
                           },
                        }}>
                        Discover the perfect investment opportunity.
                     </ListItemText>
                  </ListItem>
                  <ListItem>
                     <ListItemIcon
                        sx={{
                           color: "#68BC45",
                           padding: "0px",
                           minWidth: "0px",
                           "& svg": {
                              fontSize: "30px",
                           },
                        }}>
                        <CheckIcon />
                     </ListItemIcon>
                     <ListItemText
                        primaryTypographyProps={{
                           sx: {
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#0E3D4B",
                              ml: 1,
                           },
                        }}>
                        Streamlined and efficient property transactions.
                     </ListItemText>
                  </ListItem>
               </List>
               <Button sx={{
                   padding: '12px',
                   borderRadius: '64px',
                   width:"220px"
               }}  endIcon={<ArrowForwardIosIcon />}>Get Started Now</Button>
            </Stack>
         </Grid>
      </Grid>
   );
};

export default BuyersBannerSec;
