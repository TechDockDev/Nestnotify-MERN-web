import { Button, Checkbox, FormControlLabel, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import Heading from "./Heading";
import { NavLink } from "react-router-dom";
import AuthInputs from "./AuthInputs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SignUp = () => {
   const smallDevice = useMediaQuery("(max-width:600px)");

   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
   });

   const [agreeTandC, setAgreeTandC] = useState(false);

   const termsAndCondiChange = (event) => {
      setAgreeTandC(event.target.checked);
   };
   // <======🍀👇 Handle Change👇 🍀======>
   const handleChange = (e, index) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };
   // <======🍀👆 Handle Change👆 🍀======>

   return (
      <Paper
         elevation={20}
         sx={{
            width: "95%",
            maxWidth: "520px",
            height: "fit-content",
            maxHeight: "90vh",
            padding: { xs: "20px", sm: "30px" },
            boxSizing: "border-box",
            overflow:"auto",
            borderRadius: "20px",
         }}>
         {/* <======👆 container for card content  👆  ======> */}

         <Stack sx={{
          m:0,
          p:0,
          height:"fit-content"
         }}>
            <Heading>Create an account</Heading>
            <Typography mt={2} fontWeight={500} sx={{ "& a": { color: "#0D507D", textDecoration: "none", "&:hover": { textDecoration: "underline" } } }}>
               Already have an account?
               <NavLink to="/"> Sign In</NavLink> {/* == 👇 email 👇  ==*/}
            </Typography>
            {/* <======👇 Form  👇  ======> */}
            <Stack component={"form"} direction={{ xs: "col", sm: "row" }} flexWrap={"wrap"} justifyContent={"space-between"}>
               {/* == 👇 First Name 👇  ==*/}
               <AuthInputs width={smallDevice ? "100%" : "49%"} labelText={"First Name"} inputType={"text"} inputName={"firstName"} inputValue={formData.firstName} onChangeHandler={handleChange} labelInputId={"firstName"} requiredTrue={true} placeholderText={"Enter your first name"} />
               {/* == 👆 First Name   ==*/}
               {/* == 👇 Last Name 👇  ==*/}
               <AuthInputs width={smallDevice ? "100%" : "49%"} labelText={"Last Name"} inputType={"text"} inputName={"lastName"} inputValue={formData.lastName} onChangeHandler={handleChange} labelInputId={"lastName"} requiredTrue={true} placeholderText={"Enter your last name"} />
               {/* == 👆 Last Name   ==*/}
               {/* == 👇 email 👇  ==*/}
               <AuthInputs width={smallDevice ? "100%" : "49%"} labelText={"Email"} inputType={"email"} inputName={"email"} inputValue={formData.email} onChangeHandler={handleChange} labelInputId={"email"} requiredTrue={true} placeholderText={"Enter your email"} />
               {/* == 👆 email   ==*/}
               {/* == 👇 Mobile Number 👇  ==*/}
               <AuthInputs width={smallDevice ? "100%" : "49%"} labelText={"Mobile Number"} inputType={"number"} inputName={"mobileNumber"} inputValue={formData.mobileNumber} onChangeHandler={handleChange} labelInputId={"mobileNumber"} requiredTrue={true} placeholderText={"Enter mobile number"} />
               {/* == 👆Mobile Number  ==*/}
               {/* == 👇 password 👇  ==*/}
               <AuthInputs width={smallDevice ? "100%" : "49%"} labelText={"Password"} inputType={"password"} inputName={"password"} inputValue={formData.password} onChangeHandler={handleChange} labelInputId={"password"} requiredTrue={true} placeholderText={"Set password"} />
               {/* == 👆 password   ==*/}
               {/* == 👇 confirm password 👇  ==*/}
               <AuthInputs
                  width={smallDevice ? "100%" : "49%"}
                  labelText={"Confirm Password"}
                  inputType={"password"}
                  inputName={"confirmPassword"}
                  inputValue={formData.confirmPassword}
                  onChangeHandler={handleChange}
                  labelInputId={"confirmPassword"}
                  requiredTrue={true}
                  placeholderText={"Confirm password"}
               />
               {/* == 👆 confirm password   ==*/}
               <FormControlLabel
                  label="I Agree to Terms & Conditions."
                  control={<Checkbox checked={agreeTandC} onChange={termsAndCondiChange} inputProps={{ "aria-label": "controlled" }} icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} required />}
                  sx={{
                     mt: 1,
                     "& span": {
                        fontFamily: "Poppins",
                        fontSize: "12px",
                     },
                     "& .MuiSvgIcon-root": {
                        fontSize: "18px",
                     },
                  }}
               />

               <Button
                  disableElevation
                  type="submit"
                  variant="contained"
                  sx={{
                     width: "100%",
                     fontWeight: "600",
                     height: "47px",
                     mt: 1,
                     textTransform: "none",
                     borderRadius: "64px",
                     transition: "all 200ms ease",
                     "&:hover": {
                        scale: "0.99",
                     },
                  }}>
                  Continue
               </Button>
            </Stack>
            <Stack>
               <Typography mt={2} fontWeight={500} sx={{ color: "#4A4A4A", fontSize: "14px", cursor: "pointer", width: "100%", textAlign: "center" }}>
                  or Sign up with
               </Typography>
               <Stack direction={"row"} justifyContent={"space-around"}>
                  <Button
                     disableElevation
                     type="submit"
                     variant="contained"
                     startIcon={<FaFacebookF />}
                     sx={{
                        fontWeight: "600",
                        height: "43px",
                        mt: 2,
                        textTransform: "none",
                        borderRadius: "64px",
                        bgcolor: "white",
                        border: "1px solid #CED4DA",
                        color: "#000",
                        "&:hover": {
                           bgcolor: "#f2f3f5",
                           scale: "0.98",
                        },
                     }}>
                     Facebook
                  </Button>
                  <Button
                     disableElevation
                     type="submit"
                     variant="contained"
                     startIcon={<FcGoogle />}
                     sx={{
                        fontWeight: "600",
                        height: "43px",
                        mt: 2,
                        textTransform: "none",
                        borderRadius: "64px",
                        bgcolor: "white",
                        border: "1px solid #CED4DA",
                        color: "#000",
                        "&:hover": {
                           bgcolor: "#f2f3f5",
                           scale: "0.98",
                        },
                     }}>
                     Google
                  </Button>
               </Stack>
            </Stack>
            {/* <======👆 Form  👆  ======> */}
         </Stack>
         {/* <======👆 container for card content  👆  ======> */}
      </Paper>
   );
};

export default SignUp;
