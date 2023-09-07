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

const typographyh1Style = {
  color: "#0C111F",
  fontFamily: "Inter",
  fontSize: "48px",
  lineHeight: "130%",
  fontStyle: "normal",
  letterSpacing: "-0.48px",
  fontWeight: "700",
};

const typographyBody1Style = {
  color: "#0C111F",
  fontFamily: "Inter",
  fontSize: "20px",
  lineHeight: "36px",
  letterSpacing: "-0.96px",
  fontStyle: "normal",
  marginTop: "4%",
};

const typographyh5Style = {
  color: "#0C111F",
  fontFamily: "Montserrat, sans-serif",
  fontSize: "24px",
  fontStyle: "normal",
  lineHeight: "28px",
  textTransform: "capitalize",
  fontWeight: "700",
  marginLeft: { xs: "26px", sm: "4px", md: "25px" },
};

const typographyBody2Style = {
  color: "#0C111F",
  fontFamily: "Inter",
  fontSize: "20px",
  fontStyle: "normal",
  lineHeight: "36px",
  fontWeight: "400",
  marginTop: "16px", // Add margin top
  marginLeft: { xs: "26px", sm: "4px", md: "25px" },
};

const CustomCard = ({}) => {

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      columnSpacing={{ xs: 1, md: 15 }}
    >
      <Grid item xs={12} md={6}>
        <Typography variant="h1" sx={typographyh1Style}>
          Get Experience Which are fun
        </Typography>
        <Typography variant="body1" sx={typographyBody1Style}>
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
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12}>
            <Grid
              container
              spacing={0}
              sx={{
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
                    width: { xs: "80px", sm: "90px", md: "90px" }, // Adjust size for mobile and desktop
                    height: { xs: "80px", sm: "90px", md: "90px" },
                    borderRadius: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
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
                  width: "100%",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column", // Use column direction
                }}
              >
                <Typography variant="h5" sx={typographyh5Style}>
                  Affordable prices
                </Typography>
                <Typography variant="body2" sx={typographyBody2Style}>
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
                    width: { xs: "80px", sm: "90px", md: "90px" }, // Adjust size for mobile and desktop
                    height: { xs: "80px", sm: "90px", md: "90px" },
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
                  width: "100%",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column", // Use column direction
                  paddingTop: "5%",
                }}
              >
                <Typography variant="h5" sx={typographyh5Style}>
                  Unforgettable experience
                </Typography>
                <Typography variant="body2" sx={typographyBody2Style}>
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
                    width: { xs: "80px", sm: "90px", md: "90px" }, // Adjust size for mobile and desktop
                    height: { xs: "80px", sm: "90px", md: "90px" },
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
                  width: "100%",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column", // Use column direction
                  paddingTop: "5%",
                }}
              >
                <Typography variant="h5" sx={typographyh5Style}>
                  Very Friendly Service
                </Typography>
                <Typography variant="body2" sx={typographyBody2Style}>
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
