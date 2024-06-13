import { Box, Card, CardContent, Grid, Icon, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { mulish } from "@/app/fonts";
import { contactCardDetails } from "@/data/contactPage";
/*
This component represents contact information cards displaying email, address, and phone number in the contact page.
*/

const ContactCard = () => {
  return (
    <>
      {/* Email Card */}
      <Card
        className={mulish.className}
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
          gap: "auto",
        }}
      >
        <CardContent>
          <Grid container alignItems="center">
            {/* Mail Icon */}
            <Box>
              <MailOutlineIcon
                sx={{
                  fontSize: { xs: "20px", sm: "25px", md: "40px", lg: "50px" },
                  verticalAlign: "middle",
                }}
              />
            </Box>
            {/* Email Text */}
            <Typography
              variant="body1"
              sx={{
                fontWeight: "500",
                fontSize: { xs: "16px", sm: "16px", md: "18px", lg: "20px" },
              }}
            >
              {contactCardDetails.email}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
      {/* Address Card */}
      <Card
        className={mulish.className}
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
        }}
      >
        <CardContent>
          <Grid container alignItems="center">
            {/* Location Icon */}
            <Box>
              <LocationOnIcon
                sx={{
                  fontSize: { xs: "20px", sm: "21px", md: "40px", lg: "50px" },
                  verticalAlign: "middle",
                }}
              />
            </Box>
            {/* Address Text */}
            <Typography
              variant="body1"
              sx={{
                fontWeight: "500",
                fontSize: { xs: "16px", sm: "13px", md: "18px", lg: "20px" },
              }}
            >
              {contactCardDetails.address}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
      {/* Phone Card */}
      <Card
        className={mulish.className}
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
        }}
      >
        <CardContent>
          <Grid container alignItems="center">
            {/* Phone Icon */}
            <Box>
              <PhoneIcon
                sx={{
                  fontSize: { xs: "20px", sm: "23px", md: "40px", lg: "50px" },
                  verticalAlign: "middle",
                }}
              />
            </Box>
            {/* Phone Text */}
            <Typography
              variant="body1"
              sx={{
                fontWeight: "500",
                fontSize: { xs: "16px", sm: "16px", md: "18px", lg: "20px" },
              }}
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
