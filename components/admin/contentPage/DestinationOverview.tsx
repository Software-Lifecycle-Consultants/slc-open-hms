import React,{ useState } from 'react';
import { TextField, Grid, Typography, Card, Box, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { adminContentDestinationOverview } from '@/data/admincontent';
import EditIcon from "@mui/icons-material/Edit";
import { validateFormData } from "@/utils/validation";
import { destinationOverviewSchema } from "@/schemas/destinationOverview.schema";

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

// Define the form data type based on your schema
type DestinationOverviewFormData = {
  mainBannerTitle: string;
  mainBannerDescription: string;
  mainBannerImage: string;
  card01Title: string;
  card01Description: string;
  card01Image: string;
  card02Title: string;
  card02Description: string;
  card02Image: string;
  card03Title: string;
  card03Description: string;
  card03Image: string;
};
const DestinationOverview: React.FC = () => {
  const [formData, setFormData] = useState<DestinationOverviewFormData>({
    mainBannerTitle: "",
    mainBannerDescription: "",
    mainBannerImage: "",

    card01Title: "",
    card01Description: "",
    card01Image: "",

    card02Title: "",
    card02Description: "",
    card02Image: "",

    card03Title: "",
    card03Description: "",
    card03Image: "",
  });

  const [errors, setErrors] = useState<Partial<DestinationOverviewFormData>>({});

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { errors: validationErrors, data } = validateFormData(destinationOverviewSchema, formData);

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
            p: "20px",
          }}
        >
          <Typography
            variant="h2"
            sx={{ marginTop: "05px", fontWeight: "bold" }}
          >
            {
              adminContentDestinationOverview.adminContentMainBarHeaderTitle // Display the header title
            }
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 0.5 },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Typography variant="h3" sx={{ marginTop: "10px" }}>
              {
                adminContentDestinationOverview.adminContentMainBarTitle01 // Display the main banner title
              }
            </Typography>
            <TextField
              fullWidth
              label="Enter Main Banner Card Title"
              variant="outlined"
              required
              name="mainBannerTitle"
              value={formData.mainBannerTitle}
              onChange={handleChange}
              error={!!errors.mainBannerTitle}
              helperText={errors.mainBannerTitle}
            />
            <Typography variant="h3" sx={{ marginTop: "10px" }}>
              {
                adminContentDestinationOverview.adminContentMainBarTitle02 // Display the main banner description
              }
            </Typography>
            <TextField
              fullWidth
              label="Enter Description"
              variant="outlined"
              multiline
              rows={4}
              required
              name="mainBannerDescription"
              value={formData.mainBannerDescription}
              onChange={handleChange}
              error={!!errors.mainBannerDescription}
              helperText={errors.mainBannerDescription}
            />
            <Typography variant="h3" sx={{ marginTop: "10px" }}>
              {
                adminContentDestinationOverview.adminContentMainBarTitle03 // Display the main banner image
              }
            </Typography>
            <TextField
              fullWidth
              label="Drag & Drop Your images or Browse"
              variant="outlined"
              required
              name="mainBannerImage"
              value={formData.mainBannerImage}
              onChange={handleChange}
              error={!!errors.mainBannerImage}
              helperText={errors.mainBannerImage}
            />
            <Button
              startIcon={<CloudUploadIcon />}
              variant="outlined"
              sx={{
                width: '8.5rem',
              }}
            >
              {
                adminContentDestinationOverview.adminContentMainBarUploadButton // Display the upload button text
              }
              <VisuallyHiddenInput type="file" />
            </Button>
          </Box>
        </Card>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            {/* Display the card 01  */}
            <Card
              elevation={0}
              sx={{
                height: "550px",
                width: "100%",
                border: "1px solid",
                borderRadius: "8px",
                borderColor: "#000",
                flexShrink: "0",
                mt: 2,
                p: "20px",
              }}
            >
              <Typography
                variant="h2"
                sx={{ marginTop: "05px", fontWeight: "bold" }}
              >
                {
                  adminContentDestinationOverview.adminContentMainBarCard01 // Display the card 02 title
                }
              </Typography>

              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                {
                  adminContentDestinationOverview.adminContentCardMainBarTitle01 // Display the card 02 title
                }
              </Typography>
              <TextField
                fullWidth
                label="Enter Main Banner Card Title"
                variant="outlined"
                required
                name="card01Title"
                value={formData.card01Title}
                onChange={handleChange}
                error={!!errors.card01Title}
                helperText={errors.card01Title}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                {
                  adminContentDestinationOverview.adminContentCardMainBarDesTitle01 // Display the card 02 description
                }
              </Typography>
              <TextField
                fullWidth
                label="Enter Description"
                variant="outlined"
                multiline
                rows={4}
                required
                name="card01Description"
                value={formData.card01Description}
                onChange={handleChange}
                error={!!errors.card01Description}
                helperText={errors.card01Description}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                {
                  adminContentDestinationOverview.adminContentMainBarTitle03 // Display the main banner image
                }
              </Typography>
              <TextField
                fullWidth
                label="Drag & Drop Your images or Browse"
                variant="outlined"
                required
                name="card01Image"
                value={formData.card01Image}
                onChange={handleChange}
                error={!!errors.card01Image}
                helperText={errors.card01Image}
              />
              <Button
                startIcon={<CloudUploadIcon />}
                variant="outlined"
                sx={{
                  width: '8.5rem',
                }}
              >
                {
                  adminContentDestinationOverview.adminContentMainBarUploadButton // Display the upload button text
                }
                <VisuallyHiddenInput type="file" />
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            {/* Display the card 02  */}
            <Card
              elevation={0}
              sx={{
                height: "550px",
                width: "100%",
                border: "1px solid",
                borderRadius: "8px",
                borderColor: "#000",
                flexShrink: "0",
                mt: 2,
                p: "20px",
              }}
            >
              <Typography
                variant="h2"
                sx={{ marginTop: "05px", fontWeight: "bold" }}
              >
                {
                  adminContentDestinationOverview.adminContentMainBarCard02 // Display the card 02 title
                }
              </Typography>

              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                {
                  adminContentDestinationOverview.adminContentCardMainBarTitle02 // Display the card 02 title
                }
              </Typography>
              <TextField
                fullWidth
                label="Enter Main Banner Card Title"
                variant="outlined"
                required
                name="card02Title"
                value={formData.card02Title}
                onChange={handleChange}
                error={!!errors.card02Title}
                helperText={errors.card02Title}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                {
                  adminContentDestinationOverview.adminContentCardMainBarDesTitle02 // Display the card 02 description
                }
              </Typography>
              <TextField
                fullWidth
                label="Enter Description"
                variant="outlined"
                multiline
                rows={4}
                required
                name="card02Description"
                value={formData.card02Description}
                onChange={handleChange}
                error={!!errors.card02Description}
                helperText={errors.card02Description}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                {
                  adminContentDestinationOverview.adminContentMainBarTitle03 // Display the main banner image
                }
              </Typography>
              <TextField
                fullWidth
                label="Drag & Drop Your images or Browse"
                variant="outlined"
                required
                name="card02Image"
                value={formData.card02Image}
                onChange={handleChange}
                error={!!errors.card02Image}
                helperText={errors.card02Image}
              />
              <Button
                startIcon={<CloudUploadIcon />}
                variant="outlined"
                sx={{
                  width: '8.5rem',
                }}
              >
                {
                  adminContentDestinationOverview.adminContentMainBarUploadButton // Display the upload button text
                }
                <VisuallyHiddenInput type="file" />
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            {/* Display the card 03  */}
            <Card
              elevation={0}
              sx={{
                height: "550px",
                width: "100%",
                border: "1px solid",
                borderRadius: "8px",
                borderColor: "#000",
                flexShrink: "0",
                mt: 2,
                p: "20px",
              }}
            >
              <Typography
                variant="h2"
                sx={{ marginTop: "05px", fontWeight: "bold" }}
              >
                {
                  adminContentDestinationOverview.adminContentMainBarCard03 // Display the card 03 title
                }
              </Typography>

              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                {
                  adminContentDestinationOverview.adminContentCardMainBarTitle03 // Display the card 03 title
                }
              </Typography>
              <TextField
                fullWidth
                label="Enter Main Banner Card Title"
                variant="outlined"
                required
                name="card03Title"
                value={formData.card03Title}
                onChange={handleChange}
                error={!!errors.card03Title}
                helperText={errors.card03Title}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                {
                  adminContentDestinationOverview.adminContentCardMainBarDesTitle03 // Display the card 03 description
                }
              </Typography>
              <TextField
                fullWidth
                label="Enter Description"
                variant="outlined"
                multiline
                rows={4}
                required
                name="card03Description"
                value={formData.card03Description}
                onChange={handleChange}
                error={!!errors.card03Description}
                helperText={errors.card03Description}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                {
                  adminContentDestinationOverview.adminContentMainBarTitle03 // Display the main banner image
                }
              </Typography>
              <TextField
                fullWidth
                label="Drag & Drop Your images or Browse"
                variant="outlined"
                required
                name="card03Image"
                value={formData.card03Image}
                onChange={handleChange}
                error={!!errors.card03Image}
                helperText={errors.card03Image}
              />
              <Button
                startIcon={<CloudUploadIcon />}
                variant="outlined"
                sx={{
                  width: '8.5rem',
                }}
              >
                {
                  adminContentDestinationOverview.adminContentMainBarUploadButton // Display the upload button text
                }
                <VisuallyHiddenInput type="file" />
              </Button>
            </Card>
          </Grid>
        </Grid>
        {/* Save and Edit Buttons Outside of Form */}
        <Grid container justifyContent="flex-end" alignItems="center" my={2}>
          <Grid item>
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
                  adminContentDestinationOverview.adminContentMainBarEditButton // Display the edit button text
                }
              </Typography>
            </Button>
            </Grid>
          <Grid item>
            <Button variant="outlined"
            type="submit"
              sx={{
                borderColor: "#4A5472", // Set outline color
                "&:hover": {
                  backgroundColor: "#192959", // Set hover background color
                },
              }}
              onClick={handleSubmit}>
              <Typography
                style={{
                  color: "white",
                }}
              >
                {
                  adminContentDestinationOverview.adminContentMainBarSubmitButton
                }
              </Typography>
            </Button>
        </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DestinationOverview;
