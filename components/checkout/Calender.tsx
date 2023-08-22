"use client";
import React, { useState } from "react";
import { Box, Typography, Card, Checkbox, CardContent } from "@mui/material";
import { DateRange, DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // Import the styles
import "react-date-range/dist/theme/default.css";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";

const Calender = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  console.log("🚀 ~ file: TestCalender.tsx:21 ~ TestCalender ~ state:", state);

  return (
    <>
      <Card
        elevation={0}
        sx={{
          borderRadius: "8px",
          border: "1px solid",
          borderColor: "var(--light-separators-colors-secondary, #E1E1E1)",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            style={{
              color: "var(--light-text-color-title, #11142D)",
              fontFamily: "Lora",
              fontSize: "24px",
              lineHeight: "120%",
              fontStyle: "normal",
              letterSpacing: "0.12px",
              fontWeight: "700",
              marginTop: "14px",
              // marginLeft: "20px",
            }}
          >
            Select your check-in and check-out dates
          </Typography>
          {/* <Box sx={{ backgroundColor: "", padding: "10px" }}> */}
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              style={{ backgroundColor: "" }}
            />
            
          {/* </Box> */}

          <Typography
            variant="h5"
            style={{
              color: "var(--light-text-color-title, #11142D)",
              fontFamily: "Mulish, sans-serif",
              fontSize: "16px",
              lineHeight: "120%",
              fontStyle: "normal",
              letterSpacing: "0.08px",
              fontWeight: "700",
              marginTop: "8px",
              // marginLeft: "20px",
            }}
          >
            Terms and Conditions
          </Typography>
          <Typography
            variant="body1"
            style={{
              color: "var(--light-text-color-body-2, #9A9AB0)",
              fontFamily: "Mulish, sans-serif",
              fontSize: "16px",
              lineHeight: "125%",
              fontStyle: "normal",
              letterSpacing: "0.08px",
              fontWeight: "400",
              marginTop: "16px",
              // marginLeft: "20px",
            }}
          >
            Input your Special Request in Here
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Calender;
