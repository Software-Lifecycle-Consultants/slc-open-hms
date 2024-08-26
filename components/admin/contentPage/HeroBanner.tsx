import React,{ useState } from 'react';
import { TextField, Grid, Typography, Card, Box, Button } from '@mui/material';
import { adminContentHeroBanner } from "@/data/admincontent";
import EditIcon from '@mui/icons-material/Edit';
import { validateFormData } from "@/utils/validation";
import {heroBannerSchema} from "@/schemas/adminHeroBanner.schema";

// Define the form data type based on your schema
type HeroBannerFormData = {
  bannerTitle: string;
  bannerSubTitle: string;
  bannerDescription: string;
  bannerButton1: string;
  bannerButton2: string;
};

const HeroBanner: React.FC = () => {
  const [formData, setFormData] = useState<HeroBannerFormData>({
    bannerTitle: "",
    bannerSubTitle: "",
    bannerDescription: "",
    bannerButton1: "",
    bannerButton2: "",
  });

  const [errors, setErrors] = useState<Partial<HeroBannerFormData>>({});

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { errors: validationErrors, data } = validateFormData(heroBannerSchema, formData);

    if (validationErrors) {
      setErrors(validationErrors); // Set errors if validation fails
    } else {
      setErrors({}); // Clear errors if validation passes

      // Perform save actions (e.g., API call)
      console.log("Form submitted successfully", data);
      // Display success message or perform additional actions here
    }
  };
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Card
          elevation={0}
          sx={{
            height: "auto",
            width: "100%",
            border: "1px solid",
            borderRadius: "8px",
            borderColor: "#000",
            flexShrink: "0",
            marginTop: "20px",
            padding: "20px",
            marginBottom:"20px",
          }}
        >
          <Typography variant="h2">
            {
              adminContentHeroBanner.adminContentHeaderTitle // Display the header title
            }
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 0.5 },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit} // Handle form submission
          >
            <Typography variant="h3" sx={{ marginTop: "10px" }}>
              {
                adminContentHeroBanner.adminContentBannerDetailsTitle01 // Display the banner title
              }
            </Typography>

            <TextField
              fullWidth
              label="Enter Banner Title"
              variant="outlined"
              required
              name="bannerTitle"
              value={formData.bannerTitle}
              onChange={handleChange}
              error={!!errors.bannerTitle}
              helperText={errors.bannerTitle}
            />
            <Typography variant="h3" sx={{ marginTop: "10px" }}>
              {
                adminContentHeroBanner.adminContentBannerDetailsTitle02 // Display the banner sub title
              }
            </Typography>

            <TextField
              fullWidth
              label="Enter Banner Sub Title"
              variant="outlined"
              required
              name="bannerSubTitle"
              value={formData.bannerSubTitle}
              onChange={handleChange}
              error={!!errors.bannerSubTitle}
              helperText={errors.bannerSubTitle}
            />
            <Typography variant="h3" sx={{ marginTop: "10px" }}>
              {
                adminContentHeroBanner.adminContentBannerDetailsTitle03 // Display the banner description
              }
            </Typography>

            <TextField
              fullWidth
              label="Enter Description"
              variant="outlined"
              multiline
              rows={4}
              required
              name="bannerDescription"
              value={formData.bannerDescription}
              onChange={handleChange}
              error={!!errors.bannerDescription}
              helperText={errors.bannerDescription}
            />
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                {
                  adminContentHeroBanner.adminContentBannerDetailsTitle04 // Display the banner button 1
                }
              </Typography>
              <TextField
                fullWidth
                label="Enter Banner Sub Title"
                variant="outlined"
                required
                name="bannerButton1"
                value={formData.bannerButton1}
                onChange={handleChange}
                error={!!errors.bannerButton1}
                helperText={errors.bannerButton1}
                sx={{ m: 1, width: "40ch" }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                {
                  adminContentHeroBanner.adminContentBannerDetailsTitle05 // Display the banner button 2
                }
              </Typography>
              <TextField
                fullWidth
                label="Enter Banner Sub Title"
                variant="outlined"
                required
                name="bannerButton2"
                value={formData.bannerButton2}
                onChange={handleChange}
                error={!!errors.bannerButton2}
                helperText={errors.bannerButton2}
                sx={{ m: 1, width: "40ch" }}
              />
            </Grid>
          </Grid>
          {/* Buttons */}
          <Box display="flex" justifyContent="end" alignItems="center" mt={2}>
            <Button
              endIcon={<EditIcon />}
              variant="outlined"
              sx={{
                borderColor: "#4A5472", // Set outline color
                "&:hover": {
                  backgroundColor: "#192959", // Set hover background color
                },
                marginRight: 2,
              }}
            >
              <Typography
                style={{
                  color: "White",
                }}
              >
                {
                  adminContentHeroBanner.adminContentBannerDetailsEditButton // Display the edit button text
                }
              </Typography>
            </Button>
            <Button
              variant="outlined"
              type="submit"
              sx={{
                borderColor: "#4A5472", // Set outline color
                "&:hover": {
                  backgroundColor: "#192959", // Set hover background color
                },
              }}
            >
              <Typography>
                {
                  adminContentHeroBanner.adminContentBannerDetailsSubmitButton // Display the submit button text
                }
              </Typography>
            </Button>
          </Box>
          </Box>
          </Card>
      </Grid>
    </Grid>
  );
};

export default HeroBanner;
