
import { Button, Checkbox, Typography, Box } from '@mui/material';
import React from 'react'

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SubmitButton = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Checkbox
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
          style={{
            color: "color: var(--light-text-color-body-1, #515151)",
            fontFamily: "Mulish, sans-serif",
            fontSize: "16px",
            lineHeight: "120%",
            fontStyle: "normal",
            letterSpacing: "0.08px",
            fontWeight: "600",
            marginTop: "24px",
          }}
        >
          I have agree to the rules, Terms and Conditions.
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          //   backgroundColor: "var(--light-secondary-color-50, #C7923E)",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "18px 24px",
          gap: "10px",
          textTransform: "none",
          width: "100%",
          height: "56px",
          marginTop: "20px",
          backgroundColor: "#C7923E",
          "&:hover": {
            backgroundColor: "#c7833e",
          },
        }}
      >
        Submit Booking Request
      </Button>
    </>
  );
}

export default SubmitButton
