import { Checkbox, FormControlLabel, Grid, Radio, RadioGroup, Select } from "@mui/material";
import React from "react";
import SubQuestion from "./SubQuestion";
import { useState } from "react";
import RadioQues from "./RadioQues";
import CheckboxQues from "./CheckboxQues";
import SelectQues from "./SelectQues";
import InputTextQues from "./InputTextQues";

const QuesAnsOption = ({ question, questionType, quesAnsOption, id, handleRadioChange, handleCheckBoxChange }) => {

   return (
      <>
         <Grid item container xs={10}>
            {questionType === "radio" ? <RadioQues 
            question={question}
            quesAnsOption={quesAnsOption}
            id={id}
            handleRadioChange={handleRadioChange}
            /> : questionType === "checkbox" ? <CheckboxQues 
            question={question}
            quesAnsOption={quesAnsOption}
            id={id}
            handleCheckBoxChange={handleCheckBoxChange}
            /> : questionType === "select" ? <SelectQues /> : <InputTextQues/>}
         </Grid>
      </>
   );
};

export default QuesAnsOption;
