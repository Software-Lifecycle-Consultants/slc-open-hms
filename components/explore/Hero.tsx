import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import { heroSection } from '@/data/explorePage';

const Hero = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ paddingTop: { xs: "112px", sm: "150px", md: "150px" } }}>
            <Typography
              variant="h1"
              sx={{
                color: "#FFFFFF",
                fontFamily: "Lora",
                fontSize: "62px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "120%",
                letterSpacing: "0.186px",
              }}
            >
              {heroSection.exploreSectionTitle}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                fontFamily: "Mulish, sans-serif",
                fontSize: "16px",
                lineHeight: "125%",
                fontStyle: "normal",
                letterSpacing: "0.08px",
                fontWeight: "400",
                marginTop: "22px",
              }}
            >
              {heroSection.exploreSectionDescription}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Hero
