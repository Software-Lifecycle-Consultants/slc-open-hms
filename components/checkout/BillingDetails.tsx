import {
  Grid,
  Typography,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import React from 'react'
import { billingDetailsFormTitle } from "@/data/checkoutPage";

/**
 * BillingDetails component is the form used in checkout page to input users billing details.
 */

const BillingDetails = () => {
  return (
    <>
      {/* Card for the billing details form */}
      <Card
        elevation={0}
        sx={{
          height: "auto",
          maxWidth: "816px",
          border: "1px solid",
          borderRadius: "8px",
          borderColor: "var(--light-separators-colors-secondary, #E1E1E1)",
          flexShrink: "0",
        }}
      >
        <CardContent>
          <form>
            {/* Grid container for form layout */}
            <Grid container spacing={2} sx={{ padding: "15px 32px 15px 32px" }}>
              {/* Title for the billing details form */}
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  style={{
                    color: "var(--light-text-color-title, #11142D)",
                    fontFamily: "Lora",
                    fontSize: "24px",
                    lineHeight: "120%",
                    fontStyle: "normal",
                    letterSpacing: "0.12px",
                    fontWeight: "700",
                    marginTop: "10px",
                  }}
                >
                  {billingDetailsFormTitle}
                </Typography>
              </Grid>
              {/* First Name */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h1"
                  style={{
                    color: "var(--light-text-color-title, #11142D)",
                    fontFamily: "Mulish, sans-serif",
                    fontSize: "16px",
                    lineHeight: "120%",
                    fontStyle: "normal",
                    letterSpacing: "0.08px",
                    fontWeight: "700",
                    marginTop: "10px",
                  }}
                >
                  First Name
                </Typography>
                <TextField
                  id="outlined-basic"
                  placeholder="Input your First Name in Here"
                  variant="outlined"
                  sx={{ width: "100%", height: "48px", marginTop: "10px" }}
                />
              </Grid>
              {/* Last Name */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h1"
                  style={{
                    color: "var(--light-text-color-title, #11142D)",
                    fontFamily: "Mulish, sans-serif",
                    fontSize: "16px",
                    lineHeight: "120%",
                    fontStyle: "normal",
                    letterSpacing: "0.08px",
                    fontWeight: "700",
                    marginTop: "10px",
                  }}
                >
                  Last Name
                </Typography>
                <TextField
                  id="outlined-basic"
                  placeholder="Input your Last Name in Here"
                  variant="outlined"
                  sx={{ width: "100%", height: "48px", marginTop: "10px" }}
                />
              </Grid>
              {/* Email Address */}
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  style={{
                    color: "var(--light-text-color-title, #11142D)",
                    fontFamily: "Mulish, sans-serif",
                    fontSize: "16px",
                    lineHeight: "120%",
                    fontStyle: "normal",
                    letterSpacing: "0.08px",
                    fontWeight: "700",
                    marginTop: "10px",
                  }}
                >
                  Email Address
                </Typography>
                <TextField
                  id="outlined-basic"
                  placeholder="Input your Email Address in Here"
                  variant="outlined"
                  sx={{ width: "100%", height: "48px", marginTop: "10px" }}
                />
              </Grid>
              {/* Phone Number */}
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  style={{
                    color: "var(--light-text-color-title, #11142D)",
                    fontFamily: "Mulish, sans-serif",
                    fontSize: "16px",
                    lineHeight: "120%",
                    fontStyle: "normal",
                    letterSpacing: "0.08px",
                    fontWeight: "700",
                    marginTop: "10px",
                  }}
                >
                  Phone Number
                </Typography>
                <TextField
                  id="outlined-basic"
                  placeholder="Input your Phone Number in Here"
                  variant="outlined"
                  sx={{ width: "100%", height: "48px", marginTop: "10px" }}
                />
              </Grid>
              {/* Passport Number */}
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  style={{
                    color: "var(--light-text-color-title, #11142D)",
                    fontFamily: "Mulish, sans-serif",
                    fontSize: "16px",
                    lineHeight: "120%",
                    fontStyle: "normal",
                    letterSpacing: "0.08px",
                    fontWeight: "700",
                    marginTop: "10px",
                  }}
                >
                  Passport Number
                </Typography>
                <TextField
                  id="outlined-basic"
                  placeholder="Input your Email Address in Here"
                  variant="outlined"
                  sx={{ width: "100%", height: "48px", marginTop: "10px" }}
                />
              </Grid>
              {/* Address */}
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  style={{
                    color: "var(--light-text-color-title, #11142D)",
                    fontFamily: "Mulish, sans-serif",
                    fontSize: "16px",
                    lineHeight: "120%",
                    fontStyle: "normal",
                    letterSpacing: "0.08px",
                    fontWeight: "700",
                    marginTop: "10px",
                  }}
                >
                  Address
                </Typography>
                <TextField
                  id="outlined-basic"
                  placeholder="Input your Address in Here"
                  variant="outlined"
                  sx={{
                    width: "100%",
                    height: "48px",
                    marginTop: "10px",
                    marginBottom: "30px",
                  }}
                />
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default BillingDetails;
