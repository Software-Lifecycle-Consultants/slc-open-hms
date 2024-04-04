"use client";
import {
  Box,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Select from "@mui/material/Select";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSelect = (key: string, selector: string) => {
    //key = field name, selector = selected value
    const params = new URLSearchParams(searchParams);

    if (selector) {
      params.set(key, selector);
    } else {
      params.delete(key);
    }
    //replace the current url with the new url
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSearch = (searchTerm: string) => {
    //searchTerm = search query
    const params = new URLSearchParams(searchParams);
    console.log(searchTerm);
    if (searchTerm) {
      params.set("query", searchTerm);
    } else {
      params.delete("query");
    }
    //replace the current url with the new url
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <Box
        sx={{
          borderRadius: "8px",
          padding: "16px 0px 16px 0px",
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
                defaultValue={searchParams.get("query")?.toString()}
                onChange={(e) => handleSearch(e.target.value)}
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
                      id="roomType"
                      value={searchParams.get("roomType")?.toString() || ""}
                      onChange={(e) => handleSelect("roomType", e.target.value)}
                      label="Room Type"
                    >
                      <MenuItem value="">Select Room Type</MenuItem>
                      <MenuItem value="Executive Suite">
                        Executive Suite
                      </MenuItem>
                      <MenuItem value="Family Room">Family room</MenuItem>
                      <MenuItem value="King Suite">King Suite</MenuItem>
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
                      id="guest"
                      value={searchParams.get("guest")?.toString() || ""}
                      onChange={(e) => handleSelect("guest", e.target.value)}
                      label="Guest"
                    >
                      <MenuItem value="">Select Number of Guests</MenuItem>
                      <MenuItem value="1 Adult">1 Adult</MenuItem>
                      <MenuItem value="2 Adults">2 Adults</MenuItem>
                      <MenuItem value="2 Adults & 1 child">
                        2 Adults & 1 child
                      </MenuItem>
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
                      id="beds"
                      value={searchParams.get("beds")?.toString() || ""}
                      onChange={(e) => handleSelect("beds", e.target.value)}
                      label="Beds"
                    >
                      <MenuItem value="">Select Bed Type</MenuItem>
                      <MenuItem value="1 single Queen">1 single Queen</MenuItem>
                      <MenuItem value="King size">King size</MenuItem>
                      <MenuItem value="Double bed">Double bed</MenuItem>
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
                      id="sortBy"
                      value={searchParams.get("sortBy")?.toString() || ""}
                      onChange={(e) => handleSelect("sortBy", e.target.value)}
                      label="Sort By"
                    >
                      <MenuItem value="">All</MenuItem>
                      <MenuItem value="20">Twenty</MenuItem>
                      <MenuItem value="30">Thirty</MenuItem>
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
};

export default SearchBar;
