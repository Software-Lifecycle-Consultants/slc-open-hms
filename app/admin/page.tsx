"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
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
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { validateFormData } from "@/utils/validation";
import { schemaLogin } from "@/schemas/adminLogin.schema";

// Define the form data type based on your schema
type LoginFormData = {
  email: string;
  password: string;
};

const AdminLoginPage: React.FC = () => {
  const router = useRouter(); // Initialize the Next.js router
  const [formData, setFormData] = useState<LoginFormData>({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false); // Initialize state for password visibility toggle
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});

  // Handle form input change
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "", // Reset error message for the field being changed
    });
  };

  // Toggle password visibility
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { errors: validationErrors, data } = validateFormData(schemaLogin, formData);

    if (validationErrors) {
      setErrors(validationErrors);
    } else {
      console.log(data);
      router.push("/admin/dashboard");
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh" // Set minimum height to occupy the full viewport
    >
      <Container maxWidth="sm" sx={{ marginTop: "20px", marginBottom: "20px" }}>
        <Box
          padding={5}
          sx={{
            bgcolor: "#EEF5FF", // Set background color
            mx: "auto",
            mt: "10",
            borderRadius: "35px",
            height: "auto",
          }}
        >
          <form onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Image
                  src={adminLogo}
                  alt="Admin Logo"
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
              <Grid item xs={12} marginBottom={5}>
                <Box marginTop={2}>
                  <Typography
                    align="center"
                    fontSize="15px"
                    style={{
                      fontFamily: "Mulish",
                      color: "rgba(81, 81, 81, 1)",
                    }}
                  >
                    {adminLoginPageData.loginPageDescription}{" "}
                    {/* Login page description */}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={8}>
                {/* Email Section */}
                <Typography style={{ color: "#4A5472" }}>
                  {adminLoginPageData.loginPageEmailtxtCaption}
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email} // Set error state based on validation
                  helperText={errors.email} // Display error message
                  FormHelperTextProps={{
                    style: { fontSize: "1em" }, // Increase font size of error message
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <EmailOutlinedIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                {/* Password Section */}
                <Typography style={{ color: "rgba(17, 20, 45, 1)" }}>
                  {adminLoginPageData.loginPagePasswordtxtCaption}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password} // Set error state based on validation
                  helperText={errors.password}
                  FormHelperTextProps={{
                    style: { fontSize: "1em" }, // Increase font size of error message
                  }} // Display error message
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid container>
                <Grid item xs={6} marginTop={2}>
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
                          paddingLeft: "25px",
                        }}
                      />
                    }
                    label={adminLoginPageData.loginPageCheckBoxCaption} // Remember me checkbox
                    style={{ color: "rgba(17, 20, 45, 1)" }}
                  />
                </Grid>
                <Grid item xs={6} marginTop={3} textAlign="right">
                  <Typography style={{ color: "#4A5472" }}>
                    <Link
                      href="/admin/forgot-password"
                      style={{ color: "#4A5472", textDecoration: "none" }}
                    >
                      {adminLoginPageData.loginPageForgotPasswordCaption}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} marginTop={0} sx={{ marginBottom: "20px" }}>
                <Button
                  type="submit"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "25px",
                    padding: "18px 24px",
                    width: "100%",
                    height: "50px",
                    marginTop: "20px",
                    fontSize: "20px",
                    fontStyle: "normal",
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
                      backgroundColor: "#718EBF",
                    },
                  }}
                >
                  {adminLoginPageData.loginPageButtonCaption}
                </Button>
              </Grid>
              <Grid item xs={12} mb={5}>
                <Typography align="center" style={{ color: "#4A5472" }}>
                  {adminLoginPageData.loginPageNoAccountCaption}{" "}
                  {/* No account caption */}
                  <Link href="/register" style={{ color: "#4A5472" }}>
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
