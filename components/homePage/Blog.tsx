import {
  Grid,
  Typography,
} from "@mui/material";
import React from "react";;
import { blogCardData } from "../../data/homePage";
import { blogSection } from "../../data/homePage";
import BlogCard from "./BlogCard";

/* Styles for typography - Heading 1 */
const typographyh1Styles = {
  color: "#0C111F",
  fontSize: "48px",
  lineHeight: "130%",
  fontStyle: "normal",
  letterSpacing: "-0.48px",
  fontWeight: "700",
};

/* Styles for typography - Body 2 */
const typographybody2Styles = {
  color: "#0C111F",
  fontSize: "20px",
  lineHeight: "180%",
  fontStyle: "normal",
  fontWeight: "400",
  marginTop: "5px",
};

/* Blog functional component */
const Blog = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          {/* Heading 1 */}
          <Typography variant="h1" style={typographyh1Styles}>
            {blogSection.blogSectionTitle}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* Body 2 */}
          <Typography variant="body2" style={typographybody2Styles}>
            {blogSection.blogSectionDescription}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
        {blogCardData.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <>
              {/* Destination card details component */}
              <BlogCard
                vedioURL={item.vedioURL}
                city={item.city}
                description={item.description}
                price={item.price}
              />
            </>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Blog;
