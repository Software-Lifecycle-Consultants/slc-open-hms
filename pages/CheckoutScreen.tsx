import Footer from "@/components/homePage/Footer";
import BookingDetailsForm from "@/components/checkout/BillingDetails";
import Calender from "@/components/checkout/Calender";
import GuestRoom from "@/components/checkout/BookingInfo";
import Heading from "@/components/checkout/Heading";
import ServicesCard from "@/components/checkout/ExtraFacilitation";
import SubmitButton from "@/components/checkout/SubmitButton";
import { Grid, Box, Container } from "@mui/material";
import React from "react";

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
              <BookingDetailsForm />
            </Grid>
            <Grid item xs={12} md={4}>
              <GuestRoom />
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <ServicesCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <Calender />
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
      <Box sx={{ backgroundColor: "#FFF", padding: "40px 0", width: "100%" }}>
        <Container>
          <Footer />
        </Container>
      </Box>
      
    </>
  );
};

export default CheckoutScreen;
