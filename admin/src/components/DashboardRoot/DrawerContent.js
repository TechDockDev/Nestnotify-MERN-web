import List from "@mui/material/List";

import React from "react";
import SingleMenuNavLink from "./SingleMenuNavLink";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { Box, Typography } from "@mui/material";
import {LuClipboardList} from 'react-icons/lu';
const DrawerContent = () => {
   return (
      <Box
         sx={{
            padding: "20px",
         }}>
            <Typography variant="h2" color="initial" fontSize={'14px'} fontWeight={"500"}>--MAIN</Typography>
         <List
            sx={{
               "& .active": {
                  color: "#2298BC",
                  borderLeft: "3px solid #2298BC",
               },
            }}>
            <SingleMenuNavLink icon={<DashboardOutlinedIcon />} to={"/"} linkText={"Dashboard"} />
            <SingleMenuNavLink icon={<AdminPanelSettingsOutlinedIcon />} to={"admin-accounts"} linkText={"Admin Accounts"} />
            <SingleMenuNavLink icon={<PeopleAltOutlinedIcon />} to={"users-accounts"} linkText={"Users Accounts"} />
         </List>
            <Typography variant="h2" color="initial" fontSize={'14px'} fontWeight={"500"} textTransform={"uppercase"}>--Questionnaires</Typography>
         <List
            sx={{
               "& .active": {
                  color: "#2298BC",
                  borderLeft: "3px solid #2298BC",
               },
            }}>
            <SingleMenuNavLink icon={<LuClipboardList />} to={"sellers-questionnaire"} linkText={"Seller"} />
            <SingleMenuNavLink icon={<LuClipboardList />} to={"buyers-questionnaire"} linkText={"Buyer"} />
            <SingleMenuNavLink icon={<LuClipboardList />} to={"renters-questionnaire"} linkText={"Renter"} />
            <SingleMenuNavLink icon={<LuClipboardList />} to={"landlords-questionnaire"} linkText={"Landlord"} />
          
         </List>
      </Box>
   );
};

export default DrawerContent;
