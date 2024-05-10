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
            alt="test"
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
            <Typography sx={{fontSize:"24px",}}> {title} </Typography>
            </Box>
            <Box>{description}</Box>
            
    <Box sx={{
      marginLeft:"200px",
      justifyContent: "flex-end"}}>       
    <Link href={"/blog-detail"}>
      <Button 
            sx={{fontSize: {md:"14px", xs:"10px"},}}
            variant="contained"
              style={{
                background: "var(--l-2, linear-gradient(135deg, #8482FF 0%, #7723FE 100%))",
                borderRadius: "45px",
                color: "#FFF",
                lineHeight: "180%",
                fontStyle: "normal",
                letterSpacing: "-0.14px",
                fontWeight: "500",
                marginBottom:"25px",
                marginTop:"25px",
                textTransform: "none",
              }}
          >
            Read more
            <LaunchIcon sx={{ color: "#FFFFFF" ,  fontSize: {md:"14px", xs:"10px"}, marginLeft:"8px"}} />
          </Button>
          </Link>
          </Box>
      
        </CardContent>
      </Card>
    </>
  );
};

export default BlogCard;
