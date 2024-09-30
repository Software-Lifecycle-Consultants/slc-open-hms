"use client";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import dynamic from 'next/dynamic';
import HeadingBook from "@/components/frontend/roomDetailsPage/HeadingBook";
const Details = dynamic(() => import("@/components/frontend/roomDetailsPage/Details"), { ssr: false });
const Category = dynamic(() => import("@/components/frontend/roomDetailsPage/Category"), { ssr: false });
const ServiceAd = dynamic(() => import("@/components/frontend/roomDetailsPage/ServiceAd"), { ssr: false });
const Additional = dynamic(() => import("@/components/frontend/roomDetailsPage/Additional"), { ssr: false });
const Gallery = dynamic(() => import("@/components/frontend/roomDetailsPage/Gallery"), { ssr: false });
const CoverImage = dynamic(() => import("@/components/frontend/roomDetailsPage/CoverImage"), { ssr: false });
import { Grid, Box, Container, Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { schemaAdminPanelRoomDetailsCoverImg } from "@/schemas/adminPanelRoomDetailsCoverImage.schema";
import { validateFormData } from "@/utils/validation";
import { schemaAdminPanelRoomDetails } from "@/schemas/adminPanelRoomDetailsDetails.schema";
import { schemaAdminPanelRoomDetailsAdditional } from "@/schemas/adminPanelRoomDetailsAdditional.schema";
import { schemaAdminPanelRoomDetailsServiceAddons } from "@/schemas/adminPanelRoomDetailsServiceAddons.schema";
import { schemaAdminPanelRoomDetailsCategory } from "@/schemas/adminPanelRoomDetailsCategory.schema";
import { schemaAdminPanelRoomDetailsGallery } from "@/schemas/adminPanelRoomDetailsGallery.schema";

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
const RoomDetails: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    descriptionTitle: "",
    description: "",
  });
  const [formAdditionalData, setAdditionalFormData] = useState({
    additionalInfoTitle: "",
    additionalInfoDescription: "",
  });
  const [formAddonData, setAddonFormData] = useState({
    serviceAddonTitle: "",
    serviceAddonDescription: "",
  });
  const [formCategoryData, setCategoryFormData] = useState({
    categoryRoomType: "",
    categoryBeds: "",
    categoryGuest: "",
    categoryPrice: 0, // Initialize as a number
  });
  const [coverImages, setCoverImages] = useState<File[]>([]);
  const [gallery, setGallery] = useState<File[]>([]);
  // Initializes state to store validation error messages for each form field.
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  // Ensure file-related code only runs in the browser
  useEffect(() => {
    if (typeof window === "undefined") {
      console.error("Running in a non-browser environment.");
    } else if (typeof File === "undefined") {
      console.error("File API is not supported in this browser.");
    }
  }, []);


  // Handles form submission, performing validation and sending data if valid
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Reset validation errors before validation
    setErrors({});

    // Combine schema for both forms and validate form data
    const combinedSchema = z.object({
      ...schemaAdminPanelRoomDetails.shape,
      ...schemaAdminPanelRoomDetailsAdditional.shape,
      ...schemaAdminPanelRoomDetailsServiceAddons.shape,
      ...schemaAdminPanelRoomDetailsCategory.shape,
      ...schemaAdminPanelRoomDetailsCoverImg.shape,
      ...schemaAdminPanelRoomDetailsGallery.shape,
    });

    // Validate form data
    const { errors: validationErrors } = validateFormData(combinedSchema, {
      ...formData,
      ...formAdditionalData,
      ...formAddonData,
      ...formCategoryData,
      coverImages,
      gallery,
    });

    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#EEF5FF",
          padding: "10px 0",
          width: "100%",
          mx: "2px",
        }}>
        <Container>
          <HeadingBook />
        </Container>
      </Box>
      <Box
        sx={{
          display: "grid",
          backgroundColor: "#EEF5FF",
          padding: "0 0 30px 0",
        }}>
        {/* (1) The Details component is imported and rendered here. */}

        <Container>
          <Grid container spacing={2}>
            {/* <RoomDetailsForm /> */}
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} marginTop={3}>
              <Details
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />
            </Grid>
            {/* (2) The Gallery component is imported and rendered here. */}
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <CoverImage 
                coverImages={coverImages} 
                setCoverImages={setCoverImages} 
                errors={errors.coverImages || ''} 
                setErrors={(value) => setErrors(prev => ({ ...prev, coverImages: value }))} 
              />
            {/* (3) The Gallery component is imported and rendered here. */}
            <Grid item xs={12} md={12} lg={12} marginTop={2}>
              <Gallery 
                gallery={gallery}
                setGallery={setGallery}
                errors={errors.gallery || ''}
                setErrors={(value) => setErrors(prev => ({...prev, gallery: value}))}
              />
            </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container spacing={2}>
            {/* (4) The Category component is imported and rendered here. */}
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} marginTop={2}>
              <Category
                formCategoryData={formCategoryData}
                setCategoryFormData={setCategoryFormData}
                errors={errors}
              />
            </Grid>
            {/* (5) The Additional component is imported and rendered here. */}
            <Grid item xs={12} md={6} marginTop={2}>
              <Additional
                formAdditionalData={formAdditionalData}
                setAdditionalFormData={setAdditionalFormData}
                errors={errors}
              />
            </Grid>
          </Grid>
          {/* (6) The ServiceAd component is imported and rendered here. */}
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              marginTop={2}
              bgcolor={"#000"}>
              <ServiceAd
                formAddonData={formAddonData}
                setAddonFormData={setAddonFormData}
                errors={errors}
              />
            </Grid>
          </Grid>
        </Container>
        <Container>
          {/* (7) The Save and Close buttons are rendered here. */}
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} marginTop={2}>
            <Box display="flex" justifyContent="flex-end" alignItems="center">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FFFFFF",
                  color: "#5B5959",
                  border: "0.063rem solid #5B5959",
                  "&:hover": {
                    backgroundColor: "#EBEBEB", // Set hover background color
                  },
                }}>
                <Typography>Close</Typography>
              </Button>
              <Button variant="outlined" onClick={handleSubmit}>
                <Typography>Save</Typography>
              </Button>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default RoomDetails;
