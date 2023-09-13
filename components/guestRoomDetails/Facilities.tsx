import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const data = [
  { id: 1, name: "Insurance" },
  { id: 2, name: "Cleaning Services" },
  { id: 3, name: "Swimming Pool" },
  { id: 4, name: "Wifi" },
  { id: 5, name: "Parking Area" },
  { id: 6, name: "Restaurant" },
  { id: 7, name: "24 Hours Front Desk" },
  { id: 8, name: "Spa" },
  { id: 9, name: "Elevator" },
  { id: 10, name: "AC" },
  { id: 11, name: "Wheelchair Access" },
  { id: 12, name: "Meeting Facilities" },
];

const Facilities = () => {
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
        Hotels Facilities
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
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit
        sed pretium, egestas sed sit.
      </Typography>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid key={item.id} item xs={6} md={4}>
            <Box sx={{ display: "flex" }}>
              <CheckBoxIcon sx={{ fontSize: 34, color: "#9A9AB0" }} />
              <Typography
                variant="body1"
                style={{
                  color: "var(--light-text-color-body-2, #9A9AB0)",
                  fontFamily: "Mulish, sans-serif",
                  fontSize: "16px",
                  lineHeight: "125%",
                  fontStyle: "normal",
                  letterSpacing: "0.08px",
                  fontWeight: "400",
                  marginTop: "7px",
                  marginLeft: "10px"
                }}
              >
                {item.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Facilities
