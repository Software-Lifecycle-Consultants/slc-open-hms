import { Box, Container, Grid, Typography, Button } from '@mui/material'
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import CustomCard from "../components/CustomCard";
// import LogoImageSlider from "../components/LogoImageSlider";
import NavBar from '@/components/NavBar';
import LogoCarousel from '@/components/LogoCarousel';

export default function Home() {
  return (
    <>
      {/* Navigation Bar*/}
          <NavBar />


      {/* Banner Section */}
      <Box
        sx={{
          backgroundColor: "#0C111F",
          padding: "40px 0",
          width: "100%",
          height: "auto",
          display: "inline-block",
        }}
      >
        <Container>
          <Banner />
        </Container>
      </Box>

      {/* Logo Image Slider */}
      <Box sx={{ backgroundColor: "#FFF", padding: "20px 0", width: "100%" }}>
        <Container>
          <LogoCarousel />
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
