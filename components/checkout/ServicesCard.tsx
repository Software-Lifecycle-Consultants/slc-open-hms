import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const ServicesCard = () => {
  return (
    <>
      <Card
        elevation={0}
        sx={{
          height: "auto",
          maxWidth: "816px",
          border: "1px solid",
          borderRadius: "8px",
          borderColor: "var(--light-separators-colors-secondary, #E1E1E1)",
        }}
      >
        <CardContent>
          <Typography
            variant="h1"
            style={{
              color: "var(--light-text-color-title, #11142D)",
              fontFamily: "Lora",
              fontSize: "24px",
              lineHeight: "120%",
              fontStyle: "normal",
              letterSpacing: "0.12px",
              fontWeight: "700",
              marginTop: "10px",
            }}
          >
            Request meals and other services
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default ServicesCard
