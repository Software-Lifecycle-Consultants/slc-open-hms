"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery, Card, CardContent, Box } from '@mui/material';
import Image from 'next/image';

const LogoImageSlider: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const isTablet = useMediaQuery('(min-width:768px) and (max-width:1023px)');

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
  };

  const cardStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px', // Adjust the card height as needed
    width: '100%', // Set width to ensure 5 items are shown in web view
    borderColor: 'white', // Set the border color to white
    borderWidth: '0px', // Set border width to 0
    borderRadius: '0px', // Set border radius to 0
    boxShadow: 'none', // Remove any box shadow
  };

  return (
    <Slider {...settings}>
      <Box>
        <Card style={cardStyles}>
          <Image src="/images/clientLogos/alitalia.png" alt="Image 1" width={162} height={32} />
        </Card>
      </Box>
      <Box>
        <Card style={cardStyles}>
          <Image src="/images/clientLogos/axon.png" alt="Image 2" width={162} height={32} />
        </Card>
      </Box>
      <Box>
        <Card style={cardStyles}>
          <Image src="/images/clientLogos/expedia.png" alt="Image 3" width={162} height={32} />
        </Card>
      </Box>
      <Box>
        <Card style={cardStyles}>
          <Image src="/images/clientLogos/jetstar.png" alt="Image 4" width={162} height={32} />
        </Card>
      </Box>
      <Box>
        <Card style={cardStyles}>
          <Image src="/images/clientLogos/quantas.png" alt="Image 5" width={162} height={32} />
        </Card>
      </Box>
    </Slider>
  );
};

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
}

export default LogoImageSlider;
