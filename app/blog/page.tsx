"use client";
import { Box, Container } from "@mui/material";
import Banner from "@/components/blogPage/Banner1"
import BlogCard from "@/components/blogPage/blogcard";

export default function blog(){
    return (
      <>
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
        <Box
        sx={{marginTop:"50px"}}>
        <Container>
          <BlogCard 
            image= {"/images/blogPage/anuradhapura.webp"}
            user= {"user"}  
            date= {"2000-2-2"}
            title={"test title"}
            description= {"string"}
            tag= {"tag"} />
        </Container>
      </Box>
      </>
      );
}