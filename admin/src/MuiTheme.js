import { createTheme } from "@mui/material";

const MuiTheme = createTheme({
   palette: {
      mode: "light",
      primary: {
         main: "#0D507D",
      },
      secondary: {
         main: "#2298BC",
      },
   },
   typography: {
      htmlFontSize: 16,
      fontFamily: ["Montserrat","Poppins","Roboto" ].join(","),
   },
});
export default MuiTheme;
