import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import Image from "next/image";
import review from "../public/images/Review.png";

const Testimonials = () => {
    return (
      <>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              style={{
                position: "relative",
                maxWidth: "400px",
                margin: "0 auto",
              }}
            >
              <Image
                src={review}
                alt="test"
                width={"558px"}
                height={"238px"}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "20px",
                  marginTop: "80px",
                  //   flexShrink: 0,
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} paddingRight={{ xs: "16px", md: "32px" }}>
            <Box>
              <Typography
                variant="h1"
                style={{
                  color: "#0C111F",
                  fontFamily: "Inter",
                  fontSize: "48px",
                  lineHeight: "130%",
                  fontStyle: "normal",
                  letterSpacing: "-0.48px",
                  fontWeight: "700",
                  marginTop: "90px",
                }}
              >
                Testimonials Travala Customers
              </Typography>
              <Typography
                variant="body2"
                style={{
                  color: "#0C111F",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  lineHeight: "180%",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginTop: "5px",
                  marginBottom: "90px",
                }}
              >
                What our customers have to say about our service, check below!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </>
    );
}

export default Testimonials
