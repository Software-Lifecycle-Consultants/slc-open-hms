"use client";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Rating,
  Typography,
  Button,
  Stack,

} from "@mui/material";
import React from "react";
import Image from "next/image";
import { blogCardData, userTestimonial } from "@/data/homePage";
//import { testimonialSectionDetails } from "@/data/homePage";
import { montserrat, inter } from "../../app/fonts";
import LaunchIcon from '@mui/icons-material/Launch';
import Link from "next/link";
const Testimonials = () => {
  const [value, setValue] = React.useState(4); // Rating value

  /* Styles for various elements */
  const accountStatsStyle = {
    marginTop: "31.682px", // Half of the userAvatar height
    width: "90%",
    height: "250px",
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
        marginTop="25px"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {/* Left grid item displaying user's testimonial */}
        <Grid item xs={12} md={4}>
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
        <Grid item xs={12} md={4}>
          <Box sx={accountContainerStyle}>
            <Box sx={userAvatarContainerStyle}>
              {/* User profile image */}
              <Image
                src={userTestimonial.userProfileImage1}
                alt="Profile1"
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
                  {userTestimonial.userName1}
                </Typography>
                {/* User's rating */}
                <Rating name="read-only" value={value} readOnly />
                {/* User's testimonial description */}
                <Typography variant="body2"  style={typographyCardStyle}>
                  {userTestimonial.testimonial1}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={accountContainerStyle}>
            <Box sx={userAvatarContainerStyle}>
              {/* User profile image */}
              <Image
                src={userTestimonial.userProfileImage2}
                alt="Profile2"
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
                  {userTestimonial.userName2}
                </Typography>
                {/* User's rating */}
                <Rating name="read-only" value={value} readOnly />
                {/* User's testimonial description */}
                <Typography variant="body2" style={typographyCardStyle}>
                  {userTestimonial.testimonial2}
                </Typography>
              </CardContent>
            </Card>
          </Box>
          
          
        </Grid>
        
        </Grid>
        
    <Stack spacing={2} direction="row" justifyContent="flex-end">
    <Link href={userTestimonial.testimonialButtonLink} target="_blank">
      <Button 
            
            variant="contained"
              style={{
                background: "var(--l-2, linear-gradient(135deg, #8482FF 0%, #7723FE 100%))",
                borderRadius: "45px",
                color: "#FFF",
                fontSize: "14px",
                lineHeight: "180%",
                fontStyle: "normal",
                letterSpacing: "-0.14px",
                fontWeight: "500",
                marginBottom:"25px",
                marginTop:"25px",
                textTransform: "none",
              }}
          >
            {userTestimonial.testimonialButtonText}
            <LaunchIcon sx={{ color: "#FFFFFF" ,  fontSize: "15px", marginLeft:"8px"}} />
          </Button>
          </Link>
    </Stack>
    </>
  );
};

export default Testimonials;
