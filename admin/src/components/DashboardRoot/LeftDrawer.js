import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import DrawerContent from "./DrawerContent";
import { Button, Stack } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { DataContext } from "../../AppContext";
import axios from "axios";
import NotificationSnackbar from "../CommonComponents/NotificationSnackbar";
import { useNavigate } from "react-router-dom";

const drawerWidth = 250;

function LeftDrawer(props) {
   const { window } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);
   const { snackbar, setAdminAuthData, setIsLoggedIn } = React.useContext(DataContext);
   const navigate  = useNavigate()

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   const container = window !== undefined ? () => window().document.body : undefined;

   const handleLogout = async () => {
      try {
         const { data } = await axios.get("/api/v1/user/signout");
         console.log(data);
         snackbar(data.status, data.message);
         setAdminAuthData({});
         setIsLoggedIn(false)
         navigate('/')

      } catch (error) {
         console.log(error);

         snackbar("error", error?.response?.data?.message);
      }
   };

   return (
      <Box sx={{ display: "flex" }}>
         <NotificationSnackbar />
         <CssBaseline />
         <AppBar
            position="fixed"
            sx={{
               width: { md: `calc(100% - ${drawerWidth}px)` },
               ml: { md: `${drawerWidth}px` },
            }}>
            <Toolbar
               sx={{
                  width: "100%",
                  maxWidth: { md: `calc(1440px - 250px)` },
                  marginX: "auto",
                  minHeight: { xs: "48px", sm: "60px" },
               }}>
               <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { md: "none" } }}>
                  <MenuIcon />
               </IconButton>
               <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
                  <Stack>
                     <Box component={"img"} alt="" src="/assets/nestnotifyLogoWhite.svg" />
                  </Stack>
                  <Button onClick={handleLogout} variant="outlined" endIcon={<LogoutIcon />} sx={{ color: "white", textTransform: "none" }}>
                     Log out
                  </Button>
               </Stack>
            </Toolbar>
         </AppBar>
         <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
               container={container}
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
               <DrawerContent />
            </Drawer>
            <Drawer
               variant="permanent"
               sx={{
                  display: { xs: "none", md: "block" },
                  "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
               }}
               open>
               <DrawerContent handleDrawerToggle={handleDrawerToggle}/>
            </Drawer>
         </Box>
      </Box>
   );
}

export default LeftDrawer;
