import Footer from '@/components/Footer';
import HotelRooms from '@/components/explore/HotelRooms';
import { Box, Container } from '@mui/material';
import React from 'react'

const ExploreScreen = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#FFF", padding: "40px 0", width: "100%" }}>
        <Container>
          <HotelRooms />
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#FFF", padding: "40px 0", width: "100%" }}>
        <Container>
          <Footer />
        </Container>
      </Box>
    </>
  );
}

// const isMobile = useMediaQuery("(max-width:767px)");
// const isTablet = useMediaQuery("(min-width:768px) and (max-width:1023px)");
// const isWeb = useMediaQuery("(min-width:1024px)");

// slidesToShow: isMobile ? 1 : isTablet ? 2 : isWeb ? 3 : 5,

export default ExploreScreen
