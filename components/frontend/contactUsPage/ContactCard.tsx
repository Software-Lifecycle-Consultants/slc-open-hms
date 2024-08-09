import { Box, Card, CardContent, Grid, Icon, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { contactCardDetails } from "@/data/contactPage";
import { contactSeo } from "@/data/seo";
/*
This component represents contact information cards displaying email, address, and phone number in the contact page.
*/

const ContactCard = () => {
  return (
    <>
      {/* Email Card */}
      <Card
        sx={{
          borderRadius: "8px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          width: { xs: "250px", sm: "200px", md: "280px", lg: "310px" },
          height: { xs: "50px", sm: "50px", md: "70px", lg: "80px" },
          backgroundColor: "#D9D9D9",
          marginBottom: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          alignItems:"center",
          justifyContent:"center",
        }}
        aria-label={contactSeo.contactUsAriaLabel1}
      >
        <CardContent>
          <Grid container alignItems="center">
            {/* Mail Icon */}
            <Box>
              <MailOutlineIcon
                sx={{
                  fontSize: '2.5rem',
                  verticalAlign: "middle",
                  marginRight:"20px",
                  '@media (max-width:600px)': {
                  fontSize: '1.5rem',
                  },
                }}
                aria-label={contactSeo.contactUsAriaLabel2}
              />
            </Box>
            {/* Email Text */}
            <Typography
              variant="body2"
            >
              {contactCardDetails.email}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
      {/* Address Card */}
      <Card
        sx={{
          borderRadius: "8px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          width: { xs: "250px", sm: "200px", md: "290px", lg: "310px" },
          height: { xs: "50px", sm: "50px", md: "70px", lg: "80px" },
          backgroundColor: "#D9D9D9",
          marginBottom: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label={contactSeo.contactUsAriaLabel3}
      >
        <CardContent>
          <Grid container alignItems="center">
            {/* Location Icon */}
            <Box>
              <LocationOnIcon
                sx={{
                  fontSize: '2.5rem',
                  verticalAlign: "middle",
                  marginRight:"10px",
                  '@media (max-width:600px)': {
                  fontSize: '1.5rem',
                  },
                }}
                aria-label={contactSeo.contactUsAriaLabel4}
              />
            </Box>
            {/* Address Text */}
            <Typography
              variant="body2"
            >
              {contactCardDetails.address}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
      {/* Phone Card */}
      <Card
        sx={{
          borderRadius: "8px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          width: { xs: "250px", sm: "200px", md: "290px", lg: "310px" },
          height: { xs: "50px", sm: "50px", md: "70px", lg: "80px" },
          backgroundColor: "#D9D9D9",
          marginBottom: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label={contactSeo.contactUsAriaLabel5}
      >
        <CardContent>
          <Grid container alignItems="center">
            {/* Phone Icon */}
            <Box>
              <PhoneIcon
                sx={{
                  fontSize: '2.5rem',
                  verticalAlign: "middle",
                  marginRight:"10px",
                  '@media (max-width:600px)': {
                  fontSize: '1.5rem',
                  },
                }}
                aria-label={contactSeo.contactUsAriaLabel6}
              />
            </Box>
            {/* Phone Text */}
            <Typography
              variant="body2"
            >
              {contactCardDetails.phone}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactCard;
