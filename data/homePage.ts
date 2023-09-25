/* Assign Page routes and labels for navigation bar component of the website */
export const pages = [
  { label: "Home", route: "/" },
  { label: "Explore", route: "./explore" },
  { label: "Book Now", route: "./checkout" },
  { label: "Contact", route: "./contact-us" },
];

/* Assign button labels to the navigation bar component of the website */
export const navBarButtons = {
  navBarcta1Caption: "Register",
  navBarcta2Caption: "Login",
};

/* Assign array of pages and their corresponding routes to the navigation drawer component of the website */
export const drawerPages = [
  { label: "Home", route: "/" },
  { label: "Explore", route: "/explore" },
  { label: "Book Now", route: "/checkout" },
  { label: "Contact", route: "/contact-us" },
  { label: "Register", route: "/register" },
  { label: "Login", route: "/login" },
];

/* Assign data to the banner section of home page */
export const bannerDetails = {
  bannerTitle: "the best deals on the world's best destinations",
  bannerSubTitle: "Best travel and destinations",
  bannerDescription:
    "With travala you can experience new travel and the best tourist destinations that we have to offer",
  bannercta1Caption: "Our Destination",
  bannercta2Caption: "Our Gallery",
};

/* Assign title, description and image to the custom card of the home page*/
export const cardDetails1 = {
  customCardTitle: "Get Experience Which are fun",
  customCardDescription:
    "With travala you can get the best experience on holiday travel, and we always update the latest and best destinations in the world",
  customCardImage: "/images/homePage/customCardImages/Turkey.png",
};

/* Assign other details to the custom card of the home page */
export const cardDetails2 = [
  {
    id: "1",
    title: "Affordable prices",
    description: "We provide some very affordable prices compared to others.",
  },
  {
    id: "2",
    title: "Unforgettable experience",
    description: "We provide a vacation experience that will be unforgettable.",
  },
  {
    id: "3",
    title: "Very Friendly Service",
    description:
      "We will provide excellent and friendly service for the sake of our customers.",
  },
];

/* Assign array of client logos with their corresponding IDs and image paths to the logo carousel of the home page */
export const clientLogos = [
  { id: 1, logoImage: "/images/homePage/clientLogos/alitalia.png" },
  { id: 2, logoImage: "/images/homePage/clientLogos/axon.png" },
  { id: 3, logoImage: "/images/homePage/clientLogos/expedia.png" },
  { id: 4, logoImage: "/images/homePage/clientLogos/jetstar.png" },
  { id: 5, logoImage: "/images/homePage/clientLogos/qantas.png" },
];

/* Assign title and description to blog section of home page */
export const blogSection = {
  blogSectionTitle: "Destinations Most Popular",
  blogSectionDescription:
    "Some of the most popular destinations for you visit with a view the beautiful one.",
};

/* Assign data to blog section cards of home page */
export const blogCardData = [
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

/* Assign custom texts and button label to the blog card */
export const blogCardText = {
  customTag1: "price",
  customTag2: "/Person",
  blogctaCaption: "Ticket booking",
};

/* Assign profile image, user name and testimonial of the user to the testimonials section of the home page */
export const userTestimonial = {
  userProfileImage: "/images/homePage/testimonialsImage/Profile.png",
  userName: "Jhone Lown",
  testimonial:
    "“A very pleasant experience, plus the service is very friendly, recommended for those who want to try!”",
};

/* Details for the testimonial section. */
export const testimonialSectionDetails = {
  testimonialsSectionTitle: "Testimonials Travala Customers",
  testimonialsSectionDescription:
    "What our customers have to say about our service, check below!",
};

/* Assign logo and description to the footer section of the website */
export const footerContent = {
  footerSectionLogoImage: "/images/homePage/footerImages/logoDark.png",
  footerSectionDescription:
    "With travala you can experience new travel and the best tourist destinations that we have to offer",
};
