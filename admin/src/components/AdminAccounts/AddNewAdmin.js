import React, { useState } from "react";
import { Stack, Grid, Typography, Button, FormControlLabel, Checkbox } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import SingleInput from "../CommonComponents/SingleInput";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const AddNewAdmin = () => {
   const navigate = useNavigate();
   const [formData, setFormData] = useState({});
   const [superAdmin, setSuperAdmin] = useState(false);
   // <======🍀👇 Handle Change👇 🍀======>
   const handleChange = (e, index) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };
   // <======🍀👆 Handle Change👆 🍀======>
   // <======🍀👇 superAdminChange 👇 🍀======>
   const superAdminChange = (e) => {
      setSuperAdmin(e.target.checked);
   };
   // <======🍀👆 superAdminChange 👆 🍀======>
   // <======🍀👇 Handle Submit👇 🍀======>
   const handleSubmit = (e) => {
      e.preventDefault();
   };
   // <======🍀👆 Handle Submit👆 🍀======>
   return (
      <Stack
         sx={{
            width: "100%",
            minHeight: { xs: `calc(100vh - 88px)`, md: `calc(100vh - 100px)` },
            bgcolor: "white",
            borderRadius: "10px",
         }}>
         {/* <======👇 Heading TOPBAR 👇  ======> */}

         <Grid
            container
            boxSizing={"border-box"}
            width={"100%"}
            sx={{
               justifyContent: "center",
               alignItems: "center",
               padding: "20px 0px",
               borderRadius: "10px",
               //  border:"1px solid red"
            }}>
            {/*  <======👇  heading (left corner)👇  ======> */}
            <Grid item xs={6}>
               <Typography
                  sx={{
                     width: "100%",
                     fontWeight: "600",
                     borderLeft: "4px solid #2298BC",
                     padding: "10px",
                  }}>
                  Add New Admin
               </Typography>
            </Grid>
            <Grid item xs={6} textAlign={"right"}>
               <Button
                  disableElevation
                  variant="contained"
                  size="small"
                  startIcon={<ArrowBackIcon />}
                  sx={{
                     mr: 1,
                     borderRadius: "30px",
                  }}
                  onClick={() => navigate(-1)}>
                  Go Back
               </Button>
            </Grid>
            {/* <======👆  heading (left corner)👆  ======> */}
         </Grid>
         {/* <======👆 Heading TOPBAR 👆  ======> */}
         <Stack paddingX={"20px"} component={"form"} onSubmit={handleSubmit}>
            {/* <======👇 First Name👇  ======> */}
            <SingleInput labelText={"First Name"} inputType={"text"} inputName={"firstName"} inputValue={formData.firstName} onChangeHandler={handleChange} labelInputId={"firstName"} requiredTrue={true} placeholderText={"Enter first name"} />
            {/* <======👆 First Name👆  ======> */}
            {/* <======👇 Last Name👇  ======> */}
            <SingleInput labelText={"Last Name"} inputType={"text"} inputName={"lastName"} inputValue={formData.lastName} onChangeHandler={handleChange} labelInputId={"lastName"} requiredTrue={true} placeholderText={"Enter last name"} />
            {/* <======👆 Last Name👆  ======> */}
            {/* <======👇 Email👇  ======> */}
            <SingleInput labelText={"Email"} inputType={"email"} inputName={"email"} inputValue={formData.email} onChangeHandler={handleChange} labelInputId={"email"} requiredTrue={true} placeholderText={"Enter email"} />
            {/* <======👆 Email👆  ======> */}
            {/* <======👇 Contact Number👇  ======> */}
            <SingleInput labelText={"Contact Number"} inputType={"number"} inputName={"contactNumber"} inputValue={formData.contactNumber} onChangeHandler={handleChange} labelInputId={"contactNumber"} requiredTrue={true} placeholderText={"Contact Number"} />
            {/* <======👆 Contact Number👆  ======> */}
            {/* <======👇 Password 👇  ======> */}
            <SingleInput labelText={"Password"} inputType={"password"} inputName={"password"} inputValue={formData.password} onChangeHandler={handleChange} labelInputId={"password"} requiredTrue={true} placeholderText={"Password"} />
            {/* <======👆 Password 👆  ======> */}
            {/* <======👇 Confirm Password 👇  ======> */}
            <SingleInput labelText={"Confirm Password "} inputType={"password"} inputName={"confirmPassword"} inputValue={formData.confirmPassword} onChangeHandler={handleChange} labelInputId={"confirmPassword"} requiredTrue={true} placeholderText={"Confirm Password"} />
            {/* <======👆 Confirm Password 👆  ======> */}

            {/* <======👇 Super Admin👇  ======> */}

            <FormControlLabel
               label="Super Admin"
               control={<Checkbox checked={superAdmin} onChange={superAdminChange} inputProps={{ "aria-label": "controlled" }} icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} required />}
               sx={{
                  mt: 1,
                  "& span": {
                     fontFamily: "Poppins",
                     fontSize: "16px",
                  },
                  "& .MuiSvgIcon-root": {
                     fontSize: "24px",
                  },
               }}
            />

            {/* <======👆 Super Admin 👆  ======> */}

            <Button
               variant="contained"
               disableElevation
               size="small"
               sx={{
                  marginY: "20px",
                  borderRadius: "8px",
               }}
               type="submit">
               Add Admin
            </Button>
         </Stack>
      </Stack>
   );
};

export default AddNewAdmin;
