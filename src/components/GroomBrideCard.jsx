import { Box, Typography } from '@mui/material'
import React from 'react'

const GroomBrideCard = () => {
  return (
    <Box sx={{backgroundColor:"#F0D6FF",paddingBlock:"2%", paddingLeft:{
        lg:"30%"
    }}}>
        <Box sx={{

            
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
               "1%"
            } variant='h1'>Happy couple</Typography>

            <Box>
                <Box>
                    <Box sx={{height:{
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
            }}}>
                        <img style={{width:"350px", clipPath:"circle()"}} src='/Assets/otherImages/1.png' alt='groom'/>
                        <Typography variant='h4'>Milind Waghmare</Typography>
                        <Typography variant='p'>Hi I am Milind Waghmare, son of Yashoda and swg. vasantrao waghmare.</Typography>
                        <Typography variant='p'>I am Professional Software Developer</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default GroomBrideCard