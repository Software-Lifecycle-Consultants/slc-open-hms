"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { adminEditContactUs } from "@/data/admineditcontactus";
import FindInPageIcon from '@mui/icons-material/FindInPage';
import { validateFormData } from "@/utils/validation";
import { adminContactUsSchema} from "@/schemas/adminContactUs.schema";

// Define the form data type based on your schema
type AdminContactUsFormData = {
  title: string;
  description: string;
  email: string;
  phoneNumber: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  stateProvince: string;
  zipCode: string;
  country: string;
};

const AdminContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState<AdminContactUsFormData>({
    title: "",
    description: "",
    email: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    stateProvince: "",
    zipCode: "",
    country: "",
  });

  const [errors, setErrors] = useState<Partial<AdminContactUsFormData>>({});
  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { errors: validationErrors, data } = validateFormData(adminContactUsSchema, formData);

    if (validationErrors) {
      setErrors(validationErrors);// Set errors if validation fails
    } else {
      setErrors({});// Clear errors if validation passes
      console.log("Form Submitted:", data);
      // Perform save actions here, such as API call
    }
  };
  return (
    <Box 
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit} // Handle form submission
      padding="30px" /* Add padding */
      bgcolor="rgba(238, 245, 255, 1)" /* Add background color */
      minHeight="100vh"
      display="flex"
      flexDirection="column"
    >
      <Container maxWidth="lg" style={{ flexGrow: 1 }}>
    
        <Box>
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h1">
                {/* Render the title */}
                <b>{adminEditContactUs.adminContactHeaderTitle}</b>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={1.2}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "right",
              }}
            >
              <Button
                variant="outlined"
                endIcon={<FindInPageIcon />}
                sx={{
                  backgroundColor: "#4A5472",
                  width: "100px",
                  height: "40px",
                  borderColor: "#5B5959",
                  borderWidth: 2,
                  color: "white",
                  textTransform: "capitalize",
                  "&:hover": {
                    backgroundColor: "#192959", // Set hover background color
                  },
                }}
              >
                {adminEditContactUs.adminContactViewButton}
              </Button>
            </Grid>
            <Grid item xs={12} marginTop={0}>
              {/* Title Section */}
              <Typography variant="h3">
                {/* Render the title from admineditcontactus Data */}
                {adminEditContactUs.adminContactTitle01}
              </Typography>
            </Grid>
            <Grid item xs={12} marginTop={-1.3} style={{ textAlign: "center" }}>
              {/* Title TextField */}
              <TextField
                fullWidth
                label="Add Title"
                variant="outlined"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                error={!!errors.title}
                helperText={errors.title}
                InputProps={{ style: { backgroundColor: "white" } }}
              />
            </Grid>
            <Grid item xs={12} marginTop={0}>
              {/* Description Section */}
              <Typography variant="h3">
                {/* Render the title from admineditcontactus Data */}
                {adminEditContactUs.adminContactTitle02}
              </Typography>
            </Grid>
            <Grid item xs={12} marginTop={-1.3}>
              {/* Description TextField */}
              <TextField
                fullWidth
                label="Enter Description"
                variant="outlined"
                multiline
                rows={8}
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                error={!!errors.description}
                helperText={errors.description}
                InputProps={{ style: { backgroundColor: "white" } }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Typography variant="h3">
                {adminEditContactUs.adminContactTitle03}
              </Typography>
              <TextField
                fullWidth
                label="Enter Email Address"
                variant="outlined"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
                InputProps={{ style: { backgroundColor: "white" } }}
                style={{ marginTop: "8px" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h3">
                {adminEditContactUs.adminContactTitle04}
              </Typography>
              <TextField
                fullWidth
                label="Enter Phone Number"
                variant="outlined"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
                InputProps={{ style: { backgroundColor: "white" } }}
                style={{ marginTop: "8px" }}
              />
            </Grid>
            <Grid item xs={12}>
              {/* Adress Section */}
              <Typography variant="h3">
                {/* Render the title from admineditcontactus Data */}
                {adminEditContactUs.adminContactTitle05}
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              {/* Address line 01 TextField */}
              <TextField
                fullWidth
                label="Enter your Address Line 1"
                variant="outlined"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleInputChange}
                error={!!errors.addressLine1}
                helperText={errors.addressLine1}
                InputProps={{ style: { backgroundColor: "white" } }}
              />
            </Grid>
            <Grid item xs={12} marginTop={0} style={{ textAlign: "center" }}>
              {/* Address line 02 TextField */}
              <TextField
                fullWidth
                label="Enter your Address Line 2"
                variant="outlined"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleInputChange}
                error={!!errors.addressLine2}
                helperText={errors.addressLine2}
                InputProps={{ style: { backgroundColor: "white" } }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* Address city TextField */}
              <TextField
                fullWidth
                label="City"
                variant="outlined"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                error={!!errors.city}
                helperText={errors.city}
                InputProps={{ style: { backgroundColor: "white" } }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* Address State/Province TextField */}
              <TextField
                fullWidth
                label="State/Province"
                variant="outlined"
                name="stateProvince"
                value={formData.stateProvince}
                onChange={handleInputChange}
                error={!!errors.stateProvince}
                helperText={errors.stateProvince}
                InputProps={{ style: { backgroundColor: "white" } }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              marginTop={0}
              style={{ textAlign: "center" }}
            >
              {/* Address Zip Code TextField */}
              <TextField
                fullWidth
                label="Zip Code"
                variant="outlined"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                error={!!errors.zipCode}
                helperText={errors.zipCode}
                InputProps={{ style: { backgroundColor: "white" } }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              marginTop={0}
              style={{ textAlign: "center" }}
            >
              {/* Address Country TextField */}
              <TextField
                fullWidth
                label="Country"
                variant="outlined"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                error={!!errors.country}
                helperText={errors.country}
                InputProps={{ style: { backgroundColor: "white" } }}
              />
            </Grid>
            {/* Submit Section */}
            <Grid
              item
              xs={12}
              md={12}
              marginTop={5}
              style={{ textAlign: "center" }}
            >
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                marginTop="1rem"
              >
                {" "}
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    color: "white", // Set text color
                    backgroundColor: "#4A5472", // Set background color
                    borderColor: "#5B5959", // Set outline color
                    "&:hover": {
                      backgroundColor: "#192959", // Set hover background color
                    },
                  }}
                >
                  {/* Render the title from admineditcontactus Data */}
                  {adminEditContactUs.adminContactSubmitButton}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
export default AdminContactUsPage;
