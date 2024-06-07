"use client";

import { Button, Checkbox, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { submitContent } from "@/data/checkoutPage";
import { mulish } from "../../app/fonts";
import { orangebuttonCommonStyle } from "../homePage/styles";

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
            variant="body1"
            className={mulish.className}
            style={{
              color: "#515151",
              fontSize: "16px",
              lineHeight: "120%",
              fontStyle: "normal",
              letterSpacing: "0.08px",
              fontWeight: "600",
              marginTop: "24px",
            }}
          >
            {submitContent.condition}
          </Typography>
        </Box>
        {error && <div>{error}</div>}
        <Button
          type="submit"
          variant="contained"
          disabled={isSending}
          className={mulish.className}
          sx={{
            ...orangebuttonCommonStyle,
            marginBottom: "100px",
          }}
        >
          {submitContent.submitctaCaption}
        </Button>
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
