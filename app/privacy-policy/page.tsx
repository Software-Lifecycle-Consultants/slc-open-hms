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

export const metadata: Metadata = {
  title: "HMS Dev | Privacy Policy",
  description: "HMS System under development",
};

function PrivacyPolicy() {
  return (
    <div
      style={{
        maxWidth: "1320x", /* Adjust max-width as needed */
        margin: "0 auto", /* Center the container */
        padding: "120px", /* Add padding */
      }}>
        
      <Typography variant="h3"><b>{header1Details.title}</b></Typography><br/>
      <Typography variant="subtitle1">
        <b>{header1Details.effectiveDate}</b>
      </Typography>
      <Typography variant="body1">{header1Details.description}</Typography>
      <br/>

      <Typography variant="h5">{section1.title}</Typography><br/>
      <Typography variant="subtitle1">{section1.subtitle}</Typography>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {section1.content.map((item, index) => (
          <li key={index}>
            <Typography variant="body1">{item}</Typography>
          </li>
        ))}
      </ul>
      

      <Typography variant="subtitle1">{section102.subtitle}</Typography>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {section102.content.map((item, index) => (
          <li key={index}>
            <Typography variant="body1">{item}</Typography>
          </li>
        ))}
      </ul>
      <br/>

      <Typography variant="h5">{section2.title}</Typography><br/>
      <Typography variant="subtitle1">{section2.subtitle}</Typography>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {section2.content.map((item, index) => (
          <li key={index}>
            <Typography variant="body1">{item}</Typography>
          </li>
        ))}
      </ul>

      <Typography variant="subtitle1">{section202.subtitle}</Typography>
      <Typography variant="body1">{section202.content}</Typography>
      <br/>

      <Typography variant="h5">{section3.title}</Typography><br/>
      <Typography variant="subtitle1">{section3.subtitle}</Typography>
      <Typography variant="body1">{section3.content}</Typography>
      <br/>

      <Typography variant="subtitle1">{section302.subtitle}</Typography>
      <Typography variant="body1">{section302.content}</Typography>
      <br/>

      <Typography variant="h5">{section4.title}</Typography><br/>
      <Typography variant="subtitle1">{section4.subtitle}</Typography>
      <Typography variant="body1">{section4.content}</Typography>
      <br/>

      <Typography variant="subtitle1">{section402.subtitle}</Typography>
      <Typography variant="body1">{section402.content}</Typography>
      <br/>

      <Typography variant="h5">{sectio5.title}</Typography>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {sectio5.content.map((item, index) => (
          <li key={index}>
            <Typography variant="body1">{item}</Typography>
          </li>
        ))}
      </ul>

      <Typography variant="body1">{section501.content}</Typography>
      <br/>

      <Typography variant="h5">{section6.Title}</Typography>
      <Typography variant="body1">{section6.content}</Typography>
      <br/>

      <Typography variant="h5">{section7.Title}</Typography>
      <Typography variant="body1">{section7.content}</Typography>
      <br/>
    </div>
  );
}

export default PrivacyPolicy;
