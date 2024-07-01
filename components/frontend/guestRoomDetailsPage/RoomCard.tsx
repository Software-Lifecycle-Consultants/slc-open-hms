"use client";
import React from "react";
import Image from "next/image";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { roomCardCheckIconContent, roomCardTexts } from "@/data/roomDetailsPage";
import { lora, mulish } from "../../../app/fonts";

interface RoomCardProps {
  image: string;
  roomName: string;
  price: number;
}

const checkBoxTypographyStyle = {
  color: "#9A9AB0",
  fontSize: "16px",
  lineHeight: "125%",
  fontStyle: "normal",
  letterSpacing: "0.08px",
  fontWeight: "400",
};

const buttonStyle = {
  borderRadius: "8px",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "18px 24px",
  gap: "10px",
  textTransform: "none",
  width: "100%",
  height: "56px",
  marginTop: "20px",
  backgroundColor: "#C7923E",
  "&:hover": {
    backgroundColor: "#c7833e",
  },
};


const RoomCard: React.FC<RoomCardProps> = ({ image, roomName, price }) => {
  const router = useRouter();

  const navigationToRoomDetailsScreen = () => {
    router.push("/room-details");
  };

  return (
    <>
      <Card
        elevation={0}
        sx={{
          borderRadius: "8px",
          border: "1px solid",
          borderColor: "var(--light-separators-colors-secondary, #E1E1E1)",
          maxWidth: "400px",
          height: "584px",
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
            src={image}
            alt="test"
            width={400}
            height={310}
            style={{
              width: "100%",
              height: "310px",
              flexShrink: 0,
            }}
          />
        </Box>
        <CardContent>
          <Box sx={{ paddingTop: "10px", marginBottom: "10%" }}>
            <Typography
              variant="body1"
            >
              {roomName}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "15px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CheckBoxIcon sx={{ fontSize: 32, color: "#9A9AB0" }} />
                <Typography
                  variant='h4' color='#9A9AB0'
                >
                  {roomCardCheckIconContent.checkIcon1Caption}
                </Typography>
                <CheckBoxIcon
                  sx={{
                    fontSize: 32,
                    color: "#9A9AB0",
                    marginLeft: "22px",
                  }}
                />
                <Typography
                  variant='h4' color='#9A9AB0'
                >
                  {roomCardCheckIconContent.checkIcon2Caption}
                </Typography>
                <CheckBoxIcon
                  sx={{
                    fontSize: 32,
                    color: "#9A9AB0",
                    marginLeft: "22px",
                  }}
                />
                <Typography
                  variant='h4' color='#9A9AB0'
                >
                  {roomCardCheckIconContent.checkIcon3Caption}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", paddingTop: '2.5rem' }}>
              <Box>
                <Button
                  variant="contained"
                  onClick={navigationToRoomDetailsScreen}
                >
                  {roomCardTexts.custonText1}
                </Button>
              </Box>
              <Box sx={{ marginLeft: "120px" }}>
                <Typography
                  variant="h5"

                >
                  {roomCardTexts.custonText2}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Typography
                    variant="body1"
                  >
                    ${price}
                  </Typography>
                  <Typography
                    variant="h4" paddingTop={1}
                  >
                    /{roomCardTexts.custonText3}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default RoomCard;
