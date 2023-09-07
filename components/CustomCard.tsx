import React from "react";
import {
  Grid,
  Typography,
  Box,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import turkey from "../public/images/Turkey.png";
import wallet from "../public/images/Wallet.png";
import user from "../public/images/3 User.png";
import heart from "../public/images/Heart.png";

const CustomCard = ({}) => {

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={8}
    >
      <Grid item xs={12} md={6}>
        <Typography
          variant="h1"
          style={{
            color: "#0C111F",
            fontFamily: "Inter",
            fontSize: "48px",
            lineHeight: "130%",
            fontStyle: "normal",
            letterSpacing: "-0.48px",
            fontWeight: "700",
          }}
        >
          Get Experience Which are fun
        </Typography>
        <Typography
          variant="body1"
          style={{
            color: "#0C111F",
            fontFamily: "Inter",
            fontSize: "20px",
            lineHeight: "36px",
            letterSpacing: "-0.96px",
            fontStyle: "normal",
            marginTop: "4%",
          }}
        >
          With travala you can get the best experience on holiday travel, and we
          always update the latest and best destinations in the world
        </Typography>
        <Image
          src={turkey}
          alt="test"
          width={518}
          height={301}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "30px",
            flexShrink: 0,
            marginTop: "5%",
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid
              container
              spacing={0}
              sx={{
                backgroundColor: "#cccaca",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row", // Use row direction
              }}
            >
              <Grid item xs={2} md={2}>
                <Box
                  sx={{
                    backgroundColor: "#F4F0FF",
                    width: "90px",
                    height: "90px",
                    borderRadius: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  mr={{ xs: "16px", md: "32px" }}
                >
                  <Image
                    src={wallet}
                    width={38}
                    height={38}
                    alt="wallet"
                    style={{
                      flexShrink: 0,
                    }}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={10}
                md={10}
                sx={{
                  // backgroundColor: "#cbcae6",
                  width: "100%",
                  padding: "24px",
                  display: "flex",
                  paddingTop: "10%",
                  flexDirection: "column", // Use column direction
                }}
              >
                <Typography
                  variant="h5"
                  style={{
                    color: "#0C111F",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "24px",
                    fontStyle: "normal",
                    lineHeight: "28px",
                    textTransform: "capitalize",
                    fontWeight: "700",
                  }}
                >
                  Affordable prices
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    color: "#0C111F",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontStyle: "normal",
                    lineHeight: "36px",
                    fontWeight: "400",
                    marginTop: "16px", // Add margin top
                  }}
                >
                  We provide some very affordable prices compared to others.
                </Typography>
                <Divider
                  style={{ marginTop: "24px", borderColor: "#F7F7F7" }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid
              container
              spacing={0}
              sx={{
                // backgroundColor: "#cccaca",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row", // Use row direction
              }}
            >
              <Grid item xs={2} md={2}>
                <Box
                  sx={{
                    backgroundColor: "#FEFAEE",
                    width: "90px",
                    height: "90px",
                    borderRadius: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  mr={{ xs: "16px", md: "32px" }}
                >
                  <Image
                    src={user}
                    width={38}
                    height={38}
                    alt="wallet"
                    style={{
                      flexShrink: 0,
                    }}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={10}
                md={10}
                sx={{
                  // backgroundColor: "#cbcae6",
                  width: "100%",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column", // Use column direction
                  paddingTop: "5%",
                }}
              >
                <Typography
                  variant="h5"
                  style={{
                    color: "#0C111F",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "24px",
                    fontStyle: "normal",
                    lineHeight: "28px",
                    textTransform: "capitalize",
                    fontWeight: "700",
                  }}
                >
                  Unforgettable experience
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    color: "#0C111F",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontStyle: "normal",
                    lineHeight: "36px",
                    fontWeight: "400",
                    marginTop: "16px", // Add margin top
                  }}
                >
                  We provide a vacation experience that will be unforgettable.
                </Typography>
                <Divider
                  style={{ marginTop: "24px", borderColor: "#F7F7F7" }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid
              container
              spacing={0}
              sx={{
                // backgroundColor: "#cccaca",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row", // Use row direction
              }}
            >
              <Grid item xs={2} md={2}>
                <Box
                  sx={{
                    backgroundColor: "#F4F0FF",
                    width: "90px",
                    height: "90px",
                    borderRadius: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  mr={{ xs: "16px", md: "32px" }}
                >
                  <Image
                    src={heart}
                    width={38}
                    height={38}
                    alt="wallet"
                    style={{
                      flexShrink: 0,
                    }}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={10}
                md={10}
                sx={{
                  // backgroundColor: "#cbcae6",
                  width: "100%",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column", // Use column direction
                  paddingTop: "5%",
                }}
              >
                <Typography
                  variant="h5"
                  style={{
                    color: "#0C111F",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "24px",
                    fontStyle: "normal",
                    lineHeight: "28px",
                    textTransform: "capitalize",
                    fontWeight: "700",
                  }}
                >
                  Very Friendly Service
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    color: "#0C111F",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontStyle: "normal",
                    lineHeight: "36px",
                    fontWeight: "400",
                    marginTop: "16px", // Add margin top
                  }}
                >
                  We will provide excellent and friendly service for the sake of
                  our customers.
                </Typography>
                <Divider
                  style={{ marginTop: "24px", borderColor: "#F7F7F7" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomCard;


{/* <Grid item xs={12} md={6} paddingRight={{ xs: "16px", md: "32px" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <Grid
              container
              spacing={0}
              sx={{
                // backgroundColor: "#cccaca",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row", // Use row direction
              }}
            ></Grid> */}