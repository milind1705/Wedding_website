import { Box, Typography } from '@mui/material'
import React from 'react'

const SaveDate = () => {
  return (
    <Box sx={{backgroundColor:"#F0D6FF",paddingBlock:"2%", paddingLeft:{
        lg:"30%"
    }}}>
        <Box sx={{
            backgroundImage: "url(/Assets/otherImages/heart.png)",
            height:{
                xs:"300px",
                sm:"300px",
                md:"400px",
                lg:"500px"
            },
            width:{
                xs:"100%",
                sm:"100%",
                md:"50%",
                lg:"50%"
            },
            backgroundRepeat:"no-repeat",
            backgroundPosition:"cover",
            backgroundSize:"100% 100%"
        }} justifyContent={"center"}>

            <Typography sx={{
                 fontFamily: "Permanent Marker", 
                 fontWeight: 400,
                 fontStyle: "normal"
            }} fontSize={{
                xs:40,
                sm:40,
                lg:50
            }} color={"#FF0D18"} paddingTop={
               { 
                xs:"20%",
                sm: "20%",
                md:"25%",
                lg:"30%"
            }

            } variant='h1'>Save the date</Typography>

<Typography sx={{
                 fontFamily: "Permanent Marker", 
                 fontWeight: 400,
                 fontStyle: "normal"
            }} fontSize={{
                xs:20,
                sm:20,
                lg:40
            }} color={"#64151B"} paddingTop={"5%"} variant='h1'>03/05/2024</Typography>
        </Box>
    </Box>
  )
}

export default SaveDate