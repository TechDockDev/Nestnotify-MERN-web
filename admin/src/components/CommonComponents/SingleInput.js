import { Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SingleInput = ({ labelText, inputType, inputName, inputValue, onChangeHandler, labelInputId, requiredTrue, placeholderText, width = "100%", minLength }) => {
   const [showPassword, setShowPassword] = useState(false);
   const handleClickShowPassword = () => setShowPassword((show) => !show);

   return (
      <>
         {inputType !== "password" ? (
            <Grid container mt={1} width={width}>
               <Grid
                  component={"label"}
                  htmlFor={labelInputId}
                  item
                  xs={12}
                  sx={{
                     fontFamily: "Montserrat",
                     fontSize: "16px",
                     display: "flex",
                     alignItems: "center",
                     fontWeight: "500",
                     color: "#000",
                  }}>
                  {labelText} {requiredTrue ? "*" : ""}
               </Grid>
               <Grid
                  minLength={minLength}
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
                     border: "none",
                     border: "2px solid #0D507D",
                     padding: "10px",
                     mt: 1,
                     borderRadius:"8px",
                     fontSize: "16px",
                     "&:focus": { borderColor: "#2298BC" },
                  }}></Grid>
            </Grid>
         ) : (
            <Grid container mt={1} position={"relative"} width={width}>
               <Grid
                  component={"label"}
                  htmlFor={labelInputId}
                  item
                  xs={12}
                  sx={{
                     fontFamily: "Montserrat",
                     fontSize: "16px",
                     display: "flex",
                     alignItems: "center",
                     fontWeight: "500",
                     color: "#000",
                  }}>
                  {labelText} {requiredTrue ? "*" : ""}
               </Grid>
               <Grid
                  minLength={minLength}
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
                     border: "none",
                     border: "2px solid #0D507D",
                     padding: "10px",
                     fontSize: "16px",
                     mt: 1,
                     borderRadius:"8px",

                     "&:focus": { borderColor: "#2298BC" },
                  }}></Grid>

               <IconButton
                  aria-label="toggle-password-visibility"
                  onClick={handleClickShowPassword}
                  sx={{
                     position: "absolute",
                     right: "0px",
                     top: "32px",
                     "& svg": {
                        fontSize: "18px",
                     },
                  }}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
               </IconButton>
            </Grid>
         )}
      </>
   );
};

export default SingleInput;
