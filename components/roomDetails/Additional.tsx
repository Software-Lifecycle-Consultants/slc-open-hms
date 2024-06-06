import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Box,
} from "@mui/material";
import { additional } from "@/data/roomDetails";

/* Functional component for ExtraFacilitation */
const Additional = () => {
  return (
    <>
      {/* Card for the billing details form */}
      <Card
        elevation={0}
        sx={{
          height: "600px",
          Width: "auto",
          border: "1px solid",
          borderRadius: "8",
          borderColor: "#D0D5DD",
          flexShrink: "0",
        }}
      >
        <Box>
          <Typography
            mt={2}
            ml={2}
            sx={{
              color: "Gray",
              fontSize: "16",
              fontStyle: "normal",
              letterSpacing: "0.12",
            }}
          >
            {additional.additionalPageTitle}
          </Typography>
        </Box>
        <CardContent>
          <form>
            {/* Grid container for form layout */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  fullWidth
                  label="Enter Service Enter Additional Information TitleAdd On Title"
                  id="ATitle"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography
                  mb={2}
                  sx={{
                    color: "Gray",
                    fontSize: "16",
                    fontStyle: "normal",
                    letterSpacing: "0.12",
                  }}
                >
                  Description
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={16}
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
export default Additional;
