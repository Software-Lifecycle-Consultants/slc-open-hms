// pages/index.js
import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import globalStyles from '../styles/globalStyles';
import theme from '../styles/theme';
import CardCarousel from '../components/CardCarousel';
import MyComponent from '../components/MyComponent';
//import { Button } from '@mui/material';
import Button from '../components/Button'; // Import the Button component
import HomeScreen from './screens/HomeScreen';


const cards = [
  {
    image: '/images/Turkey.png',
    text: 'Turkey description',
    buttonText: 'About Turkey',
    onClick: () => console.log('Button 1 clicked'),
  },
  {
    image: '/images/bali.jpg',
    text: 'Bali description',
    buttonText: 'About Bali 2',
    onClick: () => console.log('Button 2 clicked'),
  },
  {
    image: '/images/france.jpg',
    text: 'France description',
    buttonText: 'About France',
    onClick: () => console.log('Button 3 clicked'),
  },
  // Add more cards as needed
];


const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {/* <div>
      <h1>Welcome to HMS !</h1>
      <CardCarousel cards={cards} />
      <MyComponent/>
    </div> */}
      {/* <div>
        <h1>Welcome to Next.js with Emotion and MUI</h1>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </div> */}
      <>
        <HomeScreen />
      </>
    </ThemeProvider>
  );
};

export default Home;
