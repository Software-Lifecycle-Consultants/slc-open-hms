"use client"
import React, { useState, useEffect  }  from "react";
import { TextField, Grid, Typography, Card, Box, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { adminContentDestinationOverview } from "@/data/admincontent";
import EditIcon from "@mui/icons-material/Edit";
import { schemaAdminPanelContentFooter } from "@/schemas/adminFooter.schema";

// Type definition for the form data in the footer section
type FooterFormData = {
  logo: File[] | null;
  description: String,
  ownerOfCopyright: String,
  footerSection1: String,
  footerSection1SubSection1: String,
  footerSection1SubSection2: String,
  footerSection1SubSection3: String,
  footerSection2: String,
  footerSection2SubSection1: String,
  footerSection2SubSection2: String,
  footerSection2SubSection3: String,
  footerSection3: String,
  footerSection3SubSection1: String,
  footerSection3SubSection2: String,
  footerSection3SubSection3: String,
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
const Footer: React.FC = () => {
  const [formData, setFormData] = useState<FooterFormData>({
    logo: null,
    description: "",
    ownerOfCopyright: "",
    footerSection1: "",
    footerSection1SubSection1: "",
    footerSection1SubSection2: "",
    footerSection1SubSection3: "",
    footerSection2: "",
    footerSection2SubSection1: "",
    footerSection2SubSection2: "",
    footerSection2SubSection3: "",
    footerSection3: "",
    footerSection3SubSection1: "",
    footerSection3SubSection2: "",
    footerSection3SubSection3: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FooterFormData, string>>>({}); // Define the state type as a partial record and Start with an empty object to hold errors for each form field

    // Ensure file-related code only runs in the browser
    useEffect(() => {
      if (typeof window === "undefined") {
        console.error("Running in a non-browser environment.");
      } else if (typeof File === "undefined") {
        console.error("File API is not supported in this browser.");
      }
    }, []);
    
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // Extract the name and value from the input event
    setFormData((prevData) => ({ ...prevData, [name]: value })); // Update the form data state with the new value
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files; // Extract the files from the input event
    // Update the form data state with the selected files
    setFormData((prevData) => ({
      ...prevData, // Spread the previous state to retain other fields
      logo: files ? Array.from(files) : [], // Handle files or default to an empty array
    }));
  };

  const handleSubmit = () => {
    // Ensure formData is properly initialized
    const adjustedData = {
      ...formData,
      logo: formData.logo || [], // Convert null to empty array
    };

    const validation = schemaAdminPanelContentFooter.safeParse(adjustedData);
    // Check if the validation was successful
    if (!validation.success) {
      const errorObject: Partial<Record<keyof FooterFormData, string>> = {}; // Initialize an object to store validation error messages
      // Iterate over the validation errors
      validation.error.errors.forEach((err) => {
        if (err.path && err.message) {
          const key = err.path[0] as keyof FooterFormData; // Extract the field name and error message from the validation error
          errorObject[key] = err.message; // Map the field name to its error message
        }
      });
      setErrors(errorObject); // Update the state with the error messages
    } else {
      setErrors({}); // Clear any existing errors if the form data is valid
      console.log("Form data is valid:", validation.data); // Handle successful form submission logic
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Card
          elevation={0}
          sx={{
            height: "550px",
            width: "100%",
            borderRadius: "8px",
            flexShrink: "0",
            p: "20px",
            border: "1px solid #000",
          }}>
          <Typography
            variant="h2"
            sx={{ marginTop: "05px", fontWeight: "bold" }}>
            Logo
          </Typography>
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 0 } }}
            noValidate
            autoComplete="off">
            <Card
              elevation={0}
              sx={{
                height: "155px",
                width: "auto",
                border: "1px solid",
                borderRadius: "6px",
                borderColor: "#D0D5DD",
                flexShrink: "0",
                padding: "10px 25px 10px 25px",
                display: 'flex',          // Enable flexbox layout
                justifyContent: 'center', // Center horizontally
                alignItems: 'center',     // Center vertically
              }}>
                <Grid
                  container
                  spacing={2}
                  item
                  xs={7} sm={6} md={2} lg={2} xl={2} m={1}
                  justifyContent="center" // Center Grid items horizontally
                  alignItems="center"    // Center Grid items vertically
                  sx={{ width: 'auto' }} // Set Grid to auto width
                  >
                  <Button
                    component="label" //Use the button as a label for file input
                    role={undefined} // Remove role attribute, as it's not needed
                    variant="outlined"
                    tabIndex={-1} // Remove button from tab navigation
                    startIcon={<CloudUploadIcon />}>
                    {
                      adminContentDestinationOverview.adminContentMainBarUploadButton
                    }
                    <VisuallyHiddenInput
                      type="file"
                      onChange={handleFileChange} // Handle file selection
                    />
                  </Button>
                </Grid>
            </Card>
            {errors.logo && (
              <Typography color="error">{errors.logo}</Typography> // Display error message for the logo field if there is one
            )}
            <Typography variant="h3" sx={{ marginTop: "10px" }}>
              Description
            </Typography>
            <TextField
              fullWidth
              label="Enter Description"
              variant="outlined"
              multiline
              rows={4}
              name="description" // The name of the field, used for identifying the field in form data
              value={formData.description} // The value of the text field, bound to the `description` field of `formData`
              onChange={handleInputChange} // Function to handle changes to the text field value
              error={Boolean(errors.description)}  // Conditionally displays an error state if there's an error message for this field
              helperText={errors.description} // Provides additional information or error messages below the text field
            />
            <Typography variant="h3" sx={{ marginTop: "10px" }}>
              Owner Of Copyright
            </Typography>
            <TextField
              fullWidth
              label="Enter Owner Of Copyright"
              variant="outlined"
              multiline
              name="ownerOfCopyright"
              value={formData.ownerOfCopyright}
              onChange={handleInputChange}
              error={Boolean(errors.ownerOfCopyright)}
              helperText={errors.ownerOfCopyright}
            />
          </Box>
        </Card>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            {/* Display the card 01  */}
            <Card
              elevation={0}
              sx={{
                height: "auto",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #000",
                flexShrink: "0",
                mt: 2,
                p: "20px",
              }}>
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Footer Section 1
              </Typography>
              <TextField
                fullWidth
                label="Enter Footer Section 1"
                variant="outlined"
                required
                name="footerSection1"
                value={formData.footerSection1}
                onChange={handleInputChange}
                error={Boolean(errors.footerSection1)}
                helperText={errors.footerSection1}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Sub Section 1
              </Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 1"
                variant="outlined"
                required
                name="footerSection1SubSection1"
                value={formData.footerSection1SubSection1}
                onChange={handleInputChange}
                error={Boolean(errors.footerSection1SubSection1)}
                helperText={errors.footerSection1SubSection1}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Sub Section 2
              </Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 2"
                variant="outlined"
                required
                name="footerSection1SubSection2"
                value={formData.footerSection1SubSection2}
                onChange={handleInputChange}
                error={Boolean(errors.footerSection1SubSection2)}
                helperText={errors.footerSection1SubSection2}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Sub Section 3
              </Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 3"
                variant="outlined"
                required
                name="footerSection1SubSection3"
                value={formData.footerSection1SubSection3}
                onChange={handleInputChange}
                error={Boolean(errors.footerSection1SubSection3)}
                helperText={errors.footerSection1SubSection3}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            {/* Display the card 02  */}
            <Card
              elevation={0}
              sx={{
                height: "auto",
                width: "100%",
                borderRadius: "8px",
                flexShrink: "0",
                mt: 2,
                p: "20px",
                border: "1px solid #000",
              }}>
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Footer Section 2
              </Typography>
              <TextField
                fullWidth
                label="Enter Footer Section 2"
                variant="outlined"
                required
                name="footerSection2"
                value={formData.footerSection2}
                onChange={handleInputChange}
                error={Boolean(errors.footerSection2)}
                helperText={errors.footerSection2}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Sub Section 1
              </Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 1"
                variant="outlined"
                required
                name="footerSection2SubSection1"
                value={formData.footerSection2SubSection1}
                onChange={handleInputChange}
                error={Boolean(errors.footerSection2SubSection1)}
                helperText={errors.footerSection2SubSection1}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Sub Section 2
              </Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 2"
                variant="outlined"
                required
                name="footerSection2SubSection2"
                value={formData.footerSection2SubSection2}
                onChange={handleInputChange}
                error={Boolean(errors.footerSection2SubSection2)}
                helperText={errors.footerSection2SubSection2}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Sub Section 3
              </Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 3"
                variant="outlined"
                required
                name="footerSection2SubSection3"
                value={formData.footerSection2SubSection3}
                onChange={handleInputChange}
                error={Boolean(errors.footerSection2SubSection3)}
                helperText={errors.footerSection2SubSection3}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            {/* Display the card 03  */}
            <Card
              elevation={0}
              sx={{
                height: "auto",
                width: "100%",
                borderRadius: "8px",
                flexShrink: "0",
                mt: 2,
                p: "20px",
                border: "1px solid #000",
              }}>
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Footer Section 3
              </Typography>
              <TextField
                fullWidth
                label="Enter Footer Section 3"
                variant="outlined"
                required
                name="footerSection3"
                value={formData.footerSection3}
                onChange={handleInputChange}
                error={Boolean(errors.footerSection3)}
                helperText={errors.footerSection3}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Sub Section 1
              </Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 1"
                variant="outlined"
                required
                name="footerSection3SubSection1"
                value={formData.footerSection3SubSection1}
                onChange={handleInputChange}
                error={Boolean(errors.footerSection3SubSection1)}
                helperText={errors.footerSection3SubSection1}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Sub Section 2
              </Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 2"
                variant="outlined"
                required
                name="footerSection3SubSection2"
                value={formData.footerSection3SubSection2}
                onChange={handleInputChange}
                error={Boolean(errors.footerSection3SubSection2)}
                helperText={errors.footerSection3SubSection2}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Sub Section 3
              </Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 3"
                variant="outlined"
                required
                name="footerSection3SubSection3"
                value={formData.footerSection3SubSection3}
                onChange={handleInputChange}
                error={Boolean(errors.footerSection3SubSection3)}
                helperText={errors.footerSection3SubSection3}
              />
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} my={4}>
          <Box display="flex" justifyContent="end" alignItems="center">
            <Button
              endIcon={<EditIcon />}
              variant="outlined"
              sx={{
                borderColor: "#4A5472", // Set outline color
                "&:hover": {
                  backgroundColor: "#192959", // Set hover background color
                },
              }}>
              <Typography
                style={{
                  color: "White",
                }}>
                {
                  adminContentDestinationOverview.adminContentMainBarEditButton // Display the edit button text
                }
              </Typography>
            </Button>
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
                  adminContentDestinationOverview.adminContentMainBarSubmitButton
                }
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
