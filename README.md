# SLC Open HMS (Next.js)

![Hospitality Management System](public/hms-cover.png)

The SLC-Open-HMS is a web application built with Next.js that aims to streamline and optimize hotel operations, including reservations, room management, guest services, and more. This application provides an intuitive and efficient solution for hotel owners and staff to manage various aspects of their hotel business.

## Features

- **User Authentication**: Allow users to sign up, log in, and manage their accounts securely.

- **Room Booking**: Enable guests to view room availability, select room types, and make reservations.

- **Admin Dashboard**: Provide a comprehensive dashboard for hotel administrators to manage room inventory, reservations, and user accounts.

- **Guest Services**: Allow guests to request services, such as room cleaning, room service, and more.

- **Payment Integration**: Facilitate seamless payment processing for room bookings and services.

- **Real-time Updates**: Utilize real-time updates to notify users about reservation status and service requests.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Follow these instructions to set up the Hotel Management System project locally on your machine:

1. Clone the repository to your local machine:
 ```bash
git https://github.com/Software-Lifecycle-Consultants/slc-open-hms.git
cd  slc-open-hms
 ```
2. Instal Node modules and dependencies : 

```bash
npm install
 ```
Note : When you run npm install, it automatically installs all the dependencies listed in the package.json.
Below are the NPM packages (dependencies) used in this project. If any of the dependencies are not installed automatically, you can install them separately by executing the provided `npm install` commands.

- [@mui/material](https://mui.com/material-ui/getting-started/installation/) - Version 5.14.4
  - Material UI is a comprehensive library of components that features our implementation of Google's Material Design system.
  - Install the package in your project directory using the following commands.
 ```bash
npm install @mui/material @emotion/react @emotion/styled
 ```

- [@mui/icons-material](https://mui.com/material-ui/icons/) - Version 5.14.3
  - This package provides the Google Material Icons converted to SvgIcon components.
  - Install the package in your project directory using the following commands.
 ```bash
npm install @mui/icons-material
 ```

- [react-date-range](https://www.npmjs.com/package/react-date-range) - Version 1.4.4
  - A date library agnostic React component for choosing dates and date ranges. 
  - Uses date-fns for date operations.
  - Install the package in your project directory using the following commands.
 ```bash
npm install --save react-date-range
npm install --save react date-fns
 ```

- [react-slick](https://www.npmjs.com/package/react-slick) - Version 0.23.10
  - Carousel component built with React. It is a react port of slick carousel.
  - Also install slick-carousel for css and font
  - Install the pkg/s using the following commands and import skeleton and theme styles.
```bash
npm install react-slick --save
npm install slick-carousel
 ```
 
- [react-phone-input-2](https://www.npmjs.com/package/react-phone-input-2) - Version 2.15.1
  - A customizable phone input component with auto formatting.
  - Install the package in your project directory using the following commands.
```bash
npm install react-phone-input-2 --save
 ```
 
- [leaflet](https://www.npmjs.com/package/leaflet) - Version 1.9.4
  - An open-source JavaScript library for mobile-friendly interactive map
  - Install the package in your project directory using the following commands.
```bash
npm install leaflet
npm i leaflet-control-geocoder@1.8.3
 ```

3. Set up the environment variables:
  - Create a .env.local file in the root directory of the project.
  - Add the required environment variables, such as database connection strings, API keys, etc.
    
4. Run the development server:
 ```bash
npm run dev
# or
yarn dev
# or
pnpm dev
 ```
5. Open your browser and navigate to http://localhost:3000 to see the Hotel Management System in action.

## Contributing
We welcome contributions from the community! 

If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the project.
2. Create a new branch for your feature or bugfix: git checkout -b feature-name
3. Make your changes and commit them: git commit -m 'Description of your changes'
4. Push your changes to your fork: git push origin feature-name
5. Create a pull request on the original repository, explaining your changes.

## Learn More
To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js GitHub repository](https://github.com/vercel/next.js/) 

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) file for details.

## Acknowledgments
- Thanks to the Next.js community for creating an amazing framework for building modern web applications.
- Special thanks to all the contributors and beta testers who helped shape this project.

## Contact
For any inquiries or feedback, please contact us at hello@softwareconsultant.org  
Your feedback and contributions are welcome!

