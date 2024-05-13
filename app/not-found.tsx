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
    <>
      <Container>
        <Box
          sx={{
            display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
          }}
        >
          <Grid container alignItems="center" spacing={2}>
            {/* Left side of the banner image */}
            <Grid item xs={12} md={6}>
              <Image
                src={mainImage}
                alt="test"
                style={{
                  width: "100%",
                  height: "auto",
                  flexShrink: 0,
                }}
              />
            </Grid>
            {/* Right side of the banner  */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Text 1 */}
              <Typography
                variant="h6"
                className={inter.className}
                sx={{
                  textAlign: "Left",
                  fontWeight: "semi bold",
                  fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "16px" },

                  color: "#11142D",
                  alignItems: {
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                  },
                }}
              >
                {pageDetails.title}
              </Typography>
              {/* Text 2 */}
              <Typography
                variant="h4"
                className={inter.className}
                sx={{
                  textAlign: "Left",
                  marginTop: "12px",
                  fontWeight: "semi bold",
                  fontSize: { xs: "40px", sm: "55px", md: "60px", lg: "60px" },
                  marginRight: "28px",
                  color: "#11142D",
                }}
              >
                {pageDetails.subtitle}
              </Typography>
              {/* Text 3 */}
              <Typography
                variant="h6"
                className={inter.className}
                sx={{
                  textAlign: "Left",
                  marginTop: "24px",
                  fontWeight: "Regular",
                  fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "20px" },
                  color: "#11142D",
                }}
              >
                {pageDetails.content1}
              </Typography>
              {/* Text 4 */}
              <Typography
                variant="h6"
                className={inter.className}
                sx={{
                  textAlign: "Left",
                  fontWeight: "Regular",
                  fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "16px" },
                  color: "#11142D",
                }}
              >
                {pageDetails.content2}
              </Typography>
              {/* Render to Go Back and Take Me Home Section */}
              <Container
                sx={{
                  display: "flex",
                  alignItems: "space-between",
                  marginBottom: "24px",
                  gap: "auto",
                }}
              >
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{
                      borderRadius: "15px",

                      color: "#000000",
                    }}
                    sx={{
                      backgroundColor: "#FFFFFF	",
                      "&:hover": {
                        backgroundColor: "#FFFFFF	",
                      },
                      textAlign: "center",
                      fontWeight: "Median",
                      fontSize: {
                        xs: "12px",
                        sm: "12px",
                        md: "16px",
                        lg: "16px",
                      },
                      marginTop: "24px",
                    }}
                    onClick={() => window.history.back()}
                  >
                    <ArrowBack
                      style={{
                        color: "#000000",
                        height: "10px",
                        width: "20px",
                      }}
                    />
                    {pageDetails.backArroSection1}
                  </Button>
                <Link href="/">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{
                      borderRadius: "15px",
                    }}
                    sx={{
                      backgroundColor: "#C7923E",
                      "&:hover": {
                        backgroundColor: "#c7833e",
                      },
                      textAlign: "center",
                      fontWeight: "Medium",
                      fontSize: {
                        xs: "12px",
                        sm: "12px",
                        md: "16px",
                        lg: "16px",
                      },
                      marginTop: "24px",
                      marginLeft: "12px",
                    }}
                  >
                    {pageDetails.backArroSection2}
                  </Button>
                </Link>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
