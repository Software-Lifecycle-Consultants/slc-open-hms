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

interface RoomCardProps {
  image: string;
  roomName: string;
  price: number;
}

const checkBoxTypographyStyle = {
  color: "var(--light-text-color-body-2, #9A9AB0)",
  fontFamily: "Mulish, sans-serif",
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
    router.push("/RoomDetailsScreen");
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
                <Typography variant="body1" style={checkBoxTypographyStyle}>
                  {roomCardCheckIconContent.checkIcon1Caption}
                </Typography>
                <CheckBoxIcon
                  sx={{
                    fontSize: 32,
                    color: "#9A9AB0",
                    marginLeft: "22px",
                  }}
                />
                <Typography variant="body1" style={checkBoxTypographyStyle}>
                  {roomCardCheckIconContent.checkIcon2Caption}
                </Typography>
                <CheckBoxIcon
                  sx={{
                    fontSize: 32,
                    color: "#9A9AB0",
                    marginLeft: "22px",
                  }}
                />
                <Typography variant="body1" style={checkBoxTypographyStyle}>
                  {roomCardCheckIconContent.checkIcon3Caption}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Button
                variant="contained"
                onClick={navigationToRoomDetailsScreen}
                sx={buttonStyle}
              >
                {roomCardTexts.custonText1}
              </Button>
              <Box sx={{ marginLeft: "120px" }}>
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
                    marginTop: "20px",
                  }}
                >
                  {roomCardTexts.custonText2}
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
                      marginTop: "2px",
                    }}
                  >
                    ${price}
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
