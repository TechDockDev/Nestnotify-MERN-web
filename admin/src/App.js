import { useContext } from "react";
import { DataContext } from "./AppContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root";
import SignUp from "./components/AuthComponents/SignUp";
import Login from "./components/AuthComponents/Login";
function App() {
   const {
      // snackbar,
      // adminAuthData,
      // setAdminAuthData,
      // isLoggedIn,
      // setIsLoggedIn,
   } = useContext(DataContext);

   // <======👇 Routes👇  ======>
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Root />,
         loader: "",
         children: [
            {
               path: "",
               element: <Login />,
               loader: "",
            },
            {
               path: "signup",
               element: <SignUp />,
               loader: "",
            },
         ],
      },
   ]);
   // <======👆 Routes👆  ======>

   return <RouterProvider router={router} />;
}

export default App;
