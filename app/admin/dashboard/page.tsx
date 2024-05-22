"use client"
import Calender from "@/components/checkout/Calender";
import Heading from "@/components/checkout/Heading";
import SubmitButton from "@/components/checkout/SubmitButton";
import { Grid, Box, Container } from "@mui/material";
import React from "react";
import BillingDetails from "@/components/checkout/BillingDetails";
import BookingInfo from "@/components/checkout/BookingInfo";
import ExtraFacilitation from "@/components/checkout/ExtraFacilitation";
import Charts from "@/components/admin/charts"

/**
 * CheckoutScreen component represents the checkout screen of the website.
 * It includes sections like Heading, Billing details form, Booking info, Extra facilitation, Calender and Submit button.
 */

const AdminDashboard = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#FFF", padding: "40px 0", width: "100%" }}>
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
