import React from 'react';
import { TextField, Grid, Typography, Card, Box, Button } from '@mui/material';
import { adminContentHeroBanner } from "@/data/admincontent";
import EditIcon from "@mui/icons-material/Edit";

const HeroBanner: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Card
          elevation={0}
          sx={{
            height: "650px",
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
            {adminContentHeroBanner.adminContentHeaderTitle}
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
              {adminContentHeroBanner.adminContentBannerDetailsTitle01}
            </Typography>

            <TextField
              fullWidth
              label="Enter Banner Title"
              variant="outlined"
              required
            />
            <Typography sx={{ marginTop: "10px" }}>
              {adminContentHeroBanner.adminContentBannerDetailsTitle02}
            </Typography>

            <TextField
              fullWidth
              label="Enter Banner Sub Title"
              variant="outlined"
              required
            />
            <Typography sx={{ marginTop: "10px" }}>
              {adminContentHeroBanner.adminContentBannerDetailsTitle03}
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
              <Typography sx={{ marginTop: "10px" }}>
                {adminContentHeroBanner.adminContentBannerDetailsTitle04}
              </Typography>
              <TextField
                fullWidth
                label="Enter Banner Sub Title"
                variant="outlined"
                required
                sx={{ m: 1, width: "44ch" }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography sx={{ marginTop: "10px" }}>
                {adminContentHeroBanner.adminContentBannerDetailsTitle05}
              </Typography>
              <TextField
                fullWidth
                label="Enter Banner Sub Title"
                variant="outlined"
                required
                sx={{ m: 1, width: "44ch" }}
              />
            </Grid>
          </Grid>
        </Card>
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
                {adminContentHeroBanner.adminContentBannerDetailsEditButton}
              </Typography>
            </Button>
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
                {adminContentHeroBanner.adminContentBannerDetailsSubmitButton}
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeroBanner;
