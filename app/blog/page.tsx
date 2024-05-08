"use client";
import { Box, Container, Grid,  } from "@mui/material";
import Banner from "@/components/blogPage/BlogBanner"
import BlogCard from "@/components/blogPage/blogcard";
import { blogData, bannerData } from '@/data/blogPage';
import Image from "next/image";

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
        {/* banner section  */}
        <Container>
          <Banner />
        </Container>
        </Box>
        {/* banner image */}
        <Box sx={{marginTop:"-8%"}}>
          <Container>
          <Image
            src={bannerData.image}
            alt="test"
            width={1350}
            height={400}
            style={{
              width: "100%",
              height: "50%",
              flexShrink: 0,
            }}
          />
          </Container>
        </Box>
        {/* blog cards */}
        <Box
        sx={{marginTop:"50px"}}>
        <Container>
        <Grid container spacing={2}>
        {blogData.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <BlogCard
              image={item.image}
              author={item.author}
              date={item.date}
              title={item.title}
              description={item.description}
              tag={item.tag}
              tag1= {item.tag1}
              tag2={item.tag2}
            />
          </Grid>
        ))}
      </Grid>
        </Container>
      </Box>
      </>
      );
}