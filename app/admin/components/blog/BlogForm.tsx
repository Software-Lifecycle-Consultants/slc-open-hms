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

  // Handler to update form values based on input changes.
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handler to update tags array in form values.
  const handleTagsChange = (event: React.ChangeEvent<{}>, value: string[]) => {
    setFormValues({ ...formValues, tags: value });
  };

  // Handler to update body content in form values.
  const handleBodyChange = (body: string) => {
    setFormValues({ ...formValues, bodyContent: body });
  };

  // Handler for form submission.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior.
    console.log("Form Values:", formValues); // Log the form values.

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
          <Typography
            variant="h2"
            className={mulish.className}
            sx={{
              padding: "10px 20px 10px 20px",
              fontSize: { xs: "26px", sm: "28px", md: "32px" },
              fontWeight: 800,
              color: "#4A5472",
            }}
          >
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
                value={formValues.title}
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
                value={formValues.subTitle}
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
                  <TextField label="Add Tags" {...params} size="small" />
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
            </Grid>

            <Typography
              variant="h3"
              className={mulish.className}
              sx={{
                padding: "10px 20px 10px 20px",
                fontSize: "16px",
                fontWeight: 500,
                color: "#4A5472",
              }}
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
              sx={{ alignItems: "center" }}
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
                <Button
                  sx={{
                    marginTop: "7px",
                    backgroundColor: "#4A5472",
                  }}
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<AddAPhotoIcon />}
                >
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Card>
            </Grid>

            <Typography
              variant="h3"
              className={mulish.className}
              sx={{
                padding: "10px 20px 10px 20px",
                fontSize: "16px",
                fontWeight: 500,
                color: "#4A5472",
              }}
            >
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
                <Button
                  sx={{
                    marginTop: "7px",
                    backgroundColor: "#4A5472",
                  }}
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  <VisuallyHiddenInput type="file" />
                </Button>
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
                name="author"
                value={formValues.author}
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
                value={formValues.authorDescription}
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
            <Typography
              variant="h3"
              className={mulish.className}
              sx={{
                padding: "10px 20px 10px 20px",
                fontSize: "16px",
                fontWeight: 500,
                color: "#4A5472",
              }}
            >
              Social Media Links
            </Typography>

            {/* Social Media Links fields */}
            <Grid item>
              <TextField
                label="Twitter"
                fullWidth
                variant="outlined"
                type="text"
                size="small"
                name="twitter"
                value={formValues.twitter}
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
                name="facebook"
                value={formValues.facebook}
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
                name="linkedin"
                value={formValues.linkedin}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>

          <Box
            sx={{
              textAlign: "right",
              padding: "0 40px 30px",
              //display: { xs: "flex" },
            }}
          >
            <Button
              type="button"
              sx={{
                backgroundColor: "#FFFFFF",
                border: "2px solid black",
                borderRadius: "10px",
                color: "black",
                padding: { xs: "8px 14px" },
                marginRight: "10px",
              }}
              onClick={() => console.log("Draft Saved")}
            >
              Save Draft
            </Button>

            <Button
              type="submit"
              sx={{
                backgroundColor: "#4A5472",
                borderRadius: "10px",
                color: "white",
                border: "2px solid ",
                padding: { xs: "8px 14px" },
                "&:hover": {
                  backgroundColor: "#3B435F",
                  borderColor: "#3B435F",
                },
                "&:active": {
                  backgroundColor: "#2C3045",
                  borderColor: "#2C3045",
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
