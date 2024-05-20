// Step4.tsx
// This component represents the final step of the password reset process.

// Importing necessary modules from React and Material-UI
import React, { useState, ChangeEvent } from "react";
import { Box, Button, Container, Typography, Link } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AdminLoginLink from "@/components/forgotpasswordflow/AdminLoginLink";

// Define the props interface for Step4 component
interface Step4Props {
  onNext: () => void; // Function to proceed to the next step
  onChange: (email: string) => void; // Function to handle email changes
}

// Step4 component
const Step4: React.FC<Step4Props> = ({ onNext, onChange }) => {
  // State to manage the email
  const [email, setEmail] = useState("");

  // Function to handle changes in the email input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    onChange(e.target.value);
  };

  return (
    // Container for the entire component
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="50vh"
        textAlign="center"
        padding={2}
      >
        {/* Success icon and message */}
        <Box mt={10}>
          <CheckCircleIcon sx={{ fontSize: 40, color: "#039855" }} />
          <Typography variant="h5" gutterBottom>
            Password reset
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Your password has been successfully reset. Click below to log in
            magically.
          </Typography>
        </Box>
        {/* Button to continue */}
        <Button
          variant="contained"
          type="submit"
          sx={{
            textTransform: "none",
            fontStyle: "normal",
            fontSize: "16px",
            fontFamily: "inter",
            bgcolor: "#4A5472",
            borderRadius: "8px",
            mt: 3,
            width: "100%",
            maxWidth: "400px",
            ":hover": {
              backgroundColor: "#718EBF",
            },
          }}
          onClick={onNext}
        >
          Continue
        </Button>
        {/* Link to go back to login page */}
        <Box mt={2}>
          {/* Go back to admin login page */}
          <AdminLoginLink />
        </Box>
      </Box>
    </Container>
  );
};

export default Step4; // Exporting Step4 component
