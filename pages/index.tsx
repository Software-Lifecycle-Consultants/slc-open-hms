import Image from "next/image";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Banner from "../components/homePage/Banner";
import Footer from "../components/homePage/Footer";
import Testimonials from "../components/homePage/Testimonials";
import Blog from "../components/homePage/Blog";
import CustomCard from "../components/homePage/CustomCard";
import LogoCarousel from "@/components/homePage/LogoCarousel";

/**
 * HomeScreen component represents the main screen of the website.
 * It includes sections like Banner, Destination Card, Blog, Testimonials, and Footer.
 */

const sectionStyle = {
  backgroundColor: "#FFF",
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

      {/* Destination Card */}
      <Box sx={sectionStyle}>
        <Container>
          <CustomCard />
        </Container>
      </Box>

      {/* Blog */}
      <Box sx={sectionStyle}>
        <Container>
          <LogoCarousel />
        </Container>
      </Box>

      {/* Blog */}
      <Box sx={sectionStyle}>
        <Container>
          <Blog />
        </Container>
      </Box>

      {/* Testimonials */}
      <Box
        sx={{sectionStyle,backgroundColor: "#F7F7F7",}}
      >
        <Container>
          <Testimonials />
        </Container>
      </Box>

    </>
  );
}

