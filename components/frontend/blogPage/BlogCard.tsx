"use client";
import React from "react";
import Image from "next/image";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Link,
  Button,

} from "@mui/material";
import { useRouter } from "next/navigation";
import LaunchIcon from '@mui/icons-material/Launch';
import { bannerData } from "@/data/blogPage";
import { blogSeo } from "@/data/seo";

interface BlogCardProps {
  image: string;
  author: string;
  date: string;
  title: string;
  description: string;
  tag: string;
  tag1: string;
  tag2: string;
}
export const ulstyles={
  padding: "0px",
  listStyle: "none",
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  
}

const BlogCard: React.FC<BlogCardProps> = ({ image, author, date, title, description, tag, tag1,tag2, }) => {
  const router = useRouter();



  return (
    <>
    {/* blog card */}
      <Card
        elevation={0}
        sx={{
            marginTop:"10px",
          borderColor: "var(--light-separators-colors-secondary, #E1E1E1)",
          maxWidth: "384px",
          height: "auto",
        }}
      >
        <Box
          style={{
            position: "relative",
            maxWidth: "384px",
          }}
        >
          {/* image of the card */}
          <Image
            src={image}
            alt={blogSeo.imageAlt1}
            width={1000}
            height={750}
            style={{
              width: "384px",
              height: "240px",
              flexShrink: 0,
            }}
          />
        </Box>
        {/* card content */}
        <CardContent>
          
            <Box sx={{ display: "flex",  }}>
              {/* title section of the card  */}
            <Typography variant='body1'> {title} </Typography>
            </Box>
            <Box><Typography variant='h4'>{description}</Typography></Box>
            
            <Stack direction="row" justifyContent="flex-end">      
    <Link href={"/blog-detail"}aria-label={blogSeo.linklabel1}>
      <Button 
            sx={{fontSize: {md:"14px", xs:"10px"},}}
            variant="contained"
          >
             {bannerData.Btntxtblogcard}
            <LaunchIcon sx={{ color: "#FFFFFF" ,  fontSize: {xl:"10px", md:"14px", xs:"10px"}, marginLeft:"8px"}} />
          </Button>
          </Link>
          </Stack>
      
        </CardContent>
      </Card>
    </>
  );
};

export default BlogCard;
