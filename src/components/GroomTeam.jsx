import React from 'react'
import {Box, Typography, Card, CardContent, CardActions} from '@mui/material';

const GroomTeam = () => {
  return (
    <Box padding={2} >
        <Typography>Groom's Family</Typography>
         <Card sx={{ minWidth: 275, maxWidth:300, }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Mother
        </Typography>
        <img style={{width:"200px", clipPath:"circle()"}} src='/Assets/otherImages/twoheart.png' alt='groom'/>
        <Typography variant="body2">
          Yashoda Waghmare
        </Typography>
      </CardContent>
      
    </Card>
    </Box>
  )
}

export default GroomTeam