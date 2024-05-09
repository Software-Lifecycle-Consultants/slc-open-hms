
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
      maxWidth="1320px"
      margin="0 auto"
      padding="60px"
    >
      <Typography variant="h2">
        <b>{header1Details.title}</b>
      </Typography>
      <Box marginTop={7}>
        <Typography variant="body1">{header1Details.description}</Typography>
      </Box>

      <Box marginTop={4}>
        <Typography variant="h5">{section1.title}</Typography>
        <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
          {section1.subtitle}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {section1.content}
        </Typography>
      </Box>

      <Box marginTop={2}>
        <Typography variant="subtitle1">{section102.subtitle}</Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {section102.content}
        </Typography>
      </Box>

      <Box marginTop={4}>
        <Typography variant="h5">{section2.title}</Typography>
        <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
          {section2.subtitle}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {section2.content}
        </Typography>
      </Box>

      <Box marginTop={2}>
        <Typography variant="subtitle1">{section202.subtitle}</Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {section202.content}
        </Typography>
      </Box>

      <Box marginTop={4}>
        <Typography variant="h5">{section3.title}</Typography>
        <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
          {section3.subtitle}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {section3.content}
        </Typography>
      </Box>

      <Box marginTop={2}>
        <Typography variant="subtitle1">{section302.subtitle}</Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {section302.content}
        </Typography>
      </Box>

      <Box marginTop={4}>
        <Typography variant="h5">{section4.title}</Typography>
        <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
          {section4.subtitle}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {section4.content}
        </Typography>
      </Box>

      <Box marginTop={2}>
        <Typography variant="subtitle1">{section402.subtitle}</Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {section402.content}
        </Typography>
      </Box>

      <Box marginTop={4}>
        <Typography variant="h5">{section5.title}</Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {section5.content.split('\n\n')[0]}
        </Typography>
        <List sx={{ marginTop: 1 }}>
          {section5.content.split('\n\n')[1].split('\n').map((item, index) => (
            <ListItem key={index} sx={{ display: 'list-item' }}>
              <Typography variant="body1">{item}</Typography>
            </ListItem>
          ))}
        </List>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {section501.content}
        </Typography>
      </Box>

      <Box marginTop={4}>
        <Typography variant="h5">{section6.title}</Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {section6.content}
        </Typography>
      </Box>

      <Box marginTop={4}>
        <Typography variant="h5">{section7.title}</Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {section7.content}
        </Typography>
      </Box>
    </Box>
    </>
  );
}

export default PrivacyPolicy;