import React from 'react';
import { TextField, Grid, Typography, Card, Box, Button } from '@mui/material';
import { adminContentHeroBanner } from "@/data/admincontent";
import EditIcon from '@mui/icons-material/Edit';

const HeroBanner: React.FC = () => {
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
            />
          </Box>
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
                sx={{ m: 1, width: "40ch" }}
              />
            </Grid>
          </Grid>
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
                  adminContentHeroBanner.adminContentBannerDetailsEditButton // Display the edit button text
                }
              </Typography>
            </Button>
            <Button
              variant="outlined"
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
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeroBanner;
