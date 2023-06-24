import { Checkbox, FormControlLabel, FormGroup, Grid, RadioGroup } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import SubQuestion from "./SubQuestion";

const CheckboxQues = ({ question, quesAnsOption, id, handleCheckBoxChange }) => {
   const [showSub, setShowSub] = useState(false);
  const [tempOptions, setTempOptions] = useState({})

const genCheckData = ()=>{
   let obj = {}
   quesAnsOption?.map((quest)=>{
     obj = {...obj,[quest.label]:false}
   })
   setTempOptions(obj);
}

useEffect(() => {
 genCheckData()
}, [])

   const handleChange = (e)=>{
    setTempOptions({...tempOptions, [e.target.name]:e.target.checked})
   }


   console.log(tempOptions);

   return (
      <>
         <Grid
            component={"label"}
            item
            xs={12}
            htmlFor={id}
            sx={{
               fontSize: "18px",
               fontWeight: "600",
               fontFamily: "Montserrat",
            }}>
            {question}
         </Grid>
         <Grid
            component={FormGroup}
            item
            container
            xs={12}
            id={id}
            // onChange={(e) => {
            //    handleCheckBoxChange(tempOptions);
            // }}
            >
            {quesAnsOption.map((quest, index) => {
               return (
                  <React.Fragment key={index}>
                     <Grid item xs={12} sm={6}>
                        <FormControlLabel control={<Checkbox checked={tempOptions?.[quest.label]} name={quest.label} onChange={handleChange} />} label={quest.label} />
                        {quest?.isSubQues && showSub && <SubQuestion />}
                     </Grid>
                  </React.Fragment>
               );
            })}
         </Grid>
      </>
   );
};

export default CheckboxQues;
