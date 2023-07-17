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
         defaultProps: {
            margin: "dense",
            shrink: true,
            disableAnimation: true,
         },
         styleOverrides: {
            root: {
               fontWeight: 500,
               transform: "none",
               position: "static",
               color: "'#333333",
            }
         }
      },
      MuiRadio: {
         size: 'small',
      },
      MuiSwitch: {
         size: 'small',
      },
      MuiTextField: {
         defaultProps: {
            margin: "dense",
            shrink: true,
            disableAnimation: true,
            color: "secondary",
         },
         styleOverrides: {
            root: {
               fontWeight: 500,
               transform: "none",
               position: "static",
               "& .MuiInputBase-root": {
                  border: "1px solid grey",
                  "&:focused": {
                     border: "1px solid #0D507D",
                  }
               },
               "& .Mui-focused fieldset": {
                  border: 'none',
                  outline: 'none',
               },
            }
         }

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
