"use client";
import React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { Grid, Typography } from "@mui/material";
import { lora } from "../../app/fonts";
import { calenderData } from "@/data/checkoutPage";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

const Calender = () => {
  /* State for managing the selected date range */

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangeCalendar"]}>
        {/* Calendar title */}
        <Typography
          variant="h4"
          className={lora.className}
          style={{
            color: "#11142D",
            fontSize: "24px",
            lineHeight: "120%",
            fontStyle: "normal",
            letterSpacing: "0.10px",
            fontWeight: "700",
            marginTop: "14px",
            textAlign: "center",
          }}
        >
          {calenderData.calenderTitle}
        </Typography>
        {/* Calendar */}
        <Grid container justifyContent="center" marginLeft={1}>
          <DemoItem>
            <DateRangeCalendar calendars={1} />
          </DemoItem>
        </Grid>
        <DateRangePicker localeText={{ start: "Check-in", end: "Check-out" }} />
      </DemoContainer>
    </LocalizationProvider>
  );
};
export default Calender;
