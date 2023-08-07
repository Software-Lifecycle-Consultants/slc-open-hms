import { Button, Typography } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <div>
      <Typography
        variant="h5"
        style={{
          color: "#E97458",
          fontFamily: "Inter",
          textTransform: "uppercase",
          fontWeight: 700,
        }}
      >
        The best deals on the world's best destinations
      </Typography>
      <br />
      <Typography
              variant="h1"
             
        style={{
          color: "#FFF",
          fontFamily: "Volkhov",
          fontSize: "80px",
          fontWeight: 700,
          lineHeight: "100px",
          letterSpacing: "-3.2px",
        }}
      >
        Best travel and destinations
      </Typography>
      <Typography
        variant="body1"
        style={{
          color: "rgba(255, 255, 255, 0.70)",
          fontFamily: "Inter, sans-serif",
          fontSize: "24px",
          fontWeight: 400,
          lineHeight: "35px",
          letterSpacing: "-0.96px",
          width: "100%",
        }}
      >
        With travala you can experience new travel and the best tourist
        destinations that we have to offer
      </Typography>
      <br />
      <Button
        variant="contained"
        style={{
          display: "inline-flex",
          padding: "16px 24px",
          justifyContent: "center",
          alignItems: "center",
          gap: "14px",
          borderRadius: "100px",
          textTransform: "none",
          fontWeight: "bold",
          color: "#0C111F",
          background:
            "var(--l-2, linear-gradient(135deg, #F9EC7D 0%, #F5B100 100%))",
        }}
      >
        Our Destination
      </Button>
      <Button
        variant="text"
        style={{
          color: "#FFF",
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "180%",
          letterSpacing: "0.36px",
          margin: "5px",
          textTransform: "none",
        }}
      >
        Our Gallery
      </Button>
    </div>
  );
};

export default Banner;