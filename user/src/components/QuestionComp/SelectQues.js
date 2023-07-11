import { Box, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";

const SelectQues = ({ questionType, question, quesAnsOption, id, handleSelectChange }) => {
   const [option, setOption] = useState("");
   const handleChange = (event) => {
      setOption(event.target.value);
   };
   useEffect(() => {
      handleSelectChange(id, option);
   }, [option]);

   return (
      <>
         <Grid item xs={12} sx={{ minWidth: 120 }}>
            <InputLabel
               id={id}
               sx={{
                  color: "#000",
                  fontSize: "18px",
                  fontWeight: "600",
                  fontFamily: "Montserrat",
               }}>
               {question}
            </InputLabel>
            <FormControl fullWidth size="small">
               <Select
                  variant="outlined"
                  labelId={id}
                  id="demo-simple-select"
                  value={option}
                  onChange={handleChange}
                  displayEmpty
                  renderValue={(selected) => {
                     if (selected.length === 0) {
                        return <span>Select</span>;
                     }
                     return selected;
                  }}>
                  {quesAnsOption.map((quest, index) => {
                     return (
                        <MenuItem key={index} value={quest.label}>
                           {quest.label}
                        </MenuItem>
                     );
                  })}
               </Select>
            </FormControl>
         </Grid>
      </>
   );
};

export default SelectQues;
