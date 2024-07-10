"use client";
import React from "react";
import { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import privacyandpolicydata from "@/data/privacypolicyPage";

/**
 *  PrivacyPolicyScreen component represents the Privacy & Policy Screen of the website.
 */


function PrivacyPolicy() {
    const {
      header1Details,
      section1,
      section102,
      section2,
      section202,
      section3,
      section302,
      section4,
      section402,
      section5,
      section501,
      section6,
      section7
    } = privacyandpolicydata;
  return (
  <>
    <Box
      maxWidth="1320px" /* Adjust max-width as needed */
      margin="0 auto" /* Center the container */
      padding="60px" /* Add padding */
    >
      <Typography variant='h2'> {/* Render the title from header1Details */}
        <b>{header1Details.title}</b>
      </Typography>
      <Box marginTop={7}>
        <Typography variant='body2' fontWeight='700'> {/* Render the subtitle from header1Details */}
          {header1Details.effectiveDate} {/* Render the effectiveDate from header1Details */}
        </Typography>
        <Typography variant='h4' mt='0.625rem'>{header1Details.description}</Typography> {/* Render the Description from header1Details */}
      </Box>
      <Box marginTop={4}>
        <Typography variant='h3' fontWeight='600'>{section1.title}</Typography> {/* Render the title from section1 */}
      </Box>
      <Box marginTop={2}>
        <Typography variant='h4'>{section1.subtitle}</Typography> {/* Render the subtitle from section1 */}
        {/* Render the content from section1 */}
        <List dense sx={{ marginTop: 1 }}> 
          {section1.content.map((item, index) => (
            <ListItem key={index} sx={{ py: 0 }}>
              <Typography variant='h4'>{item}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box marginTop={2}>
        <Typography variant='h4'>{section102.subtitle}</Typography> {/* Render the subtitle from section102 */}
        {/* Render the content from section102 */}
        <List dense sx={{ marginTop: 1 }}> 
          {section102.content.map((item, index) => (
            <ListItem key={index} sx={{ py: 0 }}>
              <Typography variant='h4'>{item}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box marginTop={4}>
        <Typography variant='h3' fontWeight='600'>{section2.title}</Typography> {/* Render the title from section2 */}
      </Box>
      <Box marginTop={2}>
        <Typography variant='h4'>{section2.subtitle}</Typography> {/* Render the subtitle from section2 */}
        {/* Render the content from section2*/}
        <List dense sx={{ marginTop: 1 }}> 
          {section2.content.map((item, index) => (
            <ListItem key={index} sx={{ py: 0 }}>
              <Typography variant='h4'>{item}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box marginTop={2}>
        <Typography variant='h4'>{section202.subtitle}</Typography> {/* Render the subtitle from section202 */}
        {/* Render the content from section202 */}
        <Typography variant='h4' sx={{ marginTop: 1 }}>
          {section202.content}
        </Typography>
      </Box>
      <Box marginTop={4}>
        <Typography variant='h3' fontWeight='600'>{section3.title}</Typography> {/* Render the title from section3 */}
      </Box>
      <Box marginTop={2}>
        <Typography variant='h4'>{section3.subtitle}</Typography> {/* Render the subtitle from section3 */}
        {/* Render the content from section3 */}
        <Typography variant='h4' sx={{ marginTop: 1 }}>
          {section3.content}
        </Typography>
      </Box>
      <Box marginTop={2}>
        <Typography variant='h4'>{section302.subtitle}</Typography> {/* Render the subtitle from section302 */}
        {/* Render the content from section302 */}
        <Typography variant='h4' sx={{ marginTop: 1 }}>
          {section302.content}
        </Typography>
      </Box>
      <Box marginTop={4}>
        <Typography variant='h3' fontWeight='600'>{section4.title}</Typography> {/* Render the title from section4 */}
      </Box>
      <Box marginTop={2}>
        <Typography variant='h4'>{section4.subtitle}</Typography> {/* Render the subtitle from section4 */}
        {/* Render the content from section4 */}
        <Typography variant='h4' sx={{ marginTop: 1 }}>
          {section4.content}
        </Typography>
      </Box>
      <Box marginTop={2}>
        <Typography variant='h4'>{section402.subtitle}</Typography> {/* Render the subtitle from section402 */}
        {/* Render the content from section402 */}
        <Typography variant='h4' sx={{ marginTop: 1 }}>
          {section402.content}
        </Typography>
      </Box>
      <Box marginTop={4}>
        <Typography variant='h3' fontWeight='600'>{section5.title}</Typography> {/* Render the title from section5 */}
        {/* Render the content from section5 */}
        <List dense sx={{ marginTop: 1 }}>
          {section5.content.map((item, index) => (
            <ListItem key={index} sx={{ py: 0 }}>
              <Typography variant='h4'>{item}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box marginTop={-1}>
        <Typography variant='h4'>{section501.content}</Typography>{/* Render the content from section501 */}
      </Box>
      <Box marginTop={4}>
        <Typography variant='h3' fontWeight='600'>{section6.title}</Typography> {/* Render the title from section6 */}
        {/* Render the content from section6 */}
        <Typography variant='h4' sx={{ marginTop: 1 }}>
          {section6.content}
        </Typography>
      </Box>
      <Box marginTop={4}>
        <Typography variant='h3' fontWeight='600'>{section7.title}</Typography> {/* Render the title from section7 */}
        {/* Render the content from section7 */}
        <Typography variant='h4' sx={{ marginTop: 1 }}>
          {section7.content}
        </Typography>
      </Box>
    </Box>
  </>
  );
}

export default PrivacyPolicy;
