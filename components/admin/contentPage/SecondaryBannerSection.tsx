import React, { useState } from "react";
import { TextField, Grid, Typography, Card, Box, Button } from "@mui/material";
import { adminContentSecondaryBanner } from "@/data/admincontent";
import EditIcon from "@mui/icons-material/Edit";
import { schemaAdminSecondaryBanner } from "@/schemas/adminSecondaryBanner.schema";
import { validateFormData } from "@/utils/validation";

// Define the form data structure
type SecondaryBannerFormData = {
  bannerTitle: string;
  bannerDescription: string;
  buttonName: string;
  videoUrl: string;
};

const SecondaryBannerSection: React.FC = () => {
  const [formData, setFormData] = useState<SecondaryBannerFormData>({ // Initialize the form data
    bannerTitle: "",
    bannerDescription: "",
    buttonName: "",
    videoUrl: "",
  });
  const [errors, setErrors] = useState<Partial<SecondaryBannerFormData>>({}); // Initialize the form errors
 // Handle form field changes
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "", // Reset error message for the field being changed
    });
  };
// Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { errors: validationErrors, data } = validateFormData(schemaAdminSecondaryBanner, formData);

    if (validationErrors) {
      setErrors(validationErrors);
    } else {
      console.log(data);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} component='form' onSubmit={handleSubmit}>
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
          }}
        >
          <Typography
            variant="h2"
            sx={{ marginTop: "05px", fontWeight: "bold" }}
          >
            {
              adminContentSecondaryBanner.adminContentSecondaryBannerHeaderTitle // Display the header title
            }
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 0.5 },
            }}
            noValidate
            autoComplete="off"
          >
            <Typography variant="h3" sx={{ marginTop: "10px" }}>
              {
                adminContentSecondaryBanner.adminContentSecondaryBannerDetailsTitle01 // Display the banner title
              }
            </Typography>

            <TextField
              fullWidth
              label="Enter Secondary Banner Section Title"
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
                adminContentSecondaryBanner.adminContentSecondaryBannerDetailsTitle02 // Display the banner sub title
              }
            </Typography>

            <TextField
              fullWidth
              label="Enter Description"
              variant="outlined"
              multiline
              rows={4}
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
                    adminContentSecondaryBanner.adminContentSecondaryBannerDetailsTitle03 // Display the banner description
                  }
                </Typography>
                <TextField
                  fullWidth
                  label="Enter Button Name"
                  variant="outlined"
                  required
                  name="buttonName"
                  value={formData.buttonName}
                  onChange={handleChange}
                  error={!!errors.buttonName}
                  helperText={errors.buttonName}
                  sx={{ m: 1, width: "44ch" }}
                />
              </Grid>
            </Grid>
            <Typography variant="h3" sx={{ marginTop: "10px" }}>
              {
                adminContentSecondaryBanner.adminContentSecondaryBannerDetailsTitle04 // Display the banner description
              }
            </Typography>

            <TextField
              fullWidth
              label="Enter Video URL Link"
              variant="outlined"
              multiline
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleChange}
              error={!!errors.videoUrl}
              helperText={errors.videoUrl}
            />
          </Box>
        </Card>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} marginTop={2}>
          <Box display="flex" justifyContent="end" alignItems="center">
            <Button
              endIcon={<EditIcon />}
              variant="outlined"
              sx={{
                borderColor: "#4A5472", // Set outline color
                "&:hover": {
                  backgroundColor: "#192959", // Set hover background color
                },
              }}
            >
              <Typography
                style={{
                  color: "White",
                }}
              >
                {
                  adminContentSecondaryBanner.adminContentSecondaryBannerDetailsEditButton // Display the edit button text
                }
              </Typography>
            </Button>
            <Button
              type="submit"
              variant="outlined"
              sx={{
                borderColor: "#4A5472", // Set outline color
                "&:hover": {
                  backgroundColor: "#192959", // Set hover background color
                },
              }}
            >
              <Typography
                style={{
                  color: "white",
                }}
              >
                {
                  adminContentSecondaryBanner.adminContentSecondaryBannerDetailsSubmitButton // Display the submit button text
                }
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SecondaryBannerSection;
