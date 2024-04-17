import { Box, Card, CardContent, Grid, Icon } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactCard = () => {
  return (
    <>
      <Card
        sx={{
          borderRadius: "8px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          width: "309px",
          height: "79px",
          backgroundColor: "#F8F8F8",
          marginBottom: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid>
          <Box sx={{}}>
            <CardContent>
              <Box>
                <LocationOnIcon />
              </Box>
              <Box>
                <h2>Address</h2>
              </Box>
            </CardContent>
          </Box>
        </Grid>
      </Card>
      <Card
        sx={{
          borderRadius: "8px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          width: "309px",
          height: "79px",
          backgroundColor: "#F8F8F8",
          marginBottom: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid>
          <Box sx={{}}>
            <CardContent>
              <Box>
                <LocationOnIcon />
              </Box>
              <Box>
                <h2>Address</h2>
              </Box>
            </CardContent>
          </Box>
        </Grid>
      </Card>
      <Card
        sx={{
          borderRadius: "8px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          width: "309px",
          height: "79px",
          backgroundColor: "#F8F8F8",
          marginBottom: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid>
          <Box sx={{}}>
            <CardContent>
              <Box>
                <LocationOnIcon />
              </Box>
              <Box>
                <h2>Address</h2>
              </Box>
            </CardContent>
          </Box>
        </Grid>
      </Card>
    </>
  );
};

export default ContactCard;
