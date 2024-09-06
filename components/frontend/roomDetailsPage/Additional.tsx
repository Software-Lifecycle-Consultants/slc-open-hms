"use client";
import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Box,
} from "@mui/material";
import { additional } from "@/data/roomDetails";
import { Bolt } from "@mui/icons-material";

interface AdditionalProps {
  formAdditionalData: {
    additionalInfoTitle: string;
    additionalInfoDescription: string;
  };
  setAdditionalFormData: React.Dispatch<
    React.SetStateAction<{
      additionalInfoTitle: string;
      additionalInfoDescription: string;
    }>
  >;
  // Object containing validation error messages for form fields
  errors: { [key: string]: string };
}
const Additional: React.FC<AdditionalProps> = ({
  formAdditionalData,
  setAdditionalFormData,
  errors,
}) => {
  // Manages form input changes and updates the formData in the parent component.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdditionalFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Card for the billing details form */}
      <Card
        elevation={0}
        sx={{
          height: "630px",
          Width: "auto",
          border: "1px solid",
          borderRadius: "8",
          borderColor: "#D0D5DD",
          flexShrink: "0",
        }}>
        <Box>
          <Typography mt={2} ml={2} variant="h2">
            {additional.additionalPageTitle}
          </Typography>
        </Box>
        <CardContent>
          <form>
            {/* Grid container for form layout */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  fullWidth
                  label={
                    <b style={{ fontWeight: "normal" }}>
                      Enter Additional Information
                    </b>
                  }
                  name="additionalInfoTitle"
                  value={formAdditionalData.additionalInfoTitle}
                  onChange={handleChange}
                  error={!!errors.additionalInfoTitle}
                  helperText={errors.additionalInfoTitle}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography mb={2} variant="h3">
                  Description
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={14}
                  label="Enter description"
                  name="additionalInfoDescription"
                  value={formAdditionalData.additionalInfoDescription}
                  onChange={handleChange}
                  error={!!errors.additionalInfoDescription}
                  helperText={errors.additionalInfoDescription}
                />
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
export default Additional;
