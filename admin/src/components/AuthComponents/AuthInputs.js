import { Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const AuthInputs = ({ labelText, inputType, inputName, inputValue, onChangeHandler, labelInputId, requiredTrue, placeholderText, width ="100%" }) => {
   const [showPassword, setShowPassword] = useState(false);
   const handleClickShowPassword = () => setShowPassword((show) => !show);

   return (
      <>
         {inputType !== "password" ? (
            <Grid container mt={3} width={width}>
               <Grid
                  component={"label"}
                  htmlFor={labelInputId}
                  item
                  xs={12}
                  sx={{
                     fontFamily: "Montserrat",
                     fontSize: "12px",
                     display: "flex",
                     alignItems: "center",
                     fontWeight:"500",
                     color:"#000"

                  }}>
                  {labelText} {requiredTrue ? "*" : ""}
               </Grid>
               <Grid
                  component={"input"}
                  required={requiredTrue}
                  type={inputType}
                  name={inputName}
                  value={inputValue}
                  onChange={onChangeHandler}
                  id={labelInputId}
                  placeholder={placeholderText}
                  autoComplete="off"
                  item
                  xs={12}
                  sx={{
                     height: "34px",
                     outline: "none",
                     border:"none",
                     borderBottom: "1px solid #CED4DA",
                     padding:"0px",
                     mt:1,

                     fontSize: "14px",
                     "&:focus": { borderColor: "#0D507D" },
                  }}></Grid>
            </Grid>
         ) : (
            <Grid container mt={3} position={"relative"} width={width}>
               <Grid
                  component={"label"}
                  htmlFor={labelInputId}
                  item   
                  xs={12}
                  sx={{
                     fontFamily: "Montserrat",
                     fontSize: "12px",
                     display: "flex",
                     alignItems: "center",
                     fontWeight:"500",
                     color:"#000"

                  }}>
                  {labelText} {requiredTrue ? "*" : ""}
               </Grid>
               <Grid
                  component={"input"}
                  required={requiredTrue}
                  type={showPassword ? "text" : "password"}
                  name={inputName}
                  value={inputValue}
                  onChange={onChangeHandler}
                  id={labelInputId}
                  placeholder={placeholderText}
                  item
                  autoComplete="off"
                  xs={12}
                  sx={{
                     height: "34px",
                     outline: "none",
                     border:"none",
                     borderBottom: "1px solid #CED4DA",
                     padding:"0px",
                     fontSize: "14px",
                     mt:1,
                     "&:focus": { borderColor: "#0D507D" },
                  }}></Grid>

               <IconButton aria-label="toggle-password-visibility" onClick={handleClickShowPassword} sx={{ position: "absolute", right: "-7px", top:"26px" , "& svg":{
                  fontSize:"18px"
               }}}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
               </IconButton>
            </Grid>
         )}
      </>
   );
};

export default AuthInputs;
