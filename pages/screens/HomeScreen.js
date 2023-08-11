'use client'
import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Banner from "../../components/Banner";
import NavBar from "../../components/NavBar";
import CardCarousel from "../../components/CardCarousel"; // Import the new CardCarousel component
import Blog from "../../components/Blog";


  // Define the cards array
  const cards = [
    {
      imageSrc: "/images/bali.jpg",
      title: "Card Title 1",
      description: "Description for Card 1",
    },
    {
      imageSrc: "/images/france.jpg",
      title: "Card Title 2",
      description: "Description for Card 2",
    },

    {
      imageSrc: "/images/Turkey.png",
      title: "Card Title 3",
      description: "Description for Card 1",
    },
    {
      imageSrc: "/images/france.jpg",
      title: "Card Title 2",
      description: "Description for Card 2",
    },
    // Add more cards as needed
  ];

const HomeScreen = () => {
  return (
    <Box>
      <NavBar />
      {/* Section 1 */}
      <Box
        sx={{
          backgroundColor: "#0C111F",
          color: "white",
          padding: "40px 0",
          height: "16.6%",
          flexGrow: 1,
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: "40px 0" }}>
                <Banner
                  title="The best deals on the world's best destinations"
                  subtitle="Best travel and destinations"
                  description="With travala you can experience new travel and the best tourist destinations that we have to offer"
                  primaryButtonLabel="Our Destination"
                  secondaryButtonLabel="Our Gallery"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <img
                  src="https://res.cloudinary.com/de9zkpp0w/image/upload/v1690446713/thilini/Group_48095510_odtoo3.png"
                  width="100%"
                  height="auto"
                  alt="main Image"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section 2 */}
      <Box sx={{ backgroundColor: "#FFF", padding: "20px 0" }}>
        <Container>
          <CardCarousel cards={cards} />
        </Container>
      </Box>

      {/* Sections 3 */}
      <Box sx={{ backgroundColor: "#FFF", padding: "20px 0", width: "100%" }}>
        <Container>
          <Blog />
        </Container>
      </Box>

      {/* Sections 3-6 */}
      {/* 
      {[...Array(9)].map((_, index) => (
        <Box
          key={`section-${index + 3}`}
          sx={{
            backgroundColor: index % 2 === 0 ? "lightgray" : "white",
            color: index % 2 === 0 ? "black" : "black",
            padding: "40px 0",
          }}
        >
          <Container>
            <Typography variant="h1">Section {index + 3}</Typography>
            
          </Container>
        </Box>
      ))}
       */}
    </Box>
  );
};

export default HomeScreen;
