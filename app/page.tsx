"use client";
import { Box, Container } from "@mui/material";
import Banner from "../components/frontend/homePage/Banner";
import Testimonials from "../components/frontend/homePage/Testimonials";
import Blog from "../components/frontend/homePage/Blog";
import CustomCard from "../components/frontend/homePage/CustomCard";
import LogoCarousel from "@/components/frontend/homePage/LogoCarousel";
import ContactNowBanner from "@/components/frontend/homePage/contactNow";
import Cookie from "@/components/frontend/cookieBanner/Cookie";

/**
 * HomeScreen represents the main screen of the website.
 * It includes sections like Banner, Destination Card, Blog, Testimonials, and Footer.
 */

/* Style class for the box component of each section component */
const sectionStyle = {
  backgroundColor: "#FFFFF",
  width: "100%",
};

export default function HomeScreen() {
  return (
    <>
      {/* Banner Section */}
      <Box
        sx={{
          backgroundColor: "#0C111F",
          color: "white",
          padding: "40px 0",
          flexGrow: 1,
        }}
      >
        <Container>
          <Banner />
        </Container>
      </Box>
      {/* Custom Card Section*/}
      <Box sx={sectionStyle}>
        <Container>
          <CustomCard />
        </Container>
      </Box>
      {/* Logo Carousel Section */}
      <Box sx={sectionStyle}>
        <Container>
          <LogoCarousel />
        </Container>
      </Box>
      {/* Blog Section */}
      <Box sx={sectionStyle}>
        <Container>
          <Blog />
        </Container>
      </Box>
      {/* Contact Now Banner  */}
      <Box
        sx={{ backgroundColor: "#0C111F", color: "white", padding: "40px 0" }}
      >
        <Container>
          <ContactNowBanner />
        </Container>
      </Box>
      {/* Testimonials Section */}
      <Box
        sx={{ backgroundColor: "#F7F7F7", padding: "20px 0", width: "100%" }}
      >
        <Container>
          <Testimonials />
        </Container>
      </Box>
      {/* Cookie Consent Banner*/}
      <Box>
        <Cookie />
      </Box>
    </>
  );
}
