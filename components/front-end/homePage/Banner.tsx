"use client";
import {
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import mainImage from "@/public/images/homePage/heroSectionImage/mainImage.webp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { bannerDetails } from "../../../data/homePage";
import { lora } from "../../../app/fonts";
import * as React from "react";

import { useRouter } from "next/navigation";

import {
  typographyh5Style,
  typographyh1Style,
  typographyBody1Style,
  buttonContainedStyle,
  buttonTextStyle,
} from "./styles";



/* Banner functional component */
const Banner = () => {

  const router = useRouter();


  const navigationToExplore = () => {
    router.push("/explore");
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {/* Left side of the banner */}
        <Grid item xs={12} md={6}>
          {/* Heading 5 */}
          <Typography variant="h5" sx={typographyh5Style}>
            {bannerDetails.bannerTitle}
          </Typography>
          {/* Heading 1 */}
          <Typography
            variant="h1"
            className={lora.className}
            sx={typographyh1Style}
          >
            {bannerDetails.bannerSubTitle}
          </Typography>
          {/* Body text */}
          <Typography variant="body1" sx={typographyBody1Style}>
            {bannerDetails.bannerDescription}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row", // Adjust the layout for different screen sizes
              alignItems: "center",
            }}
          >
            {/* Button with icon for web and tablet view */}
            <Button variant="contained" sx={buttonContainedStyle}>
              {bannerDetails.bannercta1Caption}
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

            {/* Button with arrow icon for mobile view */}
            <Button variant="text" onClick={navigationToExplore} sx={buttonTextStyle}>
              <Box
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.18)",
                  width: "46px",
                  height: "46px",
                  borderRadius: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "15px",
                  marginRight: "8px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#FFFFFF",
                    width: "30px",
                    height: "30px",
                    borderRadius: "58px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ArrowRightIcon sx={{ color: "#F5B100" }} />
                </Box>
              </Box>
              {bannerDetails.bannercta2Caption}
            </Button>
            
          </Box>
        </Grid>
        {/* Right side of the banner - image */}
        <Grid item xs={12} md={6}>
          <Image
            src={mainImage}
            alt="test"
            width={617.758}
            height={616.951}
            style={{
              width: "100%",
              height: "auto",
              flexShrink: 0,
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Banner;
