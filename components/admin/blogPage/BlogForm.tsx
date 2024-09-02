"use client"; // This directive indicates that the component is client-side rendered in Next.js.

import {
  Card,
  Grid,
  TextField,
  Button,
  Chip,
  CardContent,
  Typography,
  Box,
} from "@mui/material"; // Importing MUI components.
import { useState } from "react"; // Importing useState hook from React.
import dynamic from "next/dynamic"; // Importing dynamic for lazy loading.
import Autocomplete from "@mui/material/Autocomplete"; // Importing Autocomplete component from MUI.
import { mulish } from "@/app/fonts"; // Importing custom font class.
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto"; // Importing icon from MUI.
import { styled } from "@mui/material/styles"; // Importing styled for custom styling.
import CloudUploadIcon from "@mui/icons-material/CloudUpload"; // Importing icon from MUI.
import { validateFormData } from "@/utils/validation";
import { schemaAdminBlog } from "@/schemas/adminBlog.schema";

type BlogFormData = { // Interface defining the structure of the blog form data.
  title: string;
  subTitle: string;
  blogTag: string;
  bodyContent: string;
  coverImage: string;
  authorImage: string;
  authorName: string;
  authorDescription: string;
  linkTwitter: string;
  linkFacebook: string;
  linkLinkedIn: string;
}; 

// Dynamically importing the TextEditor component to enable client-side rendering only.
const TextEditor = dynamic(() => import("./TextEditor"), {
  ssr: false,
});

// Interface defining the structure of the blog form values.
interface BlogFormValues {
  title: string;
  subTitle: string;
  tags: string[];
  bodyContent: string;
  author: string;
  authorDescription: string;
  twitter: string;
  facebook: string;
  linkedin: string;
}

// Custom styled component to visually hide the input element.
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

