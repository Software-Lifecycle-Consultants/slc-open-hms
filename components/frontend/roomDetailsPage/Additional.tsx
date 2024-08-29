import React, { useState } from "react";
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
import { schemaAdminPanelRoomDetailsAdditional } from "@/schemas/adminPanelRoomDetailsAdditional.schema";
import { validateFormData } from "@/utils/validation";

type AdditionalFormData = {
  additionalInfoTitle: string;
  additionalInfoDescription: string;
}
/* Functional component for ExtraFacilitation */
const Additional = () => {
  const [formData, setFormData] = useState<AdditionalFormData>({
    additionalInfoTitle: "",
    additionalInfoDescription: "",
  });
  const [additionalerrors, setadditionalerrors] = useState<Partial<AdditionalFormData>>({});
  
   // Handle form input change
   const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setadditionalerrors({
      ...additionalerrors,
      [name]: "", // Reset error message for the field being changed
    });
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { errors: validationErrors, data } = validateFormData(schemaAdminPanelRoomDetailsAdditional, formData);
  
    if (validationErrors) {
      setadditionalerrors(validationErrors);
    } else {
      console.log(data);
    }
  };

  return (
    <>
      {/* Card for the billing details form */}
      <Card
        elevation={0}
        sx={{
          height: "600px",
          Width: "auto",
          border: "1px solid",
          borderRadius: "8",
          borderColor: "#D0D5DD",
          flexShrink: "0",
        }}
      >
        <Box>
          <Typography
            mt={2}
            ml={2}
          variant="h2"
          >
            {additional.additionalPageTitle}
          </Typography>
        </Box>
        <CardContent>
          <form onSubmit={handleSubmit} noValidate>
            {/* Grid container for form layout */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  fullWidth
                  label={<b style={{ fontWeight: 'normal' }}>Enter Additional Information</b>}
                  name="additionalInfoTitle"
                  value={formData. additionalInfoTitle}
                  onChange={handleChange}
                  error={!!additionalerrors. additionalInfoTitle}
                  helperText={additionalerrors. additionalInfoTitle}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography
                  mb={2}
                variant="h3"
                >
                  Description
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={16}
                  label="Enter description"
                  name="additionalInfoDescription"
                  value={formData.  additionalInfoDescription}
                  onChange={handleChange}
                  error={!!additionalerrors.  additionalInfoDescription}
                  helperText={additionalerrors.  additionalInfoDescription}
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
