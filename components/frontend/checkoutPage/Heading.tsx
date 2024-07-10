import React from 'react'
import {
  Grid,
  Typography,
} from "@mui/material";
import { heading } from '@/data/checkoutPage';
import { lora, mulish } from "../../../app/fonts";
import { themeClient } from '@/styles/Theme';

const Heading = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <Typography
            variant='h2' marginTop='1.563rem'
          >
            {heading.checkoutPageMainTitle}
          </Typography>
          <Typography
            variant='h4' marginTop='0.625rem' color={themeClient.palette.text.primary}
          >
            {heading.checkoutPageDescription}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Heading
