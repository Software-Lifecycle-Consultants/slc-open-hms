"use client";
import React, { useState } from "react";
import {
  Box, Container, Grid, Typography, Button, IconButton, TextField, Stack, Chip,
  List, ListItem, ListItemIcon, ListItemText
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HotelIcon from "@mui/icons-material/Hotel";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
// Interface defining the structure of room data
interface RoomData {
  id: string;
  roomType: string;
  bedType: string;
  guestCapacity: string;
  price: string;
}

// Static data for room list display and button text
const roomlistData = {
  roomlistAddMoreButton: "Add More",
  roomlistText: "Family Room",
  bedText: "King Size",
  guesttext: "2 Guest",
  pricetext: "$600.00",
};

// Sample room data array
const rooms: RoomData[] = [
  { id: "1", roomType: "Family Room", bedType: "King Size", guestCapacity: "2 Guest", price: "$600.00" },
  { id: "2", roomType: "Double Room", bedType: "Queen Size", guestCapacity: "2 Guest", price: "$500.00" },
  { id: "3", roomType: "Single Room", bedType: "Twin Size", guestCapacity: "1 Guest", price: "$400.00" },
  { id: "4", roomType: "Suite", bedType: "King Size", guestCapacity: "4 Guest", price: "$800.00" },
];

const Rooms = () => {
  // State hooks for managing chip inputs and lists
  const [roomTypeChips, setRoomTypeChips] = useState<string[]>([]);
  const [bedChips, setBedChips] = useState<string[]>([]);
  const [guestChips, setGuestChips] = useState<string[]>([]);
  const [serviceChips, setServiceChips] = useState<string[]>([]);
  const [roomTypeInput, setRoomTypeInput] = useState("");
  const [bedInput, setBedInput] = useState("");
  const [guestInput, setGuestInput] = useState("");
  const [serviceInput, setServiceInput] = useState("");

  // Function to handle adding a new chip to the list
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

  // Function to handle deleting a chip from the list
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
      {/* Container for the "Add More" button */}
      <Container maxWidth="lg" sx={{ position: 'relative', marginBottom: "20px" }}>
        <Link href="/admin/room-details" style={{ position: 'absolute', top: '15px', right: '22px' }}>
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
            }}>
            {roomlistData.roomlistAddMoreButton}
          </Button>
        </Link>

        {/* List of rooms displayed using the List component */}
        <Grid maxWidth="lg" sx={{
          marginTop: { xs: "80px", md: "130px" },
          padding: { xs: "0 15px", sm: "0" } // Add some padding on mobile
        }}>
          <List>
            {rooms.map((room) => (
              <ListItem
                key={room.id}
                alignItems="center"
                sx={{
                  borderBottom: '1px solid #e0e0e0',
                  '&:last-child': { borderBottom: 'none' },
                  py: 2,
                }}
              >
                <ListItemIcon>
                  <Box
                    sx={{
                      backgroundColor: "#D9D9D9",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 45,
                      height: 45,
                    }}
                  >
                    <HotelIcon sx={{ color: '#666666', width: 35, height: 35 }} />
                  </Box>
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        fontFamily: "Mulish",
                        fontWeight: 550,
                        fontSize: { xs: "16px", sm: "18px" },
                      }}
                    >
                      <Typography variant="h3" sx={{ flexBasis: { xs: '70%', sm: '20%' } }}ml={2}>
                        {room.roomType}
                      </Typography>
                      <Box sx={{ display: { xs: 'none', sm: 'block' }, flexBasis: '20%' }}ml={13}>
                        <Typography variant="h3">
                          {room.bedType}
                        </Typography>
                      </Box>
                      <Box sx={{ display: { xs: 'none', sm: 'block' }, flexBasis: '20%' }}ml={13}>
                        <Typography variant="h3">
                          {room.guestCapacity}
                        </Typography>
                      </Box>
                      <Box sx={{ display: { xs: 'none', sm: 'block' }, flexBasis: '20%' }}ml={13}>
                        <Typography variant="h3">
                          {room.price}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexBasis: { xs: '30%', sm: '20%' } }}>
                        <IconButton size="small">
                          <EditIcon />
                        </IconButton>
                        <IconButton size="small">
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Container>

      {/* Container for room details and FAQ */}
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
                {/* Room Type Input and Chips */}
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
                {/* Bed Input and Chips */}
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
                {/* Guest Input and Chips */}
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

export default Rooms;