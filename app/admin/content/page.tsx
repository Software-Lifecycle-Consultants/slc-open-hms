"use client";
import React, { useState } from 'react';
import { Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Grid, Button, Typography, Box } from '@mui/material';
import DestinationOverview from '@/components/admin/contentPage/DestinationOverview';
import HeroBanner from '@/components/admin/contentPage/HeroBanner';
import DestinationCards from '@/components/admin/contentPage/DestinationCards';
import dynamic from 'next/dynamic';
const LogoCarousel = dynamic(() => import('@/components/admin/contentPage/LogoCarousel'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/admin/contentPage/Testimonials'), { ssr: false });
const Footer = dynamic(() => import('@/components/admin/contentPage/Footer'), { ssr: false });
import SecondaryBannerSection from '@/components/admin/contentPage/SecondaryBannerSection';
import TermsConditions from '@/components/admin/contentPage/TermsConditions';
import PrivacyPolicy from '@/components/admin/contentPage/PrivacyPolicy';
import { adminContentPage } from "@/data/admincontent";

const HomePage: React.FC = () => {
  const [component, setComponent] = useState<string>('');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setComponent(event.target.value as string);
  };

  return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <Container>
        <Typography variant="h1" sx={{ marginTop: "20px", fontWeight: "bold" }}>
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
              <Typography variant='h3'>Select Component</Typography>
            </InputLabel>
            <Select
              labelId="component-select-label"
              value={component}
              label="Select Component"
              onChange={handleChange}
            >
              <MenuItem value="x">
                <Typography variant="h3">Hero Banner</Typography>
              </MenuItem>
              <MenuItem value="y"> <Typography variant="h3">Destination Overview</Typography></MenuItem>
              <MenuItem value="z"><Typography variant="h3">Destination Cards</Typography></MenuItem>
              <MenuItem value="a"><Typography variant="h3">Logo Carousel </Typography></MenuItem>
              <MenuItem value="b"><Typography variant="h3">Testimonials</Typography></MenuItem>
              <MenuItem value="c"><Typography variant="h3">Secondary Banner Section</Typography></MenuItem>
              <MenuItem value="d"><Typography variant="h3">Terms & Conditions</Typography></MenuItem>
              <MenuItem value="e"><Typography variant="h3">Privacy Policy</Typography></MenuItem>
              <MenuItem value="f"><Typography variant="h3">Footer</Typography></MenuItem>
            </Select>
          </FormControl>
          {component === "x" && <HeroBanner />}
          {component === "y" && <DestinationOverview />}
          {component === "z" && <DestinationCards />}
          {component === "a" && <LogoCarousel />}
          {component === "b" && <Testimonials />}
          {component === "c" && <SecondaryBannerSection />}
          {component === "d" && <TermsConditions />}
          {component === "e" && <PrivacyPolicy />}
          {component === "f" && <Footer />}
        </Container>
      </Grid>
    </Grid>
  );
};

export default HomePage;
