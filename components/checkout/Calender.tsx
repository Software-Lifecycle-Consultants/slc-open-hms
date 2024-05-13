"use client";
import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, Typography } from "@mui/material";
import { DateRange, Range } from "react-date-range";
import "react-date-range/dist/styles.css"; // Import the styles
import "react-date-range/dist/theme/default.css";
import { calenderData } from "@/data/checkoutPage";
import { lora } from "../../app/fonts";

const Calender = () => {
  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* Calendar title */}
      <Typography
        variant="h5"
        className={lora.className}
        style={{
          color: "#11142D",
          fontSize: "24px",
          lineHeight: "120%",
          fontStyle: "normal",
          letterSpacing: "0.12px",
          fontWeight: "700",
          marginTop: "14px",
          textAlign: "center",
        }}
      >
        {calenderData.calenderTitle}
      </Typography>
      <Box sx={{ justifyContent: "center", display: "flex" }}>
        {/* Calendar component */}
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
      </Box>
    </LocalizationProvider>
  );
};
export default Calender;
