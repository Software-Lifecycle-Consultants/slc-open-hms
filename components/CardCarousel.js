// components/CardCarousel.js
import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import Card from './Card';

const CardCarousel = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <Card {...cards[currentCardIndex]} />
      <Box mt={2}>
        <Button variant="outlined" onClick={handlePrevCard}>Previous</Button>
        <Button variant="outlined" onClick={handleNextCard}>Next</Button>
      </Box>
    </Box>
  );
};

export default CardCarousel;
