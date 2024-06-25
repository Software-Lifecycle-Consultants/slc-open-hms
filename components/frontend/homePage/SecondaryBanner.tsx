"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Blog2 } from "../../../data/homePage";
import { lora } from "../../../app/fonts";
//import styles from styles.js file
import {
  typographyh1Style,
  typographyBody1Style,
  buttonContainedStyle,
} from "./styles";

/* contactNow Banner functional component */
const ContactNowBanner = () => {
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
          <Typography variant="h1" color={"white"} fontSize={"4rem"}>
            {Blog2.contactNowTitle}
          </Typography>
          {/* Body text */}
          <Typography variant="h4">{Blog2.contactNowDescription}</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row", // Adjust the layout for different screen sizes
              alignItems: "center",
            }}
          >
            {/* Button with icon for web and tablet view */}
            <Button
              href="/contact-us"
              variant="contained"
              sx={{
                borderRadius: "6.25rem",
                background:
                  "var(--l-2, linear-gradient(135deg, #F9EC7D 0%, #F5B100 100%))",
                fontWeight: 600,
                gap: "0.625rem",
                marginTop: "25px",
              }}
            >
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
            style={{
              width: "100%",
              height: "320px",
              flexShrink: 0,
              borderRadius: "20px",
            }}
          ></iframe>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactNowBanner;
