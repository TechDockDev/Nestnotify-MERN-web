import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CircleIcon from '@mui/icons-material/Circle';
const SingleQuest = ({ ques, drop, dragStart, dragEnter, index, item }) => {
   const [open, setOpen] = useState(false);
   const toggleOptions = () => {
      setOpen(!open);
   };
   console.log(item);

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
         draggable
         sx={{
            background: "#F6F9FB",
            padding: "15px 10px",
            margin: "5px 0px",
            borderRadius: "4px",
            "&:hover": {
               cursor: "sizeall",
            },
         }}>
         <Typography
            variant="h2"
            sx={{
               fontSize: "18px",
               fontWeight: "500",
               background: "#F6F9FB",
               position: "relative",
            }}>{index+1+ "."} &nbsp;
            {ques}
           {item?.questionType !== "text" && <IconButton
               onClick={toggleOptions}
               sx={{
                  position: "absolute",
                  right: "0px",
                  bottom: "-12px",
               }}>
               <ArrowDropDownIcon />
            </IconButton>}
         </Typography>
         {open && (
            <Box sx={{
               marginLeft:"20px"
            }}>
               {item?.quesAnsOption?.map((optn, index) => {
                  return <Typography variant="h3" sx={{
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
