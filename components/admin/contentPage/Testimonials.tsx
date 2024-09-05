"use client"
import React, { useState, useEffect } from "react";
import { TextField, Grid, Card, Typography, Box, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { adminContentTestimonials } from "@/data/admincontent";
import { adminContentDestinationOverview } from "@/data/admincontent";
import Rating from "@mui/material/Rating";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { validateFormData } from "@/utils/validation";
import { schemaAdminPanelTestimonials } from "@/schemas/adminPanelTestimonials.schema";

type TestsomonialFormData = {
  profileImage: File[];
  name: string,
  description: string,
};
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Testimonials: React.FC = () => {
  const [formData, setFormData] = useState<TestsomonialFormData>({
    profileImage: [],
    name: '',
    description: '',
  });
  const [Errors, setErrors] = useState<Record<string, string[]> | null>(null);

  // Ensure file-related code only runs in the browser
  useEffect(() => {
    if (typeof window === "undefined") {
      console.error("Running in a non-browser environment.");
    } else if (typeof File === "undefined") {
      console.error("File API is not supported in this browser.");
    }
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files); // Convert FileList to File[]
      setFormData((prev) => ({
        ...prev,
        profileImage: filesArray,
      }));
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 
  const { errors: validationErrors, data } = validateFormData(schemaAdminPanelTestimonials, formData);
    if (validationErrors) {
      // Ensure the error format matches the expected type
      const formattedErrors: Record<string, string[]> = Object.keys(validationErrors).reduce(
        (acc, key) => ({
          ...acc,
          [key]: [validationErrors[key]], // convert each string error into an array of strings
        }),
        {}
      );
      setErrors(formattedErrors);
    } else {
      // Handle successful form submission
      console.log("Form data:", data);
      setErrors(null);
    }
  };

  return (
    <Grid container spacing={2}>
      {/* Display the Videos cards  */}
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
            padding: "15px",
          }}>
          {/* Display the header title */}
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            {
              adminContentTestimonials.adminContentTestimonialsHeaderTitle // Display the header title
            }
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              height: 30,
              borderColor: "#000",
              borderRadius: "8px",
              border: "1px solid #000",
            }}>
            <Typography variant="h3" sx={{ flexGrow: 0.9 }}>
              {
                adminContentTestimonials.adminContentTestimonialsButtonCard1 // Display the button card 1
              }
            </Typography>
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              height: 30,
              borderColor: "#000",
              borderRadius: "8px",
              border: "1px solid #000",
              mt: 2,
            }}>
            <Typography variant="h3" sx={{ flexGrow: 0.9 }}>
              <Typography variant="h3" sx={{ flexGrow: 0.9 }}>
                {
                  adminContentTestimonials.adminContentTestimonialsButtonCard2 // Display the button card 2
                }
              </Typography>
            </Typography>
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: 30,
              borderColor: "#000",
              borderRadius: "8px",
              border: "1px solid #000",
              mt: 2,
              justifyContent: "end",
            }}>
            <Typography variant="h3" sx={{ flexGrow: 0.9 }}>
              {
                adminContentTestimonials.adminContentTestimonialsButtonCard3 // Display the button card 3
              }
            </Typography>
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Box>
        </Card>
      </Grid>
      {/* Display the New Videos cards  */}
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
            padding: "25px",
          }}>
          {/* Add New Testimonials */}
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            {
              adminContentTestimonials.adminContentTestimonialsHeaderTitle1 // Display the header title
            }
          </Typography>
          <Typography variant="h3" sx={{ marginTop: "10px" }}>
            {
              adminContentTestimonials.adminContentTestimonialsTitle // Display the video description
            }
          </Typography>
          <Card
            elevation={0}
            sx={{
              height: "55px",
              width: "100%",
              borderRadius: "8px",
              m: 1,
            }}>
            <Grid
              item
              xs={12}
              md={4}>
                <Button
                startIcon={<CloudUploadIcon />}
                variant="outlined"
                component="label" //Use the button as a label for file input
                role={undefined} // Remove role attribute, as it's not needed
                tabIndex={-1} // Remove button from tab navigation
                sx={{
                  width: "8.5rem",
                }}>
                {
                  adminContentDestinationOverview.adminContentMainBarUploadButton // Display the upload button text
                }
                <VisuallyHiddenInput type="file" onChange={handleFileChange} />
              </Button>
            </Grid>
          </Card>
          {Errors?.profileImage && (
              <Typography color="error">{Errors.profileImage}</Typography> // Display error message for the logo field if there is one
            )}
          <Typography variant="h3" sx={{ marginTop: "10px" }}>
            {
              adminContentTestimonials.adminContentTestimonialsTitle1 // Display the video URL 1
            }
          </Typography>
          <TextField
            fullWidth
            label="Enter Name"
            variant="outlined"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            error={Boolean(Errors?.name)}
            helperText={Errors?.name?.[0]}

            sx={{ m: 1 }}
          />
          <Typography variant="h3" sx={{ marginTop: "10px" }}>
            {
              adminContentTestimonials.adminContentTestimonialsDescription1 // Display the video description
            }
          </Typography>
          <TextField
            fullWidth
            label="Enter Description"
            variant="outlined"
            name="description"
            multiline
            value={formData.description}
            onChange={handleInputChange}
            error={Boolean(Errors?.description)}
            helperText={Errors?.description?.[0]}
            rows={4}
            sx={{ m: 1 }}
          />
          {/* Ratings*/}
          <Typography variant="h3" component="legend">
            Ratings
          </Typography>
          <Rating name="no-value" value={null} />
        </Card>
        <Grid my={4}>
          <Box display="flex" justifyContent="end" alignItems="center">
            <Button
              variant="outlined"
              onClick={handleSubmit}
              sx={{
                borderColor: "#4A5472", // Set outline color
                "&:hover": {
                  backgroundColor: "#192959", // Set hover background color
                },
              }}>
              <Typography
                style={{
                  color: "white",
                }}>
                {
                  adminContentTestimonials.adminContentDestinationCardSubmitButton // Display the submit button text
                }
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Testimonials;
