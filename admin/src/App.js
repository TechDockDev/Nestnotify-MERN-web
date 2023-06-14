// import { useContext } from "react";
// import { DataContext } from "./AppContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root";
import SignUp from "./components/AuthComponents/SignUp";
import Login from "./components/AuthComponents/Login";
import DashboardRoot from "./components/DashboardRoot/DashboardRoot";
import AdminAccounts from "./components/AdminAccounts/AdminAccounts";

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
            
         ],
      },
   ]);
   // <======👆 Routes👆  ======>

   return <RouterProvider router={router} />;
}

export default App;
