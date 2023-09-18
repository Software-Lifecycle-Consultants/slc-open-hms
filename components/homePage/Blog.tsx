import {
  Grid,
  Typography,
} from "@mui/material";
import React from "react";;
import DestinationCardDetails from "./DestinationCardDetails";

/* Data for destination cards */
const destinationCardData = [
  {
    id: 1,
    image: "/images/homePage/blogImages/Turkey2.png",
    city: "Cappadocia",
    description:
      "The red and orange sand of the desert are very beautiful, let's take a trip here",
    price: 150,
  },
  {
    id: 2,
    image: "/images/homePage/blogImages/Namibia2.png",
    city: "Sossusvlei",
    description:
      "Famous for its hot air balloons and we can see its natural beauty from above",
    price: 200,
  },
  {
    id: 3,
    image: "/images/homePage/blogImages/New Mexico2.png",
    city: "Albuquerque",
    description:
      "A cool trip because the various scenery around will be very eye-catching",
    price: 180,
  },
];

/* Section details for destination cards */
const destinationCardSection = {
  title: "Destinations Most Popular",
  description: "Some of the most popular destinations for you visit with a view the beautiful one.",
};

/* Styles for typography - Heading 1 */
const typographyh1Styles = {
  color: "#0C111F",
  fontFamily: "Inter",
  fontSize: "48px",
  lineHeight: "130%",
  fontStyle: "normal",
  letterSpacing: "-0.48px",
  fontWeight: "700",
};

/* Styles for typography - Body 2 */
const typographybody2Styles = {
  color: "#0C111F",
  fontFamily: "Inter",
  fontSize: "20px",
  lineHeight: "180%",
  fontStyle: "normal",
  fontWeight: "400",
  marginTop: "5px",
};

/* Blog functional component */
const Blog = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          {/* Heading 1 */}
          <Typography variant="h1" style={typographyh1Styles}>
            {destinationCardSection.title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* Body 2 */}
          <Typography variant="body2" style={typographybody2Styles}>
            {destinationCardSection.description}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
        {destinationCardData.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <>
              {/* Destination card details component */}
              <DestinationCardDetails
                image={item.image}
                city={item.city}
                description={item.description}
                price={item.price}
              />
            </>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Blog;
