import React, { useContext, useEffect, useRef, useState } from "react";
import { Typography, Stack, Grid, TextField, InputAdornment, IconButton, FormControl, Select, OutlinedInput, MenuItem, Button } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SingleQuest from "../SingleQuest/SingleQuest";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import { DataContext } from "../../AppContext";
import { filterData, SearchType } from "filter-data";

const SellerResidentialHome = () => {
   const [quesList, setQuesList] = useState([]);
   const [questionsMilestone, setQuestionsMilestone] = useState("");
   const dragItem = useRef();
   const dragOverItem = useRef();
   const [dragEnable, setDragEnable] = useState(false);
   const { snackbar } = useContext(DataContext);
   const [searchData, setSearchData] = useState("");
   const noOfQues = ["3 Questions per screen", "4 Questions per screen", "5 Questions per screen", "6 Questions per screen"];

   // =================
   const handleSearchChange = (e) => {
      setSearchData(e.target.value);
   };
   // =================

   const searchConditions = [
      {
         key: "question",
         value: searchData,
         type: SearchType.LK,
      },
   ];

   const result = filterData(quesList, searchConditions);

   // ========================================

   const dragStart = (e, position) => {
      dragItem.current = position;
   };
   // ========================================

   const dragEnter = (e, position) => {
      dragOverItem.current = position;
   };
   // ========================================

   const drop = (e) => {
      const copyListItems = [...quesList];
      const dragItemContent = copyListItems[dragItem.current];
      copyListItems.splice(dragItem.current, 1);
      copyListItems.splice(dragOverItem.current, 0, dragItemContent);
      dragItem.current = null;
      dragOverItem.current = null;
      setQuesList(copyListItems);
   };
   // ========================================

   const getSellerResiHomeData = async () => {
      const { data } = await axios.get("/api/v1/admin/seller/residential/home/form");
      // console.log(data.sellerPropertyForm)
      setQuesList(data.sellerPropertyForm);
   };
   // ========================================

   const handleChange = (event) => {
      setQuestionsMilestone(event.target.value);
   };
   // console.log(quesList);

   // ========================================
   const updateListOrder = async () => {
      try {
         const shortData = quesList.map((item, index) => {
            return {
               quesID: item._id,
               quesIndex: index,
            };
         });
         const { data } = await axios.put("/api/v1/admin/shuffle/seller/resihome/form", shortData);
         // console.log('--->', data);
         snackbar(data.status, data.message);
      } catch (error) {
         console.log(error);
      }
   };

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
            //  border:"1px solid green",
            bgcolor: "#ECF2F8",
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
               //  border:"1px solid red"
            }}>
            {/*  <======👇 Table heading (left corner)👇  ======> */}
            <Grid item sm={6} xs={12}>
               <Typography
                  sx={{
                     width: "100%",
                     fontWeight: "600",
                     // padding: "10px",
                     fontSize: "25px",
                     // borderBottom:"4px solid #0D507D",
                     width:"fit-content"
                  }}>
                  Residential Home
               </Typography>
            </Grid>
            {/* <======👆 Table heading (left corner)👆  ======> */}
            {/*  <======👇 SearchBar quickFilter👇  ======> */}
            <Grid item sm={6} xs={12} textAlign={{ sm: "right" }} mt={{ xs: 1, sm: 0 }} boxSizing={"border-box"}>
               <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Search"
                  value={searchData}
                  onChange={handleSearchChange}
                  sx={{
                     p:0,
                     "& .MuiInputBase-root": {
                        bgcolor: "white",
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
               borderRadius: "10px",
               // border:"1px solid red",
               bgcolor: "white",
            }}
            onDragOver={(e) => {
               e.preventDefault();
            }}>
            <Stack
               sx={{
                  width: "100%",
                  borderRadius: "10px",
                  flexDirection: "row",
               }}>
               <FormControl sx={{ width: 300, mb: 1 }}>
                  <Select
                     sx={{
                        "& fieldset": {
                           border: "none",
                        },
                        background: "#EAEFF2",
                        fontWeight: "500",
                        fontSize: "14px",
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

               {!dragEnable ? (
                  <Button
                     size="small"
                     disableRipple
                     variant="text"
                     sx={{
                        p: 0,
                        height: "40px",
                        fontWeight: 600,
                        ml: 2,
                        transition: "all 200ms ease",
                        "&:hover": {
                           background: "transparent",
                        },
                        "&:active": {
                           scale: "0.95",
                        },
                     }}
                     onClick={() => setDragEnable(true)}>
                     <EditIcon sx={{ fontSize: "22px", marginRight: "5px" }} />
                     Edit Questions Order
                  </Button>
               ) : (
                  <Button
                     size="small"
                     disableElevation
                     disableRipple
                     variant="contained"
                     sx={{
                        padding: "0 5px",
                        fontWeight: 600,
                        ml: 2,
                        height: "40px",
                        transition: "all 200ms ease",

                        "&:active": {
                           scale: "0.95",
                        },
                     }}
                     onClick={() => {
                        updateListOrder();
                        setDragEnable(false);
                     }}>
                     Save current Order
                  </Button>
               )}
            </Stack>

            {result.map((item, index) => {
               return <SingleQuest dragEnable={dragEnable} key={item.id} item={item} ques={item.question} dragStart={dragStart} dragEnter={dragEnter} drop={drop} index={index} />;
            })}
         </Stack>
      </Stack>
   );
};

export default SellerResidentialHome;
