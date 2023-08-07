// components/MyComponent.js
import React from 'react';
import { Button, Typography } from '@mui/material';

const MyComponent = () => {
  return (
    <div>
      <Typography variant="h2" color="primary">
        Hello, This part is My Component.
      </Typography>
      <Button variant="contained" color="secondary">
        Click Me
      </Button>
    </div>
  );
};

export default MyComponent;
