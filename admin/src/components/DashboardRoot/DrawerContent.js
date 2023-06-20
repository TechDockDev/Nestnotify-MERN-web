import List from "@mui/material/List";

import React from "react";
import SingleMenuNavLink from "./SingleMenuNavLink";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { Box, Typography } from "@mui/material";
import { LuClipboardList } from "react-icons/lu";
import NestedLink from "./NestedLink";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const DrawerContent = ({ handleDrawerToggle }) => {
   return (
      <Box
         sx={{
            padding: "20px",
         }}>
         <Typography variant="h2" color="initial" fontSize={"14px"} fontWeight={"500"}>
            --MAIN
         </Typography>
         <List
            sx={{
               "& .active": {
                  color: "#2298BC",
                  borderLeft: "3px solid #2298BC",
               },
            }}>
            <SingleMenuNavLink handleDrawerToggle={handleDrawerToggle} icon={<DashboardOutlinedIcon />} to={"/dashboard"} linkText={"Dashboard"} />
            <SingleMenuNavLink handleDrawerToggle={handleDrawerToggle} icon={<AdminPanelSettingsOutlinedIcon />} to={"admin-accounts"} linkText={"Admin Accounts"} />
            <SingleMenuNavLink handleDrawerToggle={handleDrawerToggle} icon={<PeopleAltOutlinedIcon />} to={"users-accounts"} linkText={"Users Accounts"} />
         </List>
         <Typography variant="h2" color="initial" fontSize={"14px"} fontWeight={"500"} textTransform={"uppercase"}>
            --Questionnaires
         </Typography>
         <List
            sx={{
               "& .active": {
                  color: "#2298BC",
                  borderLeft: "3px solid #2298BC",
               },
            }}>
            <NestedLink icon={<LuClipboardList />} linkText={"Seller"}>
               <SingleMenuNavLink handleDrawerToggle={handleDrawerToggle} icon={<ArrowForwardIcon />} to={"sellers-questionnaire/residential-home"} linkText={"Residential Home"} />
               <SingleMenuNavLink handleDrawerToggle={handleDrawerToggle} icon={<ArrowForwardIcon />} to={"sellers-questionnaire/residential-condo"} linkText={"Residential Condo/CoOp"} />
               <SingleMenuNavLink handleDrawerToggle={handleDrawerToggle} icon={<ArrowForwardIcon />} to={"sellers-questionnaire/commercial"} linkText={"Commercial/Industrial"} />
               <SingleMenuNavLink handleDrawerToggle={handleDrawerToggle} icon={<ArrowForwardIcon />} to={"sellers-questionnaire/land"} linkText={"Land/Open Lot"} />
            </NestedLink>
            {/* ================ */}
          
         </List>
      </Box>
   );
};

export default DrawerContent;
