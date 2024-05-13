"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Link,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock"; // Import the LockIcon
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface ForgotPasswordFormProps {}
const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
};

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = () => {
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = () => {
    // Implement your password reset logic here
    console.log("Reset password for email:", email);
  };

  return (
    <Box
      display="flex"
      mx={"auto"}
      alignItems="center"
      width="60vh"
      justifyContent="center"
      minHeight="70vh" /* Set minimum height to occupy the full viewport */
    >
      <Container maxWidth="sm">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginBottom="16px"
        >
          {/* Center the LockIcon */}
          <LockIcon fontSize="large" sx={{ color: "#4A5472" }} />
        </Box>
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" align="center" gutterBottom>
            Forgot password?
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Don't worry, we'll help you reset your password.
          </Typography>
          <Typography mt={5}>Email</Typography>
          <TextField
            label="Enter Your Email"
            variant="outlined"
            type="email"
            required
            fullWidth
            value={email}
            onChange={handleEmailChange}
            margin="normal"
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              textTransform: "none",
              fontStyle: "normal",
              fontFamily: "inter",
              bgcolor: "#4A5472",
              borderRadius: "8px",
              marginTop: "25px",
              ":hover": {
                backgroundColor: "#718EBF",
              },
            }}
            fullWidth
            onClick={handleResetPassword}
          >
            Reset Password
          </Button>
          <Link
            href="/admin"
            sx={{
              textDecoration: "none",
              color: "#4A5472",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "16px",
            }}
          >
            <ArrowBackIcon sx={{ fontSize: "14px", marginRight: "10px" }} />{" "}
            Back to log in
          </Link>
        </form>
      </Container>
    </Box>
  );
};

export default ForgotPasswordForm;

