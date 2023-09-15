import { Typography } from '@mui/material';
import React from 'react'

const aboutRoom = 
  {
    title: "About President Luxury Double Room View NY City",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit. Fames tincidunt rhoncus viverra eu ut scelerisque. Erat orci scelerisque adipiscing potenti sollicitudin semper aliquam in ultricies. Sem vitae amet, egestas aliquam mi a arcu.Purus diam est vitae faucibus enim. Ultricies nunc vel magnis massa odio. Sed dictumst condimentum sit quis Lorem ipsum dolor sit egestas sed sit. Fames tincidunt rhoncus viverra eu ut sce scelerisque adipiscing potenti in ultricies. Sem vitae amet, egestas aliquam.",
  };

const AboutRoom = () => {
  return (
    <>
          <Typography
            variant="h3"
            style={{
              color: "var(--light-text-color-title, #11142D)",
              fontFamily: "Lora",
              fontSize: "39px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "120%",
              letterSpacing: "0.195px",
            }}
          >
            {aboutRoom.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "var(--light-text-color-body-1, #515151)",
              fontFamily: "Mulish, sans-serif",
              fontSize: "16px",
              lineHeight: "120%",
              fontStyle: "normal",
              letterSpacing: "0.08px",
              fontWeight: "400",
              marginTop: "22px",
            }}
          >
            {aboutRoom.description}
          </Typography>
    </>
  );
}
export default AboutRoom
