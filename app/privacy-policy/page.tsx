import React from "react";
import { Metadata } from "next";
import {
  sectio5,
  section1,
  section102,
  section2,
  section202,
  section3,
  section302,
  section4,
  section402,
  section501,
  section6,
  section7,
  header1Details,
} from "@/data/privacypolicyPage";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export const metadata: Metadata = {
  title: "HMS Dev | Privacy Policy",
  description: "HMS System under development",
};

function PrivacyPolicy() {
  return (
    <Box
      maxWidth="1320px" /* Adjust max-width as needed */
      margin="0 auto" /* Center the container */
      padding="60px" /* Add padding */
    >
      <Typography variant="h2"><b>{header1Details.title}</b></Typography>

      <Box marginTop={7}>
      <Typography variant="subtitle1">
        <b>{header1Details.effectiveDate}</b>
      </Typography>
      <Typography variant="body1">{header1Details.description}</Typography>
      </Box>

      <Box marginTop={4}>
      <Typography variant="h5">{section1.title}</Typography>
      </Box>

      <Box marginTop={2}>
        <Typography variant="subtitle1">{section1.subtitle}</Typography>
        <List dense sx={{ marginTop: -1.8 }}>
          {section1.content.map((item, index) => (
            <ListItem key={index}sx={{ py: 0 }}>
              <Typography variant="body1">{item}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box marginTop={2}>
        <Typography variant="subtitle1">{section102.subtitle}</Typography>
        <List dense sx={{ marginTop: -1.8 }}>
          {section102.content.map((item, index) => (
            <ListItem key={index}sx={{ py: 0 }}>
              <Typography variant="body1">{item}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box marginTop={4}>
        <Typography variant="h5">{section2.title}</Typography>
      </Box>

      <Box marginTop={2}>
        <Typography variant="subtitle1">{section2.subtitle}</Typography>
        <List dense sx={{ marginTop: -1.8 }}>
          {section2.content.map((item, index) => (
            <ListItem key={index}sx={{ py: 0 }}>
              <Typography variant="body1">{item}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box marginTop={2}>
        <Typography variant="subtitle1">{section202.subtitle}</Typography>
        <Typography variant="body1" sx={{ marginTop: -1 }}>{section202.content}</Typography>
      </Box>

      <Box marginTop={4}>
        <Typography variant="h5">{section3.title}</Typography>
      </Box>
      <Box marginTop={2}>
        <Typography variant="subtitle1">{section3.subtitle}</Typography>
        <Typography variant="body1" sx={{ marginTop: -1 }}>{section3.content}</Typography>
      </Box>

      <Box marginTop={2}>
        <Typography variant="subtitle1">{section302.subtitle}</Typography>
        <Typography variant="body1" sx={{ marginTop: -1 }}>{section302.content}</Typography>
      </Box>

      <Box marginTop={4}>
        <Typography variant="h5">{section4.title}</Typography>
      </Box>

      <Box marginTop={2}>
        <Typography variant="subtitle1">{section4.subtitle}</Typography>
        <Typography variant="body1" sx={{ marginTop: -1 }}>{section4.content}</Typography>
      </Box>

      <Box marginTop={2}>
        <Typography variant="subtitle1">{section402.subtitle}</Typography>
        <Typography variant="body1" sx={{ marginTop: -1 }}>{section402.content}</Typography>
      </Box>

      <Box marginTop={4}>
        <Typography variant="h5">{sectio5.title}</Typography>
        <List dense sx={{ marginTop: -1.8 }}>
          {sectio5.content.map((item, index) => (
            <ListItem key={index}sx={{ py: 0 }}>
              <Typography variant="body1">{item}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box marginTop={-1}>
        <Typography variant="body1">{section501.content}</Typography>
      </Box>

      <Box marginTop={4}>
        <Typography variant="h5">{section6.Title}</Typography>
        <Typography variant="body1" sx={{ marginTop: -1 }}>{section6.content}</Typography>
      </Box>

      <Box marginTop={4}>
        <Typography variant="h5">{section7.Title}</Typography>
        <Typography variant="body1" sx={{ marginTop: -1 }}>{section7.content}</Typography>
      </Box>
    </Box>
  );
}

export default PrivacyPolicy;
