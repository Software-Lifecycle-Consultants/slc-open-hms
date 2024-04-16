import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CheckList from "./CheckList";
import { extraFacilitationSection } from "@/data/checkoutPage";
import { lora, mulish } from "../../app/fonts";

/* Font style for placeholder */
const mulishPlaceholderStyle = {
  fontFamily: "Mulish",
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
            className={lora.className}
            style={{
              color: "#11142D",
              fontSize: "24px",
              lineHeight: "120%",
              fontStyle: "normal",
              letterSpacing: "0.12px",
              fontWeight: "700",
              marginTop: "10px",
            }}
          >
            {extraFacilitationSection.extraFacilitationSectionTitle}
          </Typography>
          {/* Facility 1 */}
          <Typography
            variant="h5"
            className={lora.className}
            style={{
              color: "#11142D",
              fontSize: "24px",
              lineHeight: "120%",
              fontStyle: "normal",
              letterSpacing: "0.12px",
              fontWeight: "700",
              marginTop: "25px",
            }}
          >
            {extraFacilitationSection.facility1}
          </Typography>
          {/* CheckList for Facility 1 */}
          <Box sx={{ bgcolor: "#668557" }}>
            <CheckList />
          </Box>
          {/* Facility 2 */}
          <Typography
            variant="h5"
            className={lora.className}
            style={{
              color: "#11142D",
              fontSize: "24px",
              lineHeight: "120%",
              fontStyle: "normal",
              letterSpacing: "0.12px",
              fontWeight: "700",
              marginTop: "25px",
            }}
          >
            {extraFacilitationSection.facility2}
          </Typography>
          {/* CheckList for Facility 2 */}
          <Box sx={{ bgcolor: "#578580" }}>
            <CheckList />
          </Box>
          {/* Special Request */}
          <Typography
            variant="body1"
            className={mulish.className}
            style={{
              color: "#515151",
              fontSize: "16px",
              lineHeight: "120%",
              fontStyle: "normal",
              letterSpacing: "0.08px",
              fontWeight: "700",
              marginTop: "28px",
            }}
          >
            {extraFacilitationSection.requestText}
          </Typography>
          {/* TextField for Special Request */}
          <TextField
            id="outlined-basic"
            placeholder="Input your Special Request in Here"
            variant="outlined"
            multiline
            rows={4} // Adjust the number of rows to fit your desired height
            sx={{ width: "100%", marginTop: "10px" }}
            InputProps={{ style: mulishPlaceholderStyle }}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default ExtraFacilitation;
