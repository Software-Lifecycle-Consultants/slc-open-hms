"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  TextField,
  Stack,
  Chip,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HotelIcon from "@mui/icons-material/Hotel";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";

const roomlistData = {
  roomlistAddMoreButton: "Add More",
  roomlistText: "Family Room",
  bedText: "King Size",
  guesttext: "2 Guest",
  pricetext: "$600.00",
};

const rooms = [
  { name: "Room Name 1" },
  { name: "Room Name 2" },
  { name: "Room Name 3" },
  { name: "Room Name 4" },
];

const Dashboard = () => {
  const [roomTypeChips, setRoomTypeChips] = useState<string[]>([]);
  const [bedChips, setBedChips] = useState<string[]>([]);
  const [guestChips, setGuestChips] = useState<string[]>([]);
  const [serviceChips, setServiceChips] = useState<string[]>([]);
  const [roomTypeInput, setRoomTypeInput] = useState("");
  const [bedInput, setBedInput] = useState("");
  const [guestInput, setGuestInput] = useState("");
  const [serviceInput, setServiceInput] = useState("");

  const handleAddChip = (
    setChips: React.Dispatch<React.SetStateAction<string[]>>,
    input: string,
    setInput: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (input.trim() !== "") {
      setChips((chips) => [...chips, input]);
      setInput("");
    }
  };

  const handleDeleteChip =
    (
      setChips: React.Dispatch<React.SetStateAction<string[]>>,
      chipToDelete: string
    ) =>
    () => {
      setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
    };

  return (
    <Box
      padding={{ xs: "15px", md: "30px" }}
      bgcolor="#f0f4fc"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {/* Large Container for Add More Button */}
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Link
          href="/admin/room-details"
          style={{ position: "absolute", top: "15px", right: "22px" }}
        >
          <Button
            variant="outlined"
            endIcon={<AddCircleOutlineIcon />}
            sx={{
              fontFamily: "Mulish",
              backgroundColor: "#4A5472",
              fontSize: "15px",
              width: "130px",
              height: "40px",
              borderColor: "#5B5959",
              borderWidth: 2,
              color: "white",
              textTransform: "capitalize",
            }}
          >
            {roomlistData.roomlistAddMoreButton}
          </Button>
        </Link>
        {/* Small Container for Room List */}
        <Container maxWidth="md" sx={{ marginTop: { xs: "80px", md: "130px" } }}>
          <Box>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              {rooms.map((room, index) => (
                <Grid
                  item
                  xs={12}
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: index === 0 ? "0px" : "5px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      alignItems: "center",
                      textAlign: { xs: "center", sm: "left" },
                      gap: "20px",
                      fontFamily: "Mulish",
                      fontWeight: 550,
                      fontSize: { xs: "18px", sm: "24px" },
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#D9D9D9",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 45,
                        height: 45,
                        marginBottom: { xs: "10px", sm: "0" },
                      }}
                    >
                      <HotelIcon sx={{ color: "#666666", width: 35, height: 35 }} />
                    </Box>
                    <Typography>{roomlistData.roomlistText}</Typography>
                    <Typography>{roomlistData.bedText}</Typography>
                    <Typography>{roomlistData.guesttext}</Typography>
                    <Typography>{roomlistData.pricetext}</Typography>
                    <IconButton sx={{ color: "#000000" }}>
                      <EditIcon sx={{ width: 28, height: 28 }} />
                    </IconButton>
                    <IconButton sx={{ color: "#000000" }}>
                      <DeleteIcon sx={{ width: 28, height: 28 }} />
                    </IconButton>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Container>
      <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              p={3}
              bgcolor="white"
              borderRadius="8px"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Room Details
              </Typography>
              <Stack spacing={2} flexGrow={1}>
                <Typography>Room Type</Typography>
                <Box>
                  {roomTypeChips.map((chip, index) => (
                    <Chip
                      key={index}
                      label={chip}
                      onDelete={handleDeleteChip(setRoomTypeChips, chip)}
                      clickable
                      sx={{ margin: "4px" }}
                    />
                  ))}
                </Box>
                <TextField
                  label="Room Type"
                  variant="outlined"
                  fullWidth
                  value={roomTypeInput}
                  onChange={(e) => setRoomTypeInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddChip(setRoomTypeChips, roomTypeInput, setRoomTypeInput);
                    }
                  }}
                />
                <Typography>Bed</Typography>
                <Box>
                  {bedChips.map((chip, index) => (
                    <Chip
                      key={index}
                      label={chip}
                      onDelete={handleDeleteChip(setBedChips, chip)}
                      clickable
                      sx={{ margin: "4px" }}
                    />
                  ))}
                </Box>
                <TextField
                  label="Bed"
                  variant="outlined"
                  fullWidth
                  value={bedInput}
                  onChange={(e) => setBedInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddChip(setBedChips, bedInput, setBedInput);
                    }
                  }}
                />
                <Typography>Guest</Typography>
                <Box>
                  {guestChips.map((chip, index) => (
                    <Chip
                      key={index}
                      label={chip}
                      onDelete={handleDeleteChip(setGuestChips, chip)}
                      clickable
                      sx={{ margin: "4px" }}
                    />
                  ))}
                </Box>
                <TextField
                  label="Guest"
                  variant="outlined"
                  fullWidth
                  value={guestInput}
                  onChange={(e) => setGuestInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddChip(setGuestChips, guestInput, setGuestInput);
                    }
                  }}
                />
              </Stack>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button variant="outlined">Close</Button>
                <Button variant="contained" sx={{ marginLeft: 2 }}>
                  Save
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              p={3}
              bgcolor="white"
              borderRadius="8px"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Typography variant="h6" gutterBottom>
                FAQ
              </Typography>
              <Stack spacing={2} flexGrow={1}>
                <TextField label="Question 01" variant="outlined" fullWidth />
                <TextField label="Answer" variant="outlined" fullWidth />
                <TextField label="Question 02" variant="outlined" fullWidth />
                <TextField label="Answer" variant="outlined" fullWidth />
                <TextField label="Question 03" variant="outlined" fullWidth />
                <TextField label="Answer" variant="outlined" fullWidth />
              </Stack>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button variant="outlined">Close</Button>
                <Button variant="contained" sx={{ marginLeft: 2 }}>
                  Save
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box p={3} bgcolor="white" borderRadius="8px">
              <Typography variant="h6" gutterBottom>
                Service Add ons
              </Typography>
              <Box>
                {serviceChips.map((chip, index) => (
                  <Chip
                    key={index}
                    label={chip}
                    onDelete={handleDeleteChip(setServiceChips, chip)}
                    clickable
                    sx={{ margin: "4px" }}
                  />
                ))}
              </Box>
              <Stack spacing={2}>
                <TextField
                  label="Add Service"
                  variant="outlined"
                  fullWidth
                  value={serviceInput}
                  onChange={(e) => setServiceInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddChip(setServiceChips, serviceInput, setServiceInput);
                    }
                  }}
                />
              </Stack>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button variant="outlined">Close</Button>
                <Button variant="contained" sx={{ marginLeft: 2 }}>
                  Save
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
