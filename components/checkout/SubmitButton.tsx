import { Button, Checkbox, Typography, Box, Link } from "@mui/material";
import React from "react";
import { submitContent } from "@/data/checkoutPage";
import { mulish } from "../../app/fonts";
import { orangebuttonCommonStyle } from "../homePage/styles";
import PDFGenerator from "../pdf-generator/page";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SubmitButton = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Checkbox
          {...label}
          sx={{
            "& .MuiSvgIcon-root": { fontSize: 34 },
            color: "#C7923E",
            "&.Mui-checked": {
              color: "#C7923E",
            },
            marginTop: "8px",
          }}
        />
        <Typography
          variant="body1"
          className={mulish.className}
          style={{
            color: "#515151",
            fontSize: "16px",
            lineHeight: "120%",
            fontStyle: "normal",
            letterSpacing: "0.08px",
            fontWeight: "600",
            marginTop: "24px",
          }}>
          {submitContent.condition}
        </Typography>
      </Box>
      <Link href={"/pdf-genarator"}>
      <Button
        variant="contained"
        className={mulish.className}
        sx={{...orangebuttonCommonStyle ,marginBottom: "100px" }}
      >
        {submitContent.submitctaCaption}
      </Button>
      </Link>
    </>
  );
};

export default SubmitButton;
