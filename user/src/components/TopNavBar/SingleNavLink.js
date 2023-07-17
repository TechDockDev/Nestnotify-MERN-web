import { Button, Link, Menu } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SingleNavLink = ({ linkText, hyperLink, btn = false, onClick, variant, dropdown = false, children }) => {
   const [anchorEl, setAnchorEl] = useState(null);

   const open = Boolean(anchorEl);

   const openDropdown = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <>
         {btn ? (
            !dropdown ? (
               <Button
                  size={"small"}
                  disableElevation
                  variant={variant}
                  onClick={onClick}
                  sx={{
                     borderRadius: "30px",
                     textTransform: "none",
                     padding: "6px 10px",
                  }}>
                  {linkText}
               </Button>
            ) : (
               <>
                  <Button
                     variant="text"
                     onClick={openDropdown}
                     aria-controls={open ? "sub-menu" : undefined}
                     aria-haspopup="true"
                     aria-expanded={open ? "true" : undefined}
                     disableElevation
                     disableRipple
                     p={0}
                     sx={{
                        position: "relative",
                        display: "flex",
                        textDecoration: "none",
                        fontWeight: "500",
                        fontSize: "16px",
                        textTransform: "none",
                        padding:"0px",
                        "&::before": {
                           transition: "width 200ms ease",
                           content: `" "`,
                           width: "0%",
                           height: "4px",
                           position: "absolute",
                           bgcolor: "#2298BC",
                           top: "28px",
                           zIndex: "1",
                        },
                        "&:hover": {
                           bgcolor: "white",
                           color: "#2298BC",
                           fontWeight: "600",
                           "&::before": {
                              width: "100%",
                           },
                        },
                     }}>
                     {linkText}
                     <KeyboardArrowDownIcon
                        sx={{
                           height: "100%",
                        }}
                     />
                  </Button>

                  <Menu
                     anchorEl={anchorEl}
                     id="sub-menu"
                     open={open}
                     onClose={handleClose}
                     onClick={handleClose}
                     PaperProps={{
                        elevation: 10,

                        sx: {
                           overflow: "visible",
                           filter: "drop-shadow(0px 1px 5px rgba(0, 10, 0, 0.2))",
                           borderRadius: "12px",
                           mt: 1.5,
                           "&:before": {
                              content: '""',
                              display: "block",
                              position: "absolute",
                              top: 0,
                              right: "39%",
                              width: 17,
                              height: 17,
                              bgcolor: "white",
                              transform: "translateY(-50%) rotate(45deg)",
                              zIndex: 0,
                           },
                        },
                     }}
                     sx={{
                        "& .MuiPaper-root": {
                           borderRadius: "12px",
                        },
                     }}
                     transformOrigin={{ horizontal: "right", vertical: "top" }}
                     anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
                     {children}
                  </Menu>
               </>
            )
         ) : (
            <Link
               component={NavLink}
               to={hyperLink}
               sx={{
                  position: "relative",
                  display: "block",
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "16px",
                  "&::before": {
                     transition: "width 200ms ease",
                     content: `" "`,
                     width: "0%",
                     height: "4px",
                     position: "absolute",
                     bgcolor: "#2298BC",
                     top: "28px",
                     zIndex: "1",
                  },
                  "&:hover": {
                     color: "#2298BC",
                     fontWeight: "600",

                     "&::before": {
                        width: "100%",
                     },
                  },
               }}>
               {linkText}
            </Link>
         )}
      </>
   );
};

export default SingleNavLink;
