import { Grid, Typography, TextField, Card, CardContent } from "@mui/material";
import React from "react";

const Details = () => {
  return (
    <>
      {/* Card for the billing details form */}
      <Card
        elevation={0}
        sx={{
          height: "580px",
          Width: "auto",
          border: "1px solid",
          borderRadius: "8",
          borderColor: "#EEF5FF",
          flexShrink: "0",
          backgroundColor: "#EEF5FF",
        }}
      >
        <CardContent>
          <form>
            {/* Grid container for form layout */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField fullWidth label="Title" id="Title" />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField fullWidth label="Sub Title" id="subTitle" />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField fullWidth label="Description title" id="dTitle" />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography
                  mt={2}
                  mb={2}
                  style={{
                    color: "Gray",
                    fontSize: "16",
                    fontStyle: "normal",
                    letterSpacing: "0.12",
                    fontWeight: "700",
                  }}
                >
                  Description
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={10}
                  label="Enter description"
                  id="Enter description"
                />
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default Details;
