import React from "react";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";

const SingleMenuNavLink = ({
  linkText,
  icon,
  to,
  handleDrawerToggle,
  clickFunction,
}) => {
  return (
    <ListItem
      onClick={() => {
        if (handleDrawerToggle) {
          handleDrawerToggle();
        }
        if (clickFunction) {
          clickFunction();
        }
      }}
      component={to ? NavLink :""}
      to={to}
      sx={{
        color: "#0D507D",
        fontSize: "18px",
        // border: "1px solid red",
        display: "block",
        margin: "5px 0px",
        padding: "5px 0px 5px 20px",
        bgcolor: "transparent",
        transition: "all 0.1s ease",

        "&:hover": {
          color: "#2298BC",
          borderLeft: "3px solid #2298BC",
        },
      }}
    >
      <ListItemButton
        sx={{
          // border: "1px solid purple",
          cursor: "pointer",
          padding: "0px",
          fontWeight: "400",
          fontSize: "26px",

          "&:hover": {
            bgcolor: "transparent",
          },
          "&:active": {
            transform: "scale(0.95)",
          },
          "& svg": {
            bgcolor: "transparent",
          },
        }}
      >
        {icon}

        <ListItemText
          primary={linkText}
          sx={{
            marginLeft: "12px",
            bgcolor: "transparent",
          }}
          primaryTypographyProps={{
            sx: {
              bgcolor: "transparent",
              fontWeight: "600",
              fontSize: "12px",
            },
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default SingleMenuNavLink;
