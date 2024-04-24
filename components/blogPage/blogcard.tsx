"use client";
import React from "react";
import Image from "next/image";
import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import NorthEastIcon from '@mui/icons-material/NorthEast';

interface BlogCardProps {
  image: string;
  user: string;
  date: string;
  title: string;
  description: string;
  tag: string;
}
export const ulstyles={
  margin: "10px",
  padding: "0px",
  listStyle: "none",
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
}
export const listyles={
  background: "#cce5ff",
  color: "darkblue",
  margin: "5px",
  borderRadius: "5px",
}




const BlogCard: React.FC<BlogCardProps> = ({ image, user, date, title, description, tag }) => {
  const router = useRouter();



  return (
    <>
      <Card
        elevation={0}
        sx={{
            marginTop:"10px",
          borderColor: "var(--light-separators-colors-secondary, #E1E1E1)",
          maxWidth: "98%",
          height: "auto",
        }}
      >
        <Box
          style={{
            position: "relative",
            maxWidth: "1216px",
            margin: "0 auto",
          }}
        >
          <Image
            src={image}
            alt="test"
            width={1000}
            height={310}
            style={{
              width: "100%",
              height: "auto",
              flexShrink: 0,
            }}
          />
        </Box>
        <CardContent>
          <Box sx={{ paddingTop: "10px", marginBottom: "10%", display:"flex" }}>
          <ul style={{
            padding: "0px",
            listStyle: "none",
            display: "flex",
            }} >
                <li style={{color: "#6941C6",
                margin: "5px",}}>
                Olivia Rhye
                </li>
                <li style={{color: "#6941C6",
                margin: "5px",}}>
                •
                </li>
                <li style={{color: "#6941C6",
                margin: "5px",
                }}>
                20 Jan 2022
                </li>
              </ul>        
              
            </Box>
            <Box sx={{ display: "flex", marginTop:"-100px" }}>
            <div>
            <Typography variant="h5"> Beachside Bliss: Hambantota Escapes. </Typography>
            </div>
            <div>
            <NorthEastIcon sx={{ color: "#101828", marginLeft: "700px", fontSize:"20px" }} />
            </div>
            </Box>
            <Box>Experience the cultural richness and wildlife wonders of Hambantota, a coastal paradise boasting pristine beaches, vibrant festivals, and safari adventures. </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={{display: "flex"}}>
              <ul style={ulstyles} >
                <li style={{background: "#F9F5FF",
                color: "#6941C6",
                margin: "5px",
                borderRadius: "5px",
                textAlign:"center",
                width:"60px"}}>
                Coffee
                </li>
                <li style={{background: "#EEF4FF",
                color: "#3538CD",
                margin: "5px",
                borderRadius: "5px",
                textAlign:"center",
                width:"60px"}}>
                Tea
                </li>
                <li style={{background: "#FDF2FA",
                color: "#C11574",
                margin: "5px",
                borderRadius: "5px",
                textAlign:"center",
                width:"100px"}}>
                Coca Cola
                </li>
              </ul>
                </Box>
              </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default BlogCard;
