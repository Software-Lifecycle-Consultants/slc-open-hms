import React from 'react';
import { TextField, Grid, Typography, Card, Box, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { adminContentDestinationOverview } from '@/data/adminContent';
import EditIcon from "@mui/icons-material/Edit";

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
const DestinationOverview: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {/* Hero Banner Section */}
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
            marginTop: "10px",
            padding: "20px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ marginTop: "05px", fontWeight: "bold" }}
          >
            {adminContentDestinationOverview.adminContentMainBarHeaderTitle // Header Title
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
            <Typography sx={{ marginTop: "10px" }}>
              {adminContentDestinationOverview.adminContentMainBarTitle01 // Main Banner Title
              }
            </Typography>
            <TextField
              fullWidth
              label="Enter Main Banner Card Title"
              variant="outlined"
              required
            />
            <Typography sx={{ marginTop: "10px" }}>
              {adminContentDestinationOverview.adminContentMainBarTitle02 // Main Banner Title
              }
            </Typography>
            <TextField
              fullWidth
              label="Enter Description"
              variant="outlined"
              multiline
              rows={4}
            />
            <Typography sx={{ marginTop: "10px" }}>
              {adminContentDestinationOverview.adminContentMainBarTitle03}
            </Typography>
            <TextField
              fullWidth
              label="Drag & Drop Your images or Browse"
              variant="outlined"
              required
            />
            <Button
              sx={{ backgroundColor: "#4A5472", marginTop: "10px" }}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              {adminContentDestinationOverview.adminContentMainBarUploadButton}
              <VisuallyHiddenInput type="file" />
            </Button>
          </Box>
        </Card>
        {/* Destination Overview Section */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card
              elevation={0}
              sx={{
                height: "550px",
                width: "100%",
                border: "1px solid",
                borderRadius: "8px",
                borderColor: "#000",
                flexShrink: "0",
                marginTop: "10px",
                padding: "20px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ marginTop: "05px", fontWeight: "bold" }}
              >
                {adminContentDestinationOverview.adminContentMainBarCard01 // Card Title
                }
              </Typography>

              <Typography sx={{ marginTop: "10px" }}>
                {adminContentDestinationOverview.adminContentCardMainBarTitle01 // Card Title
                }
              </Typography>
              <TextField
                fullWidth
                label="Enter Main Banner Card Title"
                variant="outlined"
                required
              />
              <Typography sx={{ marginTop: "10px" }}>
                {
                  adminContentDestinationOverview.adminContentCardMainBarDesTitle01 // Description Title
                }
              </Typography>
              <TextField
                fullWidth
                label="Enter Description"
                variant="outlined"
                multiline
                rows={4}
              />
              <Typography sx={{ marginTop: "10px" }}>
                {adminContentDestinationOverview.adminContentMainBarTitle03 // Main Banner Title
                }
              </Typography>
              <TextField
                fullWidth
                label="Drag & Drop Your images or Browse"
                variant="outlined"
                required
              />
              <Button
                sx={{ backgroundColor: "#4A5472", marginTop: "10px" }}
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                {
                  adminContentDestinationOverview.adminContentMainBarUploadButton // Upload Button
                }
                <VisuallyHiddenInput type="file" />
              </Button>
            </Card>
          </Grid>
          {/* Destination Overview Section */}
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card
              elevation={0}
              sx={{
                height: "550px",
                width: "100%",
                border: "1px solid",
                borderRadius: "8px",
                borderColor: "#000",
                flexShrink: "0",
                marginTop: "10px",
                padding: "20px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ marginTop: "05px", fontWeight: "bold" }}
              >
                {adminContentDestinationOverview.adminContentMainBarCard02}
              </Typography>

              <Typography sx={{ marginTop: "10px" }}>
                {adminContentDestinationOverview.adminContentCardMainBarTitle02 // Card Title
                }
              </Typography>
              <TextField
                fullWidth
                label="Enter Main Banner Card Title"
                variant="outlined"
                required
              />
              <Typography sx={{ marginTop: "10px" }}>
                {
                  adminContentDestinationOverview.adminContentCardMainBarDesTitle02 // Description Title
                }
              </Typography>
              <TextField
                fullWidth
                label="Enter Description"
                variant="outlined"
                multiline
                rows={4}
              />
              <Typography sx={{ marginTop: "10px" }}>
                {adminContentDestinationOverview.adminContentMainBarTitle03 // Main Banner Title
                }
              </Typography>
              <TextField
                fullWidth
                label="Drag & Drop Your images or Browse"
                variant="outlined"
                required
              />
              <Button
                sx={{ backgroundColor: "#4A5472", marginTop: "10px" }}
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                {
                  adminContentDestinationOverview.adminContentMainBarUploadButton // Upload Button
                }
                <VisuallyHiddenInput type="file" />
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card
              elevation={0}
              sx={{
                height: "550px",
                width: "100%",
                border: "1px solid",
                borderRadius: "8px",
                borderColor: "#000",
                flexShrink: "0",
                marginTop: "10px",
                padding: "20px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ marginTop: "05px", fontWeight: "bold" }}
              >
                {adminContentDestinationOverview.adminContentMainBarCard03}
              </Typography>

              <Typography sx={{ marginTop: "10px" }}>
                {adminContentDestinationOverview.adminContentCardMainBarTitle03}
              </Typography>
              <TextField
                fullWidth
                label="Enter Main Banner Card Title"
                variant="outlined"
                required
              />
              <Typography sx={{ marginTop: "10px" }}>
                {
                  adminContentDestinationOverview.adminContentCardMainBarDesTitle03
                }
              </Typography>
              <TextField
                fullWidth
                label="Enter Description"
                variant="outlined"
                multiline
                rows={4}
              />
              <Typography sx={{ marginTop: "10px" }}>
                {adminContentDestinationOverview.adminContentMainBarTitle03}
              </Typography>
              <TextField
                fullWidth
                label="Drag & Drop Your images or Browse"
                variant="outlined"
                required
              />
              <Button
                sx={{ backgroundColor: "#4A5472", marginTop: "10px" }}
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                {
                  adminContentDestinationOverview.adminContentMainBarUploadButton // Upload Button
                }
                <VisuallyHiddenInput type="file" />
              </Button>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} marginTop={2}>
          <Box display="flex" justifyContent="end" alignItems="center">
            <Button
              endIcon={<EditIcon />} // Edit Icon
              sx={{
                textTransform: "none",
                marginTop: "7px",
                justifyContent: "center",
                backgroundColor: "#4A5472",
                color: "white",
                width: "100px",
                height: "30px",
                borderRadius: "8px",
                textAlign: "center",
                borderColor: "#5B5959",
                "&:hover": {
                  backgroundColor: "#192959",
                },
              }}
              variant="outlined"
            >
              <Typography
                style={{
                  color: "White",
                }}
              >
                {adminContentDestinationOverview.adminContentMainBarEditButton // Edit Button
                }
              </Typography>
            </Button>
            <Button
              sx={{
                textTransform: "none",
                marginTop: "7px",
                backgroundColor: "#4A5472",
                "&:hover": { backgroundColor: "#4A5472" },
                color: "white",
                width: "100px",
                height: "30px",
                borderRadius: "8px",
                marginLeft: "20px",
                textAlign: "center",
              }}
              variant="contained"
            >
              <Typography
                style={{
                  color: "white",
                }}
              >
                {
                  adminContentDestinationOverview.adminContentMainBarSubmitButton // Submit Button
                }
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DestinationOverview;
