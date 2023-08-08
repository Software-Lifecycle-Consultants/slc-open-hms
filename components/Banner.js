import { Button, Typography } from "@mui/material";
import React from "react";
import { descriptionStyle, primaryButtonStyle, secondaryButtonStyle, subtitleStyle, titleStyle } from "../styles/theme";

const Banner = ({title, subtitle, description, primaryButtonLabel, secondaryButtonLabel}) => {
  return (
    <div>
      <Typography variant="h5" style={titleStyle}>
        {title}
      </Typography>
      <br />
      <Typography variant="h1" style={subtitleStyle}>
        {subtitle}
      </Typography>
      <Typography variant="body1" style={descriptionStyle}>
        {description}
      </Typography>
      <br />
      <Button variant="contained" style={primaryButtonStyle}>
        {primaryButtonLabel}
      </Button>
      <Button variant="text" style={secondaryButtonStyle}>
        {secondaryButtonLabel}
      </Button>
    </div>
  );
};

export default Banner;