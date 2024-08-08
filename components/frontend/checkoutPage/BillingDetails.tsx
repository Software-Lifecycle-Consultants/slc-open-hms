import { useState } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import React from 'react'
import { billingDetailsForm } from "@/data/checkoutPage";
import { lora, mulish } from "../../../app/fonts";
import { checkoutSeo } from '@/data/seo';

interface BillingDetailsProps {
  email: string;
  setEmail: (email: string) => void;
}

/**
 * BillingDetails component is the form used in checkout page to input users billing details.
 */

/* Syles for text fields */
const textFieldStyles = {
  width: "100%",
  height: "48px",
  marginTop: "10px",
};

/* Styles for form labels */
const formLabelStyles = {
  color: "#11142D",
  fontSize: "16px",
  lineHeight: "120%",
  fontStyle: "normal",
  letterSpacing: "0.08px",
  fontWeight: "700",
  marginTop: "10px",
};

/* Font style for placeholder */
const mulishPlaceholderStyle = {
  fontFamily: "Mulish",
};

const BillingDetails: React.FC<BillingDetailsProps> = ({ email, setEmail }) => {
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <>
      {/* Card for the billing details form */}
      <Card
        elevation={0}
        sx={{
          height: "auto",
          maxWidth: "816px",
          border: "1px solid",
          borderRadius: "8px",
          borderColor: "#E1E1E1",
          flexShrink: "0",
        }}
      >
        <CardContent>
          <form>
            {/* Grid container for form layout */}
            <Grid container spacing={2} sx={{ padding: "15px 32px 15px 32px" }}>
              {/* Title for the billing details form */}
              <Grid item xs={12}>
                <Typography
                  variant="body1"                  
                >
                  {billingDetailsForm.billingDetailsFormTitle}
                </Typography>
              </Grid>
              {/* First Name */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h4" fontWeight='600' sx={{ '@media (max-width:600px)': { fontWeight: 600 } }}
                >
                  {billingDetailsForm.firstNameLbl}
                </Typography>
                <TextField
                  id="outlined-basic"
                  aria-label={checkoutSeo.billingDetailsAriaLabel1}
                  placeholder="Input your First Name in Here"
                  variant="outlined"
                  sx={{ marginTop: '0.625rem' }}
                  
                />
              </Grid>
              {/* Last Name */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h4" fontWeight='600' sx={{ '@media (max-width:600px)': { fontWeight: 600 } }}
                >
                  {billingDetailsForm.lastNameLbl}
                </Typography>
                <TextField
                  id="outlined-basic"
                  aria-label={checkoutSeo.billingDetailsAriaLabel2}
                  placeholder="Input your Last Name in Here"
                  variant="outlined"
                  sx={{ marginTop: '0.625rem' }}
                />
              </Grid>
              {/* Email Address */}
              <Grid item xs={12}>
                <Typography
                  variant="h4" fontWeight='600' sx={{ '@media (max-width:600px)': { fontWeight: 600 } }}
                >
                  {billingDetailsForm.emailLbl}
                </Typography>
                <TextField
                required
                value={email}
                onChange={handleEmailChange}
                  id="outlined-basic"
                  aria-label={checkoutSeo.billingDetailsAriaLabel3}
                  placeholder="Input your Email Address in Here"
                  variant="outlined"
                  sx={{ marginTop: '0.625rem' }}
                />
              </Grid>
              {/* Phone Number */}
              <Grid item xs={12}>
                <Typography
                  variant="h4" fontWeight='600' sx={{ '@media (max-width:600px)': { fontWeight: 600 } }}
                >
                  {billingDetailsForm.telephoneLbl}
                </Typography>
                <TextField
                  id="outlined-basic"
                  aria-label={checkoutSeo.billingDetailsAriaLabel4}
                  placeholder="Input your Phone Number in Here"
                  variant="outlined"
                  sx={{ marginTop: '0.625rem' }}
                />
              </Grid>
              {/* Passport Number */}
              <Grid item xs={12}>
                <Typography
                  variant="h4" fontWeight='600' sx={{ '@media (max-width:600px)': { fontWeight: 600 } }}
                >
                  {billingDetailsForm.passportLbl}
                </Typography>
                <TextField
                  id="outlined-basic"
                  aria-label={checkoutSeo.billingDetailsAriaLabel5}
                  placeholder="Input your Email Address in Here"
                  variant="outlined"
                  sx={{ marginTop: '0.625rem' }}
                />
              </Grid>
              {/* Address */}
              <Grid item xs={12}>
                <Typography
                  variant="h4" fontWeight='600' sx={{ '@media (max-width:600px)': { fontWeight: 600 } }}
                >
                  {billingDetailsForm.addressLbl}
                </Typography>
                <TextField
                  id="outlined-basic"
                  aria-label={checkoutSeo.billingDetailsAriaLabel6}
                  placeholder="Input your Address in Here"
                  variant="outlined"
                  sx={{ marginTop: '0.625rem' }}                                  
                />
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default BillingDetails;
