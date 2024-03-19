"use client";
import { Box, Button, Grid, Typography, Modal, DialogContent } from "@mui/material";
import Image from "next/image";
import image from "../../public/images/homePage/heroSectionImage/mainImage.webp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { bannerDetails } from "../../data/homePage";
import { lora } from "../../app/fonts";
import * as React from 'react';
import image1 from "../../public/images/homePage/dialogBox/thumbUp.webp"


/* Typography style for heading 5 */
const typographyh5Style = {
  color: "#E97458",
  fontSize: { xs: "18px", sm: "22px", md: "18px" },
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",
  textTransform: "uppercase",
  marginTop: { xs:"14px", md: "5px" },
};

/* Typography style for heading 1 */
const typographyh1Style = {
  color: "#FFFFFF",
  // fontFamily: "Volkhov",
  fontSize: { xs: "45px", sm: "70px", md: "80px" }, // Adjust font size for different screen sizes
  lineHeight: "125%",
  fontStyle: "normal",
  letterSpacing: "-3.2px",
  fontWeight: "700",
  marginTop: "5px",
};

/* Typography style for body text */
const typographyBody1Style = {
  color: "rgba(255, 255, 255, 0.70)",
  fontSize: { xs: "16px", sm: "22px", md: "24px" }, // Adjust font size for different screen sizes
  lineHeight: "35px",
  fontStyle: "normal",
  letterSpacing: "-0.96px",
  fontWeight: "400",
};

/* Button style for contained variant */
const buttonContainedStyle = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  borderRadius: "100px",
  textTransform: "none",
  fontWeight: "bold",
  color: "#0C111F",
  background: "var(--l-2, linear-gradient(135deg, #F9EC7D 0%, #F5B100 100%))",
  // Customize sizes for web and tablet view
  "@media (max-width: 1024px)": {
    padding: "10px 16px",
  },
  // Customize sizes for mobile view
  "@media (max-width: 767px)": {
    fontSize: "12px",
    padding: "8px 12px",
    margin: "3px",
  },
};

/* Button style for text variant */
const buttonTextStyle = {
  color: "#FFF",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "180%",
  letterSpacing: "0.36px",
  margin: "5px",
  textTransform: "none",
  // Customize sizes for mobile view
  "@media (max-width: 767px)": {
    fontSize: "12px",
    padding: "8px 12px",
    margin: "3px",
  },
};
// modal styles
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  height: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 50,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};


/* Banner functional component */
const Banner = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {/* Left side of the banner */}
        <Grid item xs={12} md={6}>
          {/* Heading 5 */}
          <Typography variant="h5" sx={typographyh5Style}>
            {bannerDetails.bannerTitle}
          </Typography>
          {/* Heading 1 */}
          <Typography
            variant="h1"
            className={lora.className}
            sx={typographyh1Style}
          >
            {bannerDetails.bannerSubTitle}
          </Typography>
          {/* Body text */}
          <Typography variant="body1" sx={typographyBody1Style}>
            {bannerDetails.bannerDescription}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row", // Adjust the layout for different screen sizes
              alignItems: "center",
            }}
          >
            {/* Button with icon for web and tablet view */}
            <Button variant="contained" sx={buttonContainedStyle}>
              {bannerDetails.bannercta1Caption}
              {/* Arrow icon */}
              <Box
                sx={{
                  backgroundColor: "#0C111F",
                  width: "32px",
                  height: "32px",
                  borderRadius: "58px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <KeyboardArrowRightIcon sx={{ color: "#FFFFFF" }} />
              </Box>
            </Button>

            {/* Button with arrow icon for mobile view */}
            <Button variant="text" onClick={handleOpen} sx={buttonTextStyle}>
              <Box
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.18)",
                  width: "46px",
                  height: "46px",
                  borderRadius: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "15px",
                  marginRight: "8px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#FFFFFF",
                    width: "30px",
                    height: "30px",
                    borderRadius: "58px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ArrowRightIcon sx={{ color: "#F5B100" }} />
                </Box>
              </Box>
              {bannerDetails.bannercta2Caption}
            </Button>
      {/* modal display the success */}
          <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"

      >
          <Box sx={style}> 
          <DialogContent
          dividers
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'lightgreen',
            borderRadius:"10px",
          }}
        >
          <Image 
          src={image1} alt="test" style={{ maxWidth: '25%', height: 'auto',}} />
        </DialogContent>       
          
        <DialogContent
          dividers
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2" sx={{color: "#54BC2F",}}>
          {bannerDetails.modalTitle}
          </Typography>
          
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2, }}>
          {bannerDetails.modalContentText}
          </Typography>
          <Button
              variant="contained"
              color="success"
              autoFocus
              onClick={handleClose}
              sx={{
                backgroundColor: "#52AA44",
                width: "30px",
                height: "30px",
                borderRadius: "58px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
              }}

            >
              Ok
            </Button>
            </DialogContent>
        </Box>
        </Modal>
          </Box>
        </Grid>
        {/* Right side of the banner - image */}
        <Grid item xs={12} md={6}>
          <Image
            src={image}
            alt="test"
            width={617.758}
            height={616.951}
            style={{
              width: "100%",
              height: "auto",
              flexShrink: 0,
            }}
          />
        </Grid>
      </Grid>
      
    </>
  );
};

export default Banner;


