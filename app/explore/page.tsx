"use client";
import { Box, Container } from "@mui/material";
import HotelRooms from "@/components/frontend/explorePage/HotelRooms"; // Importing HotelRooms component from the 'explore' folder
import SearchBar from "@/components/frontend/explorePage/SearchBar"; // Importing SearchBar component from the 'explore' folder
import HeroSection from "@/components/frontend/explorePage/HeroSection"; // Importing HeroSection component from the 'explore' folder

/**
 * ExploreScreen component represents the explore screen of the website.
 * It includes sections like Hero section, Search bar, and Hotel rooms.
 */

const ExploreScreen = ({
  searchParams,
}: {
  searchParams?: {
    query: string; //declear the query as a prop related to search bar query
    roomType: string; //declear the value as a prop related to drop down list value
    beds: string;
    guest: string;
  };
}) => {
  const query = searchParams?.query || " "; //destructuring the query from searchParams
  const roomType = searchParams?.roomType || ""; //destructuring the value from searchParams
  const bedSizes = searchParams?.beds || " "; //destructuring the bedSize from searchParams
  const guest = searchParams?.guest || " "; //destructuring the guest from searchParams

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#0C111F",
          color: "white",
          height: { xs: "450px", sm: "370px", md: "390px", lg: "350px" },
          width: "100%",
          display: "inline-block",
        }}
      >
        <Container>
          <HeroSection />
        </Container>
      </Box>

      {/* Search Bar Section */}
      <Box
        sx={{
          backgroundColor: "#FFF",
          width: "100%",
        }}
      >
        <Container>
          <SearchBar />
        </Container>
      </Box>

      {/* Hotel Rooms Section */}
      <Box sx={{ backgroundColor: "#FFF", padding: "40px 0", width: "100%" }}>
        <Container>
          <HotelRooms
            query={query}
            roomType={roomType}
            bedSizes={bedSizes}
            guest={guest}
          />
          {/* pass the query to Hotel room component*/}
        </Container>
      </Box>
    </>
  );
};

export default ExploreScreen;
