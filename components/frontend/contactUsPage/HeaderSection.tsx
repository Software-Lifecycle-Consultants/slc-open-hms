import { lora, mulish } from "@/app/fonts";
import { contactHeading } from "@/data/contactPage";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { contactSeo } from "@/data/seo";
/*
Header section of the contact page.
*/
const HeaderSection = () => {
  return (
    <>
      {/* Grid container to organize layout */}
      <Grid container spacing={2}
      aria-label={contactSeo.headerSectionAriaLable1}>
        {/* Grid item for header content */}
        <Grid item xs={12} md={6} lg={4} xl={4}>
           {/* Box container for styling */}
          <Box
            sx={{
                 mt: '1.563rem'
                }}
          >
            {/* Title Typography */}
            <Typography
              variant="h2"
              color="#11142D"
              marginTop="22px"
              aria-label={contactSeo.headerSectionAriaLable2}
            >
              {/* Header title text */}
              {contactHeading.headerTitle}
            </Typography>
            <Grid>
            <Box>
            {/* Description Typography */}
            <Typography
              variant="h4"
              color="#11142D"
              marginTop="22px"
              aria-label={contactSeo.headerSectionAriaLable3}
            >
              {/* Header description text */}
              {contactHeading.headerDescription}
            </Typography>
            </Box>
            </Grid>
            </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HeaderSection;
