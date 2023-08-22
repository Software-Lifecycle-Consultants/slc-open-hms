"use client"
import React, { useState } from "react";
import { DateRange, DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Import the styles
import 'react-date-range/dist/theme/default.css'; // Import the theme


const TestCalender = () => {
    
    const [state, setState] = useState([
      {
        startDate: new Date(),
        endDate: null,
        key: "selection",
      },
    ]);
    console.log("🚀 ~ file: TestCalender.tsx:21 ~ TestCalender ~ state:", state)

  return (
    <>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
    </>
  );
}

export default TestCalender
