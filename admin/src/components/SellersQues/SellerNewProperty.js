import React, { useEffect, useRef, useState } from "react";
import { Typography, Stack, Grid, TextField, InputAdornment, IconButton, FormControl, Select, OutlinedInput, MenuItem, Button } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SingleQuest from "../SingleQuest/SingleQuest";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
const SellerNewProperty = () => {
   const [quesList, setQuesList] = useState([]);
   const [questionsMilestone, setQuestionsMilestone] = useState("");
   const dragItem = useRef();
   const dragOverItem = useRef();

   const noOfQues = ["3 Questions per screen", "4 Questions per screen", "5 Questions per screen", "6 Questions per screen"];

   const dragStart = (e, position) => {
      dragItem.current = position;

      console.log("positon.start.", position);
   };

   const dragEnter = (e, position) => {
      dragOverItem.current = position;
      console.log("positon. enter.", position);
   };

   const drop = (e) => {
      const copyListItems = [...quesList];
      const dragItemContent = copyListItems[dragItem.current];
      copyListItems.splice(dragItem.current, 1);
      copyListItems.splice(dragOverItem.current, 0, dragItemContent);
      dragItem.current = null;
      dragOverItem.current = null;
      setQuesList(copyListItems);
   };

   const getSellerResiHomeData = async () => {
      const { data } = await axios.get("/api/v1/admin/seller/property/form");
      // console.log(data.sellerPropertyForm)
      setQuesList(data.sellerPropertyForm);
   };

   const handleChange = (event) => {
      setQuestionsMilestone(event.target.value);
   };
   console.log(questionsMilestone);

   useEffect(() => {
      getSellerResiHomeData();
   }, []);

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
            {/*  <======👇 Table heading (left corner)👇  ======> */}
            <Grid item sm={6} xs={12}>
               <Typography
                  sx={{
                     width: "100%",
                     fontWeight: "600",
                     borderLeft: "4px solid #2298BC",
                     padding: "10px",
                  }}>
                  New Property Form
               </Typography>
            </Grid>
            {/* <======👆 Table heading (left corner)👆  ======> */}
            {/*  <======👇 SearchBar quickFilter👇  ======> */}
            <Grid item sm={6} xs={12} textAlign={{ sm: "right" }} mt={{ xs: 1, sm: 0 }} boxSizing={"border-box"}>
               <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Search"
                  sx={{
                     marginX: "10px",
                     "& .MuiInputBase-root": {
                        borderRadius: "30px",
                     },
                  }}
                  InputProps={{
                     startAdornment: (
                        <InputAdornment position="start">
                           <IconButton onClick={() => {}} edge="start">
                              <SearchOutlinedIcon />
                           </IconButton>
                        </InputAdornment>
                     ),
                  }}
               />
            </Grid>
            {/* <======👆 SearchBar quickFilter👆  ======> */}
         </Grid>
         {/* <======👆 Heading TOPBAR 👆  ======> */}
         <Stack
            sx={{
               padding: "15px",
            }}
            onDragOver={(e) => {
               e.preventDefault();
            }}>
            <Stack
               sx={{
                  width: "100%",
                  flexDirection: "row",
               }}>
               <FormControl sx={{ width: 300, mb: 1 }}>
                  <Select
                     sx={{
                        "& fieldset": {
                           border: "none",
                        },
                        background: "#EAEFF2",
                        fontWeight:"500"
                     }}
                     size="small"
                     displayEmpty
                     value={questionsMilestone}
                     onChange={handleChange}
                     input={<OutlinedInput />}
                     renderValue={(selected) => {
                        if (selected.length === 0) {
                           return <em>Questions Milestone</em>;
                        }

                        return selected;
                     }}
                     // MenuProps={MenuProps}
                     inputProps={{ "aria-label": "Without label" }}>
                     <MenuItem disabled value="">
                        <em>Questions Milestone</em>
                     </MenuItem>
                     {noOfQues.map((qty, index) => (
                        <MenuItem key={index} value={qty}>
                           {qty}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>

               <Button size="small" e variant="text" sx={{
                  fontWeight:600,
                  ml:2,
                  "& svg":{
                     fontSize:"25px"
                  },
                  "&:hover":{
                     background:"transparent"
                  },

               }}  startIcon={<EditIcon/>}>
                  Edit Question Order
               </Button>
            </Stack>

            {quesList.map((item, index) => {
               return <SingleQuest key={item.id} item={item} ques={item.question} dragStart={dragStart} dragEnter={dragEnter} drop={drop} index={index} />;
            })}
         </Stack>
      </Stack>
   );
};

export default SellerNewProperty;
