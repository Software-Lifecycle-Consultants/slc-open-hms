import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const CustomCard = ({ imageSrc, title, description }) => {
  const cardStyle = {
    backgroundColor: "green", // Set the background color of the card
    padding: "16px", // Add padding for better spacing
    height: "600px", // Set a fixed height for the card
  };

  const imageStyle = {
    width: "70%", // Set the desired width for the image
    height: "auto", // Set the height for the image
    objectFit: "cover", // Maintain aspect ratio
  };

  return (
    <Card style={cardStyle}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CardMedia component="img" style={imageStyle} image={imageSrc} alt="Card Image" />
           <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={6}>
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CustomCard;
