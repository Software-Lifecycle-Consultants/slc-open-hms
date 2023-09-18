"use client";
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import img from "../../public/images/hotelRooms/Room2.jpg";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

/* Booking information */
const bookingInfoCard = 
  {
    roomTitle: "President Luxury Double Room View NY City",
    date: "14 February 2021",
    checkIcon1: "1 Room",
    checkIcon2: "2 Guest",
    checkIcon3: "1 Night",
    priceTitle: "Total Price",
    price: "$59",
  }
;

/* Styles for checkbox typography */
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
      {/* Card for booking information */}
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
          {/* Image of the room */}
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
            {/* Room title */}
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
              {bookingInfoCard.roomTitle}
            </Typography>
            {/* Booking date */}
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
              {bookingInfoCard.date}
            </Typography>
            {/* Check icons */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CheckBoxIcon
                sx={{ fontSize: 34, color: "#9A9AB0", marginTop: "18px" }}
              />
              <Typography variant="body1" style={checkBoxTypographyStyle}>
                {bookingInfoCard.checkIcon1}
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
                {bookingInfoCard.checkIcon2}
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
                {bookingInfoCard.checkIcon3}
              </Typography>
            </Box>
            {/* Price title */}
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
              {bookingInfoCard.priceTitle}
            </Typography>
            {/* Total price */}
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
              {bookingInfoCard.price}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default BookingInfo;
