import { Grid, Typography } from '@mui/material';
import React from 'react'
import RoomCard from './RoomCard';
import { roomsData } from '@/data/roomDetailsPage';
import { similarRoomsDetails } from '@/data/roomDetailsPage';

const titleStyle = {
  color: "var(--light-text-color-title, #11142D)",
  fontFamily: "Lora",
  fontSize: "39px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "120%",
  letterSpacing: "0.195px",
};

const descriptionStyle = {
  color: "var(--light-text-color-body-1, #515151)",
  fontFamily: "Mulish, sans-serif",
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
      <Typography variant="h3" sx={titleStyle}>
        {similarRoomsDetails.similarRoomsDetailsTitle}
      </Typography>
      <Typography variant="body1" sx={descriptionStyle}>
        {similarRoomsDetails.similarRoomsDetailsDescription}
      </Typography>

      <Grid container spacing={2}>
        {roomsData.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <RoomCard
              image={item.roomImage}
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
