"use client";
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import img from "../../public/images/Room3.jpg";

const HeroBanner = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              style={{
                color: "var(--light-text-color-title, #11142D)",
                fontFamily: "Lora",
                fontSize: "62px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "120%",
                letterSpacing: "0.186px",
              }}
            >
              President Luxury Double Room View NY City
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "var(--light-text-color-body-1, #515151)",
                fontFamily: "Mulish, sans-serif",
                fontSize: "16px",
                lineHeight: "120%",
                fontStyle: "normal",
                letterSpacing: "0.08px",
                fontWeight: "600",
                marginTop: "22px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit orem ipsum dolor sit amet,
            </Typography>
          <Box sx={{ display: "flex" }}>
            <Checkbox
              disabled
              checked
              sx={{
                "& .MuiSvgIcon-root": { fontSize: 34 },
                color: "#9A9AB0",
                "&.Mui-checked": {
                  color: "#9A9AB0",
                },
                marginTop: "26px",
              }}
            />
            <Typography
              variant="body1"
              style={{
                color: "var(--light-text-color-body-2, #9A9AB0)",
                fontFamily: "Mulish, sans-serif",
                fontSize: "16px",
                lineHeight: "125%",
                fontStyle: "normal",
                letterSpacing: "0.08px",
                fontWeight: "400",
                marginTop: "42px",
              }}
            >
              2 Guest
            </Typography>
            <Checkbox
              disabled
              checked
              sx={{
                "& .MuiSvgIcon-root": { fontSize: 34 },
                color: "#9A9AB0",
                "&.Mui-checked": {
                  color: "#9A9AB0",
                },
                marginTop: "26px",
                marginLeft: "15px",
              }}
            />
            <Typography
              variant="body1"
              style={{
                color: "var(--light-text-color-body-2, #9A9AB0)",
                fontFamily: "Mulish, sans-serif",
                fontSize: "16px",
                lineHeight: "125%",
                fontStyle: "normal",
                letterSpacing: "0.08px",
                fontWeight: "400",
                marginTop: "42px",
              }}
            >
              2 Bed
            </Typography>
            <Checkbox
              disabled
              checked
              sx={{
                "& .MuiSvgIcon-root": { fontSize: 34 },
                color: "#9A9AB0",
                "&.Mui-checked": {
                  color: "#9A9AB0",
                },
                marginTop: "26px",
                marginLeft: "15px",
              }}
            />
            <Typography
              variant="body1"
              style={{
                color: "var(--light-text-color-body-2, #9A9AB0)",
                fontFamily: "Mulish, sans-serif",
                fontSize: "16px",
                lineHeight: "125%",
                fontStyle: "normal",
                letterSpacing: "0.08px",
                fontWeight: "400",
                marginTop: "42px",
              }}
            >
              1 Bathroom
            </Typography>
          </Box>
          <Typography
            variant="body2"
            style={{
              color: "var(--light-text-color-body-1, #515151)",
              fontFamily: "Mulish, sans-serif",
              fontSize: "14px",
              lineHeight: "130%",
              fontStyle: "normal",
              letterSpacing: "0.112px",
              fontWeight: "600",
              marginTop: "40px",
            }}
          >
            Start From
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="body2"
              style={{
                color: "var(--light-primary-color-70, #27343F)",
                fontFamily: "Lora",
                fontSize: "39px",
                lineHeight: "120%",
                fontStyle: "normal",
                letterSpacing: "0.195px",
                fontWeight: "700",
                marginTop: "4px",
              }}
            >
              $59
            </Typography>
            <Typography
              variant="body2"
              style={{
                color: "var(--light-text-color-body-2, #9A9AB0)",
                fontFamily: "Mulish, sans-serif",
                fontSize: "12px",
                lineHeight: "120%",
                fontStyle: "normal",
                letterSpacing: "0.096px",
                fontWeight: "400",
                marginTop: "22px",
                marginLeft: "4px",
              }}
            >
              /Night
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              maxWidth: "520px",
              paddingTop: "24px"
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
