"use client";

import { Button, Checkbox, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { submitContent } from "@/data/checkoutPage";
import { mulish } from "../../../app/fonts";
import { orangebuttonCommonStyle } from "../homePage/styles";
import { checkoutSeo } from "@/data/seo";
import { schema } from "@/schemas/checkOut.schema";
import { validateFormData } from "@/utils/validation";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

// Defines the props that the SubmitButton component expects.
interface SubmitButtonProps {
  formData: {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    passportId: string;
    address: string;
  };
  // Function to update the errors state
  setErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string[] | undefined }>>;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ formData, setErrors }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  // Toggles the checked state of a checkbox.
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Handles form submission, performing validation and sending data if valid
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError('');

    // Reset validation errors before validation
    setErrors({});

    try {
      // Validate form data
      const { errors: validationErrors } = validateFormData(schema, formData);
      if (validationErrors) {
        setErrors(validationErrors);
        setIsSending(false);
        return;
      }

      // If validation passes, send email
      const response = await fetch('/api/send-pdf-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email }),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
      } else {
        const { error } = await response.json();
        setError(error);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to send email');
    } finally {
      setIsSending(false);
    }
  };



  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Checkbox
          checked={isChecked}
          onChange={handleCheckboxChange}
          {...label}
          sx={{
            "& .MuiSvgIcon-root": { fontSize: 34 },
            color: "#C7923E",
            "&.Mui-checked": {
              color: "#C7923E",
            },
            marginTop: "8px",
          }}
        />
        <Typography
          variant='h4' color='#515151' marginTop='1.5rem' lineHeight='1.2rem'
        >
          {submitContent.condition}
        </Typography>
      </Box>
      {error && <div>{error}</div>}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: '1rem',
      }}>
        <Button
          type="submit"
          color="primary"
          aria-label={checkoutSeo.submitButtonAriaLabel}
          variant="contained"
          onClick={handleSubmit}
          disabled={isSending || !isChecked}
          sx={{
            marginBottom: "100px",
          }}
        >
          {isSending ? 'Submitting...' : submitContent.submitctaCaption}
        </Button>
      </Box>
      {error && (
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      )}    
      </>
  );
};

export default SubmitButton;
