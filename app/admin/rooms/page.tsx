"user client";
import React from "react";
import { Box, Container, Grid, Typography, Button, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HotelIcon from "@mui/icons-material/Hotel";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { roomlistData } from "@/data/roomList";
import Link from "next/link";
const rooms = () => {
  const rooms = [
    { name: "Room Name 1" },
    { name: "Room Name 2" },
    { name: "Room Name 3" },
    { name: "Room Name 4" },
  ];
  return (
    <Box
      padding="30px"
      bgcolor="rgba(238, 245, 255, 1)"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      position="relative"
    >
      {/* Large Container for Add More Button */}
      <Container maxWidth="lg" sx={{ position: 'relative', }}>
        <Link href="/admin/room-details" style={{ position: 'absolute', top: '15px', right: '22px' }}>
          <Button
            variant="outlined"
            endIcon={<AddCircleOutlineIcon/>}
            sx={{
              fontFamily: "Mulish",
              backgroundColor: "#4A5472",
              fontSize: "16px",
              width: "auto",
              height: "auto",
              borderColor: "#5B5959",
              borderWidth: 2,
              color: "white",
              textTransform: "capitalize",
            }}>
            {roomlistData.roomlistAddMoreButton}
          </Button>
        </Link>
        {/* Small Container for Room List */}
        <Container maxWidth="md" sx={{ marginTop: "130px" }}>
          <Box>
            <Grid container spacing={2} justifyContent="space-between">
              {rooms.map((room, index) => (
                <Grid item xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: index === 0 ? "0px" : "5px",
                  }} key={index}>
                  {/* Hotel Icon */}
                  <Box
                    sx={{
                      backgroundColor: "#D9D9D9",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 45,
                      height: 45,
                    }}>
                    <HotelIcon
                      sx={{
                        color: "#666666",
                        width: 35,
                        height: 35,
                      }}/>
                  </Box>
                  {/* Room Name Text */}
                  <Typography
                    sx={{
                      fontFamily: "Mulish",
                      marginLeft: "20px",
                      fontWeight: 550,
                    }}>
                    {roomlistData.roomlistText}
                  </Typography>
                  {/* edit Icon */}
                  <IconButton
                    sx={{
                      marginLeft: "auto",
                      color: "#000000",
                    }}>
                    <EditIcon
                      sx={{
                        width: 28,
                        height: 28,
                      }} />
                  </IconButton>
                  {/* Delete Icon */}
                  <IconButton
                    sx={{
                      color: "#000000",
                    }}>
                    <DeleteIcon
                      sx={{
                        width: 28,
                        height: 28,
                      }} />
                  </IconButton>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Container>
    </Box>
  );
};
export default rooms;
