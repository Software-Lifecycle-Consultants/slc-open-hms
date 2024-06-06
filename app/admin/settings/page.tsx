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
                variant="contained"
                style={{
                  fontSize: "10px",
                  width: "8px", // Adjust width to fit content
                  height: "9px", // Adjust height to fit content
                  fontWeight: 600, // Semi-bold text
                  backgroundColor: '#4A5472',
                  borderColor: '#5B5959',
                  borderWidth: 2,
                  color: 'white',
                  textTransform: 'capitalize',
                  textAlign: "center",
                  borderRadius: '8%',
                  position: 'absolute',
                  bottom: 5.6, // Align to the same bottom line as IconButton
                  left: 'calc(49.5% + 40px)', // Adjust for correct positioning
                  transform: 'translateX(50%)',
                }}>
                {adminSettingData.adminSettingSaveButton}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography
                align="center"
                fontSize="30px"
                style={{ fontFamily: "Mulish", color: "#4A5472" }}>
                {/* Render the title */}
                {adminSettingData.adminSettingTitle01}
              </Typography>
            </Grid>
            <Grid item xs={12} marginTop={-1.8}>
              <Typography
                align="center"
                fontSize="22px"
                style={{ fontFamily: "Mulish", color: "#4A5472" }}>
              <Link href="http://www.gmail.com">
                {/* Render the title */}
                {adminSettingData.adminSettingEmail} 
              </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Button variant="outlined" startIcon={<ChatOutlinedIcon />}style={{ fontSize:"18px", backgroundColor: '#4A5472', width:"195px", height:"40px" , borderColor: '#5B5959', borderWidth:2, color: 'white', textTransform: 'capitalize',textAlign:"center"}}>
              {adminSettingData.adminSettingCustomerSupportButton}
              </Button>
            </Grid>
            <Grid item xs={12} md={6} marginTop={3} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography
                align="left"
                fontSize="25px"
                style={{ fontFamily: "Mulish", color: "#4A5472" }}>
                {/* Render the title */}
               <b>{adminSettingData.adminSettingTitle02}</b>
              </Typography>
            </Grid>
            <Grid item xs={12} marginTop={0}>
              {/* Change Email Section */}
              <Typography fontSize="20px" style={{ color:"#4A5472"}}>
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
              <Button variant="outlined" style={{ backgroundColor: '#4A5472', width:"60px", height:"35px", borderColor: '#5B5959', borderWidth:2, color: 'white', textTransform: 'capitalize',}}>
              {adminSettingData.adminSettingSaveButton}
              </Button>
            </Grid>
            <Grid item xs={12} marginTop={3.5} >
              {/* Change Password Section */}
              <Typography fontSize="20px" style={{ color: "#4A5472" }}>
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
              <Button variant="outlined" style={{ backgroundColor: '#4A5472', width:"60px", height:"35px" , borderColor: '#5B5959', borderWidth:2, color: 'white', textTransform: 'capitalize',}}>
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
