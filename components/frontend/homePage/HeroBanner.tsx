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
  typographyh1Style,
  typographyBody1Style,
  buttonContainedStyle,
  buttonTextStyle,
} from "./styles";
import color from "material-ui-colors/dist/amber";



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
          <Typography variant="h2"
            sx={{
              textTransform: "uppercase",
              color: "#E97458",
              fontSize: "1.125rem",
              '@media (max-width:600px)': {
                fontSize: '1rem',
              },
            }} >
            {bannerDetails.bannerTitle}
          </Typography>
          {/* Heading 1 */}
          <Typography variant="h1" color="secondary"
          >
            {bannerDetails.bannerSubTitle}
          </Typography>
          {/* Body text */}
          <Typography variant="body2" fontSize="1.5rem" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
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
            <Button variant="contained" sx={{ borderRadius: "6.25rem", background: "var(--l-2, linear-gradient(135deg, #F9EC7D 0%, #F5B100 100%))", fontWeight: 600, gap: "0.625rem" }}>
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
            <Button variant="text" sx={{ color: "secondary.main", fontWeight: "normal", fontSize: "0.875rem" }} onClick={navigationToExplore}>
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
