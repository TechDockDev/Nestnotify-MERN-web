import { useContext, useEffect } from "react";
import { DataContext } from "./AppContext";
import { Route, Routes, redirect } from "react-router-dom";
import SignUp from "./components/AuthComponents/SignUp";
import Login from "./components/AuthComponents/Login";
import axios from "axios";
import HomePage from "./components/HomePage/HomePage";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import QuestionComp from "./components/QuestionComp/QuestionComp";
import { Home } from "@mui/icons-material";

function App() {
   const { snackbar, adminAuthData, setAdminAuthData, isLoggedIn, setIsLoggedIn } = useContext(DataContext);

   // const authHandler = async () => {
   //    try {
   //       const { data } = await axios.get("/api/v1/user/get/profile");
   //       setAdminAuthData(data?.auth);
   //       setIsLoggedIn(true);
   //    } catch (error) {
   //       snackbar("error", error?.response?.data);
   //    }
   // };
   // console.log("isLoggedIn-->", isLoggedIn);

   // useEffect(() => {
   //    authHandler();
   // }, []);

   return (
      <>
         <Routes>
            <Route path="/" element={<TopNavBar />}>
               <Route index element={<QuestionComp />} />
               <Route path="/homepage" element={<HomePage />} />
            </Route>

            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />

         </Routes>
      </>
   );
}

export default App;
