"use client"
import React, { useState, useEffect  } from "react";
import { Grid, Typography, Card, Box, Button, IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { adminContentLogoCarousel } from "@/data/admincontent";
import { validateFormData } from "@/utils/validation";
import { schemaAdminPanelLogoCarousel } from "@/schemas/adminPanelLogoCarousel.schema";
import RemoveIcon from '@mui/icons-material/Remove'; 

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

const LogoCarousel: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string> | null>(null);
  
  // Ensure file-related code only runs in the browser
  useEffect(() => {
    if (typeof window === "undefined") {
      console.error("Running in a non-browser environment.");
    } else if (typeof File === "undefined") {
      console.error("File API is not supported in this browser.");
    }
  }, []);

  // Handles the file input change event
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // If there are files in the input event, process them
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      setFiles(prevFiles => [...prevFiles, ...newFiles]);
      setErrors(null);
    }
  };

  // Handles the form submission
  const handleSubmit = () => {
    // Create a form data object with the logos
    const formData = { logos: files };
    // Validate the form data using a custom validation function
    const { errors: validationErrors, data } = validateFormData(schemaAdminPanelLogoCarousel, formData);

    // If there are validation errors, set them in the state
    if (validationErrors) {
      setErrors(validationErrors as Record<string, string>);
    } else {
      console.log(data);
      // Handle successful submission here
      setErrors(null);
    }
  };

  // Removes a file from the files array
  const removeFile = (index: number) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };
  
  // Custom styles for the Card component
  const cardStyles: React.CSSProperties = {
    display: "flex", // Display the content as a flexbox
    justifyContent: "center", // Center the content
    alignItems: "center", // Center the content
    borderColor: "white", // Set the border color to white
    borderWidth: "0px", // Set border width to 0
    borderRadius: "0px", // Set border radius to 0
    boxShadow: "none", // Remove any box shadow

  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <Typography
            variant="h2"
            sx={{ marginTop: "05px", fontWeight: "bold" }}
          >
            {
              adminContentLogoCarousel.adminContentLogoCarouselHeaderTitle // Display the header title
            }
          </Typography>
        <Card
          elevation={0}
          sx={{
            height: "550px",
            width: "100%",
            border: "1px solid",
            borderRadius: "8px",
            borderColor: "#000",
            flexShrink: "0",
            marginTop: "20px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 0.5 },
            }}
            noValidate
            autoComplete="off"
          >
            <Button
              startIcon={<CloudUploadIcon />}
              variant="outlined"
              component="label" //Use the button as a label for file input
              role={undefined} // Remove role attribute, as it's not needed
              tabIndex={-1} // Remove button from tab navigation
              sx={{
                width: '8.5rem', display: "flex", alignItems: "center"
              }}
            >
              {
                adminContentLogoCarousel.adminContentLogoCarouselUploadButton // Display the upload button text
              }
              <VisuallyHiddenInput type="file" onChange={handleFileChange} multiple />
            </Button>
            {files.length > 0 && (
              <Box sx={{ width: "100%", marginTop: 2 }}>
                {files.map((file, index) => (
                  <Box key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 1, paddingRight: 1 }}>
                    <Typography key={index} variant="body1" sx={{ flexGrow: 1, marginRight: 2 }}>{file.name}</Typography>
                    <IconButton
                      onClick={() => removeFile(index)}
                      size="small"
                      color="error"
                      sx={{
                        width: '16px',
                        height: '16px',
                        padding: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <RemoveIcon sx={{ fontSize: '1.2rem' }} />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            )}
            {errors && (
              <Box sx={{ width: "100%", marginTop: 2 }}>
                {Object.entries(errors).map(([field, fieldErrors]) => (
                  <Box key={field}>
                      <Typography color="error">{fieldErrors}</Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Card>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} marginTop={2}>
          <Box display="flex" justifyContent="end" alignItems="center">
            <Button
              variant="outlined"
              onClick={handleSubmit}
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
                  adminContentLogoCarousel.adminContentLogoCarouselSubmitButton // Display the submit button text
                }
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default LogoCarousel;
