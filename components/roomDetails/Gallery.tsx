import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import { Card, Typography, Button, Box  } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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

export default function StandardImageList() {
  return (
    <>
      <Card
        elevation={0}
        sx={{
          height: "235px",
          Width: "450px",
          border: "1px solid",
          borderRadius: "8px",
          borderColor: "#D0D5DD",
          flexShrink: "0",
          padding: "10px 25px 10px 25px",
        }}
      >
        <Typography
          style={{
            color: "Gray",
            fontSize: "16px",
            lineHeight: "120%",
            fontStyle: "normal",
            letterSpacing: "0.12px",
            fontWeight: "700",
            marginTop: "10px",
          }}
        >
          Gallery
        </Typography>
        <Typography
          style={{
            color: "Gray",
            fontSize: "16px",
            lineHeight: "120%",
            fontStyle: "normal",
            letterSpacing: "0.12px",
            fontWeight: "700",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          Drag & Drop Your images or Browse
        </Typography>
        <Box display="flex" justifyContent="end" alignItems="center">
          {" "}
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-2}
            startIcon={<CloudUploadIcon />}
            sx={{
              marginTop: "7px",
              backgroundColor: "white",
              color: "#000",
              height: "30px",
              borderRadius: "8px",
            }}
          >
            <VisuallyHiddenInput type="file" />
          </Button>
        </Box>
      </Card>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          sx={{
            marginTop: "7px",
            justifyContent: "center",
            color: "white",
            width: "100px",
            height: "30px",
            borderRadius: "8px",
            textAlign: "center",
            backgroundColor: "#4A5472",
          }}
          variant="outlined"
        >
          <Typography style={{ color: "white" }}>Submit</Typography>
        </Button>
      </Box>
    </>
  );
}
