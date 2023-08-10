import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const CustomCard = ({ imageSrc, title, description }) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={imageSrc} alt="Card Image" />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
