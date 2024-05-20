"use client";
// Importing necessary modules from React and Material-UI
import React, { useState, ChangeEvent } from "react";
import {
  Box,
  TextField,
  Button,
  Container,
  Typography,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AdminLoginLink from "@/components/forgotpasswordflow/AdminLoginLink";
import { forgotpasswordpageData } from "@/data/forgotPasswordfFow";

// Defining the props interface for Step1 component
interface Step1Props {
  onNext: () => void; // Function to proceed to the next step
  onChange: (data: { [key: string]: string }) => void; // Function to handle form data changes
}

// Step1 component
const Step1: React.FC<Step1Props> = ({ onNext, onChange }) => {
  // State to manage form data and validation
  const [formData, setFormData] = useState({
    email: "", // Email field
  });
  const [emailError, setEmailError] = useState("");

  // Email validation function
  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Function to handle changes in form fields
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    onChange({ [name]: value });

    // Validate email
    if (name === "email") {
      if (!validateEmail(value)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    }
  };

  // Function to handle the form submission
  const handleNext = () => {
    if (validateEmail(formData.email)) {
      onNext();
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  return (
    // Container for the entire component
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        paddingX: 2, // Responsive padding
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        {/* Lock icon */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginBottom="16px"
        >
          <LockOutlinedIcon sx={{ fontSize: 45, color: "#4A5472" }} />
        </Box>
        {/* Title */}
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ color: "#4A5472", fontWeight: 500 }}
        >
          {forgotpasswordpageData.forgotpasswordstep1Title}
          {/* Render the Title from forgotpasswordpageData */}
        </Typography>
        {/* Description */}
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{ color: "#4A5472" }}
        >
          {forgotpasswordpageData.forgotpasswordstep1subTitle}
          {/* Render the SubTitle from forgotpasswordpageData */}
        </Typography>
        {/* Form for email input */}
        <Box width="100%" textAlign="left" mt={5} sx={{ maxWidth: "400px" }}>
          <Typography sx={{ color: "#4A5472" }}>
            {forgotpasswordpageData.forgotpasswordstep1EmailtxtCaption}
            {/* Render the Email Text Caption from forgotpasswordpageData */}
          </Typography>
          <TextField
            sx={{ color: "#4A5472" }}
            label="Enter Your Email*"
            variant="outlined"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            error={!!emailError}
            helperText={emailError}
          />
        </Box>
        {/* Button to reset password */}
        <Button
          variant="contained"
          type="submit"
          sx={{
            textTransform: "none",
            fontStyle: "normal",
            fontFamily: "inter",
            fontSize: "16px",
            bgcolor: "#4A5472",
            borderRadius: "8px",
            mt: 3,
            width: "100%",
            maxWidth: "400px",
            ":hover": {
              backgroundColor: "#718EBF",
            },
          }}
          onClick={handleNext}
        >
          {forgotpasswordpageData.forgotpasswordstep1ButtonCaption}
          {/* Render the Forgot password Button Caption from forgotpasswordpageData */}
        </Button>
        {/* Go back to admin login page */}
        <AdminLoginLink />
      </Box>
    </Container>
  );
};

export default Step1; // Exporting Step1 component
