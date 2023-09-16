"use client";
import React from "react";
import {
  Box,
  Typography,
  Card,
  Checkbox,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import img from "../../public/images/Room2.jpg";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const checkBoxTypographyStyle = {
  color: "var(--light-text-color-body-2, #9A9AB0)",
  fontFamily: "Mulish, sans-serif",
  fontSize: "16px",
  lineHeight: "125%",
  fontStyle: "normal",
  letterSpacing: "0.08px",
  fontWeight: "400",
  marginTop: "18px",
};

const BookingInfo = () => {
  return (
    <>
      <Card
        elevation={0}
        sx={{
          borderRadius: "8px",
          border: "1px solid",
          borderColor: "var(--light-separators-colors-secondary, #E1E1E1)",
          maxWidth: "400px",
          height: "auto",
        }}
      >
        <Box
          style={{
            position: "relative",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          <Image
            src={img}
            alt="test"
            width={400}
            height={330}
            style={{
              width: "100%",
              height: "330px",
              flexShrink: 0,
            }}
          />
        </Box>
        <CardContent>
          <Box sx={{ paddingTop: "10px", marginBottom: "10%" }}>
            <Typography
              variant="h5"
              style={{
                color: "var(--light-text-color-title, #11142D)",
                fontFamily: "Lora",
                fontSize: "24px",
                lineHeight: "120%",
                fontStyle: "normal",
                letterSpacing: "0.12px",
                fontWeight: "700",
              }}
            >
              President Luxury Double Room View NY City
            </Typography>
            <Typography
              variant="body1"
              style={{
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
              14 February 2021
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CheckBoxIcon
                sx={{ fontSize: 34, color: "#9A9AB0", marginTop: "18px" }}
              />
              <Typography variant="body1" style={checkBoxTypographyStyle}>
                1 Room
              </Typography>
              <CheckBoxIcon
                sx={{
                  fontSize: 34,
                  color: "#9A9AB0",
                  marginTop: "18px",
                  marginLeft: "25px",
                }}
              />
              <Typography variant="body1" style={checkBoxTypographyStyle}>
                2 Guest
              </Typography>
              <CheckBoxIcon
                sx={{
                  fontSize: 34,
                  color: "#9A9AB0",
                  marginTop: "18px",
                  marginLeft: "25px",
                }}
              />
              <Typography variant="body1" style={checkBoxTypographyStyle}>
                1 Night
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
                marginTop: "14px",
              }}
            >
              Total Price
            </Typography>
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
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default BookingInfo;
