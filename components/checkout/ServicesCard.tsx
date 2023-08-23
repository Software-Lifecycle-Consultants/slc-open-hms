import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CheckList from "./CheckList";

const ServicesCard = () => {
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
            Request meals and other services
          </Typography>
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
            Meals
          </Typography>
          <Box sx={{ bgcolor: "#668557" }}>
            <CheckList />
          </Box>
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
            Services
          </Typography>
          <Box sx={{ bgcolor: "#578580" }}>
            <CheckList />
          </Box>
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

export default ServicesCard;
