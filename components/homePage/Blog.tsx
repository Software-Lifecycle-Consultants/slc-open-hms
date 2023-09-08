import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import turkey2 from "../../public/images/Turkey2.png";
import namibia2 from "../../public/images/Namibia2.png";
import newMexico2 from "../../public/images/New Mexico2.png";

const Blog = () => {
  return (
    <>
      <Grid
        container
        // direction="row"
        // justifyContent="center"
        // alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} md={4}>
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
            Destinations Most Popular
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="body2"
            style={{
              color: "#0C111F",
              fontFamily: "Inter",
              fontSize: "20px",
              lineHeight: "180%",
              fontStyle: "normal",
              fontWeight: "400",
              marginTop: "5px",
            }}
          >
            Some of the most popular destinations for you visit with a view the
            beautiful one.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              elevation={0}
              sx={{
                maxWidth: 345,
                borderRadius: "20px",
                backgroundColor: "#F7F7F7",
              }}
            >
              <Box
                style={{
                  position: "relative",
                  maxWidth: "400px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={turkey2}
                  alt="test"
                  width={400}
                  height={284}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "20px 20px 0px 0px",
                    flexShrink: 0,
                  }}
                />
              </Box>
              <CardContent
                sx={{
                  borderRadius: "0px 0px 30px 30px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{
                    color: "#0C111F",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "24px",
                    lineHeight: "26px",
                    fontStyle: "normal",
                    fontWeight: "700",
                  }}
                >
                  Cappadocia
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    color: "rgba(12, 17, 31, 0.60)",
                    fontFamily: "Inter",
                    fontSize: "18px",
                    lineHeight: "180%",
                    fontStyle: "normal",
                    fontWeight: "400",
                  }}
                >
                  The red and orange sand of the desert are very beautiful,
                  let's take a trip here
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  borderRadius: "0px 0px 30px 30px",
                  backgroundColor: "#F7F7F7",
                }}
              >
                <Box>
                  <Typography
                    gutterBottom
                    variant="body2"
                    style={{
                      color: "rgba(12, 17, 31, 0.60)",
                      fontFamily: "Inter",
                      fontSize: "18px",
                      lineHeight: "155%",
                      fontStyle: "normal",
                      fontWeight: "400",
                      letterSpacing: "-0.18px",
                    }}
                  >
                    Price
                  </Typography>
                  <Box style={{ display: "flex" }}>
                    <Typography
                      style={{
                        color: "#0C111F",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "24px",
                        lineHeight: "28px",
                        fontStyle: "normal",
                        fontWeight: "700",
                      }}
                    >
                      $150
                    </Typography>

                    <Typography
                      style={{
                        color: "rgba(12, 17, 31, 0.60)",
                        fontFamily: "Inter",
                        fontSize: "18px",
                        lineHeight: "155%",
                        fontStyle: "normal",
                        fontWeight: "400",
                        letterSpacing: "-0.18px",
                      }}
                    >
                      /Person
                    </Typography>
                  </Box>
                </Box>
                <Box
                  style={{
                    marginLeft: "60px",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#7C46FE",
                      borderRadius: "45px",
                      color: "#FFF",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      lineHeight: "180%",
                      fontStyle: "normal",
                      letterSpacing: "-0.14px",
                      fontWeight: "500",
                    }}
                  >
                    Ticket booking
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              elevation={0}
              sx={{
                maxWidth: 345,
                borderRadius: "20px",
                backgroundColor: "#F7F7F7",
              }}
            >
              <Box
                style={{
                  position: "relative",
                  maxWidth: "400px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={namibia2}
                  alt="test"
                  width={400}
                  height={284}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "20px 20px 0px 0px",
                    flexShrink: 0,
                  }}
                />
              </Box>
              <CardContent
                sx={{
                  borderRadius: "0px 0px 30px 30px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{
                    color: "#0C111F",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "24px",
                    lineHeight: "26px",
                    fontStyle: "normal",
                    fontWeight: "700",
                  }}
                >
                  Sossusvlei
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    color: "rgba(12, 17, 31, 0.60)",
                    fontFamily: "Inter",
                    fontSize: "18px",
                    lineHeight: "180%",
                    fontStyle: "normal",
                    fontWeight: "400",
                  }}
                >
                  Famous for its hot air balloons and we can see its natural
                  beauty from above
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  borderRadius: "0px 0px 30px 30px",
                  backgroundColor: "#F7F7F7",
                }}
              >
                <Box>
                  <Typography
                    gutterBottom
                    variant="body2"
                    style={{
                      color: "rgba(12, 17, 31, 0.60)",
                      fontFamily: "Inter",
                      fontSize: "18px",
                      lineHeight: "155%",
                      fontStyle: "normal",
                      fontWeight: "400",
                      letterSpacing: "-0.18px",
                    }}
                  >
                    Price
                  </Typography>
                  <Box style={{ display: "flex" }}>
                    <Typography
                      style={{
                        color: "#0C111F",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "24px",
                        lineHeight: "28px",
                        fontStyle: "normal",
                        fontWeight: "700",
                      }}
                    >
                      $200
                    </Typography>

                    <Typography
                      style={{
                        color: "rgba(12, 17, 31, 0.60)",
                        fontFamily: "Inter",
                        fontSize: "18px",
                        lineHeight: "155%",
                        fontStyle: "normal",
                        fontWeight: "400",
                        letterSpacing: "-0.18px",
                      }}
                    >
                      /Person
                    </Typography>
                  </Box>
                </Box>
                <Box
                  style={{
                    marginLeft: "60px",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#7C46FE",
                      borderRadius: "45px",
                      color: "#FFF",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      lineHeight: "180%",
                      fontStyle: "normal",
                      letterSpacing: "-0.14px",
                      fontWeight: "500",
                    }}
                  >
                    Ticket booking
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              elevation={0}
              sx={{
                maxWidth: 345,
                borderRadius: "20px",
                backgroundColor: "#F7F7F7",
              }}
            >
              <Box
                style={{
                  position: "relative",
                  maxWidth: "400px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={newMexico2}
                  alt="test"
                  width={400}
                  height={284}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "20px 20px 0px 0px",
                    flexShrink: 0,
                  }}
                />
              </Box>
              <CardContent
                sx={{
                  borderRadius: "0px 0px 30px 30px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{
                    color: "#0C111F",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "24px",
                    lineHeight: "26px",
                    fontStyle: "normal",
                    fontWeight: "700",
                  }}
                >
                  Albuquerque
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    color: "rgba(12, 17, 31, 0.60)",
                    fontFamily: "Inter",
                    fontSize: "18px",
                    lineHeight: "180%",
                    fontStyle: "normal",
                    fontWeight: "400",
                  }}
                >
                  A cool trip because the various scenery around will be very
                  eye-catching
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  borderRadius: "0px 0px 30px 30px",
                  backgroundColor: "#F7F7F7",
                }}
              >
                <Box>
                  <Typography
                    gutterBottom
                    variant="body2"
                    style={{
                      color: "rgba(12, 17, 31, 0.60)",
                      fontFamily: "Inter",
                      fontSize: "18px",
                      lineHeight: "155%",
                      fontStyle: "normal",
                      fontWeight: "400",
                      letterSpacing: "-0.18px",
                    }}
                  >
                    Price
                  </Typography>
                  <Box style={{ display: "flex" }}>
                    <Typography
                      style={{
                        color: "#0C111F",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "24px",
                        lineHeight: "28px",
                        fontStyle: "normal",
                        fontWeight: "700",
                      }}
                    >
                      $180
                    </Typography>

                    <Typography
                      style={{
                        color: "rgba(12, 17, 31, 0.60)",
                        fontFamily: "Inter",
                        fontSize: "18px",
                        lineHeight: "155%",
                        fontStyle: "normal",
                        fontWeight: "400",
                        letterSpacing: "-0.18px",
                      }}
                    >
                      /Person
                    </Typography>
                  </Box>
                </Box>
                <Box
                  style={{
                    marginLeft: "60px",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#7C46FE",
                      borderRadius: "45px",
                      color: "#FFF",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      lineHeight: "180%",
                      fontStyle: "normal",
                      letterSpacing: "-0.14px",
                      fontWeight: "500",
                    }}
                  >
                    Ticket booking
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
      </Grid>
    </>
  );
};

export default Blog;