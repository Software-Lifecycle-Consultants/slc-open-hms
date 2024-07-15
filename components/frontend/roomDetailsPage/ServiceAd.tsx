/* eslint-disable react/jsx-key */
import React from "react";
import { Typography, Card, CardContent, Grid, Stack, TextField, Autocomplete, Box, Checkbox, FormGroup, FormControlLabel } from "@mui/material";
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
          height: "100%",
          Width: "20px",
          border: "1px solid",
          borderRadius: "8",
          borderColor: "#D0D5DD",
          flexShrink: "0",
        }}
      >
        <Box>
          <Typography
          variant="h2"
          mt={2}
          ml={2}
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
                variant="h2"
                mt={2}
                mb={2}
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
            <Typography
                variant='h2'
                mt={2}
                mb={2}                
                >
                  Add ons
                </Typography>
                <Box>
                <Grid container spacing={2}>
                  <Grid item xs={2} lg={2}>
                    <Box>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label='Cheese' />
                      <FormControlLabel control={<Checkbox />} label='Onions' />
                      <FormControlLabel control={<Checkbox />} label='Bacon' />
                    </FormGroup>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={2}>
                    <Box>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label='Pepperoni' />
                      <FormControlLabel control={<Checkbox />} label='Ham' />
                      <FormControlLabel control={<Checkbox />} label='French Fries' />
                    </FormGroup>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={2}>
                    <Box>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label='Peppers' />
                      <FormControlLabel control={<Checkbox />} label='Side Salad' />
                      <FormControlLabel control={<Checkbox />} label='Salad' />
                    </FormGroup>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={2}>
                    <Box>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label='Mushrooms' />
                      <FormControlLabel control={<Checkbox />} label='Olives' />
                      <FormControlLabel control={<Checkbox />} label='Bacon' />
                    </FormGroup>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={2}>
                    <Box>
                    <FormGroup >
                      <FormControlLabel control={<Checkbox />} label='Sausage' />
                      <FormControlLabel control={<Checkbox />} label='Pineapple' />
                      <FormControlLabel control={<Checkbox />} label='Bacon' />
                    </FormGroup>
                    </Box>
                  </Grid>
                </Grid>
                </Box>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </>
  );
};