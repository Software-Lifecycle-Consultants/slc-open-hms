"use client"
import React from "react";
import { Grid, Typography } from "@mui/material";
import { lora } from "../../../app/fonts";
import { headingBook } from "@/data/roomDetails";

const HeadingBook = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Typography
          mt={2}
            variant="h1"
            className={lora.className}
           
          >
            {headingBook.roomDetailsPageTitle}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default HeadingBook;
