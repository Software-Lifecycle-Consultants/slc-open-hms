import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CheckList from "./CheckList";

const extraFacilitation = 
  {
    title: "Request meals and other services",
    facility1: "Meals",
    facility2: "Services",
  };

/* Functional component for ExtraFacilitation */
const ExtraFacilitation = () => {
  return (
    <>
      <Card
        elevation={0}
        sx={{
          height: "auto",
          maxWidth: "816px",
          border: "1px solid",
          borderRadius: "8px",
          borderColor: "var(--light-separators-colors-secondary, #E1E1E1)",
        }}
      >
        <CardContent>
          {/* Title */}
          <Typography
            variant="h1"
            style={{
              color: "var(--light-text-color-title, #11142D)",
              fontFamily: "Lora",
              fontSize: "24px",
              lineHeight: "120%",
              fontStyle: "normal",
              letterSpacing: "0.12px",
              fontWeight: "700",
              marginTop: "10px",
            }}
          >
            {extraFacilitation.title}
          </Typography>
          {/* Facility 1 */}
          <Typography
            variant="h5"
            style={{
              color: "var(--light-text-color-title, #11142D)",
              fontFamily: "Lora",
              fontSize: "24px",
              lineHeight: "120%",
              fontStyle: "normal",
              letterSpacing: "0.12px",
              fontWeight: "700",
              marginTop: "25px",
            }}
          >
            {extraFacilitation.facility1}
          </Typography>
          {/* CheckList for Facility 1 */}
          <Box sx={{ bgcolor: "#668557" }}>
            <CheckList />
          </Box>
          {/* Facility 2 */}
          <Typography
            variant="h5"
            style={{
              color: "var(--light-text-color-title, #11142D)",
              fontFamily: "Lora",
              fontSize: "24px",
              lineHeight: "120%",
              fontStyle: "normal",
              letterSpacing: "0.12px",
              fontWeight: "700",
              marginTop: "25px",
            }}
          >
            {extraFacilitation.facility2}
          </Typography>
          {/* CheckList for Facility 2 */}
          <Box sx={{ bgcolor: "#578580" }}>
            <CheckList />
          </Box>
          {/* Special Request */}
          <Typography
            variant="body1"
            style={{
              color: "var(--light-text-color-body-1, #515151)",
              fontFamily: "Mulish, sans-serif",
              fontSize: "16px",
              lineHeight: "120%",
              fontStyle: "normal",
              letterSpacing: "0.08px",
              fontWeight: "700",
              marginTop: "28px",
            }}
          >
            Special Request
          </Typography>
          {/* TextField for Special Request */}
          <TextField
            id="outlined-basic"
            placeholder="Input your Special Request in Here"
            variant="outlined"
            multiline
            rows={4} // Adjust the number of rows to fit your desired height
            sx={{ width: "100%", marginTop: "10px" }}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default ExtraFacilitation;
