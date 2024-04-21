"use client";
import { Box, Container } from "@mui/material";
import Banner from "@/components/blogPage/Banner1"

export default function blog(){
    return (
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
      );
}