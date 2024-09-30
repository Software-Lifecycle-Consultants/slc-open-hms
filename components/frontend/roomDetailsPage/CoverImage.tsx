"use client";
import { Box, Card, Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useEffect } from "react";

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

interface CoverImageProps {
  coverImages: any[];
  setCoverImages: React.Dispatch<React.SetStateAction<any[]>>;
  errors: string | null;
  setErrors: (value: string) => void;
}

export default function CoverImage({ setCoverImages, errors, setErrors}: CoverImageProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof File === "undefined") {
      console.error("File API is not supported in this environment.");
      return;
    }
    
    const files = event.target.files ? Array.from(event.target.files) : [];
    if (files.length !== 1) {
      setErrors("Only one cover image can be uploaded.");
      return;
    }
    setCoverImages(files);
    setErrors(""); // Clear previous errors
  };
    // Ensure file-related code only runs in the browser
    useEffect(() => {
      if (typeof window !== "undefined" && typeof File !== "undefined") {
        // Initialize file-related state here
        setCoverImages([]);
      } else {
        console.error("Running in a non-browser environment or File API is not supported.");
      }
    }, [setCoverImages]);

  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Cover Image
      </Typography>
      <Card
        elevation={0}
        sx={{
          height: "280px",
          width: "100%",
          border: "1px solid",
          borderRadius: "8px",
          borderColor: "#D0D5DD",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Button
          component="label"
          variant="outlined"
          startIcon={<AddAPhotoIcon />}>
          Upload Cover Image
          <VisuallyHiddenInput type="file" onChange={handleFileChange} />
        </Button>
      </Card>
      {errors && (
        <Typography color="error" sx={{ mt: 2 }}>
          {errors}
        </Typography>
      )}
    </Box>
  );
}
