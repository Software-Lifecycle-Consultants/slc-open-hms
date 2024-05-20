// Step2.tsx
// This component represents the second step of the password reset process.

// Importing necessary modules from React and Material-UI
import React, { useState, ChangeEvent } from "react";
import { Button, Container, Typography, Link, Box } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AdminLoginLink from "@/components/forgotpasswordflow/AdminLoginLink";

// Defining the props interface for Step2 component
interface Step2Props {
  onNext: () => void; // Function to proceed to the next step
  email: string; // Email from Step1
}

// Step2 component
const Step2: React.FC<Step2Props> = ({onNext,email}) => {

  return (
    // Container for the entire component
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh", // Set minimum height to full viewport height
        padding: "20px", // Add padding
      }}
    >
      {/* Email icon */}
      <EmailOutlinedIcon sx={{ fontSize: 45, color: "#4A5472" }} />
      {/* Title */}
      <Box textAlign="center" mt={3}>
        <Typography variant="h5" gutterBottom sx={{ color: "#4A5472" }}>
          Check your email
        </Typography>
      </Box>
      {/* Notification */}
      <Typography variant="subtitle1" sx={{ mt: 1, color: "#4A5472" }}>
        We sent a password reset link to
        {/* Displaying the email */}
        <Typography
          variant="subtitle1"
          sx={{ color: "#4A5472", mt: -1, textAlign: "center" }}
        >
          ABCD@gmail.com
        </Typography>
      </Typography>
      {/* Displaying the email */}
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "bold", color: "#4A5472" }}
      >
        {email}
      </Typography>
      {/* Button to open email app */}
      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          fontStyle: "normal",
          fontFamily: "inter",
          fontSize: "16px",
          bgcolor: "#4A5472",
          borderRadius: "8px",
          mt: 3,
          width: "100%", // Make the button full width
          maxWidth: "400px", // Limit maximum width
          ":hover": {
            backgroundColor: "#718EBF",
          },
        }}
        onClick={onNext}
      >
        Open email app
      </Button>
      {/* Link to resend email */}
      <Link
        href="#"
        variant="body2"
        sx={{ mt: 4, textDecoration: "none", color: "#4A5472", fontSize: 15 }}
        onClick={() => console.log("Resend email logic here")}
      >
        <Box sx={{ display: "flex" }}>
          <Typography>Didn't receive the email?</Typography>
          <Typography sx={{ fontWeight: "bold" }}> Click to resend </Typography>
        </Box>
      </Link>
      {/* Go back to admin login page */}
      <AdminLoginLink />
    </Container>
  );
};

export default Step2; // Exporting Step2 component
