import { Box, Card, CardContent, Grid, Icon, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { mulish } from "@/app/fonts";
import { contactCardDetails } from "@/data/contactPage";

const ContactCard = () => {
  return (
    <>
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
        <CardContent sx={{}}>
          <Grid container alignItems="center">
            <Box>
              <MailOutlineIcon
                sx={{
                  fontSize: { xs: "20px", sm: "25px", md: "40px", lg: "50px" },
                  verticalAlign: "middle",
                }}
              />
            </Box>
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
            <Box>
              <LocationOnIcon
                sx={{
                  fontSize: { xs: "20px", sm: "21px", md: "40px", lg: "50px" },
                  verticalAlign: "middle",
                }}
              />
            </Box>
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
            <Box>
              <PhoneIcon
                sx={{
                  fontSize: { xs: "20px", sm: "23px", md: "40px", lg: "50px" },
                  verticalAlign: "middle",
                }}
              />
            </Box>
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
