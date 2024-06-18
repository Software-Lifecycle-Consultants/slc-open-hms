import React from "react";
import { TextField, Grid, Typography, Card, Box, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { adminContentLogoCarousel } from "@/data/admincontent";
import Image from "next/image"; // Importing the Image component from Next.js
import { clientLogos } from "@/data/homePage"; // Importing client logos from the specified data file
import Slider from "react-slick"; // Importing the Slider component from react-slick

// Styles for the carousel container
const carouselContainerStyles = {
  overflow: "hidden",
};

// Styles to prevent white vertical line on mobile
const carouselOverflowStyles = {
  ".slick-list": {
    overflow: "visible",
  },
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
const LogoCarousel: React.FC = () => {
  
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
          }}
        >
          <Typography
            variant="h6"
            sx={{ marginTop: "05px", fontWeight: "bold" }}
          >
            {adminContentLogoCarousel.adminContentLogoCarouselHeaderTitle // Display the header title
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
            <TextField
              fullWidth
              label="Drag & Drop Your images or Browse"
              variant="outlined"
              required
            />
            <Box sx={{ ...carouselContainerStyles, ...carouselOverflowStyles }}>
              {/* Wrapping the Slider with a Box to control height and responsiveness */}
              <Box sx={{ maxWidth: "100vw" }}>
                <Slider>
                  {/* Mapping through clientLogos and rendering each logo */}
                  {clientLogos.map((item) => (
                    <Box key={item.id}>
                      <Card style={cardStyles}>
                        <Image
                          src={item.logoImage}
                          alt={`Logo ${item.id}`}
                          width={162}
                          height={32}
                        />
                      </Card>
                    </Box>
                  ))}
                </Slider>
              </Box>
            </Box>
            <Button
              sx={{ backgroundColor: "#4A5472", marginTop: "10px" }}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              {adminContentLogoCarousel.adminContentLogoCarouselUploadButton // Display the upload button text
              }
              <VisuallyHiddenInput type="file" />
            </Button>
          </Box>
        </Card>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} marginTop={2}>
          <Box display="flex" justifyContent="end" alignItems="center">
            <Button
              sx={{
                textTransform: "none",
                marginTop: "7px",
                backgroundColor: "#4A5472",
                "&:hover": { backgroundColor: "#192959" },
                color: "white",
                width: "100px",
                height: "30px",
                borderRadius: "8px",
                marginLeft: "10px",
                textAlign: "center",
              }}
              variant="contained"
            >
              <Typography
                style={{
                  color: "white",
                }}
              >
                {adminContentLogoCarousel.adminContentLogoCarouselSubmitButton // Display the submit button text
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
