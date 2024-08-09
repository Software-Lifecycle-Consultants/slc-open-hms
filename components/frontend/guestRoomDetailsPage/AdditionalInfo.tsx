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
import { roomDetailsSeo } from "@/data/seo";

const AdditionalInfo = () => {
  const router = useRouter();

  const navigationToCheckoutScreen = () => {
    router.push("/checkout");
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Typography fontSize="39px"fontFamily="Mulish" color="#11142D">
            {additionalInfoSection.additionalInfoSectionTitle}
          </Typography>
          <Typography
            variant="h4"
            marginTop="25px"
          >
            {additionalInfoSection.additionalInfoSectionDescription}
          </Typography>
          <Typography variant="h4" color="#11142D" marginTop="32px" fontWeight="700"
          sx={{'@media (max-width:600px)': {
            fontSize: '1rem',
            fontWeight:'700',
          },}}>
            Check in {additionalInfoSection.checkinTime}
          </Typography>
          <Typography
            variant="h4" color="#11142D" marginTop="25px" fontWeight="700"
            sx={{'@media (max-width:600px)': {
              fontSize: '1rem',
              fontWeight:'700',
            },}}>
            Check Out {additionalInfoSection.checkoutTime}
          </Typography>
          <Button
          aria-label={roomDetailsSeo.additionalInfoButtonAriaLabel}
          sx={{marginTop:"25px"}}
            variant="contained"
            onClick={navigationToCheckoutScreen}
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
                    variant="h4"
                    color="#9A9AB0"
                  >
                    {item.accordion}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h4">{item.accordionDescription}</Typography>
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
