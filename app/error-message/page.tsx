"use client";
import { pageDetails } from "@/data/errormessage";
import { Button, Typography, Grid, Container } from "@mui/material";
import Box from "@mui/material/Box";
import ArrowBack from "@mui/icons-material/ArrowBack";
import mainImage from "../../public/images/homePage/ErrorMessage/ErrorImage.webp";
import Image from "next/image";
import { inter } from "../../app/fonts";

/**
 * This page represents the 404 Error Message Page.
 */

export default function ErrorMassage() {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
          }}
        >
          <Grid
            container
            // direction="row"
            // justifyContent="center"
            alignItems="center"
            spacing={2}
          >
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
                  fontSize: "16px",
                  marginRight: "385px",
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
                  fontSize: "60px",
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
                  fontSize: "20px",
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
                  fontSize: "20px",
                  color: "#11142D",
                }}
              >
                {pageDetails.content2}
              </Typography>
              {/* Render to Go Back and Take Me Home Section */}
              <Container
                sx={{
                  display: { xs: "block", sm: "flex", md: "flex", lg: "flex" },
                  alignContent: "flex-end",
                  marginBottom: "24px",
                }}
              >
                <a href="/">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{
                      borderRadius: "15px",
                      //padding: "12px 18px",
                      color: "#000000",
                    }}
                    sx={{
                      backgroundColor: "#FFFFFF	",
                      "&:hover": {
                        backgroundColor: "#FFFFFF	",
                      },
                      textAlign: "center",
                      fontWeight: "Median",
                      fontSize: "16px",
                      marginTop: "24px",
                    }}
                  >
                    <ArrowBack style={{ color: "#000000" }} />
                    {pageDetails.backArroSection1}
                  </Button>
                </a>
                <a href="/">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{
                      borderRadius: "15px",
                      //padding: "12px 18px",
                    }}
                    sx={{
                      backgroundColor: "#C7923E",
                      "&:hover": {
                        backgroundColor: "#c7833e",
                      },
                      textAlign: "center",
                      fontWeight: "Medium",
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "16px",
                        lg: "16px",
                      },
                      marginTop: "24px",
                      marginLeft: "12px",
                    }}
                  >
                    {pageDetails.backArroSection2}
                  </Button>
                </a>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
