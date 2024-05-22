"use client";
import {
  Card,
  Grid,
  TextField,
  Button,
  Chip,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";
import dynamic from "next/dynamic";
import Autocomplete from "@mui/material/Autocomplete";
import { mulish } from "@/app/fonts";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const TextEditor = dynamic(() => import("./TextEditor"), {
  ssr: false,
});

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

const BlogForm: React.FC = () => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleTagsChange = (event: React.ChangeEvent<{}>, value: string[]) => {
    setFormValues({ ...formValues, tags: value });
  };

  const handleBodyChange = (body: string) => {
    setFormValues({ ...formValues, bodyContent: body });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Values:", formValues);
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
        <CardContent>
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

            <Grid item>
              <Autocomplete
                clearIcon={false}
                options={[]}
                freeSolo
                multiple
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
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
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Card
                elevation={0}
                sx={{
                  height: "auto",
                  Width: "auto",
                  border: "1px solid",
                  borderRadius: "8px",
                  borderColor: "#D0D5DD",
                  flexShrink: "0",
                  paddingTop: "25%",
                  paddingLeft: "45%",
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

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Card
                elevation={0}
                sx={{
                  height: "auto",
                  Width: "auto",
                  border: "1px solid",
                  borderRadius: "8px",
                  borderColor: "#D0D5DD",
                  flexShrink: "0",
                  paddingTop: "25%",
                  paddingLeft: "45%",
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

          <Box sx={{ textAlign: "right", padding: "0 40px 30px" }}>
            <Button
              type="button"
              sx={{
                backgroundColor: "#FFFFFF",
                border: "2px solid black",
                borderRadius: "10px",
                color: "black",
                padding: "10px 24px",
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
                padding: "10px 24px",
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

export default BlogForm;
