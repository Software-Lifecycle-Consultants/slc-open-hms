"use client";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { postData } from "@/services/api";
import HeaderSection from "@/components/contactPage/HeaderSection";
import { Box, Grid } from "@mui/material";
import ContactCard from "@/components/contactPage/ContactCard";
import ContactForm from "@/components/contactPage/ContactForm";
import { positionInfos } from "@/data/contactPage";
import dynamic from "next/dynamic";

/**
 * ContactUs component represents the Contact Us screen of the website.
 * It includes map and a contact form.
 */

const ContactUs = () => {
  const Map = dynamic(() => import("@/components/contactPage/Map/Map"), {
    ssr: false,
  });
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          color: "white",
          height: { xs: "200px", sm: "250px", md: "300px", lg: "300px" },
          width: "100%",
          display: "inline-block",

          paddingBottom: "10px",
        }}
      >
        {/* header section of the contact page */}
        <HeaderSection />
      </Box>

      <Box
        sx={{
          display: { xs: "block", sm: "flex", md: "flex", lg: "flex" },
        }}
      >
        {/* contact card section */}
        <ContactCard />
      </Box>

      <Container>
        <Box
          sx={{
            marginTop: "50px",
            display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
          }}
        >
          {/* Map and Contact Form */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Map positionInfos={positionInfos} />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "800px",
              }}
            >
              <ContactForm />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ContactUs;
