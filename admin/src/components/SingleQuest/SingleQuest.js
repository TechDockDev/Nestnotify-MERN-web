import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CircleIcon from '@mui/icons-material/Circle';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const SingleQuest = ({ ques, drop, dragStart, dragEnter, index, item , dragEnable}) => {
   const [open, setOpen] = useState(false);
   const toggleOptions = () => {
      setOpen(!open);
   };

   return (
      <Box
         onDragStart={(e) => {
            dragStart(e, index);
         }}
         onDragEnter={(e) => {
            e.preventDefault();
            dragEnter(e, index);
         }}
         onDragOver={(e) => {
            e.preventDefault();
         }}
         onDragEnd={(e) => {
            drop();
         }}
         draggable = {dragEnable}
         sx={{
            background: "#F6F9FB",
            padding: "15px 10px",
            margin: "5px 0px",
            borderRadius: "4px",
            "&:hover": {
               cursor: "sizeall",
            },
            transition:"all 200ms ease"
         }}>
         <Typography
            variant="h2"
            sx={{
               fontSize: "14px",
               fontWeight: "600",
               background: "#F6F9FB",
               position: "relative",
               display:"flex",
               justifyItems:"center",
               transition:"all 200ms ease",
               "&:hover":{
                  cursor: dragEnable ? "all-scroll" : "default",
                  scale:dragEnable ? "0.98" : "1"

               }
            }}>
               {dragEnable && <DragIndicatorIcon sx={{
                  color:"grey",
                  cursor:"all-scroll",
                  position: "relative",
                  marginY:"auto",
                  marginRight:"5px",
                  right:"0px"
               }}/>}
               {index+1+ "."} &nbsp;
            {ques}
           {item?.questionType !== "text" && <IconButton
               onClick={toggleOptions}
               sx={{
                  position: "relative",
                  marginY:"auto",
                  marginLeft:"auto",
                  right:"0px",
                  p:0

               }}>
               <ArrowDropDownIcon />
            </IconButton>}
         </Typography>
         {open && (
            <Box sx={{
               marginLeft:"20px"
            }}>
               {item?.quesAnsOption?.map((optn, index) => {
                  return <Typography key={index} variant="h3" sx={{
                     fontSize: "14px",
                     fontWeight: "400",
                     display:"flex",
                     alignItems:"center",
                    gap:"10px",
                    marginTop:"10px"
                  }}>
                     <CircleIcon sx={{
                        fontSize:"5px"
                     }}/>
                     {optn.label}</Typography>;
               })}
            </Box>
         )}
      </Box>
   );
};

export default SingleQuest;
