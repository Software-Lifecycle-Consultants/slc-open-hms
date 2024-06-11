import { Typography } from '@mui/material';
import React from 'react'
import { aboutRoom } from '@/data/roomDetailsPage';
import { lora, mulish } from "../../../app/fonts";

const AboutRoom = () => {
  return (
    <>
      <Typography
        variant="h3"
        className={lora.className}
        style={{
          color: "#11142D",
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
        className={mulish.className}
        sx={{
          color: "#515151",
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
