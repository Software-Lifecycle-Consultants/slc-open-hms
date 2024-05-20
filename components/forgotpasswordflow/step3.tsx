// Step3.tsx
// This component represents the third step of the password reset process.

// Importing necessary modules from React and Material-UI
import React, { useState, ChangeEvent } from "react";
import {
  Button,
  TextField,
  Box,
  Container,
  Typography,
  Link,
} from "@mui/material";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import AdminLoginLink from "@/components/forgotpasswordflow/AdminLoginLink";
import { forgotpasswordpageData } from "@/data/forgotPasswordfFow";

// Define the props interface for Step3 component
interface Step3Props {
  onNext: () => void; // Function to move to the next step
  onChange: (data: { [key: string]: string }) => void; // Function to handle form data changes
}

// Step3 component
const Step3: React.FC<Step3Props> = ({ onNext, onChange }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    password: "", // Password field
    reEnterPassword: "", // Re-enter password field
  });

  // State to manage error messages
  const [errors, setErrors] = useState({
    password: "",
    reEnterPassword: "",
  });

  // Function to handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Update the form data state
    setFormData({ ...formData, [name]: value });
    // Invoke the onChange function with updated form data
    onChange({ [name]: value });
  };

  // Function to validate the form data
  const validate = () => {
    let isValid = true;
    const newErrors = {
      password: "",
      reEnterPassword: "",
    };

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
      isValid = false;
    }

    if (formData.password !== formData.reEnterPassword) {
      newErrors.reEnterPassword = "Passwords do not match.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Function to handle form submission
  const handleResetPassword = () => {
    if (validate()) {
      // Add your logic to handle password reset here
      // For example, you can validate passwords and perform the reset operation
      // After the reset operation is successful, navigate to the next step
      onNext();
    }
  };

  return (
    // Container for the entire component
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "90vh",
        padding: { xs: 2, md: 0 }, // Responsive padding
      }}
    >
      {/* Title and icon */}
      <Box
        mt={5}
        textAlign="center"
        mx="auto"
        sx={{ width: { xs: "100%", sm: "250px" }, fontWeight: 500 }}
      >
        <LockOpenOutlinedIcon sx={{ fontSize: "45px", color: "#4A5472" }} />
        <Typography mt={2} variant="h5" sx={{ color: "#4A5472" }}>
        {forgotpasswordpageData.forgotpasswordstep3Title}
          {/* Render the Title from forgotpasswordpageData */}
        </Typography>
        <Typography mt={2} sx={{ color: "#4A5472" }}>
        {forgotpasswordpageData.forgotpasswordstep3subTitle}
          {/* Render the Sub Title from forgotpasswordpageData */}
        </Typography>
      </Box>
      {/* Form for password input */}
      <Box display="flex" flexDirection="column" gap={2} mt={5} width="100%">
        <Typography sx={{ color: "#4A5472", mt: -1 }}> 
        {forgotpasswordpageData.forgotpasswordstep3PasswordtxtCaption}
            {/* Render the Password Text Caption from forgotpasswordpageData */}
            </Typography>
        {/* Input field for password */}
        <TextField
          sx={{ color: "#4A5472" }}
          type="password"
          name="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          error={!!errors.password}
          helperText={errors.password}
        />
        <Typography sx={{ color: "#4A5472", mt: -2 }}>
        {forgotpasswordpageData.forgotpasswordstep3CharacterstxtCaption}
            {/* Render the Character Text Caption from forgotpasswordpageData */}
        </Typography>
        <Typography sx={{ color: "#4A5472", mt: 1 }}>
        {forgotpasswordpageData.forgotpasswordstep3ComfirmPasswordtxtCaption}
            {/* Render the Comfirm Password Text Caption from forgotpasswordpageData */}
        </Typography>
        {/* Input field for re-entering password */}
        <TextField
          sx={{ color: "#4A5472" }}
          type="password"
          name="reEnterPassword"
          label="Re-enter Password"
          value={formData.reEnterPassword}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          error={!!errors.reEnterPassword}
          helperText={errors.reEnterPassword}
        />
        {/* Button to move to the next step */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleResetPassword}
          sx={{
            textTransform: "none",
            fontStyle: "normal",
            fontFamily: "inter",
            fontSize: "16px",
            bgcolor: "#4A5472",
            borderRadius: "8px",
            mt: 2,
            width: "100%", // Make the button full width
            maxWidth: { xs: "100%", sm: "500px" }, // Limit maximum width
            ":hover": {
              backgroundColor: "#718EBF",
            },
          }}
        >
          {forgotpasswordpageData.forgotpasswordstep3ButtonCaption}
          {/* Render the Button Caption from forgotpasswordpageData */}
        </Button>
      </Box>
      {/* Link to go back to login page */}
      <Box mt={2} textAlign="center">
        {/* Go back to admin login page */}
        <AdminLoginLink />
      </Box>
    </Container>
  );
};

export default Step3; // Exporting Step3 component
