import { FormControlLabel, Grid, RadioGroup, Radio, FormLabel } from "@mui/material";
import React, { useRef } from "react";
// import SubQuestion from "./SubQuestion";
import { useState } from "react";
import QuesAnsOption from "./QuesAnsOption";

const RadioQues = ({ question, quesAnsOption, handleRadioChange, handleCheckBoxChange, handleInputTextChange, handleSelectChange, id }) => {
  const [optionId, setOptionId] = useState("")

   return (
      <>
         <Grid
            component={FormLabel}
            item
            xs={12}
            id={id}
            sx={{
               color: "#000",
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
                              setOptionId(quest.spid)
                           }}
                           key={index}
                           value={quest?.label}
                           control={<Radio />}
                           label={quest.label}
                        />
                        {quest?.isSubQues &&
                           quest.spid === optionId &&
                           quest?.subQues.map((ques) => {
                              return (
                                 <QuesAnsOption
                                    key={ques.spid}
                                    question={ques.question}
                                    id={ques.spid}
                                    quesAnsOption={ques?.quesAnsOption}
                                    questionType={ques?.questionType}
                                    handleRadioChange={handleRadioChange}
                                    handleCheckBoxChange={handleCheckBoxChange}
                                    handleInputTextChange={handleInputTextChange}
                                    handleSelectChange={handleSelectChange}
                                 />
                              );
                           })}
                     </Grid>
                  </React.Fragment>
               );
            })}
         </Grid>
      </>
   );
};

export default RadioQues;
