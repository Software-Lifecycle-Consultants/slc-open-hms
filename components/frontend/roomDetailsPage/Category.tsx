/* eslint-disable react/jsx-key */
import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Box, Button, Card, Container, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import { category } from "@/data/roomDetails";
import { FormControl, InputLabel, OutlinedInput, InputAdornment } from "@mui/material";
import Chip from "@mui/material/Chip";
import { schemaAdminPanelRoomDetailsCategory } from "@/schemas/adminPanelRoomDetailsCategory.schema";
import { useState } from "react";


export default function Category() {
  const [formData, setFormData] = useState({
    categoryRoomType: "",
    categoryBeds: "",
    categoryGuest: "",
    categoryPrice: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({
    categoryRoomType: null,
    categoryBeds: null,
    categoryGuest: null,
    categoryPrice: null,
  });
  const handleInputChange = (field: string) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>
  ) => {
    const value = event.target.value;
    setFormData({
      ...formData,
      [field]: field === 'categoryPrice' ? value : value,
    });
  };
  const handleSubmit = () => {
    const priceValue = formData.categoryPrice === '' ? 0 : parseFloat(formData.categoryPrice);
  
    const dataToValidate = {
      ...formData,
      categoryPrice: isNaN(priceValue) ? 0 : priceValue
    };
  
    const validationResult = schemaAdminPanelRoomDetailsCategory.safeParse(dataToValidate);
  
    if (!validationResult.success) {
      const validationErrors: { [key: string]: string | null } = {};
  
      validationResult.error.errors.forEach((error) => {
        validationErrors[error.path[0]] = error.message;
      });
  
      setErrors(validationErrors);
    } else {
      console.log("Valid data:", validationResult.data);
      // Process the valid form data
    }
  };
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
          variant="h2"
          mt={2}
        >
          {category.detailsCategory}
        </Typography>
      </Box>
      {/* Stack for the form layout */}
      <Stack spacing={2} marginTop={2}>
        {/* Autocomplete component for the category 1 */}
        <Typography
          variant='h3'
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
            value={formData.categoryRoomType}
            onChange={handleInputChange("categoryRoomType")}
            error={!!errors.categoryRoomType}
            >
              <MenuItem value="a"> <Typography>Family Room</Typography></MenuItem>
              <MenuItem value="b"> <Typography>Executive Room</Typography></MenuItem>
              <MenuItem value="c"> <Typography>Luxury Room</Typography></MenuItem>
            </Select>
          </FormControl>
        <Typography
          mt={2}
          variant='h3'
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
            value={formData.categoryBeds}
            onChange={handleInputChange("categoryBeds")}
            error={!!errors.categoryBeds}
            >
              <MenuItem value="e"> <Typography>King Size</Typography></MenuItem>
              <MenuItem value="f"> <Typography>Double Size</Typography></MenuItem>
              <MenuItem value="g"> <Typography>Single</Typography></MenuItem>
            </Select>
          </FormControl>
        <Typography
          variant='h3'
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
            value={formData.categoryGuest}
            onChange={handleInputChange("categoryGuest")}
            error={!!errors.categoryGuest}
            >
              <MenuItem value="h"> <Typography>01</Typography></MenuItem>
              <MenuItem value="i"> <Typography>02</Typography></MenuItem>
              <MenuItem value="j"> <Typography>03</Typography></MenuItem>
            </Select>
          </FormControl>
        <Typography
          variant='h3'
          mt={2}
        >
          Price
        </Typography>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="categoryPrice"
            value={formData.categoryPrice}
            onChange={handleInputChange("categoryPrice")}
            error={!!errors.categoryPrice}
            type="number" // This line to ensure numerical input
            inputProps={{ step: "0.01" }} // This line to allow two decimal places
          />
          {errors.categoryPrice && (
            <Typography color="error">{errors.categoryPrice}</Typography>
          )}
        </FormControl>
      </Stack>
    </Card>
  );
};
