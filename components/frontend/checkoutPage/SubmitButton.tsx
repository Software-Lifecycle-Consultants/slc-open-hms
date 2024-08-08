"use client";

import { Button, Checkbox, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { submitContent } from "@/data/checkoutPage";
import { mulish } from "../../../app/fonts";
import { orangebuttonCommonStyle } from "../homePage/styles";
import { checkoutSeo } from "@/data/seo";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface SubmitButtonProps {
  email: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ email }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError('');

    try {
      const response = await fetch('/api/send-pdf-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
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
      <form onSubmit={handleSubmit}>
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
          aria-label={checkoutSeo.submitButtonAriaLabel}
          variant="contained"
          disabled={!isChecked}
          sx={{            
            marginBottom: "100px",
          }}
        >
          {submitContent.submitctaCaption}
        </Button>
        </Box>
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
      </form>
    </>
  );
};

export default SubmitButton;
