import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppContext } from "./AppContext";
import { ThemeProvider } from "@emotion/react";
import MuiTheme from "./MuiTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <React.StrictMode>
      <AppContext>
        <ThemeProvider theme={MuiTheme}>
         <App />
        </ThemeProvider>
      </AppContext>
   </React.StrictMode>
);
