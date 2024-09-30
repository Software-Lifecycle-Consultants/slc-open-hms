"use client"
import React from "react";
import { Grid, Typography, TextField, Card, CardContent, Box } from "@mui/material";

interface DetailsProps {
  formData: {
    title: string;
    subTitle: string;
    descriptionTitle: string;
    description: string; 
};
setFormData: React.Dispatch<React.SetStateAction<{
  title: string;
  subTitle: string;
  descriptionTitle: string;
  description: string;
}>>;
 // Object containing validation error messages for form fields
errors: { [key: string]: string };
}

const Details : React.FC<DetailsProps> = ({ formData, setFormData, errors }) => {
  // Manages form input changes and updates the formData in the parent component.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      {/* Card for the billing details form */}
      <Card
        elevation={0}
        sx={{
          height: "650px",
          Width: "auto",
          border: "1px solid",
          borderRadius: "8",
          borderColor: "#d4d4dc",
          flexShrink: "0",
          backgroundColor: "#EEF5FF",
        }}
      >
        <Box sx={{backgroundColor: 'white', height:'650px',padding:"10px 15px 10px 15px", borderRadius:2}}>
        <CardContent>
          <form>
            {/* Grid container for form layout */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField 
                  fullWidth 
                  label="Title" 
                  name="title" 
                  value={formData.title}
                  onChange={handleChange}
                  error={!!errors.title}
                  helperText={errors.title}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField 
                  fullWidth 
                  label="Sub Title" 
                  name="subTitle" 
                  value={formData.subTitle}
                  onChange={handleChange}
                  error={!!errors.subTitle}
                  helperText={errors.subTitle}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField 
                  fullWidth 
                  label="Description title" 
                  name="descriptionTitle" 
                  value={formData.descriptionTitle}
                  onChange={handleChange}
                  error={!!errors.descriptionTitle}
                  helperText={errors.descriptionTitle}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography mt={2} mb={2} variant="h3">
                  Description
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={9}
                  label="Enter description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  error={!!errors.description}
                  helperText={errors.description}
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
