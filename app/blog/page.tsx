"use client";
import { useState } from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";
import Banner from "@/components/frontend/blogPage/BlogBanner";
import BlogCard from "@/components/frontend/blogPage/BlogCard";
import { blogData, bannerData } from '@/data/blogPage';
import Image from "next/image";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const itemsPerPage = 6; // Number of blog cards per page

export default function Blog() {
  const [page, setPage] = useState(1);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const displayedBlogs = blogData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

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
      {/* logic to identify the screen */}
      <Box sx={{ marginTop: isTablet ? "-8%" : 0 }}>
  {isTablet && (
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
  )}
</Box>
      {/* blog cards */}
      <Box sx={{ marginTop: "50px" }}>
        <Container>
          <Grid container spacing={2}>
            {displayedBlogs.map((item) => (
              <Grid key={item.id} item xs={12} sm={6} md={4}>
                <BlogCard
                  image={item.image}
                  author={item.author}
                  date={item.date}
                  title={item.title}
                  description={item.description}
                  tag={item.tag}
                  tag1={item.tag1}
                  tag2={item.tag2}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/* Pagination */}
      <Container>
        <Stack mb={5} spacing={2} alignItems="center">
          <Pagination
            count={Math.ceil(blogData.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
            renderItem={(item) => (
              <PaginationItem
                components={{
                  previous: () => <Box display={"flex"} gap={2}><ArrowBackIcon fontSize="small" /><Typography>previous</Typography></Box>,
                  next: () => <Box display={"flex"} gap={2}><Typography>next</Typography> <ArrowForwardIcon fontSize="small" /></Box>,
                }}
                {...item}
                sx={{
                  borderRadius: '50%',
                  '& .MuiPaginationItem-icon': {
                    fontSize: '16px',
                  },
                  '&.Mui-selected': {
                    backgroundColor: '#F9F5FF', // Adjust color as per your theme
                    color: '#9c27b0', // Adjust color as per your theme
                  },
                }}
              />
            )}
          />
        </Stack>
      </Container>
    </>
  );
}
