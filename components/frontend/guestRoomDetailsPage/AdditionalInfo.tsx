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
import { lora, mulish } from "../../../app/fonts";

const accordionTypographyStyle = [
  {
    color: "#9A9AB0",
    fontSize: "16px",
    lineHeight: "125%",
    fontStyle: "normal",
    letterSpacing: "0.08px",
    fontWeight: "400",
  },
];

const titleStyle = [
  {
    color: "#11142D",
    fontSize: "39px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "120%",
    letterSpacing: "0.195px",
  },
];

const descriptinStyle = [
  {
    color: "#515151",
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
    color: "#11142D",
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
    color: "#11142D",
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
          <Typography variant="h3" className={lora.className} sx={titleStyle}>
            {additionalInfoSection.additionalInfoSectionTitle}
          </Typography>
          <Typography
            variant="body1"
            className={mulish.className}
            sx={descriptinStyle}
          >
            {additionalInfoSection.additionalInfoSectionDescription}
          </Typography>
          <Typography variant="h6" className={lora.className} sx={checkInStyle}>
            Check in {additionalInfoSection.checkinTime}
          </Typography>
          <Typography
            variant="h6"
            className={lora.className}
            sx={checkoutStyle}
          >
            Check Out {additionalInfoSection.checkoutTime}
          </Typography>
          <Button
            variant="contained"
            className={mulish.className}
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
                  <Typography
                    variant="body1"
                    className={mulish.className}
                    sx={accordionTypographyStyle}
                  >
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
