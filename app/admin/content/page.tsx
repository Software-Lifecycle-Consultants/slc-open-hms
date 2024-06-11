"use client";
import React, { useState } from 'react';
import { Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import BannerDetails from "@/components/back-end/admin/content/BannerDetails";
import MainBannerCard from "@/components/back-end/admin/content/MainBannerCard";
import BannerCard from "@/components/back-end/admin/content/BannerCard";

const HomePage: React.FC = () => {
  const [component, setComponent] = useState<string>('');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setComponent(event.target.value as string);
  };

  return (
    <Container>
      <FormControl fullWidth margin="normal">
        <InputLabel id="component-select-label">Select Component</InputLabel>
        <Select
          labelId="component-select-label"
          value={component}
          label="Select Component"
          onChange={handleChange}
        >
          <MenuItem value="x">Banner Details</MenuItem>
          <MenuItem value="y">Main Banner Card</MenuItem>
          <MenuItem value="z">Banner Card</MenuItem>
        </Select>
      </FormControl>
      {component === 'x' && <BannerDetails />}
      {component === 'y' && <MainBannerCard />}
      {component === 'z' && <BannerCard />}
    </Container>
  );
};

export default HomePage;
