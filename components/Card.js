// components/Card.js
import React from 'react';
import { Button, Card as MuiCard, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const Card = ({ image, text, buttonText, onClick }) => {
  return (
    <MuiCard>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={text}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary" onClick={onClick}>
          {buttonText}
        </Button>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
