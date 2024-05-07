"use client";
import React from "react";
import Image from "next/image";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Stack,
  Chip,
} from "@mui/material";
import { useRouter } from "next/navigation";
import NorthEastIcon from '@mui/icons-material/NorthEast';


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
          <Box sx={{ paddingTop: "10px", marginBottom: "-5%", display:"flex" }}>
          <ul style={{
            padding: "0px",
            listStyle: "none",
            display: "flex",
            }} >
              {/* user name and date list on the card */}
                <li style={{color: "#6941C6",
                margin: "5px",}}>
                {author}
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
                <Grid item mt={1}>
              <Stack spacing={1} alignItems="center">
                <Stack direction="row" spacing={1}>
                  {/* Tags */}
                  <Chip
                    sx={{ color: "#027A48", bgcolor: "#ECFDF3" }}
                    label={tag}/>

                  <Chip
                    sx={{ color: "#3538CD", bgcolor: "#EEF4FF" }}
                    label={tag1}
                  />
                  <Chip
                    sx={{ color: "#C11574", bgcolor: "#FDF2FA" }}
                    label={tag2}
                  />
                </Stack>
              </Stack>
            </Grid>
                </Box>
              </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default BlogCard;
