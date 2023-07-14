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
      fontFamily: ["Montserrat", "Poppins", "Roboto"].join(","),
   },
   components: {
      MuiButton: {
         defaultProps: {
            size: 'small',
            variant: "contained",
            sx: {
               display: 'flex',
               padding: '12px',
               justifyContent: 'center',
               alignItems: 'center',
               borderRadius: '64px'
            }
         }
      },
      MuiButtonGroup: {
         size: 'small',
      },
      MuiCheckbox: {
         size: 'small',
      },
      MuiFab: {
         size: 'small',
      },
      MuiFormControl: {
         margin: 'dense',
         size: 'small',
      },
      MuiFormHelperText: {
         margin: 'dense',
      },
      MuiIconButton: {
         size: 'small',
      },
      MuiInputBase: {
         margin: 'dense',
      },
      MuiInputLabel: {
         margin: 'dense',
      },
      MuiRadio: {
         size: 'small',
      },
      MuiSwitch: {
         size: 'small',
      },
      MuiTextField: {
         margin: 'dense',
         size: 'small',
      },
      MuiList: {
         dense: true,
      },
      MuiMenuItem: {
         dense: true,
      },
      MuiTable: {
         size: 'small',
      },
      MuiButtonBase: {
         disableRipple: true,
      },
   }
});
export default MuiTheme;
