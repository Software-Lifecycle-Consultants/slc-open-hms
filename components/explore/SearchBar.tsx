"use client"
import { Box, Container, FormControl, Grid, InputAdornment, InputLabel, MenuItem, TextField } from '@mui/material';
import React from 'react'
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [age, setAge] = useState("");

    const handleSelect = (event: SelectChangeEvent) => {
      setAge(event.target.value);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
  };
  
  // const InputLabelStyle = {
  //   color: "#11142D",
  //   fontFamily: "Mulish, sans-serif",
  //   fontSize: "16px",
  //   lineHeight: "120%",
  //   fontStyle: "normal",
  //   letterSpacing: "0.08px",
  //   fontWeight: "700",
  // };

  return (
    <>
      <Box
        sx={{
          borderRadius: "8px",
          padding: "16px 0px 16px 0px",
          // backgroundColor: "#cacaca",
          backgroundColor: "#FFF",
          marginTop: { xs: "-120px", sm: "-85px", md: "-50px" },
          position: "relative",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Container>
              <TextField
                id="search"
                type="search"
                label="Search"
                value={searchTerm}
                onChange={handleChange}
                sx={{ width: "100%" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Container>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                marginLeft: { xs: "4%", sm: "4%", md: "4%" },
              }}
            >
              <Grid
                container
                rowSpacing={{ xs: 1, md: 1 }}
                columnSpacing={{ xs: 6, sm: 4, md: 1 }}
              >
                <Grid item xs={6} sm={3}>
                  <FormControl
                    variant="standard"
                    sx={{ marginTop: 1, minWidth: { xs: 120, md: 105 } }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      Room Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      onChange={handleSelect}
                      label="Room Type"
                    >
                      <MenuItem value={1}>Executive Suite</MenuItem>
                      <MenuItem value={2}>Family room</MenuItem>
                      <MenuItem value={3}>King Suite</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <FormControl
                    variant="standard"
                    sx={{ marginTop: 1, minWidth: { xs: 120, md: 105 } }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      Guest
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      onChange={handleSelect}
                      label="Guest"
                    >
                      {/* <MenuItem value="">
                        <em>None</em>
                      </MenuItem> */}
                      <MenuItem value={1}>2 Adults</MenuItem>
                      <MenuItem value={2}>1 Adult</MenuItem>
                      <MenuItem value={3}>2 Adults & 1 child</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <FormControl
                    variant="standard"
                    sx={{ marginTop: 1, minWidth: { xs: 120, md: 105 } }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      Beds
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      onChange={handleSelect}
                      label="Beds"
                    >
                      <MenuItem value={1}>1 single Queen</MenuItem>
                      <MenuItem value={2}>King size</MenuItem>
                      <MenuItem value={3}>Double bed</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <FormControl
                    variant="standard"
                    sx={{ marginTop: 1, minWidth: { xs: 120, md: 105 } }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      Sort By
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      onChange={handleSelect}
                      label="Sort By"
                    >
                      <MenuItem value={1}>All</MenuItem>
                      <MenuItem value={2}>Twenty</MenuItem>
                      <MenuItem value={3}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default SearchBar
