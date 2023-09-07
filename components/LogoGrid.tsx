"use client"
import { Box,Grid } from "@mui/material";
import React from "react";
import Image from "next/image";
import axon from "../public/images/axon.png";
import jetstar from "../public/images/jetstar.png";
import expedia from "../public/images/expedia.png";
import qantas from "../public/images/qantas.png";
import alitalia from "../public/images/alitalia.png";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
};

const LogoGrid = () => {
  return (
    <>
      {/* previous commit  */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              width: "100%",
              display: { xs: "block", md: "none" },
            }}
          >
            <Slider {...settings}>
              <Box
                sx={{
                  display: "flex",
                  justify: "center",
                  alignItems: "center",
                  // padding: "0px 26%",
                  backgroundColor: "#e2c0c0",
                }}
              >
                <Box
                  sx={{
                   width:"162px",
                   height:"32px",
                  backgroundColor: "red",
                }}>
                  <Image
                    src={axon}
                    alt="test"
                    width={162}
                    height={32}
                    style={{
                      mixBlendMode: "luminosity",
                      flexShrink: 0,
                      marginTop: "22px",
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0px 26%",
                }}
              >
                <Image
                  src={jetstar}
                  alt="test"
                  width={162}
                  height={32}
                  style={{
                    mixBlendMode: "luminosity",
                    flexShrink: 0,
                    marginTop: "22px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0px 26%",
                }}
              >
                <Image
                  src={expedia}
                  alt="test"
                  width={162}
                  height={32}
                  style={{
                    mixBlendMode: "luminosity",
                    flexShrink: 0,
                    marginTop: "22px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0px 23%",
                }}
              >
                <Image
                  src={qantas}
                  alt="test"
                  width={162}
                  height={32}
                  style={{
                    mixBlendMode: "luminosity",
                    flexShrink: 0,
                    marginTop: "22px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0px 26%",
                }}
              >
                <Image
                  src={alitalia}
                  alt="test"
                  width={162}
                  height={32}
                  style={{
                    mixBlendMode: "luminosity",
                    flexShrink: 0,
                    marginTop: "22px",
                  }}
                />
              </Box>
            </Slider>
          </Box>

          <Box
            sx={{
              backgroundColor: "",
              width: "100%",
              display: { xs: "none", md: "block" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                backgroundColor: "",
              }}
            >
              <Box sx={{ backgroundColor: "", width: "20%" }}>
                <Image
                  src={axon}
                  alt="test"
                  width={162}
                  height={32}
                  style={{
                    mixBlendMode: "luminosity",
                    flexShrink: 0,
                    marginTop: "22px",
                    // transition: "filter 0.3s", // Add a transition for smooth effect
                  }}
                  // sx={{
                  //   "&:hover": {
                  //     filter: "hue-rotate(90deg)", // Apply colorization effect on hover
                  //   },
                  // }}
                />
              </Box>
              <Box sx={{ backgroundColor: "", width: "20%" }}>
                <Image
                  src={jetstar}
                  alt="test"
                  width={162}
                  height={32}
                  style={{
                    mixBlendMode: "luminosity",
                    flexShrink: 0,
                    marginTop: "22px",
                  }}
                />
              </Box>
              <Box sx={{ backgroundColor: "", width: "20%" }}>
                <Image
                  src={expedia}
                  alt="test"
                  width={162}
                  height={32}
                  style={{
                    mixBlendMode: "luminosity",
                    flexShrink: 0,
                    marginTop: "22px",
                  }}
                />
              </Box>
              <Box sx={{ backgroundColor: "", width: "20%" }}>
                <Image
                  src={qantas}
                  alt="test"
                  width={162}
                  height={32}
                  style={{
                    mixBlendMode: "luminosity",
                    flexShrink: 0,
                    marginTop: "22px",
                  }}
                />
              </Box>
              <Box sx={{ backgroundColor: "", width: "20%" }}>
                <Image
                  src={alitalia}
                  alt="test"
                  width={162}
                  height={32}
                  style={{
                    mixBlendMode: "luminosity",
                    flexShrink: 0,
                    marginTop: "22px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default LogoGrid;