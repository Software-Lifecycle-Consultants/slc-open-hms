"use client"; // Indicating that this is client-side code
import React from "react";
import Slider from "react-slick"; // Importing the Slider component from react-slick
import "slick-carousel/slick/slick.css"; // Importing the slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Importing the slick carousel theme CSS
import { useMediaQuery, Card, Box, useTheme } from "@mui/material"; // Importing components and hooks from MUI
import Image from "next/image"; // Importing the Image component from Next.js
import { clientLogos } from "@/data/homePage"; // Importing client logos from the specified data file

// Styles for the carousel container
const carouselContainerStyles = {
  overflow: "hidden",
};

// Styles to prevent white vertical line on mobile
const carouselOverflowStyles = {
  ".slick-list": {
    overflow: "visible",
  },
};

const LogoCarousel: React.FC = () => {
  const theme = useTheme(); // Accessing the MUI theme
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Checking if the screen is mobile
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // Checking if the screen is tablet

  const settings: SliderSettings = {
    dots: false, // Not Displaying dots for navigation
    infinite: true, // Allowing infinite loop of slides
    speed: 500, // Transition speed in milliseconds
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 5, // Setting the number of slides to show based on the screen size
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Autoplay is enabled
    autoplaySpeed: 1000, // Autoplay speed in milliseconds
    centerMode: true,
    centerPadding: "0px",
  };

  // Custom styles for the Card component
  const cardStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white", // Set the border color to white
    borderWidth: "0px", // Set border width to 0
    borderRadius: "0px", // Set border radius to 0
    boxShadow: "none", // Remove any box shadow
    height:isMobile ? "50px" : "200px",
  };

  return (
    <Box sx={{ ...carouselContainerStyles, ...carouselOverflowStyles }}>
      {/* Wrapping the Slider with a Box to control height and responsiveness */}
      <Box sx={{ maxWidth: "100vw" }}>
        <Slider {...settings}>
          {/* Mapping through clientLogos and rendering each logo */}
          {clientLogos.map((item) => (
            <Box key={item.id}>
              <Card style={cardStyles}>
                <Image
                  src={item.logoImage}
                  alt={`Logo ${item.id}`}
                  width={162}
                  height={32}
                />
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

// Interface to define SliderSettings type
interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  centerMode: boolean,
  centerPadding: string,
}

export default LogoCarousel; // Exporting the LogoCarousel component as the default export
