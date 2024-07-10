"use client";
import React from "react";
import { Typography } from "@mui/material";
import "react-date-range/dist/styles.css"; // Import the styles
import "react-date-range/dist/theme/default.css";
import { mulish } from "../../../app/fonts";
import { termsText } from "@/data/checkoutPage";
import { Grid } from "@mui/material";

const TermAndCondition = () => {
  return (
    <Grid>
      {/* Terms and Conditions */}
      <Typography
        variant="h4" fontWeight='700' marginTop='0.5rem' textAlign='center'
        sx={{ '@media (max-width:600px)': { fontWeight: 700 } }}
      >
        {termsText.termTitle}
      </Typography>
      {/* Special Request */}
      <Typography
        variant='h4' color='#9A9AB0' marginTop='1rem' textAlign='center'
      >
        {termsText.term1}
      </Typography>
      <Typography
        variant='h4' color='#9A9AB0' marginTop='1rem' textAlign='center'
      >
        {termsText.term2}
      </Typography>
      <Typography
        variant='h4' color='#9A9AB0' marginTop='1rem' textAlign='center'
      >
        {termsText.term3}
      </Typography>
    </Grid>
  );
};

export default TermAndCondition;
