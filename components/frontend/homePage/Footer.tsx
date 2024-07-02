// Importing required components and icons
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Image from "next/image";
import { currentYear, footerContent } from "@/data/homePage";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

/* Footer component displays the website footer. */
const Footer = () => {
  // Use MediaQuery to detect if the screen width is 600px or less (mobile view)
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Grid container spacing={2}>
        {/* Grid item for logo and description */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            marginTop: { xs: "24px", md: "20px" },
          }}
        >
          <Box>
            <Link href="/">
              <Image
                src={footerContent.footerSectionLogoImage}
                width={142}
                height={50}
                alt="logo"
              />
            </Link>
          </Box>
          <Box>
            <Typography variant="h4">
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
              variant="h4"
              fontWeight='700'
              sx={{
                "@media (max-width:600px)": {
                  fontWeight: "bold",
                },
              }}
            >
              {footerContent.footerSectionText1}
            </Typography>
            <Typography
              variant="h5"
              fontFamily="Mulish"
              color="#FFFFFF"
              fontWeight='200'
            >
              <Link
                href="/product/product-1"
                style={{ color: "white", textDecoration: "none" }}
              >
                {footerContent.destination1}
              </Link>
            </Typography>
            <Typography
              variant="h5"
              fontFamily="Mulish"
              color="#FFFFFF"
              fontWeight='200'
            >
              <Link
                href="/product/product-2"
                style={{ color: "white", textDecoration: "none" }}
              >
                {footerContent.destination2}
              </Link>
            </Typography>
            <Typography
              variant="h5"
              fontFamily="Mulish"
              color="#FFFFFF"
              fontWeight='200'
            >
              <Link
                href="/product/product-3"
                style={{ color: "white", textDecoration: "none" }}
              >
                {footerContent.destination3}
              </Link>
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
              variant="h4"
              fontWeight='700'
              sx={{
                "@media (max-width:600px)": {
                  fontWeight: "bold",
                },
              }}
            >
              {footerContent.footerSectionText2}
            </Typography>
            <Typography
              variant="h5"
              fontFamily="Mulish"
              color="#FFFFFF"
              fontWeight='200'
            >
              <Link
                href="/contact-us"
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                {footerContent.customText1}
              </Link>
            </Typography>
            <Typography
              variant="h5"
              fontFamily="Mulish"
              color="#FFFFFF"
              fontWeight='200'
            >
              <Link href="/" style={{ color: "white", textDecoration: "none" }}>
                {footerContent.customText2}
              </Link>
            </Typography>
            <Typography
              variant="h5"
              fontFamily="Mulish"
              color="#FFFFFF"
              fontWeight='200'
            >
              <Link href="/" style={{ color: "white", textDecoration: "none" }}>
                {footerContent.customText3}
              </Link>
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
          <Box
            sx={{ display: "flex", flexDirection: { xs: "row", md: "column" } }}
          >
            {!isMobile && (
              <Typography variant="h4" fontWeight='700'>
                {footerContent.footerSectionText3}
              </Typography>
            )}
            <Box
              sx={{ display: "flex", paddingRight: { xs: "15px", md: "0" } }}
            >
              {isMobile && (
                <Link
                  href={footerContent.socialMediaLink1}
                  target="_blank"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <FacebookIcon
                    sx={{
                      flexShrink: 0,
                      marginTop: "5px",
                    }}
                  />
                </Link>
              )}
              {!isMobile && (
                <Link
                  href={footerContent.socialMediaLink1}
                  target="_blank"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <FacebookIcon
                    sx={{
                      flexShrink: 0,
                      marginTop: "6px",
                    }}
                  />
                </Link>
              )}
              {!isMobile && (
                <Typography variant="h5" fontFamily="Mulish" fontWeight='200'>
                  {/* creates the link to the socila media <facebook> */}
                  <Link
                    href={footerContent.socialMediaLink1}
                    target="_blank"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {" "}
                    {footerContent.socialMediaText1}
                  </Link>
                </Typography>
              )}
            </Box>
            <Box
              sx={{ display: "flex", paddingRight: { xs: "15px", md: "0" } }}
            >
              <a
                href={footerContent.socialMediaLink2}
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                <XIcon
                  sx={{
                    flexShrink: 0,
                    marginTop: "5px",
                  }}
                />
              </a>
              {!isMobile && (
                <Typography variant="h5" fontFamily="Mulish" fontWeight='200'>
                  {/* creates the link to the socila media <twitter> */}
                  <Link
                    href={footerContent.socialMediaLink2}
                    target="_blank"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {footerContent.socialMediaText2}
                  </Link>
                </Typography>
              )}
            </Box>
            <Box
              sx={{ display: "flex", paddingRight: { xs: "15px", md: "0" } }}
            >
              <Link
                href={footerContent.socialMediaLink3}
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                <InstagramIcon
                  sx={{
                    flexShrink: 0,
                    marginTop: "5px",
                  }}
                />
              </Link>
              {!isMobile && (
                <Typography variant="h5" fontFamily="Mulish" fontWeight='200'>
                  {/* creates the link to the socila media <instagram> */}
                  <Link
                    href={footerContent.socialMediaLink3}
                    target="_blank"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {footerContent.socialMediaText3}
                  </Link>
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
              justifyContent: "space-between", // Space elements apart for web view
            }}
          >
            {/*Privacy Policy Mobile view*/}
            {isMobile && (
              <Typography variant="h4" marginBottom={2}>
                <Link
                  href={footerContent.PrivacyPolicyLink}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {footerContent.PrivacyPolicyText}
                </Link>
              </Typography>
            )}
            {/*Copyright & Terms and Conditions Mobile view*/}
            {isMobile && (
              <Grid
                container
                item
                xs={12}
                direction="row"
                justifyContent="space-between" // Space elements apart for web view
                alignItems="center"
              >
                <Typography variant="h4" marginBottom={2} marginTop={2}>
                  Copyright © {footerContent.CompanyNameText} {currentYear}
                </Typography>
                <Typography
                  //Terms & conditions mobile view//
                  variant="h4"
                  marginBottom={2}
                  marginTop={2}
                >
                  <Link
                    href={footerContent.TermsConditionLink}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {footerContent.TermsConditionText}
                  </Link>
                </Typography>
              </Grid>
            )}
            {/* Web view */}
            {!isMobile && (
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
                    <Typography variant="h4" marginTop="90px">
                      Copyright © {footerContent.CompanyNameText} {currentYear}
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      width: "50%",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography
                      variant="h4"
                      marginTop="90px"
                      marginLeft="auto"
                    >
                      <Link
                        href={footerContent.TermsConditionLink}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        {footerContent.TermsConditionText}
                      </Link>
                    </Typography>
                    <Typography
                      variant="h4"
                      marginTop="90px"
                      marginLeft="30px"
                    >
                      <Link
                        href={footerContent.PrivacyPolicyLink}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        {footerContent.PrivacyPolicyText}
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
