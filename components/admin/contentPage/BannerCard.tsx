import React from 'react';
import { TextField, Grid } from '@mui/material';

const BannerCard: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {Array.from({ length: 4 }).map((_, index) => (
        <Grid item xs={12} key={index}>
          <TextField fullWidth label={`Banner Card Text Field ${index + 1}`} variant="outlined" />
        </Grid>
      ))}
    </Grid>
  );
};

export default BannerCard;
