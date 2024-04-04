import { Box } from '@mui/material'
import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade, Slide } from 'react-slideshow-image';

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '40vh'
  }
  const fadeImages = [
    {
      url: '/Assets/Sliders/image1.jpeg',
      
    },
    {
      url: '/Assets/Sliders/image2.jpeg',
      caption: 'Slide 2'
    },
    {
      url: '/Assets/Sliders/image3.jpeg',
      caption: 'Slide 3'
    },
  ];
  
  const Slideshow = () => {
      return (
        <div className="slide-container">
            <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%' }} src={fadeImage.url} />
            {/* <h2>{fadeImage.caption}</h2> */}
          </div>
        ))}
      </Fade>
        </div>
      )
  }

export default Slideshow