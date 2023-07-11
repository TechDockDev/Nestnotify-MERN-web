import React, { useEffect, useRef, useState } from "react";
import { Typography, Stack, Grid, TextField, InputAdornment, IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SingleQuest from "../SingleQuest/SingleQuest";
import axios from "axios";

const SellerCommercial = () => {

   // const [quesList, setQuesList] = useState([
   //    { id: 1, ques: "Hi" },
   //    { id: 2, ques: "Hello" },
   //    { id: 3, ques: "Bye" },
   // ]);

   const [quesList, setQuesList] = useState([]);
   


   const dragItem = useRef();
   const dragOverItem = useRef();

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



   const getSellerResiHomeData = async() =>{
      const { data } = await axios.get("/api/v1/admin/seller/commercial/form");
      // console.log(data.sellerPropertyForm)
      setQuesList(data.sellerPropertyForm)
   }

   useEffect(()=>{
      getSellerResiHomeData() 
   },[])


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

Commercial / Industrial

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
         <Stack sx={{
            padding:"15px"
         }}
         onDragOver={(e)=>{
            e.preventDefault()
         }}
         >
            {quesList.map((item, index) => {
               return <SingleQuest key={item.id} item={item} ques={item.question} dragStart={dragStart} dragEnter={dragEnter} drop={drop} index={index} />;

            })}
         </Stack>
      </Stack>
   );
};

export default SellerCommercial;
