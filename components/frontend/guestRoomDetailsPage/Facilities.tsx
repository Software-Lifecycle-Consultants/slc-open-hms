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
        fontSize="39px"
        color= "#11142D"
          fontStyle= "normal"
          fontWeight= "700"
          lineHeight="120%"
          letterSpacing= "0.195px"
          fontFamily="Mulish"
      >
        {facilitiesSection.facilitiesSectionTitle}
      </Typography>
      <Typography
          variant="h4"
          marginTop= "15px"
          marginBottom= "25px"
      >
        {facilitiesSection.facilitiesSectionDescription}
      </Typography>
      <Grid container spacing={2}>
        {facilitiesData.map((item) => (
          <Grid key={item.id} item xs={6} md={4}>
            <Box sx={{ display: "flex" }}>
              <CheckBoxIcon sx={{ fontSize: 30, color: "#9A9AB0" }} />
              <Typography
                variant="h4"
                marginTop= "5px"
                marginLeft="10px"
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
