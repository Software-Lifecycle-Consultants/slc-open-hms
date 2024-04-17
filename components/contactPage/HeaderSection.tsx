import { lora, mulish } from "@/app/fonts";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const HeaderSection = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              paddingTop: { xs: "25px", sm: "50px", md: "50px" },
              paddingBottom: { xs: "25px", sm: "50px", md: "50px", lg: "50px" },
            }}
          >
            <Typography
              variant="h1"
              className={lora.className}
              sx={{
                color: "#11142D",
                fontSize: { xs: "42px", sm: "50px", md: "55px" },
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "120%",
                letterSpacing: "0.186px",
              }}
            >
              Get in touch
            </Typography>
            <Typography
              variant="body1"
              className={mulish.className}
              sx={{
                color: "#515151",
                fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "16px" },
                lineHeight: "125%",
                fontStyle: "normal",
                letterSpacing: "0.08px",
                fontWeight: "400",
                marginTop: "22px",
              }}
            >
              Need assistance or have questions? Get in Touch to our friendly
              team. Were here to help make your experience seamless and
              enjoyable.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HeaderSection;
