"use client";
import { pageDetails } from "@/data/errormessage";
import { Button, Typography, Grid, Container } from "@mui/material";
import Box from "@mui/material/Box";
import ArrowBack from "@mui/icons-material/ArrowBack";
import mainImage from "@/public/images/homePage/ErrorMessage/ErrorImage.webp";
import Image from "next/image";
import { inter } from "./fonts";
import Link from "next/link";
import { themeClient } from "@/styles/Theme";

/**
 * This page represents the 404 Error Message Page.
 */

export default function NotFound() {
  return (
    <Box sx={{minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <Grid container alignItems="center">
        {/* Left side of the banner image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={mainImage}
              alt="Error Image"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        {/* Right side of the banner */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: { xs: "center", md: "left" },
              padding: { xs: 2, sm: 3, md: 3 },
            }}
          >
            {/* Title */}
            <Typography
              variant='h4'
            >
              {pageDetails.title}
            </Typography>
            {/* Subtitle */}
            <Typography
              variant='h2'
            >
              {pageDetails.subtitle}
            </Typography>
            {/* Content 1 */}
            <Typography
              variant='body2'
              sx={{
                marginTop: 2,
              }}
            >
              {pageDetails.content1}
            </Typography>
            {/* Content 2 */}
            <Typography
              variant='body2'             
            >
              {pageDetails.content2}
            </Typography>
          </Box>
          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: { xs: "center", sm: "center", md: "flex-start" },
              marginTop: 2,
              gap: 2,
              paddingBottom: { xs: 2, sm: 2, md: 2 },
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: themeClient.palette.secondary.main,
                color: themeClient.palette.text.primary,
                "&:hover": { backgroundColor: themeClient.palette.secondary.main },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => window.history.back()}
            >
              <ArrowBack sx={{ color: themeClient.palette.text.primary, marginRight: 1 }} />
              {pageDetails.backArroSection1}
            </Button>
            <Link href="/" passHref>
              <Button
                variant="contained"
              >
                {pageDetails.backArroSection2}
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
