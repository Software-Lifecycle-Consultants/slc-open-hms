"use client";
import { pageDetails } from "@/data/errormessage";
import { Button, Typography, Grid, Container } from "@mui/material";
import Box from "@mui/material/Box";
import ArrowBack from "@mui/icons-material/ArrowBack";
import mainImage from "@/public/images/homePage/ErrorMessage/ErrorImage.webp";
import Image from "next/image";
import { inter } from "./fonts";
import Link from "next/link";

/**
 * This page represents the 404 Error Message Page.
 */

export default function NotFound() {
  return (
    <Box sx={{ padding: { xs: 2, sm: 2, md: 2 } }}>
      <Grid container alignItems="center">
        {/* Left side of the banner image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
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
              textAlign: { xs: "center", md: "center" },
              padding: { xs: 2, sm: 3, md: 3 },
            }}
          >
            {/* Title */}
            <Typography
              variant="h6"
              className={inter.className}
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                color: "#11142D",
              }}
            >
              {pageDetails.title}
            </Typography>
            {/* Subtitle */}
            <Typography
              variant="h4"
              className={inter.className}
              sx={{
                marginTop: { xs: 1, sm: 1, md: 1 },
                fontSize: { xs: "30px", sm: "40px", md: "50px" },
                color: "#11142D",
              }}
            >
              {pageDetails.subtitle}
            </Typography>
            {/* Content 1 */}
            <Typography
              variant="h6"
              className={inter.className}
              sx={{
                marginTop: 2,
                fontSize: { xs: "16px", md: "20px" },
                color: "#11142D",
                marginBottom: { xs: 2, sm: 2, md: 2 },
              }}
            >
              {pageDetails.content1}
            </Typography>
            {/* Content 2 */}
            <Typography
              variant="h6"
              className={inter.className}
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                color: "#11142D",
                marginBottom: { xs: 2, sm: 2, md: 2 },
              }}
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
              justifyContent: { xs: "center", sm: "center", md: "center" },
              marginTop: 2,
              gap: 2,
              paddingBottom: { xs: 2, sm: 2, md: 2 },
            }}
          >
            <Button
              variant="contained"
              sx={{
                borderRadius: "15px",
                backgroundColor: "#FFFFFF",
                color: "#000000",
                "&:hover": { backgroundColor: "#FFFFFF" },
                fontSize: { xs: "12px", md: "16px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => window.history.back()}
            >
              <ArrowBack sx={{ color: "#000000", marginRight: 1 }} />
              {pageDetails.backArroSection1}
            </Button>
            <Link href="/" passHref>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "15px",
                  backgroundColor: "#C7923E",
                  color: "#FFFFFF",
                  "&:hover": { backgroundColor: "#C7833E" },
                  fontSize: { xs: "12px", md: "16px" },
                }}
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
