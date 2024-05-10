
/* Assign Page routes and labels for navigation bar component of the website */
export const pages = [
  { label: "Home", route: "/" },
  { label: "Explore", route: "/explore" },
  { label: "Book Now", route: "/checkout" },
  { label: "Contact", route: "/contact-us" },
  { label: "Blog", route: "/blog"}
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
  { label: "Blog", route: "/blog"},
  { label: "Register", route: "/register" },
  { label: "Login", route: "/login" },
];

/* Assign array of pages and their corresponding routes to the navigation drawer component of the website */
export const adminDrawerPages = [
  { label: "Dashboard", route: "/admin/dashboard" },
  { label: "Item", route: "/admin/item" },
  { label: "Blog", route: "/admin/blog" },
  { label: "Contact Us", route: "/admin/contact-us" },
  { label: "Settings", route: "/admin/settings" },
  { label: "Log Out", route: "/admin/logout" },
];


/* Assign data to the banner section of home page */
export const bannerDetails = {
  bannerTitle: "the best deals on the world's best destinations",
  bannerSubTitle: "Best travel and destinations",
  bannerDescription:
    "With travala you can experience new travel and the best tourist destinations that we have to offer",
  bannercta1Caption: "Our Destination",
  bannercta2Caption: "Our Gallery",
  modalTitle: "Booking request has been sent successfully  !",
  modalContentText: "We will get back to you with confirmation/ request update after checking availability.",
  captionButton: "ok",
  
};

/* Assign title, description and image to the custom card of the home page*/
export const cardDetails1 = {
  customCardTitle: "Get Experience Which are fun",
  customCardDescription:
    "With travala you can get the best experience on holiday travel, and we always update the latest and best destinations in the world",
  customCardImage: "/images/homePage/customCardImages/Turkey.webp",
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
    vedioURL: "https://www.youtube.com/embed/-s0vUJamgEw?si=SJ7ZVsD7GUGlhAEq&amp;start=20",
    city: "Cappadocia",
    description:
      "The red and orange sand of the desert are very beautiful, let's take a trip here",
    price: 150,
  },
  {
    id: 2,
    vedioURL: "https://www.youtube.com/embed/1IDGPPmSgF0?si=WptgaXyV8TvIl8co;start=20",
    city: "Sossusvlei",
    description:
      "Famous for its hot air balloons and we can see its natural beauty from above",
    price: 200,
  },
  {
    id: 3,
    vedioURL: "https://www.youtube.com/embed/dTFxqgwQ0d8?si=94d-MYnNQqCAVv1C;start=20",
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
export const Blog2 = {
  contactNowTitle: "Best travel and destinations",
  contactNowDescription:
    "With travala you can experience new travel and the best tourist destinations that we have to offer",
    contactNowCaption: "Our Destination",
    contactNowVedioLink: "https://www.youtube.com/embed/KCn5Gc38oO4?si=NbdIRYqi4ppm_64d"
};


/* Assign profile image, user name and testimonial of the user to the testimonials section of the home page */
export const userTestimonial = {
  userProfileImage: "/images/homePage/testimonialsImage/Profile.webp",
  userName: "Jhone Lown",
  testimonial:
    "“A very pleasant experience, plus the service is very friendly, recommended for those who want to try!”",
    
  userProfileImage1: "/images/homePage/testimonialsImage/profile1.webp",
  userName1: "Kane Braen",
  testimonial1:
  "“Travala makes booking hotels a breeze! Love the variety of accommodations and the straightforward booking process. Great prices too!”",
      
  userProfileImage2: "/images/homePage/testimonialsImage/profile2.webp",
  userName2: "Adam lauvis",
  testimonial2:
  "“Travala exceeded my expectations! Easy to use, great deals, and excellent customer service. Will definitely be using them for all my future hotel bookings!”",
  testimonialButtonText: "Read More",
  testimonialButtonLink: "https://business.google.com/reviews",
  };

/* Assign logo, description, other texts and social media icons to the footer section of the website */
export const footerContent = {
  footerSectionLogoImage: "/images/homePage/footerImages/logoDark.webp",
  footerSectionDescription:
    "With travala you can experience new travel and the best tourist destinations that we have to offer",
  footerSectionText1: "Products",
  destination1: "Product 1",
  destination2: "Product 2",
  destination3: "Product 3",
  footerSectionText2: "About",
  customText1: "Contact Us",
  customText2: "Testimoni",
  customText3: "Rating",
  footerSectionText3: "Follow Us",
  socialMediaIcon1: "/images/homePage/footerImages/facebook.webp",
  socialMediaText1: "Facebook",
  socialMediaLink1: "https://web.facebook.com/profile.php?id=100095424093550",
  socialMediaIcon2: "/images/homePage/footerImages/twitter.webp",
  socialMediaText2: "Twitter",
  socialMediaLink2: "https://twitter.com/softwareCnslt",
  socialMediaIcon3: "/images/homePage/footerImages/instagram.webp",
  socialMediaText3: "Instagram",
  socialMediaLink3: "https://www.linkedin.com/company/software-lifecycle-consultants/",
  TermsConditionText: "Terms and Conditions",
  TermsConditionLink: "/terms-condition",
  CompanyNameText: "Travala",
  PrivacyPolicyText: "Privacy Policy",
  PrivacyPolicyLink: "/privacy-policy",
};

// error modal variable
export const dialogBox ={
  errormodalTitle: "Please Try Again !",
  errorContentText: "We seem to be facing a problem while sending your request .",
  errorcaptionButton: "Try again",
};


export const currentYear = new Date().getFullYear();

export const cookieData ={
  cookieDescription: "We collect your data in order to improve your experience in the form of cookies.",
  cookieButtonCaption: "Accept",
  cookieButtonCaptionReject: "Reject",
}
