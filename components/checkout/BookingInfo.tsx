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
import { bookingInfoCard } from "@/data/checkoutPage";
import { lora, mulish } from "../../app/fonts";

/**
 * BookingInfo component is the card used in checkout page to display details of each room.
 */

/* Styles for checkbox typography */
const checkBoxTypographyStyle = {
  color: "#9A9AB0",
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
          borderColor: "#E1E1E1",
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
              className={lora.className}
              style={{
                color: "#11142D",
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
              className={mulish.className}
              style={{
                color: "#515151",
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
              <Typography
                variant="body1"
                className={mulish.className}
                style={checkBoxTypographyStyle}
              >
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
              <Typography
                variant="body1"
                className={mulish.className}
                style={checkBoxTypographyStyle}
              >
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
              <Typography
                variant="body1"
                className={mulish.className}
                style={checkBoxTypographyStyle}
              >
                {bookingInfoCard.checkIcon3}
              </Typography>
            </Box>
            {/* Price title */}
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
                marginTop: "14px",
              }}
            >
              {bookingInfoCard.priceTitle}
            </Typography>
            {/* Total price */}
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
              {bookingInfoCard.price}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default BookingInfo;
