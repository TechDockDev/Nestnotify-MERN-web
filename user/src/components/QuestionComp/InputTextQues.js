import { Grid } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const InputTextQues = ({ questionType, question, quesAnsOption, id, handleInputTextChange }) => {
  const [state, setState] = useState()

  const handleChange = (e)=>{
    setState(e.target.value)
  }  
  useEffect(() => {
    handleInputTextChange(id,state)
  }, [state])
  

   return (
      <>
         <Grid item container  xs={12} sm={6}>
            <Grid component={"label"} item xs={12} sx={{
               color:"#000",
               fontSize: "18px",
               fontWeight: "600",
               fontFamily: "Montserrat",
            }}>
               {question}
            </Grid>
            <Grid
            value={state}
            name={id}
            component={"input"}
            type={questionType}
            onChange={handleChange}
            item xs={12}
            required
            ></Grid>
         </Grid>
      </>
   );
};

export default InputTextQues;
