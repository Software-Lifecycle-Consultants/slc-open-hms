import { Typography } from '@mui/material';
import React from 'react'

const Gallery = () => {
  return (
    <>
      <Typography
        variant="h3"
        style={{
          color: "var(--light-text-color-title, #11142D)",
          fontFamily: "Lora",
          fontSize: "39px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "120%",
          letterSpacing: "0.195px",
        }}
      >
        Room Gallery
      </Typography>
    </>
  );
}

export default Gallery
