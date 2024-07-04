"use client"
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import { Box, Typography } from "@mui/material";
import { mulish } from "../../../app/fonts";
import { checkListText } from "@/data/checkoutPage";

const CheckList = () => {
  /* Functional component for the checklist */
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <List
      sx={{
        width: "100%",
        marginTop: "20px",
        position: "relative",
        overflow: "auto",
        maxHeight: 120,
        "& ul": { padding: 0 },
      }}
    >
      {[0, 1, 2, 3, 4].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} disablePadding>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "",
                width: "100%",
                margin: "4px 0px",
                padding: "0px 10px",
              }}
            >
              {/* Checkbox component */}
              <Checkbox
                {...label}
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 25 },
                  color: "#FFF",
                  "&.Mui-checked": {
                    color: "#FFF",
                  },
                }}
              />
              {/* Activity label */}
              <Typography
                variant="h4" color='#FFFFFF' marginTop='0.75rem' lineHeight='1.2rem'
              >
                {checkListText.activityTitle}
              </Typography>
              {/* Price label */}
              <Typography
                variant="h4" color='#FFFFFF' marginTop='0.75rem' lineHeight='1.2rem' marginLeft='auto' fontWeight='700'
              >
                {checkListText.activityPrice}
              </Typography>
            </Box>
          </ListItem>
        );
      })}
    </List>
  );
};

export default CheckList;
