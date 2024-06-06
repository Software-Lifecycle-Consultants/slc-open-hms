// This line tells Next.js that this component should be rendered on the client-side
"use client";

// Import required components and hooks from the respective libraries
import { Button, Checkbox, Typography, Box, Link } from "@mui/material";
import React, { useState } from "react";
import { submitContent } from "@/data/checkoutPage";
import { mulish } from "../../app/fonts";
import { orangebuttonCommonStyle } from "../homePage/styles";

// Define an object with props for the Checkbox component
const label = { inputProps: { "aria-label": "Checkbox demo" } };

// Define the SubmitButton component
const SubmitButton = () => {
  // Use the useState hook to manage the state of the checkbox
  const [isChecked, setIsChecked] = useState(false);

  // Define a function to handle the checkbox change event
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Render the component
  return (
    <>
      {/* Display a flex container with the checkbox and condition text */}
      <Box sx={{ display: "flex" }}>
        {/* Render the Checkbox component */}
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
        {/* Render the condition text */}
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
      {/* Render the Submit button */}

      <Button
        variant="contained"
        disabled={!isChecked} // Disable the button if the checkbox is not checked
        className={mulish.className}
        sx={{
          ...orangebuttonCommonStyle,
          marginBottom: "100px",
        }}
      >
        {submitContent.submitctaCaption}
      </Button>
    </>
  );
};

// Export the SubmitButton component
export default SubmitButton;
