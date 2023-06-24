import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import QuesAnsOption from "./QuesAnsOption";
import axios from "axios";
import { useEffect } from "react";

const QuestionComp = () => {
   const [questData, setQuestData] = useState([]);
   const [value, setValue] = React.useState({});

   const getQuestData = async () => {
      try {
         const { data } = await axios.get("api/v1/admin/seller/residential/home/form");
         console.log(data.sellerPropertyForm);

         setQuestData(data?.sellerPropertyForm);
      } catch (error) {
         console.log(error);
      }
   };

   const handleRadioChange = (e) => {
    setValue({...value,[e.target.name]: e.target.value});
    
   };

   const handleCheckBoxChange = (obj) => {
      console.log(tempOptions);
      
    };

   //  console.log(value);
    

   useEffect(() => {
      getQuestData();
   }, []);

   return (
      <>
         <Grid container width={"100%"}>
            {questData.map((quest, index) => {
               return (
                  <React.Fragment key={quest._id}>
                     <Grid
                        item
                        xs={2}
                        sx={{
                           display: "flex",
                           justifyContent: "center",
                           alignItems: "center",
                        }}>
                        <Typography
                           sx={{
                              fontSize: "50px",
                              fontWeight: "600",
                              color: "#3333334D",
                           }}>
                           {quest?.quesIndex}
                        </Typography>
                     </Grid>   
                        <QuesAnsOption question={quest.question} handleRadioChange={handleRadioChange} handleCheckBoxChange={handleCheckBoxChange}  id={quest._id} quesAnsOption={quest?.quesAnsOption} questionType={quest?.questionType} />
                  </React.Fragment>
               );
            })}
         </Grid>
      </>
   );
};

export default QuestionComp;
