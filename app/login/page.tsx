"use client";
import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  FormControlLabel,
  Checkbox,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Box from "@mui/material/Box";
import { loginPageData } from "@/data/loginPage";
import ArrowBack from "@mui/icons-material/ArrowBack";
// Functional component for Login
const Login = () => {
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
                {" "}
                {/* Banner Section */}
                <Typography
                  variant="h4"
                  align="center"
                  fontSize="48px"
                  style={{ fontFamily: "Lora", color: "rgba(17, 20, 45, 1)" }}>
                  <b>{loginPageData.loginPageTitle}</b>{" "}
                  {/* Render the title from loginPageData */}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Box marginTop={2}>
                  <Typography
                    align="center"
                    fontSize="20px"
                    style={{
                      fontFamily: "Mulish",
                      color: "rgba(81, 81, 81, 1)",
                    }}>
                    {loginPageData.loginPageDescription}
                    {/* Render the subtitle from loginPageData */}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={8} marginTop={6}>
                {/* Email Section */}
                <Typography style={{ color: "rgba(17, 20, 45, 1)" }}>
                  {loginPageData.loginPageEmailtxtCaption}
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
                />
              </Grid>
              <Grid item xs={12} marginTop={2.5}>
                {/* Password Section */}
                <Typography style={{ color: "rgba(17, 20, 45, 1)" }}>
                  {loginPageData.loginPagePasswordtxtCaption}
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
                {" "}
                {/* Remember me and Forgot password Section */}
                <Grid item xs={6} marginTop={1}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          "& .MuiSvgIcon-root": { fontSize: 20 },
                          color: "#C7923E",
                          "&.Mui-checked": {
                            color: "#C7923E",
                          },
                          marginTop: "2px",
                        }}
                      />
                    }
                    label={
                      loginPageData.loginPageCheckBoxCaption
                    } /* Render the title from loginPageData */
                    style={{ color: "rgba(17, 20, 45, 1)" }}
                  />
                </Grid>
                <Grid item xs={6} marginTop={2} textAlign="right">
                  <Typography style={{ color: "rgba(17, 20, 45, 1)" }}>
                    {" "}
                    <a href="/">
                      {" "}
                      {loginPageData.loginPageForgotPasswordCaption}{" "}
                    </a>
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
              <Grid item xs={12} marginTop={4}>
                {/* Login Button Section */}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{
                    borderRadius: "12px",
                    fontSize: "1.2rem",
                    padding: "12px 24px",
                  }}
                  fullWidth
                  sx={{
                    backgroundColor: "#C7923E",
                    "&:hover": {
                      backgroundColor: "#c7833e",
                    },
                  }}>
                  {loginPageData.loginPageButtonCaption}
                  {/* Render the title from loginPageData */}
                </Button>
              </Grid>
              <Grid item xs={12}>
                {/* Register and Forgot password Section */}
                <Typography
                  align="center"
                  style={{ color: "rgba(17, 20, 45, 1)" }}>
                  {loginPageData.loginPageNoAccountCaption}{" "}
                  <a href="/" style={{ color: "rgba(0, 60, 112, 1)" }}>
                    {" "}
                    {loginPageData.loginPageRegisterCaption}{" "}
                  </a>{" "}
                  {/* Render the title from loginPageData & loginPageData6 & link the Register page to loginPageData */}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                container
                alignItems="center"
                justifyContent="center">
                <a href="/">
                  <Box
                    bgcolor="#CCCCCC" // Background color
                    borderRadius="50%" // Rounded corners to make it circular
                    padding="3px" // Adjust padding as needed
                    display="flex" // Use flexbox
                    alignItems="center" // Center vertically
                    justifyContent="center" // Center horizontally
                    marginRight="10px">
                    <ArrowBack style={{ fontSize: "20px", color: "#000000" }} />{" "}
                    {/* Icon color */}
                  </Box>
                </a>
                <Typography
                  style={{
                    textAlign: "center",
                    marginTop: "0px",
                    color: "rgba(17, 20, 45, 1)",
                  }}>
                  <a href="http://localhost:3000/register">
                    {" "}
                    {loginPageData.loginPageBackArrowCaption}{" "}
                  </a>
                  {/* Render the title from loginPageData & link the home page */}
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
