"use client";
import React from "react";
import { Typography } from "@mui/material";
import "react-date-range/dist/styles.css"; // Import the styles
import "react-date-range/dist/theme/default.css";
import { mulish } from "../../app/fonts";
import { termsText } from "@/data/checkoutPage";
import { Grid } from "@mui/material";

const TermAndCondition = () => {
  return (
    <Grid>
      {/* Terms and Conditions */}
      <Typography
        variant="h5"
        className={mulish.className}
        style={{
          color: "#11142D",
          fontSize: "16px",
          lineHeight: "120%",
          fontStyle: "normal",
          letterSpacing: "0.08px",
          fontWeight: "700",
          marginTop: "8px",
          textAlign: "center",
        }}
      >
        {termsText.termTitle}
      </Typography>
      {/* Special Request */}
      <Typography
        variant="body1"
        className={mulish.className}
        style={{
          color: "#9A9AB0",
          fontSize: "16px",
          lineHeight: "125%",
          fontStyle: "normal",
          letterSpacing: "0.08px",
          fontWeight: "400",
          marginTop: "16px",
          textAlign: "center",
        }}
      >
        {termsText.term1}
      </Typography>
      <Typography
        variant="body1"
        className={mulish.className}
        style={{
          color: "#9A9AB0",
          fontSize: "16px",
          lineHeight: "125%",
          fontStyle: "normal",
          letterSpacing: "0.08px",
          fontWeight: "400",
          marginTop: "16px",
          textAlign: "center",
        }}
      >
        {termsText.term2}
      </Typography>
      <Typography
        variant="body1"
        className={mulish.className}
        style={{
          color: "#9A9AB0",
          fontSize: "16px",
          lineHeight: "125%",
          fontStyle: "normal",
          letterSpacing: "0.08px",
          fontWeight: "400",
          marginTop: "16px",
          textAlign: "center",
        }}
      >
        {termsText.term3}
      </Typography>
    </Grid>
  );
};

export default TermAndCondition;
