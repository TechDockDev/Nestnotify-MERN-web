import { FormControlLabel, Grid, RadioGroup, Radio, FormLabel } from "@mui/material";
import React from "react";
// import SubQuestion from "./SubQuestion";
import { useState } from "react";
import QuesAnsOption from "./QuesAnsOption";

const RadioQues = ({ question, quesAnsOption, handleRadioChange, id }) => {
   const [showSub, setShowSub] = useState(false);

   return (
      <>
         <Grid
            component={FormLabel}
            item
            xs={12}
            id={id}
            sx={{
                color:"#000",
               fontSize: "18px",
               fontWeight: "600",
               fontFamily: "Montserrat",
            }}>
            {question}
         </Grid>
         <Grid component={RadioGroup} item container xs={12} aria-labelledby={id} name={id} onChange={handleRadioChange}>
            {quesAnsOption.map((quest, index) => {
               return (
                  <React.Fragment key={index}>
                     <Grid item xs={12} sm={6}>
                        <FormControlLabel
                           onClick={() => {
                              setShowSub(quest.isSubQues);
                           }}
                           key={index}
                           value={quest?.label}
                           control={<Radio />}
                           label={quest.label}
                        />
                        {quest?.isSubQues && showSub && <QuesAnsOption 
                        
                        question={quest.question} handleRadioChange={()=>{}} handleCheckBoxChange={()=>{}}  id={quest._id} quesAnsOption={quest?.subQuest} questionType={quest?.optionType} handleInputTextChange={()=>{}} handleSelectChange={()=>{}}
                        
                        />}
                     </Grid>
                  </React.Fragment>
               );
            })}
         </Grid>
      </>
   );
};

export default RadioQues;
