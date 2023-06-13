import { Button, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Heading from "./Heading";
import { NavLink } from "react-router-dom";
import AuthInputs from "./AuthInputs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
   const [formData, setFormData] = useState({
      email: "",
      password: "",
   });

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
            maxWidth: "460px",
            height: "498px",
            padding: { xs: "20px", sm: "30px" },
            boxSizing: "border-box",
            borderRadius: "20px",
         }}>
         <Heading>Sign in</Heading>
         <Typography mt={2} fontWeight={500} sx={{ "& a": { color: "#0D507D", textDecoration: "none", "&:hover": { textDecoration: "underline" } } }}>
            New User?
            <NavLink to="signup"> Create an account</NavLink> {/* == 👇 email 👇  ==*/}
         </Typography>
         <Stack component={"form"}>
            <AuthInputs labelText={"Email"} inputType={"email"} inputName={"email"} inputValue={formData.email} onChangeHandler={handleChange} labelInputId={"email"} requiredTrue={true} placeholderText={"Enter your email"} />
            {/* == 👆 email   ==*/}
            {/* == 👇 password 👇  ==*/}
            <AuthInputs labelText={"Password"} inputType={"password"} inputName={"password"} inputValue={formData.password} onChangeHandler={handleChange} labelInputId={"password"} requiredTrue={true} placeholderText={"Set Password"} />
            {/* == 👆 password   ==*/}

            <Typography mt={2} fontWeight={500} sx={{ color: "#0D507D", fontSize: "14px", cursor: "pointer", width: "100%", textAlign: "right" }}>
               Forgot Password?
            </Typography>

            <Button
               disableElevation
               type="submit"
               variant="contained"
               sx={{
                  fontWeight: "600",
                  height: "47px",
                  mt: 2,
                  textTransform: "none",
                  borderRadius: "64px",
                  transition: "all 200ms ease",
                  "&:hover": {
                     scale: "0.99",
                  },
               }}>
               Login
            </Button>
            <Typography mt={2} fontWeight={500} sx={{ color: "#4A4A4A", fontSize: "14px", cursor: "pointer", width: "100%", textAlign: "center" }}>
               or continue with
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
      </Paper>
   );
};

export default Login;
