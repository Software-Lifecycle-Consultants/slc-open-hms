import React from "react";
import { TextField, Grid, Card, Typography, Box, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { adminContentTestimonials } from "@/data/admincontent";
import { adminContentDestinationOverview } from "@/data/admincontent";
import Rating from "@mui/material/Rating";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

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
          }}
        >
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
            }}
          >
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
            }}
          >
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
            }}
          >
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
          }}
        >
          {/* Add New Testimonials */}
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            {
              adminContentTestimonials.adminContentTestimonialsHeaderTitle1 // Display the header title
            }
          </Typography>
          <Typography variant="h3" sx={{ marginTop: "10px" }}>
            {
              adminContentTestimonials.adminContentTestimonialsTitle // Display the video description
            }{" "}
          </Typography>
          <TextField
            fullWidth
            label="Drag & Drop Your images or Browse"
            variant="outlined"
            multiline
            sx={{ m: 1 }}
            InputProps={{
              sx: {
                color: "black", // Set the input text color to black
              },
            }}
          />
          <Button startIcon={<CloudUploadIcon />}>
            {
              adminContentDestinationOverview.adminContentMainBarUploadButton // Display the upload button text
            }
            <VisuallyHiddenInput type="file" />
          </Button>
          <Typography variant="h3" sx={{ marginTop: "10px" }}>
            {
              adminContentTestimonials.adminContentTestimonialsTitle1 // Display the video URL 1
            }
          </Typography>
          <TextField
            fullWidth
            label="Enter Name"
            variant="outlined"
            required
            sx={{ m: 1 }}
            InputProps={{
              sx: {
                color: "black", // Set the input text color to black
              },
            }}
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
            multiline
            rows={4}
            sx={{ m: 1 }}
            InputProps={{
              sx: {
                color: "black", // Set the input text color to black
              },
            }}
          />
          {/* Ratings*/}
          <Typography variant="h3" component="legend">
            Ratings
          </Typography>
          <Rating name="no-value" value={null} />
        </Card>
        <Grid my={4}>
          <Box display="flex" justifyContent="end" alignItems="center">
            <Button>
              <Typography
                style={{
                  color: "white",
                }}
              >
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
