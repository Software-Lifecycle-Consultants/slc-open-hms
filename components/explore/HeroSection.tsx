import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { heroSection } from "@/data/explorePage";
import { lora, mulish } from "../../app/fonts";

const HeroSection = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ paddingTop: { xs: "25px", sm: "50px", md: "50px" } }}>
            <Typography
              variant="h1"
              className={lora.className}
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: "42px", sm: "50px", md: "55px" },
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
              className={mulish.className}
              sx={{
                color: "#FFFFFF",
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
};

export default HeroSection;
