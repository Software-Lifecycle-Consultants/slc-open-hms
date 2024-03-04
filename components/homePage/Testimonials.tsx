"use client";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import { userTestimonial } from "@/data/homePage";
import { testimonialSectionDetails } from "@/data/homePage";
import { montserrat } from "../../app/fonts";
const Testimonials = () => {
  const [value, setValue] = React.useState(4); // Rating value

  /* Styles for various elements */
  const accountStatsStyle = {
    marginTop: "31.682px", // Half of the userAvatar height
    width: "90%",
    height: "auto",
    borderRadius: "18px",
    paddingTop: "36px",
    marginLeft: { xs: "5%", md: "none" },
  };

  const accountContainerStyle = {
    position: "relative",
    top: "15%",
  };

  const userAvatarContainerStyle = {
    position: "absolute",
    top: "-31.682px", // Half of the userAvatar height
    left: "calc(12% - 31.682px)", // Half of the userAvatar width
    padding: "8px",
    borderRadius: "50%",
    backgroundColor: "#fff",
  };

  /* Typography style for heading 5 */
  const typographyh5Style = {
    color: "#0C111F",
    fontSize: "24px",
    lineHeight: "28px",
    fontStyle: "normal",
    fontWeight: "700",
  };

  /* Typography style for heading 1 */
  const typographyh1Style = {
    color: "#0C111F",
    fontSize: "48px",
    lineHeight: "130%",
    fontStyle: "normal",
    letterSpacing: "-0.48px",
    fontWeight: "700",
    marginTop: "95px",
    marginLeft: { xs: "5%", md: "none" },
  };

  const typographyCardStyle = {
    color: "#0C111F",
    fontSize: "18px",
    lineHeight: "180%",
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: "-0.18px",
  };

  /* Typography style for paragraph */
  const typographyParagraphStyle = {
    color: "#0C111F",
    fontSize: "20px",
    lineHeight: "180%",
    fontStyle: "normal",
    fontWeight: "400",
    marginTop: "5px",
    marginBottom: "95px",
    marginLeft: { xs: "5%", md: "none" },
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {/* Left grid item displaying user's testimonial */}
        <Grid item xs={12} md={6}>
          <Box sx={accountContainerStyle}>
            <Box sx={userAvatarContainerStyle}>
              {/* User profile image */}
              <Image
                src={userTestimonial.userProfileImage}
                alt="Avatar"
                width={64}
                height={64}
              />
            </Box>
            {/* Card displaying user's testimonial details */}
            <Card elevation={0} sx={accountStatsStyle}>
              <CardContent>
                {/* User's name */}
                <Typography
                  gutterBottom
                  variant="h5"
                  className={montserrat.className}
                  style={typographyh5Style}
                >
                  {userTestimonial.userName}
                </Typography>
                {/* User's rating */}
                <Rating name="read-only" value={value} readOnly />
                {/* User's testimonial description */}
                <Typography variant="body2" style={typographyCardStyle}>
                  {userTestimonial.testimonial}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        {/* Right grid item displaying testimonial section details */}
        <Grid item xs={12} md={6} paddingRight={{ xs: "16px", md: "32px" }}>
          <Box>
            {/* Title for the testimonial section */}
            <Typography variant="h1" sx={typographyh1Style}>
              {testimonialSectionDetails.testimonialsSectionTitle}
            </Typography>
            {/* Description for the testimonial section */}
            <Typography variant="body2" sx={typographyParagraphStyle}>
              {testimonialSectionDetails.testimonialsSectionDescription}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Testimonials;
