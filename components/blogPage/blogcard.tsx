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

const BlogCard: React.FC<BlogCardProps> = ({ image, user, date, title, description, tag, tag1,tag2, }) => {
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
          <Box sx={{ paddingTop: "10px", marginBottom: "-5%", display:"flex" }}>
          <ul style={{
            padding: "0px",
            listStyle: "none",
            display: "flex",
            }} >
              {/* user name and date list on the card */}
                <li style={{color: "#6941C6",
                margin: "5px",}}>
                {user}
                </li>
                <li style={{color: "#6941C6",
                margin: "5px",}}>
                •
                </li>
                <li style={{color: "#6941C6",
                margin: "5px",
                }}>
                {date}
                </li>
              </ul>        
              
            </Box>
            <Box sx={{ display: "flex",  }}>
            <div>
              {/* title section of the card  */}
            <Typography sx={{fontSize:"24px",}}> {title} </Typography>
            </div>
            <div style={{marginLeft:"100px"}}>
            <NorthEastIcon sx={{ color: "#101828" , fontSize:"20px", marginTop:"5px" }} />
            </div>
            </Box>
            <Box>{description}</Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={{display: "flex"}}>
                {/* hashtag list */}
              <ul style={ulstyles} >
                <li style={{background: "#F9F5FF",
                color: "#6941C6",
                borderRadius: "5px",
                textAlign:"center",
                gap:"3px",
                fontSize:"14px"}}>
                {tag}
                </li>
                <li style={{background: "#EEF4FF",
                color: "#3538CD",
                borderRadius: "5px",
                gap:"3px",
                textAlign:"center",
                fontSize:"14px"}}>
                {tag1}
                </li>
                <li style={{background: "#FDF2FA",
                color: "#C11574",
                borderRadius: "5px",
                gap:"3px",  
                textAlign:"center",
                fontSize:"14px"}}>
                {tag2}
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
