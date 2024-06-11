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

const titleStyle = {
  color: "#11142D",
  fontSize: "62px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "120%",
  letterSpacing: "0.186px",
};

const descriptionStyle = {
  color: "#515151",
  fontSize: "16px",
  lineHeight: "120%",
  fontStyle: "normal",
  letterSpacing: "0.08px",
  fontWeight: "600",
  marginTop: "22px",
};

const checkBoxTypographyStyle = {
  color: "#9A9AB0",
  fontSize: "16px",
  lineHeight: "125%",
  fontStyle: "normal",
  letterSpacing: "0.08px",
  fontWeight: "400",
  marginTop: "39px",
};

const HeroBanner = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h1"
            className={lora.className}
            style={titleStyle}
          >
            {roomDetailsHeroSection.roomDetailsTitle}
          </Typography>
          <Typography
            variant="body1"
            className={mulish.className}
            sx={descriptionStyle}
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
              variant="body1"
              className={mulish.className}
              style={checkBoxTypographyStyle}
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
              variant="body1"
              className={mulish.className}
              style={checkBoxTypographyStyle}
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
              variant="body1"
              className={mulish.className}
              style={checkBoxTypographyStyle}
            >
              {roomDetailsHeroSection.checkIcon3}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            className={mulish.className}
            style={{
              color: "#515151",
              fontSize: "14px",
              lineHeight: "130%",
              fontStyle: "normal",
              letterSpacing: "0.112px",
              fontWeight: "600",
              marginTop: "36px",
            }}
          >
            {roomDetailsHeroSection.customText1}
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="body2"
              className={lora.className}
              style={{
                color: "#27343F",
                fontSize: "39px",
                lineHeight: "120%",
                fontStyle: "normal",
                letterSpacing: "0.195px",
                fontWeight: "700",
                marginTop: "4px",
              }}
            >
              {roomDetailsHeroSection.price}
            </Typography>
            <Typography
              variant="body2"
              className={mulish.className}
              style={{
                color: "#9A9AB0",
                fontSize: "12px",
                lineHeight: "120%",
                fontStyle: "normal",
                letterSpacing: "0.096px",
                fontWeight: "400",
                marginTop: "22px",
                marginLeft: "4px",
              }}
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
