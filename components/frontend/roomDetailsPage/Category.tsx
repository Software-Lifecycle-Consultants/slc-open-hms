/* eslint-disable react/jsx-key */
import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Box, Card, Container, MenuItem, Select, Stack, Typography } from "@mui/material";
import { category } from "@/data/roomDetails";
import { FormControl, InputLabel, OutlinedInput, InputAdornment } from "@mui/material";
import Chip from "@mui/material/Chip";

export default function Category() {
  const [isEditing, setIsEditing] = React.useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const [firstFieldValue, setFirstFieldValue] = React.useState("");
  const [secondFieldValue, setSecondFieldValue] = React.useState("");
  const [thirdFieldValue, setThirdFieldValue] = React.useState("");

  const handleFirstFieldChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFirstFieldValue(event.target.value);
  };

  const handleSecondFieldChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSecondFieldValue(event.target.value);
  };

  const handleThirdFieldChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setThirdFieldValue(event.target.value);
  };

  const handleChange = () => {};

  return (
    <Card
      elevation={0}
      sx={{
        height: "600px",
        Width: "auto",
        border: "1px solid",
        borderRadius: "8",
        borderColor: "#D0D5DD",
        flexShrink: "0",
        padding: "10px 25px 10px 25px",
      }}
    >
      <Box>
        <Typography
          variant="h3"
          mt={2}
        >
          {category.detailsCategory}
        </Typography>
      </Box>
      {/* Stack for the form layout */}
      <Stack spacing={2} marginTop={2}>
        {/* Autocomplete component for the category 1 */}
        <Typography
          variant='h2'
          mt={2}
        >
          {category.category1}
        </Typography>
        {/* Dropdown component for the category 2 */}
          <FormControl fullWidth margin="normal">
          <InputLabel id="roomtype-select-label">
              <Typography>Select Room Type</Typography>
            </InputLabel>
            <Select
            labelId="roomtype-select-label"
            label="Select Room Type"
            >
              <MenuItem value="a"> <Typography>Family Room</Typography></MenuItem>
              <MenuItem value="b"> <Typography>Executive Room</Typography></MenuItem>
              <MenuItem value="c"> <Typography>Luxury Room</Typography></MenuItem>
            </Select>
          </FormControl>
        <Typography
          mt={2}
          variant='h2'
        >
          {category.category2}
        </Typography>
        {/* Dropdown component for the category 3*/}
        <FormControl fullWidth margin="normal">
          <InputLabel id="bedtype-select-label">
              <Typography>Select Bed Type</Typography>
            </InputLabel>
            <Select
            labelId="bedtype-select-label"
            label="Select bed Type"
            >
              <MenuItem value="e"> <Typography>King Size</Typography></MenuItem>
              <MenuItem value="f"> <Typography>Double Size</Typography></MenuItem>
              <MenuItem value="g"> <Typography>Single</Typography></MenuItem>
            </Select>
          </FormControl>
        <Typography
          variant='h2'
          mt={2}
        >
          {category.category3}
        </Typography>
        {/* Dropdown component for the category 4 */}
        <FormControl fullWidth margin="normal">
          <InputLabel id="guest-select-label">
              <Typography>Select Guests</Typography>
            </InputLabel>
            <Select
            labelId="guest-select-label"
            label="Select Guests"
            >
              <MenuItem value="h"> <Typography>01</Typography></MenuItem>
              <MenuItem value="i"> <Typography>02</Typography></MenuItem>
              <MenuItem value="j"> <Typography>03</Typography></MenuItem>
            </Select>
          </FormControl>
        <Typography
          variant='h2'
          mt={2}
        >
          Price
        </Typography>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </Stack>
    </Card>
  );
};
function useState<T>(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}

