import { Grid, Typography } from '@mui/material';
import React from 'react'
import RoomCard from './RoomCard';
import { roomsData } from '@/data/roomDetailsPage';
import { similarRoomsDetails } from '@/data/roomDetailsPage';
import { lora, mulish } from "../../app/fonts";

const titleStyle = {
  color: "#11142D",
  fontSize: "39px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "120%",
  letterSpacing: "0.195px",
};

const descriptionStyle = {
  color: "var(#515151",
  fontSize: "16px",
  lineHeight: "125%",
  fontStyle: "normal",
  letterSpacing: "0.08px",
  fontWeight: "400",
  marginTop: "15px",
  marginBottom: "35px",
  width: { xs: "none", sm: "504px", md: "504px" },
};

const SimilarRooms = () => {
  return (
    <>
      <Typography variant="h3" className={lora.className} sx={titleStyle}>
        {similarRoomsDetails.similarRoomsDetailsTitle}
      </Typography>
      <Typography
        variant="body1"
        className={mulish.className}
        sx={descriptionStyle}
      >
        {similarRoomsDetails.similarRoomsDetailsDescription}
      </Typography>

      <Grid container spacing={2}>
        {roomsData.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <RoomCard
              image={item.roomCoverImage}
              roomName={item.roomName}
              price={item.price}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default SimilarRooms
