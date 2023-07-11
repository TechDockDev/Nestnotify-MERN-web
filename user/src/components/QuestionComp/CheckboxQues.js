import { Checkbox, FormControlLabel, FormGroup, Grid, RadioGroup } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import SubQuestion from "./SubQuestion";
import QuesAnsOption from "./QuesAnsOption";

const CheckboxQues = ({ question, quesAnsOption, id, handleCheckBoxChange }) => {
   const [tempOptions, setTempOptions] = useState({});

   const genCheckData = () => {
      let obj = {};
      quesAnsOption?.map((quest) => {
         obj = { ...obj, [quest.label]: false };
      });
      setTempOptions(obj);
   };

   // ==========================================
   const handleChange = (e) => {
      setTempOptions({ ...tempOptions, [e.target.name]: e.target.checked });
   };
   // ===================================
   useEffect(() => {
      genCheckData();
   }, []);
   // ****
   useEffect(() => {
      handleCheckBoxChange(id, tempOptions);
   }, [tempOptions]);

   // console.log(tempOptions);

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
         <Grid component={FormGroup} item container xs={12} id={id}>
            {quesAnsOption.map((quest, index) => {
               return (
                  <React.Fragment key={index}>
                     <Grid item xs={12} sm={6}>
                        <FormControlLabel
                           control={
                              <Checkbox
                                 checked={tempOptions?.[quest.label] ? tempOptions?.[quest.label] : false}
                                 name={quest.label}
                                 onChange={(e) => {
                                    handleChange(e);
                                 }}
                              />
                           }
                           label={quest.label}
                        />
                        {quest?.isSubQues && tempOptions?.[quest.label] && (
                           <QuesAnsOption question={quest.question} handleRadioChange={() => {}} handleCheckBoxChange={() => {}} id={quest._id} quesAnsOption={quest?.subQuest} questionType={quest?.optionType} handleInputTextChange={() => {}} handleSelectChange={() => {}} />
                        )}
                     </Grid>
                  </React.Fragment>
               );
            })}
         </Grid>
      </>
   );
};

export default CheckboxQues;
