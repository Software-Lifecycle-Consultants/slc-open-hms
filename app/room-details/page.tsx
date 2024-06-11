"use client"
import React from 'react'
import { Box, Container } from "@mui/material";
import HeroBanner from '@/components/front-end/guestRoomDetails/HeroBanner';
import AboutRoom from '@/components/front-end/guestRoomDetails/AboutRoom';
import Facilities from '@/components/front-end/guestRoomDetails/Facilities';
import AdditionalInfo from '@/components/front-end/guestRoomDetails/AdditionalInfo';
import SimilarRooms from '@/components/front-end/guestRoomDetails/SimilarRooms';
import Gallery from '@/components/front-end/guestRoomDetails/Gallery';

/**
 * RoomDetailsScreen component represents the each hotel room details of the website.
 * It includes sections like Hero banner, About room, Facilities, Gallery, Additional Info, and Similar Rooms.
 */

/* Style class for the box component of each section component */
const sectionStyles = {
  backgroundColor: "#FFF",
  padding: "40px 0",
  width: "100%",
};

const RoomDetailsScreen = () => {
  return (
    <>
      {/* Banner Section */}
      <Box sx={sectionStyles}>
        <Container>
          <HeroBanner />
        </Container>
      </Box>

      {/* About Room Section */}
      <Box sx={sectionStyles}>
        <Container>
          <AboutRoom />
        </Container>
      </Box>

      {/* Facilities Section */}
      <Box sx={sectionStyles}>
        <Container>
          <Facilities />
        </Container>
      </Box>

      {/* Room Gallery Section */}
      <Box sx={sectionStyles}>
        <Container>
          <Gallery />
        </Container>
      </Box>

      {/* Additional Info Section */}
      <Box sx={sectionStyles}>
        <Container>
          <AdditionalInfo />
        </Container>
      </Box>

      {/* Similar Rooms Section */}
      <Box sx={sectionStyles}>
        <Container>
          <SimilarRooms />
        </Container>
      </Box>
    </>
  );
}

export default RoomDetailsScreen
