import { Typography } from '@mui/material';
import React from 'react'
import { aboutRoom } from '@/data/roomDetailsPage';
import { lora, mulish } from "../../../app/fonts";

const AboutRoom = () => {
  return (
    <>
      <Typography
        style={{
          color: "#11142D",
          fontFamily:"Mulish",
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
        variant="h4"
        color="#515151"
        marginTop="22px"
      >
        {aboutRoom.roomDescription}
      </Typography>
    </>
  );
}
export default AboutRoom
