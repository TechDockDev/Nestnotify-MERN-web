import React from "react";
import { Typography } from "@mui/material";

const SingleQuest = ({ ques, drop, dragStart, dragEnter, index }) => {
   return (
      <div
      onDragStart={(e) => dragStart(e, index)}
      onDragEnter={(e) => dragEnter(e, index)}
      onDragEnd={drop}
      draggable
      >
         <Typography
          
            variant="h2"
            sx={{
               fontSize: "18px",
               margin: "10px 20px",
               fontWeight: "500",
               borderBottom: "2px solid #E0E9EF",
            }}>
            {ques}
         </Typography>
      </div>
   );
};

export default SingleQuest;
