import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import RoomCard from './RoomCard';

const SimilarRooms = () => {
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
        Similar Rooms
      </Typography>
      <Typography
        variant="body1"
        sx={{
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
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit
        sed pretium, egestas sed sit.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <RoomCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <RoomCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <RoomCard />
        </Grid>
      </Grid>
    </>
  );
}

export default SimilarRooms
