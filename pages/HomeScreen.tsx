import Image from "next/image";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Banner from "../components/homePage/Banner";
import Footer from "../components/homePage/Footer";
import Testimonials from "../components/homePage/Testimonials";
import Blog from "../components/homePage/Blog";
import CustomCard from "../components/homePage/CustomCard";
import LogoGrid from "@/components/homePage/LogoGrid";
import LogoCarousel from "@/components/homePage/LogoCarousel";

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
      <Box sx={{ backgroundColor: "#FFF", padding: "20px 0", width: "100%" }}>
        <Container>
          <CustomCard />
        </Container>
      </Box>

      {/* Blog */}
      <Box sx={{ backgroundColor: "#FFF", padding: "20px 0", width: "100%" }}>
        <Container>
          <LogoCarousel />
        </Container>
      </Box>

      {/* Blog */}
      <Box sx={{ backgroundColor: "#FFF", padding: "20px 0", width: "100%" }}>
        <Container>
          <Blog />
        </Container>
      </Box>

      {/* Testimonials */}
      <Box
        sx={{ backgroundColor: "#F7F7F7", padding: "20px 0", width: "100%" }}
      >
        <Container>
          <Testimonials />
        </Container>
      </Box>

      {/* Footer*/}
      <Box sx={{ backgroundColor: "#FFF", padding: "40px 0", width: "100%" }}>
        <Container>
          <Footer />
        </Container>
      </Box>
    </>
  );
}
