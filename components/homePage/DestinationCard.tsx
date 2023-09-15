import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'

interface DestinationCardProps {
  image: string;
  city: string;
  description: string;
  price: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  image,
  city,
  description,
  price,
}) => {
  return (
    <>
      <Card
        elevation={0}
        sx={{
          maxWidth: 345,
          borderRadius: "20px",
          backgroundColor: "#F7F7F7",
        }}
      >
        <Box
          style={{
            position: "relative",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          <Image
            src={image}
            alt="test"
            width={400}
            height={284}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "20px 20px 0px 0px",
              flexShrink: 0,
            }}
          />
        </Box>
        <CardContent
          sx={{
            borderRadius: "0px 0px 30px 30px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            style={{
              color: "#0C111F",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "24px",
              lineHeight: "26px",
              fontStyle: "normal",
              fontWeight: "700",
            }}
          >
            {city}
          </Typography>
          <Typography
            variant="body2"
            style={{
              color: "rgba(12, 17, 31, 0.60)",
              fontFamily: "Inter",
              fontSize: "18px",
              lineHeight: "180%",
              fontStyle: "normal",
              fontWeight: "400",
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            borderRadius: "0px 0px 30px 30px",
            backgroundColor: "#F7F7F7",
          }}
        >
          <Box>
            <Typography
              gutterBottom
              variant="body2"
              style={{
                color: "rgba(12, 17, 31, 0.60)",
                fontFamily: "Inter",
                fontSize: "18px",
                lineHeight: "155%",
                fontStyle: "normal",
                fontWeight: "400",
                letterSpacing: "-0.18px",
              }}
            >
              price
            </Typography>
            <Box style={{ display: "flex" }}>
              <Typography
                style={{
                  color: "#0C111F",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "24px",
                  lineHeight: "28px",
                  fontStyle: "normal",
                  fontWeight: "700",
                }}
              >
               ${price}
              </Typography>

              <Typography
                style={{
                  color: "rgba(12, 17, 31, 0.60)",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  lineHeight: "155%",
                  fontStyle: "normal",
                  fontWeight: "400",
                  letterSpacing: "-0.18px",
                }}
              >
                /Person
              </Typography>
            </Box>
          </Box>
          <Box
            style={{
              marginLeft: "60px",
            }}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "#7C46FE",
                borderRadius: "45px",
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "14px",
                lineHeight: "180%",
                fontStyle: "normal",
                letterSpacing: "-0.14px",
                fontWeight: "500",
              }}
            >
              Ticket booking
            </Button>
          </Box>
        </CardActions>
      </Card>
    </>
  );
};

export default DestinationCard
