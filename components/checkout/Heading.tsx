import React from 'react'
import {
  Grid,
  Typography,
} from "@mui/material";
import { heading } from '@/data/checkoutPage';

const Heading = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <Typography
            variant="h1"
            style={{
              color: "var(--light-text-color-title, #11142D)",
              fontFamily: "Lora",
              fontSize: "62px",
              lineHeight: "120%",
              fontStyle: "normal",
              letterSpacing: "0.186px",
              fontWeight: "700",
              marginTop: "25px",
            }}
          >
            {heading.checkoutPageMainTitle}
          </Typography>
          <Typography
            variant="body2"
            style={{
              color: "var(--light-text-color-body-1, #515151);",
              fontFamily: "Mulish",
              fontSize: "16px",
              lineHeight: "125%",
              fontStyle: "normal",
              fontWeight: "400",
              letterSpacing: "0.08px",
              marginTop: "10px",
            }}
          >
            {heading.checkoutPageDescription}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Heading
