import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@mui/material';

interface BannerProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
}

const titleStyle = {
  color: '#E97458',
  fontFamily: 'Inter',
  textTransform: 'uppercase',
  fontWeight: 700,
};

const subtitleStyle = {
  color: '#FFF',
  fontFamily: 'Volkhov',
  fontSize: '80px',
  fontWeight: 700,
  lineHeight: '100px',
  letterSpacing: '-3.2px',
};

const descriptionStyle = {
  color: 'rgba(255, 255, 255, 0.70)',
  fontFamily: 'Inter, sans-serif',
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '35px',
  letterSpacing: '-0.96px',
  width: '100%',
};

const primaryButtonStyle = {
  display: 'inline-flex',
  padding: '16px 24px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '14px',
  borderRadius: '100px',
  textTransform: 'none',
  fontWeight: 'bold',
  color: '#0C111F',
  background: 'var(--l-2, linear-gradient(135deg, #F9EC7D 0%, #F5B100 100%))',
};

const secondaryButtonStyle = {
  color: '#FFF',
  fontFamily: 'Inter, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '180%',
  letterSpacing: '0.36px',
  margin: '5px',
  textTransform: 'none',
};

function Banner({
  title,
  subtitle,
  description,
  primaryButtonLabel,
  secondaryButtonLabel,
}:BannerProps) {
  return (
    <div>
      <Typography variant="h5" sx={titleStyle}>
        {title}
      </Typography>
      <br />
      <Typography variant="h1" sx={subtitleStyle}>
        {subtitle}
      </Typography>
      <Typography variant="body1" sx={descriptionStyle}>
        {description}
      </Typography>
      <br />
      <Button variant="contained" sx={primaryButtonStyle}>
        {primaryButtonLabel}
      </Button>
      <Button variant="text" sx={secondaryButtonStyle}>
        {secondaryButtonLabel}
      </Button>
    </div>
  );
}

export default Banner;
