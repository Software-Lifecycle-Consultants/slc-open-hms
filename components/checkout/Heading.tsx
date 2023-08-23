import React from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const Heading = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                  
      <Typography
        variant="h1"
        style={{
          color: "var(--light-text-color-title, #11142D)",
          fontFamily: "Lora",
          fontSize: "62px",
          lineHeight: "120%",
          fontStyle: "normal",
          letterSpacing: "0.186px",
          fontWeight: "700",
          marginTop: "25px",
        }}
      >
        Book Now
      </Typography>
      <Typography
        variant="body2"
        style={{
          color: "var(--light-text-color-body-1, #515151);",
          fontFamily: "Mulish",
          fontSize: "16px",
          lineHeight: "125%",
          fontStyle: "normal",
          fontWeight: "400",
          letterSpacing: "0.08px",
          marginTop: "10px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit
        sed pretium, egestas sed sit orem ipsum dolor sit amet,
      </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Heading
