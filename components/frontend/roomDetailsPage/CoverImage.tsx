"use client";
import { Box, Card, Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
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

interface CoverImageProps {
  coverImages: File[];
  setCoverImages: React.Dispatch<React.SetStateAction<File[]>>;
  errors: string | null;
  setErrors: (value: string) => void;
}

export default function CoverImage({ setCoverImages, errors, setErrors}: CoverImageProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    if (files.length !== 1) {
      setErrors("Only one cover image can be uploaded.");
      return;
    }
    setCoverImages(files);
    setErrors(""); // Clear previous errors
  };

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
