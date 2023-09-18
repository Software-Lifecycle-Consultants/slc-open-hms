import { Typography } from '@mui/material';
import React from 'react'
import { aboutRoom } from '@/data/roomDetailsPage';

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
        {aboutRoom.roomTitle}
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
        {aboutRoom.roomDescription}
      </Typography>
    </>
  );
}
export default AboutRoom
