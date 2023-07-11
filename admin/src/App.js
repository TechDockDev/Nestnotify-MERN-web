import { useContext, useEffect } from "react";
import { DataContext } from "./AppContext";
import { Route, RouterProvider, Routes, createBrowserRouter, redirect } from "react-router-dom";
import Root from "./components/Root/Root";
import SignUp from "./components/AuthComponents/SignUp";
import Login from "./components/AuthComponents/Login";
import DashboardRoot from "./components/DashboardRoot/DashboardRoot";
import AdminAccounts from "./components/AdminAccounts/AdminAccounts";
import UserAccounts from "./components/UserAccounts.js/UserAccounts";
import BuyersQues from "./components/BuyersQues/BuyersQues";
import RentersQues from "./components/RentersQues/RentersQues";
import LandlordsQues from "./components/LandlordsQues/LandlordsQues";
import axios from "axios";
import SellerResidentialHome from "./components/SellersQues/SellerResidentialHome";
import SellerResidentialCondo from "./components/SellersQues/SellerResidentialCondo";
import SellerCommercial from "./components/SellersQues/SellerCommercial";
import SellerLandLot from "./components/SellersQues/SellerLandLot";
import AddNewAdmin from "./components/AdminAccounts/AddNewAdmin";
import Contactqueries from "./components/ContactQueries/Contactqueries";

function App() {
   const { snackbar, adminAuthData, setAdminAuthData, isLoggedIn, setIsLoggedIn } = useContext(DataContext);

   const authHandler = async () => {
      try {
         const { data } = await axios.get("api/v1/super/admin/get/profile/data");
         console.log(data)
         setAdminAuthData(data?.auth);
         setIsLoggedIn(true);
      } catch (error) {
         snackbar("error", error?.message);
      }
   };
   // console.log("isLoggedIn-->", isLoggedIn);

   useEffect(() => {
      authHandler();
   }, []);

   return (
      <>
         <Routes>
            <Route path="/" element={<Root />}>
               <Route index element={<Login />} />
               <Route path="/signup" element={<SignUp />} />
            </Route>
            <Route path="/dashboard" element={<DashboardRoot />}>
               <Route path="admin-accounts" element={<AdminAccounts />}/>
               <Route path="admin-accounts/add-new-admin" element={<AddNewAdmin />} />
               <Route path="users-accounts" element={<UserAccounts />} />
               <Route path="sellers-questionnaire/residential-home" element={<SellerResidentialHome />} />
               <Route path="sellers-questionnaire/residential-condo" element={<SellerResidentialCondo />} />
               <Route path="sellers-questionnaire/commercial" element={<SellerCommercial />} />
               <Route path="sellers-questionnaire/land" element={<SellerLandLot />} />
               <Route path="contact-form" element={<Contactqueries/>}/>
            </Route>
         </Routes>
      </>
   );
}

export default App;


