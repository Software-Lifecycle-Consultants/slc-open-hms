import React, { useState } from "react";
import { Grid, Typography, TextField, Card, CardContent, Box } from "@mui/material";
import { schemaAdminPanelRoomDetails } from "@/schemas/adminPanelRoomDetailsDetails.schema";
import { validateFormData } from "@/utils/validation";

type DetailFormData = {
  title: string;
  subTitle: string;
  descriptionTitle: string;
  description: string; 
}
const Details = () => {
  const [formData, setFormData] = useState<DetailFormData>({
    title: "",
    subTitle: "",
    descriptionTitle: "",
    description: "",
  });
  const [detailerrors, setdetailerrors] = useState<Partial<DetailFormData>>({});

  // Handle form input change
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setdetailerrors({
      ...detailerrors,
      [name]: "", // Reset error message for the field being changed
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { errors: validationErrors, data } = validateFormData(schemaAdminPanelRoomDetails, formData);

    if (validationErrors) {
      setdetailerrors(validationErrors);
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
          height: "580px",
          Width: "auto",
          border: "1px solid",
          borderRadius: "8",
          borderColor: "#d4d4dc",
          flexShrink: "0",
          backgroundColor: "#EEF5FF",
        }}
      >
        <Box sx={{backgroundColor: 'white', padding:"10px 15px 10px 15px", borderRadius:2}}>
        <CardContent>
          <form onSubmit={handleSubmit} noValidate>
            {/* Grid container for form layout */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField 
                  fullWidth 
                  label="Title" 
                  name="title" 
                  value={formData.title}
                  onChange={handleChange}
                  error={!!detailerrors.title}
                  helperText={detailerrors.title}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField 
                  fullWidth 
                  label="Sub Title" 
                  name="subTitle" 
                  value={formData.subTitle}
                  onChange={handleChange}
                  error={!!detailerrors.subTitle}
                  helperText={detailerrors.subTitle}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField 
                  fullWidth 
                  label="Description title" 
                  name="descriptionTitle" 
                  value={formData.descriptionTitle}
                  onChange={handleChange}
                  error={!!detailerrors.descriptionTitle}
                  helperText={detailerrors.descriptionTitle}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography mt={2} mb={2} variant="h3">
                  Description
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={10}
                  label="Enter description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  error={!!detailerrors.description}
                  helperText={detailerrors.description}
                />
              </Grid>
            </Grid>
          </form>
        </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default Details;