// Main BlogForm component.
const BlogForm: React.FC = () => {
  // useState hook to manage form values.
  const [formValues, setFormValues] = useState<BlogFormValues>({
    title: "",
    subTitle: "",
    tags: [],
    bodyContent: "",
    author: "",
    authorDescription: "",
    twitter: "",
    facebook: "",
    linkedin: "",
  });
  // useState hook to manage form data.
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    subTitle: '',
    blogTag: '',
    bodyContent: '',
    coverImage: '',
    authorImage: '',
    authorName: '',
    authorDescription: '',
    linkTwitter: '',
    linkFacebook: '',
    linkLinkedIn: '',
  });
  const [errors, setErrors] = useState<Partial<BlogFormData>>({}); // useState hook to manage form errors.

  // Handler to update form values based on input changes.
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Reset error message for the field being changed
  };

  // Handler to update tags array in form values.
  const handleTagsChange = (event: React.ChangeEvent<{}>, value: string[]) => {
    setFormValues({ ...formValues, tags: value });
    setFormData({ ...formData, blogTag: value.join(", ") });
    setErrors({ ...errors, blogTag: "" }); // Reset error message for the field being changed
  };

  // Handler to update body content in form values.
  const handleBodyChange = (body: string) => {
    setFormValues({ ...formValues, bodyContent: body });
    setFormData({ ...formData, bodyContent: body });
    setErrors({ ...errors, bodyContent: "" }); // Reset error message for the field being changed
  };

  // Handler for form submission.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior.
    console.log("Form Values:", formValues); // Log the form values.
    const { errors: validationErrors, data } = validateFormData(schemaAdminBlog, formData);

    if (validationErrors) {
      setErrors(validationErrors);
    } else {
      console.log(data);
    }  

    // Reset the form values after submission.
    setFormValues({
      title: "",
      subTitle: "",
      tags: [],
      bodyContent: "",
      author: "",
      authorDescription: "",
      twitter: "",
      facebook: "",
      linkedin: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card sx={{ marginLeft: "auto", marginRight: "auto" }}>
        <CardContent sx={{ justifyContent: "center", alignItems: "center" }}>
          <Typography variant="h1" className={mulish.className}>
            Blog
          </Typography>
          <Grid
            container
            spacing={{ xs: 1, sm: 2, md: 2 }}
            sx={{
              display: "block",
              padding: { xs: "10px 20px 10px 20px" },
            }}
          >
            {/* Title field */}
            <Grid item>
              <TextField
                label="Add title"
                fullWidth
                variant="outlined"
                type="text"
                size="small"
                name="title"
                value={formData.title}
                error={!!errors.title}
                helperText={errors.title}
                onChange={handleInputChange}
              />
            </Grid>

            {/* Sub title field */}
            <Grid item>
              <TextField
                label="Sub title"
                fullWidth
                variant="outlined"
                type="text"
                size="small"
                name="subTitle"
                value={formData.subTitle}
                error={!!errors.subTitle}
                helperText={errors.subTitle}
                onChange={handleInputChange}
              />
            </Grid>

            {/* Tags field */}
            <Grid item>
              <Autocomplete
                clearIcon={false}
                options={[]}
                freeSolo
                multiple
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <Chip label={option} {...getTagProps({ index })} />
                  ))
                }
                renderInput={(params) => (
                  <TextField label="Add Tags" {...params} size="small"
                    name="blogTag"
                    value={formData.blogTag}
                    error={!!errors.blogTag}
                    helperText={errors.blogTag}
                  />
                )}
                onChange={handleTagsChange}
                value={formValues.tags}
              />
            </Grid>

            {/* TextEditor component for rich text editing */}
            <Grid item>
              <TextEditor
                onBodyChange={handleBodyChange}
                bodyContent={formValues.bodyContent}
              />
              {errors.bodyContent && (
                <Typography color="error">
                  {errors.bodyContent}
                </Typography>
              )}
            </Grid>

            <Typography
              marginTop={{ lg: 2, md: 2 }}
              variant="h2"
              className={mulish.className}
            >
              Cover Image
            </Typography>
          </Grid>
          <Grid
            container
            spacing={{ xs: 1, sm: 2, md: 2 }}
            sx={{
              display: "block",
              padding: { xs: "10px 20px 10px 20px" },
              marginBottom: "20px",
            }}
          >
            {/* Cover Image Upload */}
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              sx={{ alignItems: "center", py: { lg: 2, md: 2 } }}
            >
              <Card
                elevation={0}
                sx={{
                  height: {
                    xs: "300px",
                    sm: "450px",
                    md: "450px",
                    lg: "500px",
                    xl: "550px",
                  },
                  width: "auto",

                  border: "1px solid",
                  borderRadius: "8px",
                  borderColor: "#D0D5DD",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "16px",
                }}
              >
                <Button component="label" role={undefined} startIcon={<AddAPhotoIcon />}>
                  <VisuallyHiddenInput type="file" />
                </Button>
                {errors.coverImage && ( // Display error message if cover image is invalid
                  <Typography color="error">
                    {errors.coverImage}
                  </Typography>
                )}
              </Card>
            </Grid>

            <Typography variant="h2" className={mulish.className}>
              Author Image
            </Typography>

            {/* Author Image Upload */}
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Card
                elevation={0}
                sx={{
                  height: {
                    xs: "300px",
                    sm: "450px",
                    md: "450px",
                    lg: "500px",
                    xl: "550px",
                  },
                  width: "auto",
                  border: "1px solid",
                  borderRadius: "8px",
                  borderColor: "#D0D5DD",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "16px",
                }}
              >
                <Button component="label" role={undefined} startIcon={<CloudUploadIcon />}>
                  <VisuallyHiddenInput type="file" />
                </Button>
                {errors.authorImage && ( // Display error message if author image is invalid
                  <Typography color="error">
                    {errors.authorImage}
                  </Typography>
                )}
              </Card>
            </Grid>

            {/* Author field */}
            <Grid item>
              <TextField
                label="Author"
                fullWidth
                variant="outlined"
                type="text"
                size="small"
                name="authorName"
                value={formData.authorName}
                error={!!errors.authorName}
                helperText={errors.authorName}
                onChange={handleInputChange}
              />
            </Grid>

            {/* Author Description field */}
            <Grid item>
              <TextField
                label="Author Description..."
                fullWidth
                multiline
                rows={6}
                variant="outlined"
                type="message"
                name="authorDescription"
                value={formData.authorDescription}
                error={!!errors.authorDescription}
                helperText={errors.authorDescription}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={{ xs: 1, sm: 2, md: 2 }}
            sx={{
              display: "block",
              padding: { xs: "10px 20px 10px 20px" },
              marginBottom: "20px",
            }}
          >
            <Typography variant="h2">Social Media Links</Typography>

            {/* Social Media Links fields */}
            <Grid item>
              <TextField
                label="Twitter"
                fullWidth
                variant="outlined"
                type="text"
                size="small"
                name="linkTwitter"
                value={formData.linkTwitter}
                error={!!errors.linkTwitter}
                helperText={errors.linkTwitter}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item>
              <TextField
                label="Facebook"
                fullWidth
                variant="outlined"
                type="text"
                size="small"
                name="linkFacebook"
                value={formData.linkFacebook}
                error={!!errors.linkFacebook}
                helperText={errors.linkFacebook}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item>
              <TextField
                label="LinkedIn"
                fullWidth
                variant="outlined"
                type="text"
                size="small"
                name="linkLinkedIn"
                value={formData.linkLinkedIn}
                error={!!errors.linkLinkedIn}
                helperText={errors.linkLinkedIn}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "1rem",
              textAlign: "right",
              padding: "0 18px 20px 30px",
              //display: { xs: "flex" },
            }}
          >
            <Button
              type="button"
              variant="contained"
              onClick={() => console.log("Draft Saved")}
              sx={{
                backgroundColor: '#FFFFFF',
                color: '#5B5959',
                border: '0.063rem solid #5B5959',
                "&:hover": {
                  backgroundColor: '#EBEBEB', // Set hover background color
                },
              }}
            >
              Save Draft
            </Button>

            <Button
              type="submit"
              variant="contained"
              sx={{
                color: "white", // Set text color
                backgroundColor: "#4A5472", // Set background color
                borderColor: "#5B5959", // Set outline color
                "&:hover": {
                  backgroundColor: "#192959", // Set hover background color
                },
              }}
            >
              Publish
            </Button>
          </Box>
        </CardContent>
      </Card>
    </form>
  );
};



export default BlogForm; // Exporting the BlogForm component as default.