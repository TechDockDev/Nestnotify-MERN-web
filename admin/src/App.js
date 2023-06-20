// import { useContext } from "react";
// import { DataContext } from "./AppContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root";
import SignUp from "./components/AuthComponents/SignUp";
import Login from "./components/AuthComponents/Login";
import DashboardRoot from "./components/DashboardRoot/DashboardRoot";
import AdminAccounts from "./components/AdminAccounts/AdminAccounts";
import UserAccounts from "./components/UserAccounts.js/UserAccounts";
import SellersQues from "./components/SellersQues/SellersQues";
import BuyersQues from "./components/BuyersQues/BuyersQues";
import RentersQues from "./components/RentersQues/RentersQues";
import LandlordsQues from "./components/LandlordsQues/LandlordsQues";

function App() {
   // const {
   //    snackbar,
   //    adminAuthData,
   //    setAdminAuthData,
   //    isLoggedIn,
   //    setIsLoggedIn,
   // } = useContext(DataContext);

   // <======👇 Routes👇  ======>
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Root />,
         children: [
            {
               index: true,
               element: <Login />,
            },
            {
               path: "/signup",
               element: <SignUp />,
            },
         ],
      },
      {
         path: "/dashboard",
         element: <DashboardRoot />,
         children: [
            {
               path: "admin-accounts",
               element: <AdminAccounts />,
            },
            {
               path: "users-accounts",
               element: <UserAccounts />,
            },
            
            {
               path: "sellers-questionnaire",
               element: <SellersQues />,
            },
            {
               path: "buyers-questionnaire",
               element: <BuyersQues />,
            },
            {
               path: "renters-questionnaire",
               element: <RentersQues />,
            },
            {
               path: "landlords-questionnaire",
               element: <LandlordsQues />,
            },
            
         ],
      },
   ]);
   // <======👆 Routes👆  ======>

   return <RouterProvider router={router} />;
}

export default App;
