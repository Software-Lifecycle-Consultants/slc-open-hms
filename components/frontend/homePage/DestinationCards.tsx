import { blogCardText, dialogBox } from "@/data/homePage";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import * as React from "react";
import { montserrat } from "../../../app/fonts";
import { useRouter } from "next/navigation";

/* DestinationCardDetails component displays details of a destination in a card. */

interface BlogCardProps {
  vedioURL: string; // The image URL of the destination.
  city: string; // The name of the city.
  description: string; // A brief description of the destination.
  price: number; // The price per person for the destination.
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "85%", sm: "60%", md: "35%" },
  height: "auto",
  bgcolor: "background.paper",
  boxShadow: 50,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const BlogCard: React.FC<BlogCardProps> = ({
  vedioURL,
  city,
  description,
  price,
}) => {
  // set route to checkout page
  const router = useRouter();
  const navigationToBookNow = () => {
    router.push("/checkout");
  };
  return (
    <>
      {/* Card component */}
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
          {/* video component */}
          <iframe
            src={vedioURL}
            width="400"
            height="284"
            frameBorder="0"
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
          {/* Destination city */}
          <Typography gutterBottom variant="body1">
            {city}
          </Typography>
          {/* Destination description */}
          <Typography variant="h3" sx={{ opacity: 0.6 }}>
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
            {/* Price label */}
            <Typography gutterBottom variant="h3">
              {blogCardText.customTag1}
            </Typography>
            <Box style={{ display: "flex" }}>
              {/* Price per person */}
              <Typography fontSize={"20px"} fontFamily={"Mulish"}>
                ${price}
              </Typography>
              {/* Price per person label */}
              <Typography variant="h3" color={"#0C111F"} sx={{ opacity: 0.6 }}>
                {blogCardText.customTag2}
              </Typography>
            </Box>
          </Box>
          <Box
            padding={3}
            sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
          >
            {/* Button for ticket booking */}
            <Button
              variant="contained"
              onClick={navigationToBookNow}
              sx={{
                background:
                  "var(--l-2, linear-gradient(135deg, #8482FF 0%, #7723FE 100%))",
                borderRadius: "2.813rem",
                color: "white",
              }}
            >
              {blogCardText.blogctaCaption}
            </Button>
          </Box>
        </CardActions>
      </Card>
    </>
  );
};

export default BlogCard;
