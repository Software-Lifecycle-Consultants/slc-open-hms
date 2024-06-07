/* eslint-disable react/jsx-key */
import React from "react";
import { Typography, Card, CardContent, Grid, Stack, TextField, Autocomplete, Box } from "@mui/material";
import { serviceAdd } from "@/data/roomDetails";
import Chip from "@mui/material/Chip";

export default function ServiceAd() {
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
    <>
      {/* Card for the billing details form */}
      <Card
        elevation={0}
        sx={{
          height: "420px",
          Width: "20px",
          border: "1px solid",
          borderRadius: "8",
          borderColor: "#D0D5DD",
          flexShrink: "0",
        }}
      >
        <Box>
          <Typography
          mt={2}
          ml={2}
            style={{
              color: "Gray",
              fontSize: "16",
              fontStyle: "normal",
              letterSpacing: "0.12",
              fontWeight: "700",
            }}
          >
            {serviceAdd.serviceAddPageTitle}
          </Typography>
        </Box>
        <CardContent>
          <form>
            {/* Grid container for form layout */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  fullWidth
                  label="Enter Service Add On Title"
                  id="dTitle"
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography
                mt={2}
                mb={2}
                  style={{
                    color: "Gray",
                    fontSize: "16",
                    fontStyle: "normal",
                    letterSpacing: "0.12",
                    fontWeight: "700",
                  }}
                >
                  Description
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Enter description"
                  id="Enter description"
                />
              </Grid>
            </Grid>
            <Stack spacing={2} marginTop={2}>
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
                  <TextField {...params} label="Tags" /> // Towels is the default value
                )}
                options={[]}
              />
            </Stack>
          </form>
        </CardContent>
      </Card>
    </>
  );
};