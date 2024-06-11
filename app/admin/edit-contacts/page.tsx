"user client";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { adminEditContactUs } from "@/data/admineditcontactus";
import FindInPageIcon from '@mui/icons-material/FindInPage';

const editContact = () =>{
  return (
    <Box
      padding="30px" /* Add padding */
      bgcolor="rgba(238, 245, 255, 1)" /* Add background color */
      minHeight="100vh"
      display="flex"
      flexDirection="column"
    >
      <Container maxWidth="lg" style={{ flexGrow: 1 }}>
        <Box>
          <Grid container spacing={2} justifyContent="space-between" alignItems="center">
            <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography
                align="left"
                fontSize="32px"
                style={{ fontFamily: "Mulish", color: "#4A5472" }}>
                {/* Render the title */}
                <b>{adminEditContactUs.adminContactHeaderTitle}</b>
              </Typography>
            </Grid>
            <Grid item xs={12} md={1.2} style={{ display: 'flex', flexDirection: 'column', alignItems: 'right' }}>
              <Button variant="outlined" endIcon={<FindInPageIcon />} style={{ backgroundColor: '#4A5472', width:"100px", height:"40px" , borderColor: '#5B5959', borderWidth:2, color: 'white', textTransform: 'capitalize',}}>
                {adminEditContactUs.adminContactViewButton}
              </Button>
            </Grid>
            <Grid item xs={12} marginTop={0}>
              {/* Title Section */}
              <Typography fontSize="16px" style={{ color:"#9E9E9E"}}>
              {/* Render the title from admineditcontactus Data */}
                {adminEditContactUs.adminContactTitle01}
              </Typography>
            </Grid>
            <Grid item xs={12} marginTop={-1.3} style={{ textAlign: "center" }}>
              {/* Title TextField */}
              <TextField
                fullWidth
                label="Add Title"
                variant="outlined"
                InputProps={{ style: { backgroundColor: 'white' } }}
              />
            </Grid>
            <Grid item xs={12} marginTop={0}>
              {/* Description Section */}
              <Typography style={{ color: "#9E9E9E" }}>
              {/* Render the title from admineditcontactus Data */}
                {adminEditContactUs.adminContactTitle02}
              </Typography>
            </Grid>
            <Grid item xs={12} marginTop={-1.3}>
              {/* Description TextField */}
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Enter Description"
                multiline
                rows={8}
                InputProps={{ style: { backgroundColor: 'white' } }}
              />
            </Grid>
            <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column'}}>
               <Typography style={{ color: "#9E9E9E" ,alignSelf: 'flex-start'}}>
                 {adminEditContactUs.adminContactTitle03}
               </Typography>
               <TextField
                 fullWidth
                 label="Enter Email Address"
                 variant="outlined"
                 type="email"
                 InputProps={{ style: { backgroundColor: 'white' } }}
                 style={{ marginTop: '8px' }}
               />
            </Grid>
            <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography style={{ color: "#9E9E9E" }}>
                 {adminEditContactUs.adminContactTitle04}
               </Typography>
               <TextField
                 fullWidth
                 label="Enter Phone Number"
                 variant="outlined"
                 InputProps={{ style: { backgroundColor: 'white' } }}
                 style={{ marginTop: '8px' }}
               />
              </Grid>
            <Grid item xs={12}>
              {/* Adress Section */}
              <Typography style={{ color: "#9E9E9E" }}>
                {/* Render the title from admineditcontactus Data */}
                {adminEditContactUs.adminContactTitle05}
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              {/* Address line 01 TextField */}
              <TextField
                fullWidth
                label="Enter your Address Line 1"
                variant="outlined"
                InputProps={{ style: { backgroundColor: 'white' } }}
              />
            </Grid>
            <Grid item xs={12} marginTop={0} style={{ textAlign: "center" }}>
              {/* Address line 02 TextField */}
              <TextField
                fullWidth
                label="Enter your Address Line 2"
                variant="outlined"
                InputProps={{ style: { backgroundColor: 'white' } }}
              />
            </Grid>
            <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              {/* Address city TextField */}
              <TextField
                fullWidth
                label="City"
                variant="outlined"
                InputProps={{ style: { backgroundColor: 'white' } }}
              />
            </Grid>
            <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              {/* Address State/Province TextField */}
              <TextField
                fullWidth
                label="State/Province"
                variant="outlined"
                InputProps={{ style: { backgroundColor: 'white' } }}
              />
            </Grid>
            <Grid item xs={12} md={6}  marginTop={0} style={{ textAlign: "center" }}>
              {/* Address Zip Code TextField */}
              <TextField
                fullWidth
                label="Zip Code"
                variant="outlined"
                InputProps={{ style: { backgroundColor: 'white' } }}
              />
            </Grid>
            <Grid item xs={12} md={6}  marginTop={0} style={{ textAlign: "center" }}>
              {/* Address Country TextField */}
              <TextField
                fullWidth
                label="Country"
                variant="outlined"
                InputProps={{ style: { backgroundColor: 'white' } }}
              />
            </Grid>
              {/* Submit Section */}
            <Grid item xs={12} marginTop={5} style={{ textAlign: "center" }}>
              <Box ml="1048px">
              <Button 
                sx={{
                  textTransform: "none",
                  justifyContent: "center",
                  color: "white",
                  width: "100px",
                  height: "30px",
                  borderRadius: "8px",
                  textAlign: "center",
                  backgroundColor: "#4A5472",
                  "&:hover": {
                    backgroundColor: "#192959",}
                }}
              variant="outlined" 
              size="large" 
              type="submit" >
                {/* Render the title from admineditcontactus Data */}
                {adminEditContactUs.adminContactSubmitButton}
              </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
export default editContact;
