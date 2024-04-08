import { Box, Typography } from '@mui/material'
import React from 'react'

const GroomBrideCard = () => {
  return (
    <Box sx={{backgroundColor:"#F0D6FF",paddingBlock:"2%", }}>
        <Box sx={{

            paddingLeft:{
                lg:"30%"
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
               "1%"
            } variant='h1'>Happy couple</Typography>

        </Box>
            <Box>
                <Box sx={{display:"flex", flexDirection:{
                      xs:"column",
                      sm:"column",
                      md:"row",
                      lg:"row"
                }, justifyContent:"space-between"}}>
                <Box sx={{height:{
                            xs:"500px",
                            sm:"500px",
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
                        <Typography variant='p'>Hi I am Milind, son of Shrimati Yashoda and Late vasantrao waghmare.</Typography>
                        <Typography variant='p'>I am Professional Software Developer</Typography>
                    </Box>
                    <Box sx={{height:{
                            xs:"350px",
                            sm:"400px",
                            md:"400px",
                            lg:"500px"
                        },
                        width:{
                            xs:"100%",
                            sm:"100%",
                            md:"50%",
                            lg:"50%"
                        }}}>
                        <img style={{width:"350px"}} src='/Assets/otherImages/twoheart.png' alt='groom'/>
                       </Box>
                   

                    <Box sx={{height:{
                            xs:"500px",
                            sm:"500px",
                            md:"400px",
                            lg:"500px"
                        },
                        width:{
                            xs:"100%",
                            sm:"100%",
                            md:"50%",
                            lg:"50%"
                        }}}>
                        <img style={{width:"350px", clipPath:"circle()"}} src='/Assets/otherImages/2.png' alt='groom'/>
                        <Typography variant='h4'>Pratibha Talmale</Typography>
                        <Typography variant='p'>Hi I am Pratibha, daughter of Sau. Vanita and Shree. Rambhau Talmale. </Typography>
                        <Typography variant='p'>I am Agriculturist</Typography>
                    </Box>
                </Box>
            </Box>
    </Box>
  )
}

export default GroomBrideCard