import { createTheme } from "@material-ui/core";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

const theme = createTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        },
    },
    typography:{
        tab:{
            fontFamily:'Raleway', 
            textTransform: 'none', 
            fontWeight: 500, 
            fontSize:"1rem", 
            color:'white'
        }, 
        estimate:{
            fontFamily: "Pacifico", 
            fontSize: "1rem", 
            textTransform: "none"
        },
        h2:{
            fontFamily: 'Raleway', 
            fontWeight: 700, 
            fontSize: '2.5rem', 
            color: `${arcBlue}` , 
            lineHeight: '1.5'
        }
    }
});

export default theme;

