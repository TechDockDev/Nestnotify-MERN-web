import List from "@mui/material/List";

import React from "react";
import SingleMenuNavLink from "./SingleMenuNavLink";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { Box } from "@mui/material";

const DrawerContent = () => {
   return (
      <Box
         sx={{
            padding: "20px",
         }}>
         <List
            sx={{
               "& .active": {
                  color: "#2298BC",
                  borderLeft: "3px solid #2298BC",
               },
            }}>
            <SingleMenuNavLink icon={<DashboardOutlinedIcon />} to={"/"} linkText={"Dashboard"} />
            <SingleMenuNavLink icon={<AdminPanelSettingsOutlinedIcon />} to={"admin-accounts"} linkText={"Admin Accounts"} />
         </List>
      </Box>
   );
};

export default DrawerContent;
