import React from "react";
import { TextField, Grid, Typography, Card, Box, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { adminContentDestinationOverview } from "@/data/admincontent";
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
const Footer: React.FC = () => {
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
          }}
        >
          <Typography
            variant="h2"
            sx={{ marginTop: "05px", fontWeight: "bold" }}
          >
            Logo
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
              Description
            </Typography>
            <TextField
              fullWidth
              label="Enter Description"
              variant="outlined"
              multiline
              rows={4}
              InputProps={{
                sx: {
                  color: "black", // Set the input text color to black
                },
              }}
            />
            <Typography variant="h3" sx={{ marginTop: "10px" }}>
              Owner Of Copyright
            </Typography>
            <TextField
              fullWidth
              label="Enter Owner Of Copyright"
              variant="outlined"
              multiline
              InputProps={{
                sx: {
                  color: "black", // Set the input text color to black
                },
              }}
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
              }}
            >
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Footer Section 1
              </Typography>
              <TextField
                fullWidth
                label="Enter Footer Section 1"
                variant="outlined"
                required
                InputProps={{
                  sx: {
                    color: "black", // Set the input text color to black
                  },
                }}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Sub Section 1
              </Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 1"
                variant="outlined"
                required
                InputProps={{
                  sx: {
                    color: "black", // Set the input text color to black
                  },
                }}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Sub Section 2
              </Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 2"
                variant="outlined"
                required
                InputProps={{
                  sx: {
                    color: "black", // Set the input text color to black
                  },
                }}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Sub Section 3
              </Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 3"
                variant="outlined"
                required
                InputProps={{
                  sx: {
                    color: "black", // Set the input text color to black
                  },
                }}
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
              }}
            >
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Footer Section 2
              </Typography>
              <TextField
                fullWidth
                label="Enter Footer Section 1"
                variant="outlined"
                required
                InputProps={{
                  sx: {
                    color: "black", // Set the input text color to black
                  },
                }}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Sub Section 1
              </Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 1"
                variant="outlined"
                required
                InputProps={{
                  sx: {
                    color: "black", // Set the input text color to black
                  },
                }}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Sub Section 2
              </Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 2"
                variant="outlined"
                required
                InputProps={{
                  sx: {
                    color: "black", // Set the input text color to black
                  },
                }}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Sub Section 3
              </Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 3"
                variant="outlined"
                required
                InputProps={{
                  sx: {
                    color: "black", // Set the input text color to black
                  },
                }}
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
              }}
            >
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Footer Section 3
              </Typography>
              <TextField
                fullWidth
                label="Enter Footer Section 1"
                variant="outlined"
                required
                InputProps={{
                  sx: {
                    color: "black", // Set the input text color to black
                  },
                }}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Sub Section 1
              </Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 1"
                variant="outlined"
                required
                InputProps={{
                  sx: {
                    color: "black", // Set the input text color to black
                  },
                }}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Sub Section 2
              </Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 2"
                variant="outlined"
                required
                InputProps={{
                  sx: {
                    color: "black", // Set the input text color to black
                  },
                }}
              />
              <Typography variant="h3" sx={{ marginTop: "10px" }}>
                Sub Section 3
              </Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 3"
                variant="outlined"
                required
                InputProps={{
                  sx: {
                    color: "black", // Set the input text color to black
                  },
                }}
              />
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} my={4}>
          <Box display="flex" justifyContent="end" alignItems="center">
            <Button endIcon={<EditIcon />}>
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
            <Button>
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
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
