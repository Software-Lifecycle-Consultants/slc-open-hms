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
import { Grid, Box, Container, Button, Typography } from "@mui/material";
import { schemaAdminPanelRoomDetailsCoverImg } from "@/schemas/adminPanelRoomDetailsCoverImage.schema";
import { validateFormData } from "@/utils/validation";
import { schemaAdminPanelRoomDetails } from "@/schemas/adminPanelRoomDetailsDetails.schema";
import { schemaAdminPanelRoomDetailsAdditional } from "@/schemas/adminPanelRoomDetailsAdditional.schema";
import { schemaAdminPanelRoomDetailsServiceAddons } from "@/schemas/adminPanelRoomDetailsServiceAddons.schema";
import { schemaAdminPanelRoomDetailsCategory } from "@/schemas/adminPanelRoomDetailsCategory.schema";
import { schemaAdminPanelRoomDetailsGallery } from "@/schemas/adminPanelRoomDetailsGallery.schema";

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
    categoryPrice: 0,
  });

  const [coverImages, setCoverImages] = useState<File[]>([]);
  const [gallery, setGallery] = useState<File[]>([]);
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    // Initialize file-related state here
    setCoverImages([]);
    setGallery([]);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const combinedSchema = z.object({
      ...schemaAdminPanelRoomDetails.shape,
      ...schemaAdminPanelRoomDetailsAdditional.shape,
      ...schemaAdminPanelRoomDetailsServiceAddons.shape,
      ...schemaAdminPanelRoomDetailsCategory.shape,
      ...schemaAdminPanelRoomDetailsCoverImg.shape,
      ...schemaAdminPanelRoomDetailsGallery.shape,
    });

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

    // Handle form submission logic here
  };

  return (
    <>
      {/* Existing JSX structure */}
      <Box sx={{ backgroundColor: "#EEF5FF", padding: "10px 0", width: "100%", mx: "2px" }}>
        <Container>
          <HeadingBook />
        </Container>
      </Box>
      <Box sx={{ display: "grid", backgroundColor: "#EEF5FF", padding: "0 0 30px 0" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} marginTop={3}>
              <Details
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <CoverImage 
                coverImages={coverImages} 
                setCoverImages={setCoverImages} 
                errors={errors.coverImages || ''} 
                setErrors={(value) => setErrors(prev => ({ ...prev, coverImages: value }))} 
              />
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
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} marginTop={2}>
              <Category
                formCategoryData={formCategoryData}
                setCategoryFormData={setCategoryFormData}
                errors={errors}
              />
            </Grid>
            <Grid item xs={12} md={6} marginTop={2}>
              <Additional
                formAdditionalData={formAdditionalData}
                setAdditionalFormData={setAdditionalFormData}
                errors={errors}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} marginTop={2} bgcolor={"#000"}>
              <ServiceAd
                formAddonData={formAddonData}
                setAddonFormData={setAddonFormData}
                errors={errors}
              />
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} marginTop={2}>
            <Box display="flex" justifyContent="flex-end" alignItems="center">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FFFFFF",
                  color: "#5B5959",
                  border: "0.063rem solid #5B5959",
                  "&:hover": {
                    backgroundColor: "#EBEBEB",
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