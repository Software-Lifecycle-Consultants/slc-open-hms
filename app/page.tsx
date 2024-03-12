"use client"
import { Box, Container } from "@mui/material";
import Banner from "../components/homePage/Banner";
import Testimonials from "../components/homePage/Testimonials";
import Blog from "../components/homePage/Blog";
import CustomCard from "../components/homePage/CustomCard";
import LogoCarousel from "@/components/homePage/LogoCarousel";
import ContactNow from "@/components/homePage/ContactNow";

/**
 * HomeScreen component represents the main screen of the website.
 * It includes sections like Banner, Destination Card, Blog, Testimonials, and Footer.
 */

/* Style class for the box component of each section component */
const sectionStyle = {
  backgroundColor: '#FFFFF',
  padding: "20px 0",
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

        {/* contactNow Banner Section */}
      <Box
        sx={{
          backgroundColor: "#0C111F",
          color: "white",
          padding: "40px 0",
          flexGrow: 1,
        }}
      >
        <Container>
          <ContactNow/>
        </Container>
      </Box>

        
      {/* Testimonials Section */}
      <Box sx={{ sectionStyle, backgroundColor: "#F7F7F7" }}>
        <Container>
          <Testimonials />
        </Container>
      </Box>
    </>
  );
}