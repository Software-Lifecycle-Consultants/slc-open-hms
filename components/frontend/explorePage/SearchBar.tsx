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
import { searchBarData } from "@/data/explorePage";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSelect = (key: string, selector: string) => {
    if (!searchParams) return;

    const params = new URLSearchParams(searchParams as any);

    if (selector) {
      params.set(key, selector);
    } else {
      params.delete(key);
    }
    //replace the current url with the new url
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSearch = (searchTerm: string) => {
    if (!searchParams) return;

    const params = new URLSearchParams(searchParams as any);

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
                defaultValue={searchParams?.get("query")?.toString() || ""}
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
                      {searchBarData.searchBarfilterlbl1}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="roomType"
                      value={searchParams?.get("roomType")?.toString() || ""}
                      onChange={(e) => handleSelect("roomType", e.target.value)}
                      label="Room Type"
                    >
                      <MenuItem value="">{searchBarData.lbl1Content1}</MenuItem>
                      <MenuItem value="Executive Suite">
                        {searchBarData.lbl1Content2}
                      </MenuItem>
                      <MenuItem value="Family Room">
                        {searchBarData.lbl1Content3}
                      </MenuItem>
                      <MenuItem value="King Suite">
                        {searchBarData.lbl1Content4}
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
                      {searchBarData.searchBarfilterlbl2}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="guest"
                      value={searchParams?.get("guest")?.toString() || ""}
                      onChange={(e) => handleSelect("guest", e.target.value)}
                      label="Guest"
                    >
                      <MenuItem value="">{searchBarData.lbl2Content1}</MenuItem>
                      <MenuItem value="1 Adult">
                        {searchBarData.lbl2Content2}
                      </MenuItem>
                      <MenuItem value="2 Adults">
                        {searchBarData.lbl2Content3}
                      </MenuItem>
                      <MenuItem value="2 Adults & 1 child">
                        {searchBarData.lbl2Content4}
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
                      {searchBarData.searchBarfilterlbl3}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="beds"
                      value={searchParams?.get("beds")?.toString() || ""}
                      onChange={(e) => handleSelect("beds", e.target.value)}
                      label="Beds"
                    >
                      <MenuItem value="">{searchBarData.lbl3Content1}</MenuItem>
                      <MenuItem value="1 single Queen">
                        {searchBarData.lbl3Content2}
                      </MenuItem>
                      <MenuItem value="King size">
                        {searchBarData.lbl3Content3}
                      </MenuItem>
                      <MenuItem value="Double bed">
                        {searchBarData.lbl3Content4}
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
                      {searchBarData.searchBarfilterlbl4}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="sortBy"
                      value={searchParams?.get("sortBy")?.toString() || ""}
                      onChange={(e) => handleSelect("sortBy", e.target.value)}
                      label="Sort By"
                    >
                      <MenuItem value="">{searchBarData.lbl4Content1}</MenuItem>
                      <MenuItem value="20">
                        {searchBarData.lbl4Content2}
                      </MenuItem>
                      <MenuItem value="30">
                        {searchBarData.lbl4Content3}
                      </MenuItem>
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
