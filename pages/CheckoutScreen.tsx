import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import BookingDetailsForm from '@/components/checkout/BookingDetailsForm';
import Calender from '@/components/checkout/Calender';
import GuestRoom from '@/components/checkout/GuestRoom';
import Heading from '@/components/checkout/Heading';
import ServicesCard from '@/components/checkout/ServicesCard';
import SubmitButton from '@/components/checkout/SubmitButton';
// import TestCalender from '@/components/checkout/TestCalender';
import { Grid, Box, Container } from '@mui/material';
import React from 'react'

const CheckoutScreen = () => {
  return (
    <>

      {/* <NavBar /> */}

      <Box sx={{ backgroundColor: "#FFF", padding: "40px 0", width: "100%" }}>
        <Container>
          <Heading />
        </Container>
      </Box>

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

      <Box sx={{ backgroundColor: "#FFF", padding: "40px 0", width: "100%" }}>
        <Container>
          <Footer />
        </Container>
      </Box>
    </>
  );
}

export default CheckoutScreen
