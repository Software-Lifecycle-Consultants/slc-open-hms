import { Typography } from '@mui/material';
import React from 'react'
import { aboutRoom } from '@/data/roomDetailsPage';
import { lora, mulish } from "../../../app/fonts";

const AboutRoom = () => {
  return (
    <>
      <Typography variant='h5'color= "#11142D" fontSize= "39px" 
      sx={{'@media (max-width:600px)': {
                fontSize: '1.5rem',
                fontWeight:'700',
              },}}
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
