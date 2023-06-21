import AppWrapper from "../CommonComponents/AppWrapper";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { MenuItem, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import SingleNavLink from "./SingleNavLink";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const TopNavBar = (props) => {
   const [mobileOpen, setMobileOpen] = React.useState(false);
   

   const handleDrawerToggle = () => {  
      setMobileOpen((prevState) => !prevState);
   };

   const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
         <Typography variant="h6" sx={{ my: 2 }}>
            MUI
         </Typography>
         <Divider />
         <List>
            {navItems.map((item) => (
               <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                     <ListItemText primary={item} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Box>
   );

   return (
      <AppWrapper>
         <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ bgcolor: "white" }} elevation={1} >
               <Toolbar
                  disableGutters
                  sx={{
                     width: "100%",
                     maxWidth: "1440px",
                     marginX: "auto",
                     paddingX: "15px",
                  }}>
                  <IconButton aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { md: "none" } }}>
                     <MenuIcon />
                  </IconButton>
                  {/* === logo === */}
                  <Box
                     component={NavLink}
                     to={"/"}
                     sx={{
                        display: { xs: "none", md: "block" },
                     }}>
                     <Box component={"img"} alt="" src="assets/logoMain.svg" sx={{ display: "block", width: "170px" }} />
                  </Box>
                  {/* === logo === */}
                  <Stack alignItems={"end"} width={"100%"}>
                     <Box
                        sx={{
                           display: { xs: "none", md: "flex" },
                           alignItems: "center",
                           width: "fit-content",
                           "& a, button": {
                              marginX: "10px",
                           },
                           "& a:first-child": {
                              marginLeft: "0px",
                           },
                           "& button:last-child": {
                              marginRight: "0px",
                              marginLeft: "0px",
                           },
                        }}>
                        <SingleNavLink linkText={"Home"} to={"/"} />
                        <SingleNavLink linkText={"How it Works?"} btn={true} dropdown={true}>
                           <MenuItem sx={{ borderBottom: "1px solid #D9DEDF"}}>For Buyers</MenuItem>
                           <MenuItem sx={{ borderBottom: "1px solid #D9DEDF"}}>For Seller</MenuItem>
                           <MenuItem sx={{ borderBottom: "1px solid #D9DEDF"}}>For Renters</MenuItem>
                           <MenuItem sx={{ borderBottom: "1px solid #D9DEDF"}}>For Landlords</MenuItem>
                           <MenuItem >For Investors</MenuItem>
                        </SingleNavLink>
                        <SingleNavLink linkText={"Our Story"} to={"/"} />
                        <SingleNavLink linkText={"Contact"} to={"/"} />
                        <SingleNavLink linkText={"Legal"} to={"/"} />
                        <SingleNavLink linkText={"Terms"} to={"/"} />
                        <SingleNavLink
                           linkText={"Login"}
                           btn={true}
                           variant={"contained"}
                           onClick={() => {
                              console.log("login");
                           }}
                        />
                        <SingleNavLink
                           linkText={"Sign Up"}
                           btn={true}
                           variant={"outlined"}
                           onClick={() => {
                              console.log("Sign Up");
                           }}
                        />
                     </Box>
                  </Stack>
               </Toolbar>
            </AppBar>
            <Box component="nav">
               <Drawer
                  variant="temporary"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                     keepMounted: true, // Better open performance on mobile.
                  }}
                  sx={{
                     display: { xs: "block", md: "none" },
                     "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                  }}>
                  {drawer}
               </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
               <Toolbar />
            </Box>
         </Box>
      </AppWrapper>
   );
};

export default TopNavBar;
