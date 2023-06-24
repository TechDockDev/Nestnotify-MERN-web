import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const NestedLink = ({ children, icon, linkText }) => {
   const [open, setOpen] = useState(false);
   const handleClick = () => {
      setOpen(!open);
   };
   return (
      <>
         <ListItemButton
            onClick={handleClick}
            disableRipple
            sx={{
               color: "#0D507D",
               fontSize: "26px",

               transition: "all 0.1s ease",

               "&:hover": {
                  color: "#2298BC",
                  borderLeft: "3px solid #2298BC",
               },
            }}>
            <ListItemIcon
               sx={{
                  color: "#0D507D",
               }}>
               {icon}
            </ListItemIcon>
            <ListItemText
               primary={linkText}
               primaryTypographyProps={{
                  sx: {
                     bgcolor: "transparent",
                     fontWeight: "600",
                     fontSize: "12px",
                  },
               }}
            />
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
         </ListItemButton>
         <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ marginLeft: "20px" }}>
               {children}
            </List>
         </Collapse>
      </>
   );
};

export default NestedLink;
