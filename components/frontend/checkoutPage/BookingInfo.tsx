"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import Image from "next/image";
import img from "@/public/images/hotelRooms/Room2.webp";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { bookingInfoCard } from "@/data/checkoutPage";
import {roomsData} from "@/data/roomDetailsPage"
import { getFormattedDate } from '@/data/checkoutPage';
import { checkoutSeo } from "@/data/seo";

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
  const [selectedRoom, setSelectedRoom] = useState(roomsData[0]);

  // Handle dropdown change
  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedRoomName = event.target.value;
    const newSelectedRoom = roomsData.find(room => room.roomName === selectedRoomName);
    if (newSelectedRoom) {
      setSelectedRoom(newSelectedRoom);
    }
  };

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
            src={selectedRoom.roomCoverImage}
            alt={checkoutSeo.bookingInfoImageAlt}
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
            {/* Room title as dropdown */}
            <FormControl fullWidth>
              <InputLabel>Room Title</InputLabel>
              <Select
                value={selectedRoom.roomName}
                onChange={handleChange}
                label="Room Title"
              >
                {roomsData.map((room, index) => (
                  <MenuItem key={index} value={room.roomName}>
                    {room.roomName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* Booking date */}
            <Typography
              variant="h4"
              sx={{
                color: "#515151",
                fontWeight: 600,
                marginTop: "1.375rem",
                "@media (max-width:600px)": { fontWeight: 600 },
              }}
            >
              {getFormattedDate()}
            </Typography>
            {/* Check icons */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CheckBoxIcon
                sx={{ fontSize: 34, color: "#9A9AB0", marginTop: "1.125rem" }}
              />
              <Typography variant="h4" color="#9A9AB0" marginTop="1.125rem">
                {selectedRoom.checkIcon1Caption}
              </Typography>
              <CheckBoxIcon
                sx={{
                  fontSize: 34,
                  color: "#9A9AB0",
                  marginTop: "1.125rem",
                  marginLeft: "1.563rem",
                }}
              />
              <Typography variant="h4" color="#9A9AB0" marginTop="1.125rem">
                {selectedRoom.checkIcon2Caption}
              </Typography>
              <CheckBoxIcon
                sx={{
                  fontSize: 34,
                  color: "#9A9AB0",
                  marginTop: "1.125rem",
                  marginLeft: "1.563rem",
                }}
              />
              <Typography variant="h4" color="#9A9AB0" marginTop="1.125rem">
                {selectedRoom.checkIcon3Caption}
              </Typography>
            </Box>
            {/* Price title */}
            <Typography variant="h5">{bookingInfoCard.priceTitleCaption}</Typography>
            {/* Total price */}
            <Typography variant="h2" marginTop="0.25rem">
              ${selectedRoom.price}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default BookingInfo;