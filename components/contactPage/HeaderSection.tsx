import { lora, mulish } from "@/app/fonts";
import { contactHeading } from "@/data/contactPage";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

/*
Header section of the contact page.
*/
const HeaderSection = () => {
  return (
    <>
      {/* Grid container to organize layout */}
      <Grid container spacing={2}>
        {/* Grid item for header content */}
        <Grid item xs={12} md={6} lg={4} xl={4}>
          {/* Box container for styling */}
          <Box
            sx={{
              paddingTop: { xs: "25px", sm: "50px", md: "50px" },
              paddingBottom: { xs: "25px", sm: "50px", md: "50px", lg: "50px" },
              marginLeft: { xs: "10px", sm: "15px", md: "30px", lg: "60px" },
            }}
          >
            {/* Title Typography */}
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
              {/* Header title text */}
              {contactHeading.headerTitle}
            </Typography>
            {/* Description Typography */}
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
              {/* Header description text */}
              {contactHeading.headerDescription}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HeaderSection;
