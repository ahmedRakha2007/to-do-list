import { Box, Divider, Typography } from "@mui/material";
import "./breadCrumb.css"

function BreadCrumb({handleIsSelected, isSelected}){

  
    return(
        <>
        <Box className="breadCrumb-container">
            <Box className="all-section" onClick={()=>{handleIsSelected("All")}}
            style={isSelected[0].selected? {backgroundColor: "#333333"} : {backgroundColor: "black"} }
                   sx={{
              height:{
                xs: "40px",
                sm: "40px",
                md: "50px",
                lg: "50px",
                xl: "50px",
              }
            }}
            >
                <Typography
                     sx={{       
            fontSize: {
              xs: '15px',   // phones
            sm: '18px', // tablets
            md: '18px',   // small laptops
            lg: '18px', // desktops
            xl: '18px',   // big screens
          }}}
                >All</Typography>
            </Box>

              <Box className="done-section" onClick={()=>{handleIsSelected("Done")}}
            style={isSelected[1].selected? {backgroundColor: "#333333"} : {backgroundColor: "black"} }
                sx={{
              height:{
              xs: "40px",
                sm: "40px",
                md: "50px",
                lg: "50px",
                xl: "50px",
              }
            }}
            >
                <Typography
                       sx={{       
            fontSize: {
              xs: '15px',   // phones
            sm: '18px', // tablets
            md: '18px',   // small laptops
            lg: '18px', // desktops
            xl: '18px',   // big screens
          }}}
                >Done</Typography>
            </Box>
    
              <Box className="notDone-section" onClick={()=>{handleIsSelected("Not Done")}}
            style={isSelected[2].selected? {backgroundColor: "#333333"} : {backgroundColor: "black"} }
                   sx={{
              height:{
                xs: "40px",
                sm: "40px",
                md: "50px",
                lg: "50px",
                xl: "50px",
              }
            }}
            >
                <Typography
                  sx={{       
            fontSize: {
              xs: '15px',   // phones
            sm: '18px', // tablets
            md: '18px',   // small laptops
            lg: '18px', // desktops
            xl: '18px',   // big screens
          }}}
                >Not Done</Typography>
            </Box>
           
        </Box>
        </>
    )
}
export default BreadCrumb;