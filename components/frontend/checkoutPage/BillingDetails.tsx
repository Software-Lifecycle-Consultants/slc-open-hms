import { useState } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import React from 'react'
import { billingDetailsForm } from "@/data/checkoutPage";
import { lora, mulish } from "../../../app/fonts";
import { checkoutSeo } from '@/data/seo';
import { z } from 'zod';

//Define the schema for the billing details form
const billingDetailsSchema = z.object({
  firstName: z.string().nonempty({ message: 'First name is required' }),
  lastName: z.string().nonempty({ message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  telephone: z.string()
    .min(7, { message: 'The Telephone Number is not a valid phone number.' })
    .max(15, { message: 'The Telephone Number is not a valid phone number.' }),
  passport: z.string()
    .nonempty({ message: 'Passport ID is required' })
    .min(6, { message: 'Passport ID invalid' })
    .max(9, { message: 'Passport ID invalid' }),
  address: z.string().nonempty({ message: 'Address is required' }),
});

type FormData = z.infer<typeof billingDetailsSchema>;
type Errors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  telephone?: string;
  passport?: string;
  address?: string;
};
interface BillingDetailsProps {
  email: string;
  setEmail: (email: string) => void;
}

/**
 * BillingDetails component is the form used in checkout page to input users billing details.
 */
const BillingDetails: React.FC<BillingDetailsProps> = ({ email, setEmail }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: email,
    telephone: '',
    passport: '',
    address: '',
  });

  const [formErrors, setFormErrors] = useState<Errors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === 'email') {
      setEmail(value);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormErrors({ firstName: '', lastName: '', email: '', telephone: '', passport: '', address: '' });

    try {
      billingDetailsSchema.parse(formData);
      console.log('Form data is valid:', formData);
      // Proceed with form submission logic here
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: any = {};
        error.errors.forEach((err) => {
          errors[err.path[0]] = err.message;
        });
        setFormErrors(errors);
      }
    }
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
          <form onSubmit={handleSubmit}>
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
                  onChange={handleInputChange}
                  error={!!formErrors.firstName}
                  helperText={formErrors.firstName}
                  
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
                  name='lastName'
                  id="outlined-basic"
                  aria-label={checkoutSeo.billingDetailsAriaLabel2}
                  placeholder="Input your Last Name in Here"
                  variant="outlined"
                  sx={{ marginTop: '0.625rem' }}
                  value={formData.lastName}
                  onChange={handleInputChange}
                  error={!!formErrors.lastName}
                  helperText={formErrors.lastName}
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
                name='email'
                required
                value={formData.email}
                onChange={handleInputChange}
                  id="outlined-basic"
                  aria-label={checkoutSeo.billingDetailsAriaLabel3}
                  placeholder="Input your Email Address in Here"
                  variant="outlined"
                  sx={{ marginTop: '0.625rem' }}
                  error={!!formErrors.email}
                  helperText={formErrors.email}
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
                  name='telephone'
                  id="outlined-basic"
                  aria-label={checkoutSeo.billingDetailsAriaLabel4}
                  placeholder="Input your Phone Number in Here"
                  variant="outlined"
                  sx={{ marginTop: '0.625rem' }}
                  value={formData.telephone}
                  onChange={handleInputChange}
                  error={!!formErrors.telephone}
                  helperText={formErrors.telephone}
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
                  name='passport'
                  id="outlined-basic"
                  aria-label={checkoutSeo.billingDetailsAriaLabel5}
                  placeholder="Input your Email Address in Here"
                  variant="outlined"
                  sx={{ marginTop: '0.625rem' }}
                  value={formData.passport}
                  onChange={handleInputChange}
                  error={!!formErrors.passport}
                  helperText={formErrors.passport}
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
                  onChange={handleInputChange}
                  error={!!formErrors.address}
                  helperText={formErrors.address}
                />
              </Grid>
              <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '1rem' }}>
            Submit
          </Button>
        </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default BillingDetails;
