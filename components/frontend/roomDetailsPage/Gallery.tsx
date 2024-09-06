"use client"
import * as React from "react";
import { Box, Card, Typography, Button, Grid,  } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useEffect } from "react";
import { schemaAdminPanelRoomDetailsGallery } from "@/schemas/adminPanelRoomDetailsGallery.schema";
import { validateFormData } from "@/utils/validation";

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

interface GalleryProps {
  gallery: File[];
  setGallery: React.Dispatch<React.SetStateAction<File[]>>;
  errors: string | null;
  setErrors: (value: string) => void;
}

export default function Gallery({ gallery, setGallery, errors, setErrors }: GalleryProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setGallery(filesArray);
      setErrors(""); // Reset errors when a new file is added
    }
  };
    // Ensure file-related code only runs in the browser
    useEffect(() => {
      if (typeof window === "undefined") {
        console.error("Running in a non-browser environment.");
      } else if (typeof File === "undefined") {
        console.error("File API is not supported in this browser.");
      }
    }, []);

  const handleSubmit = () => {
    if (gallery.length === 0) {
      setErrors("You must upload at least one image.");
      return;
    }
    const { errors: validationErrors } = validateFormData(schemaAdminPanelRoomDetailsGallery, { gallery });

    if (validationErrors) {
      setErrors(validationErrors.gallery || "Invalid image type.");
    } else {
      console.log(gallery);
    }
  };

  return (
    <>
      <Typography mt={2} variant="h2">
        Gallery
      </Typography>
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
          mt={16}
          style={{
            color: "Gray",
            fontSize: "16px",
            lineHeight: "120%",
            fontStyle: "normal",
            letterSpacing: "0.12px",
            fontWeight: "700",
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          Drag & Drop Your images or Browse
        </Typography>
      
        <Box display="flex-center" justifyContent="center" alignItems="center">
          <Grid
            container
            spacing={2}
            item
            xs={7}
            sm={6}
            md={2}
            lg={2}
            xl={2}
            m={1}
          >
            <Button
              component="label"
              role={undefined}
              variant="outlined"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              <VisuallyHiddenInput type="file" multiple onChange={handleFileChange} accept="image/*" />
            </Button>
          </Grid>
        </Box>      
      </Card>
      {errors && (<Typography color="error"> {errors} </Typography>)}
      {/* Gallery images submit button */}
      <Box mt={2} display="flex" justifyContent="center" alignItems="center">
        <Button
          variant="outlined"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </>
  );
}
