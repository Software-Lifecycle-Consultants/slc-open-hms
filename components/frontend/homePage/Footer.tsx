// Importing required components and images
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Image from "next/image";
import { currentYear, footerContent } from "@/data/homePage";
import { montserrat } from "../../../app/fonts";
import Link from "next/link";

/* Footer component displays the website footer. */
const Footer = () => {
  // Use MediaQuery to detect if the screen width is 600px or less (mobile view)
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <>
      <Grid container spacing={2}>
        {/* Grid item for logo and description */}
        <Grid item xs={12} md={3}
        sx={{
          marginTop: { xs: "24px", md: "20px" },
        }}>
          <Box>
            <Link href ="/"><Image
            
              src={footerContent.footerSectionLogoImage}
              width={142}
              height={50}
              alt="logo"
            /></Link>
          </Box>
          <Box>
            <Typography
              variant="body2"
              sx={{
                color: '#FFFFFF',
                fontFamily: "Inter",
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
            marginTop: { xs: "24px", md: "20px" },
          }}
        >
          {/* Content for products links */}
          <Box>
            <Typography
              variant="body2"
              sx={{
                color: '#FFFFFF',
                fontFamily: "Inter",
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
              sx={{
                color: '#FFFFFF',
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "15px",
              }}
            >
             <Link href="/product/product-1" style={{ color: "white", textDecoration:"none"}}>{footerContent.destination1}</Link>
            </Typography>
            <Typography
              variant="body2"
              className={montserrat.className}
              sx={{
                color: '#FFFFFF',
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "5px",
              }}
            >
              <Link href="/product/product-2" style={{ color: "white", textDecoration:"none"}}>{footerContent.destination2}</Link>
            </Typography>
            <Typography
              variant="body2"
              className={montserrat.className}
              sx={{
                color: '#FFFFFF',
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "5px",
              }}
            >
              <Link href="/product/product-3" style={{ color: "white", textDecoration:"none"}}>{footerContent.destination3}</Link>
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
            marginTop: { xs: "24px", md: "20px" },
          }}
        >
          {/* Content for about links */}
          <Box>
            <Typography
              variant="body2"
              sx={{
                color: '#FFFFFF',
                fontFamily: "Inter",
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
              sx={{
                color: '#FFFFFF',
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "15px",
              }}
            >
             <Link href="/contact-us" style={{ color: "white", textDecoration:"none"}}> {footerContent.customText1}</Link>
            </Typography>
            <Typography
              variant="body2"
              className={montserrat.className}
              sx={{
                color: '#FFFFFF',
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "5px",
              }}
            >
              <Link href="/"style={{ color: "white", textDecoration:"none"}}>{footerContent.customText2}</Link>
            </Typography>
            <Typography
              variant="body2"
              className={montserrat.className}
              sx={{
                color: '#FFFFFF',
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "5px",
              }}
            >
              <Link href="/"style={{ color: "white", textDecoration:"none"}}>{footerContent.customText3}</Link>
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
            justifyContent: { xs: "left", md: "flex-end" }, // Centered on mobile, aligned to right on larger screens
            marginTop: { xs: "24px", md: "20px" },
          }}
        >
          {/* Content for social media links */}
          <Box sx={{ display: "flex", flexDirection: { xs: "row", md: "column" } }}>
            {!isMobile && (
              <Typography
                variant="body2"
                sx={{
                  color: '#FFFFFF',
                  fontFamily: "Inter",
                  fontSize: "16px",
                  lineHeight: "normal",
                  fontStyle: "normal",
                  fontWeight: "700",
                  letterSpacing: "-0.232px",
                }}
              >
                {footerContent.footerSectionText3}
              </Typography>
            )}
            <Box sx={{ display: "flex", paddingRight: { xs: "15px", md: "0" } }}>
              <a href={footerContent.socialMediaLink1} target="_blank" style={{ color: "white", textDecoration:"none"}}>
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
              </a>
              {!isMobile && (
                <Typography
                  variant="body2"
                  className={montserrat.className}
                  sx={{ 
                    color: '#FFFFFF',
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "14px",
                    lineHeight: "28px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    marginLeft: "18px",
                    marginTop: "15px",
                  }}
                  >
                    <a href={footerContent.socialMediaLink1} target="_blank" style={{ color: "white", textDecoration:"none"}}> {footerContent.socialMediaText1}</a>
                </Typography>
                )}
            </Box>
            <Box sx={{ display: "flex", paddingRight: { xs: "15px", md: "0" } }}>
              <a href={footerContent.socialMediaLink2} target="_blank" style={{ color: "white", textDecoration:"none"}}>
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
              </a>
              {!isMobile && (
                <Typography
                  variant="body2"
                  className={montserrat.className}
                  sx={{
                    color: '#FFFFFF',
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "14px",
                    lineHeight: "28px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    marginLeft: "12px",
                    marginTop: "5px",
                  }}
                >
                {/* creates the link to the socila media <twitter> */}
                  <a href={footerContent.socialMediaLink2} target="_blank" style={{ color: "white", textDecoration:"none"}}>{footerContent.socialMediaText2}</a>
                </Typography>
              )}
            </Box>
            <Box sx={{ display: "flex", paddingRight: { xs: "15px", md: "0" } }}>
              <a href={footerContent.socialMediaLink3} target="_blank" style={{ color: "white", textDecoration:"none"}}>
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
              </a>
              {!isMobile && (
                <Typography
                  variant="body2"
                  className={montserrat.className}
                  sx={{
                    color: '#FFFFFF',
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "14px",
                    lineHeight: "28px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    marginLeft: "12px",
                    marginTop: "5px",
                  }}
                >
                  <a href={footerContent.socialMediaLink3} target="_blank" style={{ color: "white", textDecoration:"none"}}>{footerContent.socialMediaText3}</a>
                </Typography>
              )}
            </Box>
          </Box>
        </Grid>
        {/* Grid item for copyright and policy links */}
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "left" : "flex-start",
            }}
          >
            {isMobile && (
              <Typography
                variant="body2"
                sx={{
                  color: '#FFFFFF',
                  fontFamily: "Inter",
                  fontSize: "15px",
                  lineHeight: "normal",
                  fontStyle: "normal",
                  fontWeight: "400",
                  letterSpacing: "-0.205px",
                  marginBottom: "10px",
                }}
              >
                <Link href={footerContent.PrivacyPolicyLink} style={{ color: "white", textDecoration: "none" }}>{footerContent.PrivacyPolicyText}</Link>
              </Typography>
            )}
            <Box
              sx={{
                display: "flex",
                width: isMobile ? "100%" : "50%",
                justifyContent: isMobile ? "left" : "flex-start",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: '#FFFFFF',
                  fontFamily: "Inter",
                  fontSize: "15px",
                  lineHeight: "normal",
                  fontStyle: "normal",
                  fontWeight: "400",
                  letterSpacing: "-0.205px",
                  marginTop: isMobile ? "10px" : "90px",
                  marginRight: isMobile ? "10px" : "0",
                }}
              >
                Copyright © {footerContent.CompanyNameText} {currentYear}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#FFFFFF',
                  fontFamily: "Inter",
                  fontSize: "15px",
                  lineHeight: "normal",
                  fontStyle: "normal",
                  fontWeight: "400",
                  letterSpacing: "-0.205px",
                  marginTop: isMobile ? "10px" : "90px",
                  marginLeft: isMobile ? "40px" : "auto",
                }}
              >
                <Link href={footerContent.TermsConditionLink} style={{ color: "white", textDecoration: "none" }}>{footerContent.TermsConditionText}</Link>
              </Typography>
            </Box>
            {!isMobile && (
              <Typography
                variant="body2"
                sx={{
                  color: '#FFFFFF',
                  fontFamily: "Inter",
                  fontSize: "15px",
                  lineHeight: "normal",
                  fontStyle: "normal",
                  fontWeight: "400",
                  letterSpacing: "-0.205px",
                  marginTop: "90px",
                  marginLeft: "4%",
                }}
              >
                <Link href={footerContent.PrivacyPolicyLink} style={{ color: "white", textDecoration: "none" }}>{footerContent.PrivacyPolicyText}</Link>
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
