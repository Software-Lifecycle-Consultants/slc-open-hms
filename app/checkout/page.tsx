"use client";
import { useState } from 'react';
import Calender from "@/components/frontend/checkoutPage/Calender";
import Heading from "@/components/frontend/checkoutPage/Heading";
import SubmitButton from "@/components/frontend/checkoutPage/SubmitButton";
import { Grid, Box, Container } from "@mui/material";
import React from "react";
import BillingDetails from "@/components/frontend/checkoutPage/BillingDetails";
import BookingInfo from "@/components/frontend/checkoutPage/BookingInfo";
import ExtraFacilitation from "@/components/frontend/checkoutPage/ExtraFacilitation";
import TermAndCondition from "@/components/frontend/checkoutPage/TermAndCondition";
import Head from 'next/head';
import { checkoutSeo } from '@/data/seo';

/**
 * CheckoutScreen component represents the checkout screen of the website.
 * It includes sections like Heading, Billing details form, Booking info, Extra facilitation, Calendar, and Submit button.
 */

const CheckoutScreen = () => {
  // Initializes form state with default values for all form fields.
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    passportId: '',
    address: ''
  });

  // Initializes state to store validation error messages for each form field.
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  return (
    <>
      <Head>
        <title>{checkoutSeo.metatitle}</title>
        <meta name="description" content= {checkoutSeo.metadescription} />
        <meta name="keywords" content={checkoutSeo.metakeyword}/>
        <meta property="og:title" content={checkoutSeo.metaogtitle} />
        <meta property="og:description" content={checkoutSeo.metaogdescription} />
        <meta property="og:type" content={checkoutSeo.metaogtype} />
        <meta property="og:url" content={checkoutSeo.metaogurl} />
        <meta property="og:image" content={checkoutSeo.metaogimage} />
        <link rel="canonical" href={checkoutSeo.canonicallink} />
      </Head>
      <Box sx={{ backgroundColor: "#FFF", padding: "40px 0", width: "100%" }}>
        <Container>
          <Heading />
        </Container>
      </Box>
      <Box
        sx={{
          columnGap: 2,
          rowGap: 3,
        }}
      >
        <Container>
          <Grid container spacing={2} >
            <Grid item xs={12} md={8} >
            {/*Passes form data, a function to update form data, and validation errors to the BillingDetails component. */}
              <BillingDetails formData={formData} setFormData={setFormData} errors={errors} />
              {/* <BookingDetailsForm /> */}
            </Grid>
            <Grid item xs={12} md={4}>
              <BookingInfo />
              {/* <GuestRoom /> */}
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <ExtraFacilitation />
              {/* <ServicesCard /> */}
            </Grid>
            <Grid item xs={12} md={4}>
              <Calender />
              <TermAndCondition />
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
            {/* Passes form data and a function to update validation errors to the SubmitButton component. */}
              <SubmitButton formData={formData} setErrors={setErrors} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default CheckoutScreen;
