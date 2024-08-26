"user client";
import React from "react";
import { Box, Container, Grid, Typography, Button, TextField, Avatar, IconButton } from "@mui/material";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { adminSettingData } from "@/data/adminSetting";
import Link from "next/link";
const adminSettings = () =>{
  return (
    <Box
      display="flex"
      bgcolor="#EEF5FF" /* Add background color */
      alignItems="center"
      justifyContent="center"
      minHeight="100vh" /* Set minimum height to occupy the full viewport */
    >
      <Container maxWidth="sm" sx={{ marginTop: "80px", marginBottom:"80px" }}>
        <Box
          padding={5}
          sx={{
            bgcolor: "#EEF5FF",
            mx: "auto",
            mt: "10",
            borderRadius: "20px",
            height: "730px",
            border: "1px solid", // Added border size
            borderColor: "#4A5472" // Added border color
          }}>
          <Grid container spacing={2} justifyContent="space-between" alignItems="center">
            <Grid item xs={12} style={{ textAlign: "center", position:"relative", }}>
              <Avatar
                alt="Profile Picture"
                src="/images/admin/profileLogo.png"
                sx={{ width: 130, height: 130, margin: "0 auto", borderRadius: "50%" }}
              />
              <IconButton
                style={{
                  backgroundColor: '#D9D9D9',
                  borderRadius: '50%', // Round shape
                  width: 25,
                  height: 25,
                  position: 'absolute',
                  bottom: 0, // Adjust the bottom alignment
                  right: 'calc(46% - 30px)', // Adjusted for better positioning
                  transform: 'translateX(50%)',
                }}>
                <AddAPhotoOutlinedIcon
                style={{
                  color: '#4A5472',
                  width: 18,
                  height: 18,
                }}/>
              </IconButton>
              <Button
                variant="outlined"
                style={{
                  position: 'absolute',
                  bottom: 5.6, // Align to the same bottom line as IconButton
                  left: 'calc(49.5% + 40px)', // Adjust for correct positioning
                  transform: 'translateX(50%)',
                  width:'3.188rem',
                  height:'1.688rem',
                }}>
                {adminSettingData.adminSettingSaveButton}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography
                align="center"
                variant="h1"
                color='#4A5472'>
                {/* Render the title */}
                {adminSettingData.adminSettingTitle01}
              </Typography>
            </Grid>
            <Grid item xs={12} marginTop={-1.8}>
              <Typography
                align="center"
               variant="h2"
               color='#4A5472'>
              <Link href="http://www.gmail.com">
                {/* Render the title */}
                {adminSettingData.adminSettingEmail} 
              </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Button sx={{ width: '11rem', }} startIcon={<ChatOutlinedIcon />}>
              {adminSettingData.adminSettingCustomerSupportButton}
              </Button>
            </Grid>
            <Grid item xs={12} md={6} marginTop={3} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography
                variant="h3">
                {/* Render the title */}
               <b>{adminSettingData.adminSettingTitle02}</b>
              </Typography>
            </Grid>
            <Grid item xs={12} marginTop={0}>
              {/* Change Email Section */}
              <Typography variant="h3">
              {/* Render the title from adminSetting Data */}
                {adminSettingData.adminSettingTitle03}
              </Typography>
            </Grid>
            <Grid item xs={12} md={10} marginTop={-1.3} style={{ textAlign: "center" }}>
              {/* Change Email TextField */}
              <TextField
                fullWidth
                label="Enter your E mail"
                variant="outlined"
                InputProps={{ style: { backgroundColor: 'white', height: '40px' } }}
                InputLabelProps={{ style: { height: '20px', lineHeight: '11px' } }}
              />
            </Grid>
            <Grid item xs={12} md={2} marginTop={-1.3} style={{ textAlign: "center" }}>
              <Button sx={{
                width: '5.563rem',
                height: '2.75rem',
              }}>
              {adminSettingData.adminSettingSaveButton}
              </Button>
            </Grid>
            <Grid item xs={12} marginTop={3.5} >
              {/* Change Password Section */}
              <Typography variant="h3">
                {/* Render the title from adminSetting Data */}
                {adminSettingData.adminSettingTitle04}
              </Typography>
            </Grid>
            <Grid item xs={12} md={10} marginTop={-1.3} style={{ textAlign: "center" }}>
              {/* Change Password TextField */}
              <TextField
                fullWidth
                label="Change Password"
                variant="outlined"
                InputProps={{ style: { backgroundColor: 'white', height: '40px' } }}
                InputLabelProps={{ style: { height: '20px', lineHeight: '11px' } }}
              />
            </Grid>
            <Grid item xs={12} md={2} marginTop={-1.3} style={{ textAlign: "center" }}>
              <Button sx={{
                width: '5.563rem',
                height: '2.75rem',
              }}>
                {adminSettingData.adminSettingSaveButton}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
export default adminSettings;
