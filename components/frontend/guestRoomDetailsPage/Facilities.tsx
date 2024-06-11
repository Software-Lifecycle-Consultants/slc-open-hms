import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { facilitiesSection } from '@/data/roomDetailsPage';
import { facilitiesData } from '@/data/roomDetailsPage';
import { lora, mulish } from "../../../app/fonts";

const Facilities = () => {
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
        {facilitiesSection.facilitiesSectionTitle}
      </Typography>
      <Typography
        variant="body1"
        className={mulish.className}
        sx={{
          color: "#515151",
          fontSize: "16px",
          lineHeight: "125%",
          fontStyle: "normal",
          letterSpacing: "0.08px",
          fontWeight: "400",
          marginTop: "15px",
          marginBottom: "35px",
        }}
      >
        {facilitiesSection.facilitiesSectionDescription}
      </Typography>

      <Grid container spacing={2}>
        {facilitiesData.map((item) => (
          <Grid key={item.id} item xs={6} md={4}>
            <Box sx={{ display: "flex" }}>
              <CheckBoxIcon sx={{ fontSize: 30, color: "#9A9AB0" }} />
              <Typography
                variant="body1"
                className={mulish.className}
                style={{
                  color: "#9A9AB0",
                  fontSize: "16px",
                  lineHeight: "125%",
                  fontStyle: "normal",
                  letterSpacing: "0.08px",
                  fontWeight: "400",
                  marginTop: "5px",
                  marginLeft: "10px",
                }}
              >
                {item.facilityName}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Facilities
