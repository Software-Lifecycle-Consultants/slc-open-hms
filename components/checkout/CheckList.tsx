"use client"
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import { Box, Typography } from "@mui/material";

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
                margin: "10px 0px",
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
                variant="h5"
                style={{
                  color: "#FFF",
                  fontFamily: "Mulish, sans-serif",
                  fontSize: "16px",
                  lineHeight: "120%",
                  fontStyle: "normal",
                  letterSpacing: "0.08px",
                  fontWeight: "600",
                  marginTop: "12px",
                }}
              >
                Activity
              </Typography>
              {/* Price label */}
              <Typography
                variant="h5"
                sx={{
                  color: "#FFF",
                  fontFamily: "Mulish, sans-serif",
                  fontSize: "16px",
                  lineHeight: "120%",
                  fontStyle: "normal",
                  letterSpacing: "0.08px",
                  fontWeight: "700",
                  marginTop: "12px",
                  marginLeft: { xs: "32%", sm: "66%", md: "62%", lg: "69%" },
                }}
              >
                + Rp. 230.000
              </Typography>
            </Box>
          </ListItem>
        );
      })}
    </List>
  );
};

export default CheckList;
