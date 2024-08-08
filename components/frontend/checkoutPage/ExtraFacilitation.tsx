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
import { lora, mulish } from "../../../app/fonts";
import { checkoutSeo } from "@/data/seo";

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
            variant='body1' marginTop='0.625rem'
          >
            {extraFacilitationSection.extraFacilitationSectionTitle}
          </Typography>
          {/* Facility 1 */}
          <Typography
            variant='body1' marginTop='1.563rem'
          >
            {extraFacilitationSection.facility1}
          </Typography>
          {/* CheckList for Facility 1 */}
          <Box sx={{ bgcolor: "#668557" }}>
            <CheckList />
          </Box>
          {/* Facility 2 */}
          <Typography
            variant='body1' marginTop='1.563rem'
          >
            {extraFacilitationSection.facility2}
          </Typography>
          {/* CheckList for Facility 2 */}
          <Box sx={{ bgcolor: "#578580" }}>
            <CheckList />
          </Box>
          {/* Special Request */}
          <Typography
            variant='h4' fontWeight='700' marginTop='1.75rem'
            sx={{ '@media (max-width:600px)': { fontWeight: 700 } }}
          >
            {extraFacilitationSection.requestText}
          </Typography>
          {/* TextField for Special Request */}
          <TextField
            id="outlined-basic"
            aria-label={checkoutSeo.extrafacilitationAriaLabel}
            placeholder="Input your Special Request in Here"
            variant="outlined"
            multiline
            rows={4} // Adjust the number of rows to fit your desired height
            sx={{ marginTop: '0.625rem' }}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default ExtraFacilitation;
