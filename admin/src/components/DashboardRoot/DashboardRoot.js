import React from "react";
import AppWrapper from "../CommonComponents/AppWrapper";
import ScreensWrapper from "../CommonComponents/ScreensWrapper";
import { Outlet } from "react-router-dom";
import LeftDrawer from "./LeftDrawer";

const DashboardRoot = () => {
   return (
      <AppWrapper>
        <LeftDrawer/>
         <ScreensWrapper>
            <Outlet />
         </ScreensWrapper>
      </AppWrapper>
   );
};

export default DashboardRoot;
