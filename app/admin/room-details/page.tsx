"use client";
import HeadingBook from "@/components/frontend/roomDetailsPage/HeadingBook"; 
import Details from "@/components/frontend/roomDetailsPage/Details";
import Category from "@/components/frontend/roomDetailsPage/Category";
import ServiceAd from "@/components/frontend/roomDetailsPage/ServiceAd";
import Additional from "@/components/frontend/roomDetailsPage/Additional";
import Gallery from "@/components/frontend/roomDetailsPage/Gallery";
import { Grid, Box, Container, Card, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

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
const roomDetails = () => {
  return (
    <>
      <Box
        sx={{ backgroundColor: "#EEF5FF", padding: "10px 0", width: "100%", mx: "2px"}}
      >
        <Container>
          <HeadingBook />
        </Container>
      </Box>
      <Box
        sx={{
          display: "grid",
          backgroundColor: "#EEF5FF",
          padding: "0 0 30px 0",
        }}
      >
        {/* (1) The Details component is imported and rendered here. */}
        
        <Container>
          <Grid container spacing={2}>
            {/* <RoomDetailsForm /> */}
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Details />
            </Grid>
            {/* (2) The Gallery component is imported and rendered here. */}
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography
                style={{
                  color: "Gray",
                  fontSize: "16px",
                  fontStyle: "normal",
                  letterSpacing: "0.12px",
                  fontWeight: "700",
                }}
              >
                Cover Image
              </Typography>
              
              <Card
                elevation={0}
                sx={{
                  height: "280px",
                  Width: "auto",
                  border: "1px solid",
                  borderRadius: "8px",
                  borderColor: "#D0D5DD",
                  flexShrink: "0",
                  paddingTop: "25%",
                  paddingLeft: "45%",
                }}
              >
                <Button
                  sx={{
                    marginTop: "7px",
                    backgroundColor: "#4A5472",
                    "&:hover": {  // Hover style applied here
                      backgroundColor: "#192959"},
                  }}
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<AddAPhotoIcon />}
                >
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Card>
              {/* (3) The Gallery component is imported and rendered here. */}
              <Grid item xs={12} md={12} lg={12} marginTop={2}>
                <Gallery />
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container spacing={2}>
            {/* (4) The Category component is imported and rendered here. */}
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} marginTop={2}>
              <Category />
            </Grid>
            {/* (5) The Additional component is imported and rendered here. */}
            <Grid item xs={12} md={6} marginTop={2}>
              <Additional />
            </Grid>
          </Grid>
          {/* (6) The ServiceAd component is imported and rendered here. */}
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              marginTop={2}
              bgcolor={"#000"}
            >
              <ServiceAd />
            </Grid>
          </Grid>
        </Container>
        <Container>
          {/* (7) The Save and Close buttons are rendered here. */}
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} marginTop={2}>
            <Box display="flex" justifyContent="end" alignItems="center">
              <Button
                sx={{
                  textTransform: "none",
                  marginTop: "7px",
                  justifyContent: "center",
                  backgroundColor: "white",
                  color: "white",
                  width: "100px",
                  height: "30px",
                  borderRadius: "8px",
                  textAlign: "center",
                  borderColor: "#5B5959",
                  "&:hover": {
                    backgroundColor: "#192959",}
                  }}
                variant="outlined"
              >
                <Typography
                  style={{
                    color: "Black",
                  }}
                >
                  {" "}
                  Close
                </Typography>
              </Button>
              <Button
                sx={{
                  textTransform: "none",
                  marginTop: "7px",
                  backgroundColor: "#4A5472",
                  "&:hover": {backgroundColor: "#192959"},
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
                  {" "}
                  Save
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default roomDetails;
