"use client";
import React, { useState } from 'react';
import { Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Grid, Button, Typography, Box } from '@mui/material';

import BannerDetails from "@/components/admin/contentPage/BannerDetails";
import MainBannerCard from "@/components/admin/contentPage/MainBannerCard";
import BannerCard from "@/components/admin/contentPage/BannerCard";
import { adminContentPage } from "@/data/admincontent";


const HomePage: React.FC = () => {
  const [component, setComponent] = useState<string>('');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setComponent(event.target.value as string);
  };

  return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <Container>
        <Typography variant="h3" sx={{ marginTop: "20px", fontWeight: "bold" }}>
          {adminContentPage.adminContentPageHeaderTitle}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        ></Box>
      </Container>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Container>
          <FormControl fullWidth margin="normal">
            <InputLabel id="component-select-label">
              Select Component
            </InputLabel>
            <Select
              labelId="component-select-label"
              value={component}
              label="Select Component"
              onChange={handleChange}
            >
              <MenuItem value="x">Hero Banner</MenuItem>
              <MenuItem value="y">Destination Overview</MenuItem>
              <MenuItem value="z">Banner Card</MenuItem>
              <MenuItem value="a">Logo Carousel</MenuItem>
            </Select>
          </FormControl>
          {/* {component === "x" && <HeroBanner />}
          {component === "y" && <DestinationOverview />}
          {component === "z" && <BannerCard />}
          {component === "a" && <LogoCarousel />} */}
        </Container>
      </Grid>
    </Grid>
  );
};

export default HomePage;
