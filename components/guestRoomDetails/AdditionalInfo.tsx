"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/navigation";
import { additionalInfoSection } from "@/data/roomDetailsPage";
import { accordionData } from "@/data/roomDetailsPage";


const accordionTypographyStyle = [
  {
    color: "var(--light-text-color-body-2, #9A9AB0)",
    fontFamily: "Mulish, sans-serif",
    fontSize: "16px",
    lineHeight: "125%",
    fontStyle: "normal",
    letterSpacing: "0.08px",
    fontWeight: "400",
  },
];

const titleStyle = [
  {
    color: "var(--light-text-color-title, #11142D)",
    fontFamily: "Lora",
    fontSize: "39px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "120%",
    letterSpacing: "0.195px",
  },
];

const descriptinStyle = [
  {
    color: "var(--light-text-color-body-1, #515151)",
    fontFamily: "Mulish, sans-serif",
    fontSize: "16px",
    lineHeight: "125%",
    fontStyle: "normal",
    letterSpacing: "0.08px",
    fontWeight: "400",
    marginTop: "24px",
  },
];

const checkInStyle = [
  {
    color: "var(--light-text-color-title, #11142D)",
    fontFamily: "Lora",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "120%",
    letterSpacing: "0.08px",
    marginTop: "32px",
  },
];

const checkoutStyle = [
  {
    color: "var(--light-text-color-title, #11142D)",
    fontFamily: "Lora",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "120%",
    letterSpacing: "0.08px",
    marginTop: "24px",
  },
];

const buttonStyle = [
  {
    borderRadius: "8px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "11px 24px",
    gap: "10px",
    textTransform: "none",
    width: "45%",
    height: "56px",
    marginTop: "40px",
    fontFamily: "Mulish, sans-serif",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "120%",
    letterSpacing: "0.08px",
    backgroundColor: "#C7923E",
    "&:hover": {
      backgroundColor: "#c7833e",
    },
  },
];

const AdditionalInfo = () => {
  const router = useRouter();

  const navigationToCheckoutScreen = () => {
    router.push("/CheckoutScreen");
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" sx={titleStyle}>
            {additionalInfoSection.additionalInfoSectionTitle}
          </Typography>
          <Typography variant="body1" sx={descriptinStyle}>
            {additionalInfoSection.additionalInfoSectionDescription}
          </Typography>
          <Typography variant="h6" sx={checkInStyle}>
            Check in {additionalInfoSection.checkinTime}
          </Typography>
          <Typography variant="h6" sx={checkoutStyle}>
            Check Out {additionalInfoSection.checkoutTime}
          </Typography>
          <Button
            variant="contained"
            onClick={navigationToCheckoutScreen}
            sx={buttonStyle}
          >
            {additionalInfoSection.additionalInfoSectionctaCaption}
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              paddingTop: "67px",
              paddingLeft: { xs: "none", md: "24px" },
            }}
          >
            {accordionData.map((item) => (
              <Accordion
                key={item.id} // Add a unique key prop based on the item.id
                elevation={0}
                sx={{
                  border: "1px solid",
                  borderRadius: "8px",
                  borderColor:
                    "var(--light-separators-colors-secondary, #E1E1E1)",
                  flexShrink: "0",
                  marginTop: item.id !== "1" ? "10px" : "0", // Adjust the marginTop conditionally
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#9A9AB0" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="body1" sx={accordionTypographyStyle}>
                    {item.accordion}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.accordionDescription}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AdditionalInfo;
