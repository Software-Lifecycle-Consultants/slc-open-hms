"use client";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { postData } from "@/services/api";
import HeaderSection from "@/components/frontend/contactUsPage/HeaderSection";
import { Box, Grid } from "@mui/material";
import ContactCard from "@/components/frontend/contactUsPage/ContactCard";
import ContactForm from "@/components/frontend/contactUsPage/ContactForm";
import { positionInfos } from "@/data/contactPage";
import dynamic from "next/dynamic";
import Head from "next/head";
import { contactSeo } from "@/data/seo";

/**
 * ContactUs component represents the Contact Us screen of the website.
 * It includes map and a contact form.
 */

const ContactUs = () => {
  const Map = dynamic(() => import("@/components/frontend/contactUsPage/Map/Map"), {
    ssr: false,
  });
  return (
    <>
    <Head>
        <title>{contactSeo.metatitle}</title>
        <meta name="description" content={contactSeo.metadescription} />
        <meta name="keywords" content={contactSeo.metakeywords} />
        <meta property="og:title" content={contactSeo.metaogtitle} />
        <meta property="og:description" content={contactSeo.metaogdescription} />
        <meta property="og:image" content={contactSeo.metaogimage} />
        <meta property="og:url" content={contactSeo.metaogurl} />
        <meta property="og:type" content={contactSeo.metaogtype} />
        <link rel="canonical" href={contactSeo.canonicallink} />
      </Head>
      <Box
        sx={{
          backgroundColor: "white",
          color: "white",
          width: "100%",
          display: "inline-block",
          p: '2.5rem 0',

        }}
      >
      <Container>
        {/* header section of the contact page */}
        <HeaderSection />
      </Container>
      </Box>

      <Container>
      <Box
        sx={{
          display: { xs: "block", sm: "flex", md: "flex", lg: "flex" },
        }}
      >
        {/* contact card section */}
        <ContactCard />
      </Box>
      </Container>

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
