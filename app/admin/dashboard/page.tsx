"use client"
import Calender from "@/components/front-end/checkout/Calender";
import Heading from "@/components/front-end/checkout/Heading";
import SubmitButton from "@/components/front-end/checkout/SubmitButton";
import { Grid, Box, Container } from "@mui/material";
import React from "react";
import BillingDetails from "@/components/front-end/checkout/BillingDetails";
import BookingInfo from "@/components/front-end/checkout/BookingInfo";
import ExtraFacilitation from "@/components/front-end/checkout/ExtraFacilitation";
import Charts from "@/components/back-end/admin/dashboard/charts"
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
