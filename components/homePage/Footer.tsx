// Importing required components and images
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { footerContent } from "@/data/homePage";
import { montserrat } from "../../app/fonts";

/* Footer component displays the website footer. */
const Footer = () => {
  return (
    <>
      <Grid container spacing={2}>
        {/* Grid item for logo and description */}
        <Grid item xs={12} md={3}>
          <Box>
            <Image
              src={footerContent.footerSectionLogoImage}
              width={142}
              height={50}
              alt="logo"
            />
          </Box>
          <Box>
            <Typography
              variant="body2"
              style={{
                color: "#0C111F",
                // fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "30px",
                fontStyle: "normal",
                fontWeight: "400",
                letterSpacing: "-0.64px",
                marginTop: "5px",
              }}
            >
              {footerContent.footerSectionDescription}
            </Typography>
          </Box>
        </Grid>
        {/* Grid item for destination links */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            justifyContent: { xs: "none", md: "flex-end" },
            marginTop: { xs: "24px", md: "0" },
          }}
        >
          {/* Content for destination links */}
          <Box>
            <Typography
              variant="body2"
              style={{
                color: "#0C111F",
                // fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "normal",
                fontStyle: "normal",
                fontWeight: "700",
                letterSpacing: "-0.232px",
              }}
            >
              {footerContent.footerSectionText1}
            </Typography>
            <Typography
              variant="body2"
              className={montserrat.className}
              style={{
                color: "#0C111F",
                fontSize: "14px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "15px",
              }}
            >
              {footerContent.destination1}
            </Typography>
            <Typography
              variant="body2"
              className={montserrat.className}
              style={{
                color: "#0C111F",
                fontSize: "14px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "5px",
              }}
            >
              {footerContent.destination2}
            </Typography>
            <Typography
              variant="body2"
              className={montserrat.className}
              style={{
                color: "#0C111F",
                fontSize: "14px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "5px",
              }}
            >
              {footerContent.destination3}
            </Typography>
          </Box>
        </Grid>
        {/* Grid item for about links */}
        <Grid
          item
          xs={12}
          md={2}
          sx={{
            display: "flex",
            justifyContent: { xs: "none", md: "flex-end" },
            marginTop: { xs: "24px", md: "0" },
          }}
        >
          {/* Content for about links */}
          <Box>
            <Typography
              variant="body2"
              style={{
                color: "#0C111F",
                // fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "normal",
                fontStyle: "normal",
                fontWeight: "700",
                letterSpacing: "-0.232px",
              }}
            >
              {footerContent.footerSectionText2}
            </Typography>
            <Typography
              variant="body2"
              className={montserrat.className}
              style={{
                color: "#0C111F",
                fontSize: "14px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "15px",
              }}
            >
              {footerContent.customText1}
            </Typography>
            <Typography
              variant="body2"
              className={montserrat.className}
              style={{
                color: "#0C111F",
                fontSize: "14px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "5px",
              }}
            >
              {footerContent.customText2}
            </Typography>
            <Typography
              variant="body2"
              className={montserrat.className}
              style={{
                color: "#0C111F",
                fontSize: "14px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "5px",
              }}
            >
              {footerContent.customText3}
            </Typography>
          </Box>
        </Grid>
        {/* Grid item for social media links */}
        <Grid
          item
          xs={12}
          md={2}
          sx={{
            display: "flex",
            justifyContent: { xs: "none", md: "flex-end" },
            marginTop: { xs: "24px", md: "0" },
          }}
        >
          {/* Content for social media links */}
          <Box>
            <Typography
              variant="body2"
              style={{
                color: "#0C111F",
                // fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "normal",
                fontStyle: "normal",
                fontWeight: "700",
                letterSpacing: "-0.232px",
              }}
            >
              {footerContent.footerSectionText3}
            </Typography>
            <Box sx={{ display: "flex", paddingLeft: "5px" }}>
              <Image
                src={footerContent.socialMediaIcon1}
                width={9.92}
                height={19.84}
                alt="fb"
                style={{
                  flexShrink: 0,
                  marginTop: "17px",
                }}
              />
              <Typography
                variant="body2"
                className={montserrat.className}
                style={{
                  color: "#0C111F",
                  fontSize: "14px",
                  lineHeight: "28px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginLeft: "18px",
                  marginTop: "15px",
                }}
              >
                {footerContent.socialMediaText1}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Image
                src={footerContent.socialMediaIcon2}
                width={19}
                height={19}
                alt="fb"
                style={{
                  flexShrink: 0,
                  marginTop: "8px",
                }}
              />
              <Typography
                variant="body2"
                className={montserrat.className}
                style={{
                  color: "#0C111F",
                  fontSize: "14px",
                  lineHeight: "28px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginLeft: "12px",
                  marginTop: "5px",
                }}
              >
                {footerContent.socialMediaText2}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Image
                src={footerContent.socialMediaIcon3}
                width={19}
                height={19}
                alt="fb"
                style={{
                  flexShrink: 0,
                  marginTop: "8px",
                }}
              />
              <Typography
                variant="body2"
                className={montserrat.className}
                style={{
                  color: "#0C111F",
                  fontSize: "14px",
                  lineHeight: "28px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginLeft: "12px",
                  marginTop: "5px",
                }}
              >
                {footerContent.socialMediaText3}
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* Grid item for copyright and policy links */}
        <Grid item xs={12} md={12}>
          <Box
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <Box
              style={{
                width: "50%",
              }}
            >
              <Typography
                variant="body2"
                style={{
                  color: "#0C111F",
                  // fontFamily: "Inter",
                  fontSize: "15px",
                  lineHeight: "normal",
                  fontStyle: "normal",
                  fontWeight: "400",
                  letterSpacing: "-0.205px",
                  marginTop: "70px",
                }}
              >
                Copyright © Travala 2021
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                width: "100%",
                alignItems: "flex-end",
              }}
            >
              <Typography
                variant="body2"
                style={{
                  color: "#0C111F",
                  // fontFamily: "Inter",
                  fontSize: "15px",
                  lineHeight: "normal",
                  fontStyle: "normal",
                  fontWeight: "400",
                  letterSpacing: "-0.205px",
                  marginTop: "70px",
                  marginLeft: "auto",
                }}
              >
                Terms & Conditions
              </Typography>
              <Typography
                variant="body2"
                style={{
                  color: "#0C111F",
                  // fontFamily: "Inter",
                  fontSize: "15px",
                  lineHeight: "normal",
                  fontStyle: "normal",
                  fontWeight: "400",
                  letterSpacing: "-0.205px",
                  marginTop: "70px",
                  marginLeft: "4%",
                }}
              >
                Privacy Policy
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
