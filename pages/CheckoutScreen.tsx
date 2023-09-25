import React from "react";
import { Grid, Box, Container } from "@mui/material";
import Calender from "@/components/checkout/Calender"; // Importing Calender component from the 'checkout' folder
import Heading from "@/components/checkout/Heading"; // Importing Heading component from the 'checkout' folder
import SubmitButton from "@/components/checkout/SubmitButton"; // Importing SubmitButton component from the 'checkout' folder
import BillingDetails from "@/components/checkout/BillingDetails"; // Importing BillingDetails component from the 'checkout' folder
import BookingInfo from "@/components/checkout/BookingInfo"; // Importing BookingInfo component from the 'checkout' folder
import ExtraFacilitation from "@/components/checkout/ExtraFacilitation"; // Importing ExtraFacilitation component from the 'checkout' folder

/**
 * CheckoutScreen component represents the checkout screen of the website.
 * It includes sections like Heading, Billing details form, Booking info, Extra facilitation, Calender and Submit button.
 */

const CheckoutScreen = () => {
  return (
    <>
      {/* Heading Section */}
      <Box sx={{ backgroundColor: "#FFF", padding: "40px 0", width: "100%" }}>
        <Container>
          <Heading />
        </Container>
      </Box>

      {/* Main Content Section */}
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
              {/* Billing Details Section */}
              <BillingDetails />
            </Grid>
            <Grid item xs={12} md={4}>
              {/* Booking Info Section */}
              <BookingInfo />
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              {/* Extra Facilitation Section */}
              <ExtraFacilitation />
            </Grid>
            <Grid item xs={12} md={4}>
              {/* Calendar Section */}
              <Calender />
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              {/* Submit Button Section */}
              <SubmitButton />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default CheckoutScreen;
