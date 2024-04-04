import { Favorite, Margin } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
   <Box sx={{backgroundColor: "#ff99dd", width:"100%", position:"sticky", zIndex:1}} >
    <NameLogo />
   </Box>
  )
}

const NameLogo = ()=>{
    return(
    <Box  sx={{maxWidth:{
        xs:"100%",
        sm:"100%",
        md:"50%",
        lg:"25%",
        xl:"10%"
    }, marginY:"auto"}} >
        <Box display={"flex"} justifyContent={"space-between"} sx={{padding:"2%"}}>

        <Typography fontFamily={"revert-layer"} variant='h3' color={"whitesmoke"} sx={{fontFamily: "Lily Script One",
  fontWeight: 200,
  fontStyle: "normal"}}>
            Milind
        </Typography>
        <Favorite  sx={{fontSize:"40px", color:"red", paddingTop:"2%", marginX:{
        xs:0,
        sm:0,
        md:1,
        lg:1,
        xl:1
    }}} />
        <Typography fontFamily={"revert-layer"} color={"whitesmoke"} variant='h3' sx={{fontFamily: "Lily Script One",
            fontWeight: 400,
            fontStyle: "normal"}}>
            Pratibha
        </Typography>
        </Box>

    </Box>
    )
}

export default Navbar