"use client";
import { Box, Container } from "@mui/material";
import Banner from "../components/frontend/homePage/HeroBanner";
import Testimonials from "../components/frontend/homePage/Testimonials";
import Blog from "../components/frontend/homePage/DestinationOverView";
import CustomCard from "../components/frontend/homePage/CustomCard";
import LogoCarousel from "@/components/frontend/homePage/LogoCarousel";
import ContactNowBanner from "@/components/frontend/homePage/SecondaryBanner";
import Cookie from "@/components/frontend/cookieBanner/Cookie";
import Head from "next/head";

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
    <Head>
        <title>Travala | The best deals on the world's best destinations</title>        
        <meta name="description" content="Travala offer best deals on hotels, flights, and travel experiences. Find top destinations at the best prices and book easily for your next adventure." />
        <meta name="keywords" content="Travel deals, hotel bookings, flight reservations, vacation packages, best travel discounts, luxury accommodations, budget travel deals, top travel destinations, online travel agency, affordable hotels, exclusive travel offers, global hotel deals, travel booking platform, discounted flights, travel deals site" />
        <meta property="og:title" content="Travala | The best deals on the world's best destinations" />
        <meta property="og:description" content="With travala you can experience new travel and the best tourist destinations that we have to offer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.travala.com/" />
        <meta property="og:image" content="app\favicon.ico" />
      </Head>
      {/* HeroBanner Section */}
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
      {/* DestinationOverView  Section */}
      <Box sx={sectionStyle}>
        <Container>
          <Blog />
        </Container>
      </Box>
      {/* SecondaryBanner section  */}
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
