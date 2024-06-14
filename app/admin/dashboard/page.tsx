"use client"
import {Box} from "@mui/material";
import React from "react";
import Charts from "@/components/admin/dashboard/Charts";
/**
 * CheckoutScreen component represents the checkout screen of the website.
 * It includes sections like Heading, Billing details form, Booking info, Extra facilitation, Calender and Submit button.
 */
const AdminDashboard = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#EEF5FF", padding: "40px 0", width: "100%", height: "110vh" }}>
      <>
      <div className="flex">
        
        <main className="flex-grow ml-64 relative">
          <Charts />
        </main>
      </div>
    </>
      </Box>
      
    </>
  );
};

export default AdminDashboard;
