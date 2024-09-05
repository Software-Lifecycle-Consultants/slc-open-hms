import { useState } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import React from 'react'
import { billingDetailsForm } from "@/data/checkoutPage";
import { lora, mulish } from "../../../app/fonts";
import { checkoutSeo } from '@/data/seo';

// Defines the props that the BillingDetails component expects.
interface BillingDetailsProps {
  formData: {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    passportId: string;
    address: string;
  };
   // Function to update the formData state
  setFormData: React.Dispatch<React.SetStateAction<{
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    passportId: string;
    address: string;
  }>>;
   // Object containing validation error messages for form fields
  errors: { [key: string]: string };
}
/**
 * BillingDetails component is the form used in checkout page to input users billing details.
 */
const BillingDetails: React.FC<BillingDetailsProps> = ({ formData, setFormData, errors }) => {
  // Manages form input changes and updates the formData in the parent component.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
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
                name='firstName'
                id="outlined-basic"
                aria-label={checkoutSeo.billingDetailsAriaLabel1}
                placeholder="Input your First Name in Here"
                variant="outlined"
                sx={{ marginTop: '0.625rem' }}
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
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
                name="lastName"
                id="outlined-basic"
                aria-label={checkoutSeo.billingDetailsAriaLabel2}
                placeholder="Input your Last Name in Here"
                variant="outlined"
                sx={{ marginTop: '0.625rem' }}
                value={formData.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
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
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                id="outlined-basic"
                aria-label={checkoutSeo.billingDetailsAriaLabel3}
                placeholder="Input your Email Address in Here"
                variant="outlined"
                sx={{ marginTop: '0.625rem' }}
                error={!!errors.email}
                helperText={errors.email}
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
                name="phoneNumber"
                id="outlined-basic"
                aria-label={checkoutSeo.billingDetailsAriaLabel4}
                placeholder="Input your Phone Number in Here"
                // variant=""
                sx={{ marginTop: '0.625rem' }}
                value={formData.phoneNumber}
                onChange={handleChange}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
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
                name="passportId"
                id="outlined-basic"
                aria-label={checkoutSeo.billingDetailsAriaLabel5}
                placeholder="Input your Email Address in Here"
                variant="outlined"
                sx={{ marginTop: '0.625rem' }}
                value={formData.passportId}
                onChange={handleChange}
                error={!!errors.passportId}
                helperText={errors.passportId}
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
                name='address'
                id="outlined-basic"
                aria-label={checkoutSeo.billingDetailsAriaLabel6}
                placeholder="Input your Address in Here"
                variant="outlined"
                sx={{ marginTop: '0.625rem' }}
                value={formData.address}
                onChange={handleChange}
                error={!!errors.address}
                helperText={errors.address}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default BillingDetails;
