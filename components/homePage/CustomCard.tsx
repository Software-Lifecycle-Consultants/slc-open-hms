import React from "react";
import {
  Grid,
  Typography,
  Box,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import {
  wallet,
  user,
  heart,
} from "../../public/images/homePage/customCardImages";
import { cardDetails1, cardDetails2 } from "../../data/homePage";
import { montserrat } from "../../app/fonts";

/* Typography styles for heading 1 */
const typographyh1Style = {
  color: "#0C111F",
  fontSize: "48px",
  lineHeight: "130%",
  fontStyle: "normal",
  letterSpacing: "-0.48px",
  fontWeight: "700",
};

/* Typography styles for body 1 */
const typographyBody1Style = {
  color: "#0C111F",
  fontSize: "20px",
  lineHeight: "36px",
  letterSpacing: "-0.96px",
  fontStyle: "normal",
  marginTop: "4%",
};

/* Typography styles for heading 5 */
const typographyh5Style = {
  color: "#0C111F",
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
          {cardDetails1.customCardTitle}
        </Typography>
        {/* Body 1 */}
        <Typography variant="body1" sx={typographyBody1Style}>
          {cardDetails1.customCardDescription}
        </Typography>
        {/* Image */}
        <Image
          src={cardDetails1.customCardImage}
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
            <React.Fragment key={item.id}>
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
                    <Typography
                      variant="h5"
                      className={montserrat.className}
                      sx={typographyh5Style}
                    >
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
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomCard;
