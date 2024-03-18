"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {  Blog2 } from "../../data/homePage";
import { lora } from "../../app/fonts";
//import styles from styles.js file
import { typographyh1Style, typographyBody1Style, buttonContainedStyle } from './styles';


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
            {Blog2.contactNowTitle}
          </Typography>
          {/* Body text */}
          <Typography variant="body1" sx={typographyBody1Style}>
            {Blog2.contactNowDescription}
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
              {Blog2.contactNowCaption}
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
        src={Blog2.contactNowVedioLink}
      
        style={{ width: "100%",
        height: "320px",
        flexShrink: 0,
        borderRadius: "20px",
         
        }}>
       
      </iframe>
         
        </Grid>
      </Grid>
    </>
  );
};

export default ContactNow;


