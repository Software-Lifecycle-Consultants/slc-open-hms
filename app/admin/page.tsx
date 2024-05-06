"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
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
import Box from "@mui/material/Box";
import { adminLoginPageData } from "@/data/adminlogin";
import Link from "next/link";
import adminLogo from "@/public/images/admin/loginpage/adminlogo.webp";
import Image from "next/image";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import color from "material-ui-colors/dist/amber";

const AdminLoginPage = () => {
  const router = useRouter(); // Initialize the router

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleTogglePasswordVisibility = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);

    // For demonstration, always navigate to dashboard
    const loginSuccessful = true; // Replace with actual logic

    if (loginSuccessful) {
      router.push("/admin/dashboard"); // Navigate to the admin dashboard
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh" /* Set minimum height to occupy the full viewport */
    >
      <Container maxWidth="sm" sx={{ marginTop: "20px", marginBottom:"20px" }}>
        <Box
          padding={5}
          sx={{
            bgcolor: "#EEF5FF",
            mx: "auto",
            mt: "10",
            borderRadius: "20px",
            height: "auto",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {" "}
                {/* Banner Section */}
                <Image
                  src={adminLogo}
                  alt="test"
                  width={617.758}
                  height={616.951}
                  style={{
                    width: "30%",
                    height: "auto",
                    flexShrink: 0,
                    marginLeft: "35%",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box marginTop={2}>
                  <Typography
                    align="center"
                    fontSize="15px"
                    style={{
                      fontFamily: "Mulish",
                      color: "rgba(81, 81, 81, 1)",
                    }}
                  >
                    {adminLoginPageData.loginPageDescription}
                    {/* Render the subtitle from loginPageData */}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={8} marginTop={3}>
                {/* Email Section */}
                <Typography style={{ color: "#4A5472" }}>
                  {adminLoginPageData.loginPageTitle}
                </Typography>
                {/* Render the title from loginPageData */}
              </Grid>
              <Grid item xs={8} marginTop={3}>
                {/* Email Section */}
                <Typography style={{ color: "#4A5472" }}>
                  {adminLoginPageData.loginPageEmailtxtCaption}
                </Typography>
                {/* Render the title from loginPageData */}
              </Grid>
              <Grid
                item
                xs={12}
                marginTop={-1.3}
                style={{ textAlign: "center" }}
              >
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
                            <EmailOutlinedIcon />
                          ) : (
                            <EmailOutlinedIcon/>
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
                          edge="end"
                        >
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
                          color: "#4A5472",
                          "&.Mui-checked": {
                            color: "#4A5472",
                          },
                          marginTop: "2px",
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
                  <Typography style={{ color: "#4A5472" }}>
                    <Link href="/" style={{color:"#4A5472", textDecoration:"none"}}>
                      {adminLoginPageData.loginPageForgotPasswordCaption}
                    </Link>
                    {/* Render the title from loginPageData & link the Forgot Password page */}
                  </Typography>
                </Grid>
                
              </Grid>
              <Grid item xs={12} marginTop={0} sx={{ marginBottom: "20px" }}>
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
                     backgroundColor: "#718EBF",}}}// Add the button class
                >
                  {/* Render the title from loginPageData */}
                  {adminLoginPageData.loginPageButtonCaption}
                </Button>
              </Grid>
              <Grid item xs={12} mb={5}>
                {/* Register and Forgot password Section */}
                <Typography
                  align="center"
                  style={{ color: "#4A5472" }}
                >
                  {adminLoginPageData.loginPageNoAccountCaption}{" "}
                  {/* Render the Register page link */}
                  <Link href="/register"  style={{color:"#4A5472"}}>
                    {adminLoginPageData.loginPageRegisterCaption}
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default AdminLoginPage;
