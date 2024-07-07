"use client";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import img from "@/public/images/hotelRooms/Room3.webp";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { roomDetailsHeroSection } from "@/data/roomDetailsPage";
import { lora, mulish } from "../../../app/fonts";

const HeroBanner = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography
              color= "#11142D"
              fontSize="62px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="120%"
              letterSpacing= "0.186px"
          >
            {roomDetailsHeroSection.roomDetailsTitle}
          </Typography>
          <Typography
            variant="h4"
            marginTop="22px"
          >
            {roomDetailsHeroSection.roomDetailsDescription}
          </Typography>
          <Box sx={{ display: "flex" }}>
            <CheckBoxIcon
              sx={{
                fontSize: 30,
                color: "#9A9AB0",
                marginTop: "35px",
              }}
            />
            <Typography
              variant="h4"
              color= "#9A9AB0"
              marginTop= "39px"
            >
              {roomDetailsHeroSection.checkIcon1}
            </Typography>
            <CheckBoxIcon
              sx={{
                fontSize: 30,
                color: "#9A9AB0",
                marginTop: "35px",
                marginLeft: "20px",
              }}
            />
            <Typography
              variant="h4"
              color= "#9A9AB0"
              marginTop= "39px"
            >
              {roomDetailsHeroSection.checkIcon2}
            </Typography>
            <CheckBoxIcon
              sx={{
                fontSize: 30,
                color: "#9A9AB0",
                marginTop: "35px",
                marginLeft: "20px",
              }}
            />
            <Typography
              variant="h4"
              color= "#9A9AB0"
              marginTop= "39px"
            >
              {roomDetailsHeroSection.checkIcon3}
            </Typography>
          </Box>
          <Typography
            variant="h5"
            color="#515151"
            fontWeight="700"
            marginTop="36px"
          >
            {roomDetailsHeroSection.customText1}
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography
              fontSize="39px"
              fontFamily="Mulish"
              color="#27343F"
              lineHeight="120%"
              fontStyle="normal"
              letterSpacing="0.195px"
              fontWeight= "700"
              marginTop= "4px"
            >
              {roomDetailsHeroSection.price}
            </Typography>
            <Typography
              variant="h6"
              color= "#9A9AB0"
              letterSpacing= "0.096px"
              fontWeight= "400"
              marginTop="18px"
              marginLeft= "4px"
            >
              {roomDetailsHeroSection.customText2}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              maxWidth: "520px",
              paddingTop: "24px",
            }}
          >
            <Image
              src={img}
              alt="test"
              width={520}
              height={475}
              style={{
                width: "100%",
                height: "auto",
                flexShrink: 0,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HeroBanner;
