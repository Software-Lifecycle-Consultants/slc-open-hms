"use client";
import { Box, Card, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const title = "Room Gallery";

const Gallery: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // xs or sm breakpoint
  const isTablet = useMediaQuery(theme.breakpoints.up("md")); // md breakpoint

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
  };

  const titleStyle = [
    {
      color: "var(--light-text-color-title, #11142D)",
      fontFamily: "Lora",
      fontSize: "39px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "120%",
      letterSpacing: "0.195px",
    },
  ];

  const cardStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: isMobile ? "200px" : isTablet ? "460px" : "460px",
    width: "100%", // Set width to ensure 5 items are shown in web view
    borderColor: "white", // Set the border color to white
    borderWidth: "0px", // Set border width to 0
    borderRadius: "0px", // Set border radius to 0
    boxShadow: "none", // Remove any box shadow
  };
  return (
    <>
      <Typography variant="h3" sx={titleStyle}>
        {title}
      </Typography>
      <Slider {...settings}>
        <Box>
          <Card style={cardStyles}>
            <Image
              src="/images/hotelRooms/Room1.jpg"
              alt="Image 1"
              width={712}
              height={460}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Card>
        </Box>
        <Box>
          <Card style={cardStyles}>
            <Image
              src="/images/hotelRooms/Room2.jpg"
              alt="Image 2"
              width={712}
              height={460}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Card>
        </Box>
      </Slider>
    </>
  );
};

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
}

export default Gallery;
