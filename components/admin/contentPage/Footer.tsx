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
      <Grid item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}>
        <Card
          elevation={0}
          sx={{
            height: "550px",
            width: "100%",
            borderRadius: "8px",
            flexShrink: "0",
            p: "20px",
          }}
        >
          <Typography
            variant="h6"
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
                adminContentDestinationOverview.adminContentMainBarUploadButton // Display the upload button text
              }
              <VisuallyHiddenInput type="file" />
            </Button>
            <Typography sx={{ marginTop: "10px" }}>Description</Typography>
            <TextField
              fullWidth
              label="Enter Description"
              variant="outlined"
              multiline
              rows={4}
            />
            <Typography sx={{ marginTop: "10px" }}>
              Owner Of Copyright
            </Typography>
            <TextField
              fullWidth
              label="Enter Owner Of Copyright"
              variant="outlined"
              multiline
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

                flexShrink: "0",
                mt: 2,
                p: "20px",
              }}
            >
              <Typography sx={{ marginTop: "10px" }}>
                Footer Section 1
              </Typography>
              <TextField
                fullWidth
                label="Enter Footer Section 1"
                variant="outlined"
                required
              />
              <Typography sx={{ marginTop: "10px" }}>Sub Section 1</Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 1"
                variant="outlined"
                required
              />
              <Typography sx={{ marginTop: "10px" }}>Sub Section 2</Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 2"
                variant="outlined"
                required
              />
              <Typography sx={{ marginTop: "10px" }}>Sub Section 3</Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 3"
                variant="outlined"
                required
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
              }}
            >
              <Typography sx={{ marginTop: "10px" }}>
                Footer Section 2
              </Typography>
              <TextField
                fullWidth
                label="Enter Footer Section 1"
                variant="outlined"
                required
              />
              <Typography sx={{ marginTop: "10px" }}>Sub Section 1</Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 1"
                variant="outlined"
                required
              />
              <Typography sx={{ marginTop: "10px" }}>Sub Section 2</Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 2"
                variant="outlined"
                required
              />
              <Typography sx={{ marginTop: "10px" }}>Sub Section 3</Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 3"
                variant="outlined"
                required
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
              }}
            >
              <Typography sx={{ marginTop: "10px" }}>
                Footer Section 3
              </Typography>
              <TextField
                fullWidth
                label="Enter Footer Section 1"
                variant="outlined"
                required
              />
              <Typography sx={{ marginTop: "10px" }}>Sub Section 1</Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 1"
                variant="outlined"
                required
              />
              <Typography sx={{ marginTop: "10px" }}>Sub Section 2</Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 2"
                variant="outlined"
                required
              />
              <Typography sx={{ marginTop: "10px" }}>Sub Section 3</Typography>
              <TextField
                fullWidth
                label="Enter Sub Section 3"
                variant="outlined"
                required
              />
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} my={4}>
          <Box display="flex" justifyContent="end" alignItems="center">
            <Button
              endIcon={<EditIcon />}
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
                {
                  adminContentDestinationOverview.adminContentMainBarEditButton // Display the edit button text
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
