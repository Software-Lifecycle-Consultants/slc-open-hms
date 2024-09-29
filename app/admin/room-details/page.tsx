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
        sx={{
          backgroundColor: "#EEF5FF",
          padding: "10px 0",
          width: "100%",
          mx: "2px",
        }}
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
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} marginTop={3}>
              <Details />
            </Grid>
            {/* (2) The Gallery component is imported and rendered here. */}
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="h2">Cover Image</Typography>

              <Card
                elevation={0}
                sx={{
                  height: "280px",
                  Width: "auto",
                  border: "1px solid",
                  borderRadius: "8px",
                  borderColor: "#D0D5DD",
                  flexShrink: "0",
                  paddingTop: "20%",
                  paddingLeft: "40%", // Set padding left
                }}
              >
                <Button
                  component="label"
                  role={undefined}
                  variant="outlined"
                  tabIndex={-1}
                  startIcon={<AddAPhotoIcon />}
                >
                  Submit
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
            <Box display="flex" justifyContent="flex-end" alignItems="center">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#5B5959',
                  border: '0.063rem solid #5B5959', 
                  "&:hover": {
                    backgroundColor: '#EBEBEB', // Set hover background color
                  },
                }}
              >
                <Typography
                >
                  {" "}
                  Close
                </Typography>
              </Button>
              <Button
                variant="outlined"
              >
                <Typography>
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
