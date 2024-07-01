import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { heroSection } from "@/data/explorePage";
import { lora, mulish } from "../../../app/fonts";
import { themeClient } from "@/styles/Theme";

const HeroSection = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ paddingTop: { xs: "25px", sm: "50px", md: "50px" } }}>
            <Typography
              variant="h2" color= {themeClient.palette.secondary.main}          
            >
              {heroSection.exploreSectionTitle}
            </Typography>
            <Typography
              variant="h4"              
            >
              {heroSection.exploreSectionDescription}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HeroSection;
