"use client";
import React, { useState } from "react";
import {
  TextField,
  Typography,
  Container,
  Grid,
  FormControlLabel,
  Checkbox,
  IconButton,
  InputAdornment,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Box from "@mui/material/Box";
import { adminLoginPageData } from "@/data/adminlogin";
import Link from "next/link";
import adminLogo from "@/public/images/admin/loginpage/adminlogo.webp";
import Image from "next/image";

// Functional component for Login
const adminLogin = () => {
  const [formData, setFormData] = useState({
    // State variables to hold form data and toggle password visibility
    email: "",
    password: "",
    showPassword: false, // State to toggle password visibility
  });
  // Function to handle input change in form fields
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };
  // Function to toggle password visibility
  const handleTogglePasswordVisibility = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };
  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here, e.g., send data to the server
    console.log(formData);
  };

  return (
    <Box>
      <Box display="block" 
sx={{width:"50%", 
backgroundColor:"#EEF5FF", 
margin:"auto", 
height:"80%", 
marginTop:"5%", 
marginBottom:"5%", 
borderRadius:"25px"}}>
  

    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh" /* Set minimum height to occupy the full viewport */
    >
      <Container maxWidth="sm">
        <Box padding={5}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box marginTop={2}>
                <Image
            src={adminLogo}
            alt="test"
            width={617.758}
            height={616.951}
            style={{
              width: "30%",
              height: "auto",
              flexShrink: 0,
              marginLeft:"35%",
              
            }}
          />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box marginTop={2}>
                  <Typography
                    align="center"
                    fontSize="17px"
                    style={{
                      fontFamily: "Mulish",
                      color: "rgba(17, 20, 45, 1)",
                    }}>
                    {adminLoginPageData.loginPageDescription}
                    {/* Render the subtitle from loginPageData */}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box marginTop={2}>
                  <Typography
                    align="left"
                    fontSize="17px"
                    style={{
                      fontFamily: "Mulish",
                      color: "rgba(17, 20, 45, 1)",
                    }}>
                    {adminLoginPageData.loginPageTitle}
                    {/* Render the subtitle from loginPageData */}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={8} marginTop={2}>
                {/* Email Section */}
                <Typography style={{ color: "rgba(17, 20, 45, 1)" }}>
                  {adminLoginPageData.loginPageEmailtxtCaption}
                </Typography>
                {/* Render the title from loginPageData */}
              </Grid>
              <Grid
                item
                xs={12}
                marginTop={-1.3}
                style={{ textAlign: "center" }}>
                {/* Email TextField */}
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange(e, "email")}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleTogglePasswordVisibility}
                          edge="end">
                          {formData.showPassword ? (
                            <MailOutlineIcon />
                          ) : (
                            <MailOutlineIcon/>
                          )}{" "}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} marginTop={2.5}>
                {/* Password Section */}
                <Typography style={{ color: "rgba(17, 20, 45, 1)" }}>
                  {adminLoginPageData.loginPagePasswordtxtCaption}
                </Typography>
                {/* Render the title from loginPageData */}
              </Grid>
              <Grid item xs={12} marginTop={-1.3}>
                {/* Password TextField */}
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type={formData.showPassword ? "text" : "password"} // Toggle visibility based on state
                  value={formData.password}
                  onChange={(e) => handleChange(e, "password")}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleTogglePasswordVisibility}
                          edge="end">
                          {formData.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}{" "}
                          {/* Toggle visibility icon */}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid container>
                {/* Remember me and Forgot password Section */}
                <Grid item xs={6} marginTop={1}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          "& .MuiSvgIcon-root": { fontSize: 20 },
                          color: "#4A5472",
                          "&.Mui-checked": {
                            color: "#4A5472",
                          },
                          marginTop: "2px",
                          marginLeft:"17px",
                        }}
                      />
                    }
                    label={
                        adminLoginPageData.loginPageCheckBoxCaption
                    } /* Render the title from loginPageData */
                    style={{ color: "rgba(17, 20, 45, 1)" }}
                  />
                </Grid>
                <Grid item xs={6} marginTop={2} textAlign="right">
                  <Typography style={{ color: "rgba(17, 20, 45, 1)" }}>
                    <Link href="/"style={{color:"#4A5472"}}>
                    
                      {adminLoginPageData.loginPageForgotPasswordCaption}{" "}
                    </Link>
                    {/* Render the title from loginPageData & link the Forgot Password page */}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  {/* Placeholder for the bottom left corner */}
                </Grid>
                <Grid item xs={6} textAlign="right">
                  {/* Placeholder for the bottom right corner */}
                </Grid>
              </Grid>
              <Grid item xs={12} marginTop={1}sx={{ marginBottom: "20px" }}>
                {/* Login Button Section */}
                <Button
                  type="submit"
                  sx={{display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "25px",
                  padding: "18px 24px",
                  width: "100%",
                  height: "50px",
                  marginTop: "20px",
                  fontSize: "20px",
                  fontStyle:"normal",
                  fontWeight: "300",
                  lineHeight: "120%",
                  letterSpacing: "0.08px",
                  backgroundColor: "#4A5472",
                  textAlign: "center",
                  textTransform: "capitalize",
                  transition: "background-color 0.3s ease",
                  fontFamily: "'mulish', sans-serif",
                  color: "white",
                  ":hover": {
                    backgroundColor: "#718EBF",}}} // Add the button class
                >
                  {/* Render the title from loginPageData */}
                  {adminLoginPageData.loginPageButtonCaption}
                </Button>
              </Grid>
              <Grid item xs={12}>
                {/* Register and Forgot password Section */}
                <Typography
                  align="center"
                  style={{ color: "rgba(17, 20, 45, 1)" }}>
                  {adminLoginPageData.loginPageNoAccountCaption}{" "}
                  <Link href="/register" style={{ color: "rgba(17, 20, 45, 1)" }}>
                    {adminLoginPageData.loginPageRegisterCaption}{" "}
                  </Link>
                  {/* Render the title from loginPageData & loginPageData6 & link the Register page to loginPageData */}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                container
                alignItems="center"
                justifyContent="center"
                sx={{ marginBottom: "50px" }}
                >   
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Box>
    </Box>
    </Box>
  );
};

export default adminLogin;