import React from "react";
import {
  Grid,
  Typography,
  Box,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import wallet from "../../public/images/Wallet.png";
import user from "../../public/images/3 User.png";
import heart from "../../public/images/Heart.png";

/* Details for the first card */
const cardDetails1 = {
    title: "Get Experience Which are fun",
    description:"With travala you can get the best experience on holiday travel, and we always update the latest and best destinations in the world",
    image: "/images/Turkey.png",
  };

/* Details for the first card */
const cardDetails2 = [
  {
    id: "1",
    title: "Affordable prices",
    description: "We provide some very affordable prices compared to others.",
  },
  {
    id: "2",
    title: "Unforgettable experience",
    description: "We provide a vacation experience that will be unforgettable.",
  },
  {
    id: "3",
    title: "Very Friendly Service",
    description:
      "We will provide excellent and friendly service for the sake of our customers.",
  },
];

/* Typography styles for heading 1 */
const typographyh1Style = {
  color: "#0C111F",
  fontFamily: "Inter",
  fontSize: "48px",
  lineHeight: "130%",
  fontStyle: "normal",
  letterSpacing: "-0.48px",
  fontWeight: "700",
};

/* Typography styles for body 1 */
const typographyBody1Style = {
  color: "#0C111F",
  fontFamily: "Inter",
  fontSize: "20px",
  lineHeight: "36px",
  letterSpacing: "-0.96px",
  fontStyle: "normal",
  marginTop: "4%",
};

/* Typography styles for heading 5 */
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

/* Typography styles for body 2 */
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

/* CustomCard functional component */
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
        {/* Heading 1 */}
        <Typography variant="h1" sx={typographyh1Style}>
          {cardDetails1.title}
        </Typography>
        {/* Body 1 */}
        <Typography variant="body1" sx={typographyBody1Style}>
          {cardDetails1.description}
        </Typography>
        {/* Image */}
        <Image
          src={cardDetails1.image}
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
          {cardDetails2.map((item) => (
            <>
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
                    {/* Card icon */}
                    {item.id === "1" && (
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
                        {/* Wallet icon */}
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
                    )}
                    {item.id === "2" && (
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
                        {/* User icon */}
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
                    )}
                    {item.id === "3" && (
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
                        {/* Heart icon */}
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
                    )}
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
                    {/* Heading 5 */}
                    <Typography variant="h5" sx={typographyh5Style}>
                      {item.title}
                    </Typography>
                    {/* Body 2 */}
                    <Typography variant="body2" sx={typographyBody2Style}>
                      {item.description}
                    </Typography>
                    {/* Divider */}
                    <Divider
                      style={{ marginTop: "24px", borderColor: "#F7F7F7" }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomCard;
