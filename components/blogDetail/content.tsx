import {
    Typography,
    Grid,
    Stack,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Button,
    List,
    ListItem,
    Box,
    Link,
  } from "@mui/material";
  import Image from "next/image";
  import avatarImage from "@/public/images/blogDetails/avatar.webp";
  import ContentCopyIcon from "@mui/icons-material/ContentCopy";
  import LinkedInIcon from "@mui/icons-material/LinkedIn";
  import TwitterIcon from "@mui/icons-material/Twitter";
  import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
  import { blogcontent } from "@/data/blogDetail";
  
  import * as React from "react";
  
  const ContentBanner = () => {
    return (
      <>
        {/* Main grid container */}
        <Grid container spacing={2}>
          <Grid item xs={12} mt={8} sm container>
            {/* Nested grid container */}
            <Grid item xs container direction="column" spacing={2}>
              {/* Grid item for paragraph and title */}
              <Grid item xs sx={{ alignItems: "center", textAlign: "center" }}>
                {/* Start paragraph */}
                <Typography
                  gutterBottom
                  sx={{
                    color: "#515151",
                    fontSize: "20px",
                    textAlign: "justify",
                  }}
                >
                  {blogcontent.pharagraph.startParagraph}
                </Typography>
                {/* First paragraph title */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: "30px",
                    textAlign: "left",
                    fontWeight: "bold",
                    color: "#11142D",
                  }}
                >
                  {blogcontent.pharagraph.pTitle1.title}
                </Typography>
                {/* First paragraph content */}
                <Typography
                  gutterBottom
                  sx={{
                    color: "#515151",
                    fontSize: "20px",
                    textAlign: "justify",
                  }}
                >
                  {blogcontent.pharagraph.pTitle1.paragraph1}
                  <br />
                  <br />
                  {blogcontent.pharagraph.pTitle1.paragraph2}
                </Typography>
              </Grid>
              {/* Grid item for image */}
              <Grid item sx={{ alignItems: "center" }}>
                {/* Image */}
                <Image
                  src={blogcontent.pharagraph.imageContent}
                  alt="complex"
                  width={1000}
                  height={720}
                  style={{
                    width: "100%",
                    height: "auto",
                    flexShrink: 0,
                  }}
                />
                {/* Image description */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: "14px",
                    textAlign: "left",
                    color: "#515151",
                  }}
                >
                  {blogcontent.pharagraph.imageContentText}{" "}
                  <Link href="" sx={{ color: "#515151" }}>
                    {blogcontent.pharagraph.imageContentsource}
                  </Link>
                </Typography>
              </Grid>
              {/* Grid item for blockquote */}
              <Grid item xs sx={{ alignItems: "center", textAlign: "center" }}>
                {/* Blockquote */}
                <blockquote
                  style={{
                    color: "#11142D",
                    fontSize: "24px",
                    textAlign: "justify",
                    borderLeft: "0.2em solid",
                    borderColor: "#6941C6",
                    margin: "1.5em 10px",
                    padding: "0.5em 10px",
                    fontStyle: "italic",
                    fontWeight: "normal",
                  }}
                >
                  {blogcontent.pharagraph.blockquoteText}
                  <br />
                  <cite
                    style={{
                      color: "#515151",
                      fontSize: "15px",
                      fontStyle: "normal",
                    }}
                  >
                    -{blogcontent.pharagraph.blockquoteCite}
                  </cite>
                </blockquote>
  
                {/* Body paragraphs */}
                <Typography
                  gutterBottom
                  sx={{
                    color: "#515151",
                    fontSize: "20px",
                    textAlign: "justify",
                  }}
                >
                  {blogcontent.pharagraph.bodyParagraph}
                  <br />
                  <br />
                  {blogcontent.pharagraph.bodyParagraph1}
                  <br />
                  <br />
                </Typography>
                {/* Second paragraph title */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: "30px",
                    textAlign: "left",
                    fontWeight: "bold",
                    color: "#11142D",
                  }}
                >
                  {blogcontent.pharagraph.pTitle2.title}
                </Typography>
                {/* Second paragraph content */}
                <Typography
                  gutterBottom
                  sx={{
                    color: "#515151",
                    fontSize: "20px",
                    textAlign: "justify",
                  }}
                >
                  {blogcontent.pharagraph.pTitle2.paragraph1}
                  <br />
                  <br />
                </Typography>
                {/* Third paragraph title */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: "30px",
                    textAlign: "left",
                    fontWeight: "bold",
                    color: "#11142D",
                  }}
                >
                  {blogcontent.pharagraph.pTitle3.title}
                </Typography>
                {/* Third paragraph content */}
                <Typography
                  gutterBottom
                  sx={{
                    color: "#515151",
                    fontSize: "20px",
                    textAlign: "justify",
                  }}
                >
                  {blogcontent.pharagraph.pTitle3.paragraph1}
                  <br />
                </Typography>
              </Grid>
              {/* Grid item for final image */}
              <Grid item sx={{ alignItems: "center" }}>
                {/* Final image */}
                <Image
                  src={blogcontent.pharagraph.imageEnd}
                  alt="complex"
                  width={1000}
                  height={720}
                  style={{
                    width: "100%",
                    height: "auto",
                    flexShrink: 0,
                  }}
                />
                {/* Final image description */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                  sx={{
                    fontSize: "14px",
                    textAlign: "left",
                    color: "#515151",
                  }}
                >
                  {blogcontent.pharagraph.imageEndText}{" "}
                  <Link href="" sx={{ color: "#515151" }}>
                    {blogcontent.pharagraph.imageEndsource}
                  </Link>
                </Typography>
                {/* Last paragraph */}
                <Typography
                  gutterBottom
                  sx={{
                    color: "#515151",
                    fontSize: "20px",
                    textAlign: "justify",
                  }}
                >
                  {blogcontent.pharagraph.lastParagraph}
                  <br />
                </Typography>
              </Grid>
              {/* Conclusion Box */}
              <Box sx={{ m: 5, bgcolor: "#F9FAFB" }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                  sx={{
                    fontSize: "30px",
                    textAlign: "left",
                    fontWeight: "bold",
                    color: "#11142D",
                    mb: 2,
                  }}
                >
                  {blogcontent.ConclutionBoxText.title}
                </Typography>
                <Typography
                  gutterBottom
                  sx={{
                    color: "#515151",
                    fontSize: "18px",
                    textAlign: "justify",
                  }}
                >
                  {blogcontent.ConclutionBoxText.paragraph}
                  <br />
                  <br />
                  {blogcontent.ConclutionBoxText.paragraph1}
                  <br />
                </Typography>
              </Box>
              {/* Author Info and Sharing */}
              <Box sx={{ flexGrow: 1, borderTop: "0.5px solid #E4E7EC" }}>
                <Grid container spacing={3}>
                  <Grid item xs>
                    {/* Author Info */}
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          {/* Author Avatar */}
                          <Avatar src={"avatarImage"} alt="Olivia Rhyne" />
                        </ListItemAvatar>
                        {/* Author Name and Position */}
                        <ListItemText
                          primary="Olivia Rhye"
                          secondary={
                            <React.Fragment>
                              {"Product Designer, Untitled"}
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs>
                    {/* Sharing Buttons */}
                    <Box sx={{ marginTop: "30px" }}>
                      <Stack spacing={1} direction="row">
                        <Button
                          variant="outlined"
                          sx={{
                            fontSize: "14px",
                            borderColor: "#D0D5DD",
                            color: "#344054",
                          }}
                        >
                          <ContentCopyIcon
                            sx={{ color: "#344054", mr: "10px" }}
                          />{" "}
                          Copy Link
                        </Button>
                        <Button
                          variant="outlined"
                          sx={{ fontSize: "14px", borderColor: "#D0D5DD" }}
                        >
                          <TwitterIcon sx={{ color: "#98A2B3" }} />
                        </Button>
                        <Button
                          variant="outlined"
                          sx={{ fontSize: "14px", borderColor: "#D0D5DD" }}
                        >
                          <FacebookOutlinedIcon sx={{ color: "#98A2B3" }} />
                        </Button>
                        <Button
                          variant="outlined"
                          sx={{ fontSize: "14px", borderColor: "#D0D5DD" }}
                        >
                          <LinkedInIcon sx={{ color: "#98A2B3" }} />
                        </Button>
                      </Stack>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };
  export default ContentBanner;
  