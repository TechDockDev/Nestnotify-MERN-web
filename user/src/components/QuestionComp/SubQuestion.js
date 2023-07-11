import { FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { useState } from "react";

const SubQuestion = ({ questionType, quesAnsOption, id, handleRadioChange, value }) => {
   const [showSub, setShowSub] = useState(false);
   return (
      <>
      <div>11112222</div>
         {/* {questionType === "radio" ? (
            <Grid component={RadioGroup} item container xs={12} id={id} onChange={handleRadioChange}>
               {quesAnsOption.map((quest, index) => {
                  return (
                     <React.Fragment key={index}>
                        <Grid item xs={12} sm={6}>
                           <FormControlLabel
                              onClick={() => {
                                 quest?.isSubQues && setShowSub(!showSub);
                              }}
                              key={index}
                              value={quest?.label}
                              control={<Radio />}
                              label={quest.label}
                           />
                        </Grid>
                     </React.Fragment>
                  );
               })}
            </Grid>
         ) : (
            ""
         )} */}
      </>
   );
};

export default SubQuestion;




