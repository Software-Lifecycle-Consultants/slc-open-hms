"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {  Blog2 } from "../../data/homePage";
import { lora } from "../../app/fonts";



/* Typography style for heading 1 */
const typographyh1Style = {
  color: "#FFFFFF",
   fontFamily: "inter",
  fontSize: { xs: "45px", sm: "70px", md: "70px" }, // Adjust font size for different screen sizes
  lineHeight: "125%",
  fontStyle: "normal",
  letterSpacing: "-3.2px",
  fontWeight: "700",
  marginTop: "15px",
};

/* Typography style for body text */
const typographyBody1Style = {
  color: "rgba(255, 255, 255, 0.70)",
  fontSize: { xs: "16px", sm: "20px", md: "20px" }, // Adjust font size for different screen sizes
  lineHeight: "35px",
  fontStyle: "normal",
  letterSpacing: "-0.96px",
  fontWeight: "400",
  marginTop: "15px",
};

/* Button style for contained variant */
const buttonContainedStyle = {
  marginTop: "20px",
  marginBottom: "20px",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
  borderRadius: "100px",  
  textTransform: "none",
  fontWeight: "bold",
  color: "#0C111F",
  background: "var(--l-2, linear-gradient(135deg, #F9EC7D 0%, #F5B100 100%))",
  // Customize sizes for web and tablet view
  "@media (max-width: 1024px)": {
    padding: "12px 18px",
  },
  // Customize sizes for mobile view
  "@media (max-width: 767px)": {
    fontSize: "12px",
    padding: "8px 12px",
    margin: "3px",
  },
};


/* contactNow Banner functional component */
const ContactNow = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        {/* Left side of the contactNow banner */}
        <Grid item xs={12} md={6}>
          {/* Heading 1 */}
          <Typography
            variant="h3"
            className={lora.className}
            sx={typographyh1Style}
          >
            {Blog2.contactSubTitle}
          </Typography>
          {/* Body text */}
          <Typography variant="body1" sx={typographyBody1Style}>
            {Blog2.contactDescription}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row", // Adjust the layout for different screen sizes
              alignItems: "center",
            }}
          >
            {/* Button with icon for web and tablet view */}
            <Button href="/contact-us" variant="contained" sx={buttonContainedStyle}>
              {Blog2.contactCaption}
              {/* Arrow icon */}
              <Box
                sx={{
                  backgroundColor: "#0C111F",
                  width: "32px",
                  height: "32px",
                  borderRadius: "58px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <KeyboardArrowRightIcon sx={{ color: "#FFFFFF" }} />
              </Box>
            </Button>
            
          </Box>
        </Grid>
        {/* Right side of the contactNow - vedio */}
        <Grid item xs={12} md={6}>
        <iframe  
        frameBorder="0"
        src={Blog2.contactVedioLink}
      
        style={{ width: "100%",
        height: "280px",
        flexShrink: 0,
         
        }}>
       
      </iframe>
         
        </Grid>
      </Grid>
    </>
  );
};

export default ContactNow;


