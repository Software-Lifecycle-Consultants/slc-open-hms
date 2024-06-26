"use client"; // This directive indicates that the component is client-side rendered in Next.js.

import { Grid, Card, Typography, Button, Box } from "@mui/material"; // Importing MUI components.
import { useState } from "react"; // Importing useState hook from React.
import dynamic from "next/dynamic"; // Importing dynamic for lazy loading.
import { styled } from "@mui/material/styles"; // Importing styled for custom styling.
import { adminContentHeroBanner } from "@/data/admincontent";
import EditIcon from "@mui/icons-material/Edit";

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
const PrivacyPolicy: React.FC = () => {
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
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Card
          elevation={0}
          sx={{
            height: "auto",
            width: "auto",
            border: "1px solid",
            borderRadius: "8px",
            borderColor: "#000",
            flexShrink: "0",
            marginTop: "20px",
            padding: "20px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ marginTop: "05px", fontWeight: "bold" }} // Styling for the header title.
          >
            Privacy Policy
          </Typography>
          {/* TextEditor component for rich text editing */}
          <Grid item mt={2}>
            <TextEditor
              onBodyChange={handleBodyChange}
              bodyContent={formValues.bodyContent}
            />
          </Grid>
        </Card>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} marginTop={2}>
          <Box display="flex" justifyContent="end" alignItems="center">
            <Button
              endIcon={<EditIcon />}
              sx={{
                textTransform: "none",
                marginTop: "7px",
                justifyContent: "center",
                backgroundColor: "#4A5472",
                color: "white",
                width: "100px",
                height: "30px",
                borderRadius: "8px",
                textAlign: "center",
                borderColor: "#5B5959",
                "&:hover": {
                  backgroundColor: "#192959",
                },
              }}
              variant="outlined"
            >
              <Typography
                style={{
                  color: "White",
                }}
              >
                {
                  adminContentHeroBanner.adminContentBannerDetailsEditButton // Display the edit button text
                }
              </Typography>
            </Button>
            <Button
              sx={{
                textTransform: "none",
                marginTop: "7px",
                backgroundColor: "#4A5472",
                "&:hover": { backgroundColor: "#192959" },
                color: "white",
                width: "100px",
                height: "30px",
                borderRadius: "8px",
                marginLeft: "10px",
                textAlign: "center",
              }}
              variant="contained"
            >
              <Typography
                style={{
                  color: "white",
                }}
              >
                {
                  adminContentHeroBanner.adminContentBannerDetailsSubmitButton // Display the submit button text
                }
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default PrivacyPolicy;
