"use client"
import Calender from "@/components/checkout/Calender";
import Heading from "@/components/checkout/Heading";
import SubmitButton from "@/components/checkout/SubmitButton";
import { Grid, Box, Container } from "@mui/material";
import React from "react";
import BillingDetails from "@/components/checkout/BillingDetails";
import BookingInfo from "@/components/checkout/BookingInfo";
import ExtraFacilitation from "@/components/checkout/ExtraFacilitation";
import TermAndCondition from "@/components/checkout/TermAndCondition";
/**
 * CheckoutScreen component represents the checkout screen of the website.
 * It includes sections like Heading, Billing details form, Booking info, Extra facilitation, Calender and Submit button.
 */

const CheckoutScreen = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#FFF", padding: "40px 0", width: "100%" }}>
        <Container>
          <Heading />
        </Container>
      </Box>
      <Box
        sx={{
          display: "grid",
          columnGap: 2,
          rowGap: 3,
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <BillingDetails />
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
              <TermAndCondition/>
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <SubmitButton />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default CheckoutScreen;
