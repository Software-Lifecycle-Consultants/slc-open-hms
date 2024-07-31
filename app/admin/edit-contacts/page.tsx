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
import axios from "axios";

const editContact = () =>{
    // Define state variables for the form fields
    const [formData, setFormData] = useState({
      pagetitle: '',
      pagedescription: '',
      email: '',
      phoneNumber: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      stateProvince: '',
      zipCode: '',
      country: '',
    });
  
    // Handle input change
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    // Handle button click to make POST request
    const handleButtonClick = () => {
    axios.post('https://localhost:7042/api/AdminContacts', formData)
      .then(response => {
        console.log('Data posted successfully:', response.data);
        // Optionally, handle success (e.g., show a success message or redirect)
      })
      .catch(error => {
        console.error('There was an error posting the data!', error);
        // Optionally, handle error (e.g., show an error message)
      });
    };

  return (
    <Box
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
                style={{
                  backgroundColor: "#4A5472",
                  width: "100px",
                  height: "40px",
                  borderColor: "#5B5959",
                  borderWidth: 2,
                  color: "white",
                  textTransform: "capitalize",
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
                InputProps={{ style: { backgroundColor: "white" } }}
                name="pagetitle"
                value={formData.pagetitle}
                onChange={handleChange}
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
                id="outlined-multiline-static"
                label="Enter Description"
                multiline
                rows={8}
                InputProps={{ style: { backgroundColor: "white" } }}
                name="pagedescription"
                value={formData.pagedescription}
                onChange={handleChange}
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
                InputProps={{ style: { backgroundColor: "white" } }}
                style={{ marginTop: "8px" }}
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                InputProps={{ style: { backgroundColor: "white" } }}
                style={{ marginTop: "8px" }}
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
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
                InputProps={{ style: { backgroundColor: "white" } }}
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} marginTop={0} style={{ textAlign: "center" }}>
              {/* Address line 02 TextField */}
              <TextField
                fullWidth
                label="Enter your Address Line 2"
                variant="outlined"
                InputProps={{ style: { backgroundColor: "white" } }}
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
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
                InputProps={{ style: { backgroundColor: "white" } }}
                name="city"
                value={formData.city}
                onChange={handleChange}
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
                InputProps={{ style: { backgroundColor: "white" } }}
                name="stateProvince"
                value={formData.stateProvince}
                onChange={handleChange}
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
                InputProps={{ style: { backgroundColor: "white" } }}
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
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
                InputProps={{ style: { backgroundColor: "white" } }}
                name="country"
                value={formData.country}
                onChange={handleChange}
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
              <Box display="flex" justifyContent="end" alignItems="center">
                <Button onClick={handleButtonClick}>
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
export default editContact;
