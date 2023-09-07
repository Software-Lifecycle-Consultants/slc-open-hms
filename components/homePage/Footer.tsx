import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import logoDark from "../../public/images/logoDark.png";
import fb from "../../public/images/facebook.png";
import tw from "../../public/images/twitter.png";
import ig from "../../public/images/instagram.png";

const Footer = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box>
            <Image src={logoDark} width={142} height={50} alt="logo" />
          </Box>
          <Box>
            <Typography
              variant="body2"
              style={{
                color: "#0C111F",
                fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "30px",
                fontStyle: "normal",
                fontWeight: "400",
                letterSpacing: "-0.64px",
                marginTop: "5px",
              }}
            >
              With travala you can experience new travel and the best tourist
              destinations that we have to offer
            </Typography>
          </Box>
        </Grid>
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
          <Box>
            <Typography
              variant="body2"
              style={{
                color: "#0C111F",
                fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "normal",
                fontStyle: "normal",
                fontWeight: "700",
                letterSpacing: "-0.232px",
              }}
            >
              Destination
            </Typography>
            <Typography
              variant="body2"
              style={{
                color: "#0C111F",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "15px",
              }}
            >
              Cappadocia
            </Typography>
            <Typography
              variant="body2"
              style={{
                color: "#0C111F",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "5px",
              }}
            >
              Sossusvlei
            </Typography>
            <Typography
              variant="body2"
              style={{
                color: "#0C111F",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "5px",
              }}
            >
              Albuquera
            </Typography>
          </Box>
        </Grid>
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
          <Box>
            <Typography
              variant="body2"
              style={{
                color: "#0C111F",
                fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "normal",
                fontStyle: "normal",
                fontWeight: "700",
                letterSpacing: "-0.232px",
                //   marginTop: "5px",
              }}
            >
              About
            </Typography>
            <Typography
              variant="body2"
              style={{
                color: "#0C111F",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "15px",
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              style={{
                color: "#0C111F",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "5px",
              }}
            >
              Testimoni
            </Typography>
            <Typography
              variant="body2"
              style={{
                color: "#0C111F",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "5px",
              }}
            >
              Rating
            </Typography>
          </Box>
        </Grid>
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
          <Box>
            <Typography
              variant="body2"
              style={{
                color: "#0C111F",
                fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "normal",
                fontStyle: "normal",
                fontWeight: "700",
                letterSpacing: "-0.232px",
              }}
            >
              Follow Us
            </Typography>
            <Box
              sx={{ display: "flex", paddingLeft: "5px" }}
            >
              <Image
                src={fb}
                width={9.923}
                height={19.845}
                alt="fb"
                style={{
                  flexShrink: 0,
                  marginTop: "15px",
                }}
              />
              <Typography
                variant="body2"
                style={{
                  color: "#0C111F",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                  lineHeight: "28px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginLeft: "18px",
                  marginTop: "15px",
                }}
              >
                Facebook
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex" }}
              // mr={{ xs: "16px", md: "32px" }}
            >
              <Image
                src={tw}
                width={9.923}
                height={19.845}
                alt="fb"
                style={{
                  flexShrink: 0,
                  marginTop: "8px",
                }}
              />
              <Typography
                variant="body2"
                style={{
                  color: "#0C111F",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                  lineHeight: "28px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginLeft: "12px",
                  marginTop: "5px",
                }}
              >
                Twitter
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex" }}
              // mr={{ xs: "16px", md: "32px" }}
            >
              <Image
                src={ig}
                width={9.923}
                height={19.845}
                alt="fb"
                style={{
                  flexShrink: 0,
                  marginTop: "8px",
                }}
              />
              <Typography
                variant="body2"
                style={{
                  color: "#0C111F",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                  lineHeight: "28px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginLeft: "12px",
                  marginTop: "5px",
                }}
              >
                Instagram
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box
            style={{
              display: "flex",
              //   backgroundColor: "red",
              width: "100%",
            }}
          >
            <Box
              style={{
                // backgroundColor: "gray",
                width: "50%",
              }}
            >
              <Typography
                variant="body2"
                style={{
                  color: "#0C111F",
                  fontFamily: "Inter",
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
                // backgroundColor: "gray",
                width: "100%",
                alignItems: "flex-end",
              }}
            >
              <Typography
                variant="body2"
                style={{
                  color: "#0C111F",
                  fontFamily: "Inter",
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
                  fontFamily: "Inter",
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
