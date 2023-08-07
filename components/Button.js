import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { css } from '@emotion/react';

const buttonStyle = css`
  background-color: #000;
  color: #fff;
  font-family: cursive;
  /* Add any other custom styles for the button here */
`;

const CustomButton = styled(MuiButton)`
  ${buttonStyle}
`;

const Button = ({ children, ...props }) => {
  return (
    <CustomButton {...props}>
      {children}
    </CustomButton>
  );
};

export default Button; // Don't forget to export the component with 'export default'
