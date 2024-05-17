/* eslint-disable react/jsx-key */
import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Box, Card, Stack, Typography } from "@mui/material";
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
        height: "540px",
        Width: "auto",
        border: "1px solid",
        borderRadius: "8px",
        borderColor: "#D0D5DD",
        flexShrink: "0",
        padding: "10px 25px 10px 25px",
      }}
    >
      <Box>
        <Typography
          style={{
            color: "Gray",
            fontSize: "16px",
            lineHeight: "120%",
            fontStyle: "normal",
            letterSpacing: "0.12px",
            fontWeight: "700",
            marginTop: "10px",
          }}
        >
          {category.detailsCategory}
        </Typography>
      </Box>
      {/* Stack for the form layout */}
      <Stack spacing={2} marginTop={2}>
        {/* Autocomplete component for the category 1 */}
        <Autocomplete
          multiple
          id="tags-filled"
          freeSolo
          onInputChange={handleChange} // Listen for input changes
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter Category Name"
            />
          )}
          options={[]}
        />
        <Typography
          style={{
            color: "Gray",
            fontSize: "16px",
            lineHeight: "120%",
            fontStyle: "normal",
            letterSpacing: "0.12px",
            fontWeight: "700",
            marginTop: "10px",
          }}
        >
          {category.category1}
        </Typography>
        {/* Autocomplete component for the category 2 */}
        <Autocomplete
          multiple
          id="tags-filled"
          freeSolo
          onInputChange={handleChange} // Listen for input changes
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter Category Name"
            />
          )}
          options={[]}
        />
        <Typography
          style={{
            color: "Gray",
            fontSize: "16px",
            lineHeight: "120%",
            fontStyle: "normal",
            letterSpacing: "0.12px",
            fontWeight: "700",
            marginTop: "10px",
          }}
        >
          {category.category2}
        </Typography>
        {/* Autocomplete component for the category 3*/}
        <Autocomplete
          multiple
          id="tags-filled"
          freeSolo
          onInputChange={handleChange} // Listen for input changes
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter Category Name"
            />
          )}
          options={[]}
        />
        <Typography
          style={{
            color: "Gray",
            fontSize: "16px",
            lineHeight: "120%",
            fontStyle: "normal",
            letterSpacing: "0.12px",
            fontWeight: "700",
            marginTop: "10px",
          }}
        >
          {category.category3}
        </Typography>
        {/* Autocomplete component for the category 4 */}
        <Autocomplete
          multiple
          id="tags-filled"
          freeSolo
          onInputChange={handleChange} // Listen for input changes
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter Category Name"
            />
          )}
          options={[]}
        />
        <Typography
          style={{
            color: "Gray",
            fontSize: "16px",
            lineHeight: "120%",
            fontStyle: "normal",
            letterSpacing: "0.12px",
            fontWeight: "700",
            marginTop: "10px",
          }}
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
