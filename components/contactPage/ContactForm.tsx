import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  MenuItem,
  Grid,
  Button,
  Select,
  Box,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { postData } from "@/services/api";

/*
This component represents a contact form where users can enter their details and submit a message.
 * It includes fields for first name, last name, email, phone number, country, subject, and message.
*/

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  subject: string;
  message: string;
}

interface Country {
  cca2: string;
  name: { common: string };
}

const ContactForm = ({}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    subject: "",
    message: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  // Fetch countries data from an API on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (response.ok) {
          const data = await response.json();
          setCountries(data);
        } else {
          console.error("Failed to fetch countries:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // Function to make a POST request to submit form data to the backend API
  const PostApiData = async () => {
    try {
      //save base url in a config file later
      const result = await postData(
        "https://slc-open-hms-api.azurewebsites.net/api/Contacts",
        formData
      ).then((response) => {
        console.log("Post Request Successful:", response);
        clearFormData();
        console.log(response);
      });
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  // Function to handle form field changes
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  // Function to clear form data, submit message, and error messages
  const clearFormData = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      subject: "",
      message: "",
    });
    setSubmitMessage("");
    setErrorMessages([]);
  };

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    PostApiData();
    console.log("Contact Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Card component representing the contact form */}
      <Card
        sx={{
          width: "100%",
          height: "700px",

          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <CardContent sx={{}}>
          {/* Grid container for form fields */}
          <Grid
            container
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{
              padding: { xs: "10px 20px 10px 20px" },
              display: { xs: "block", sm: "flex", md: "flex", lg: "flex" },
            }}
          >
            {/* First Name field */}
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                label="First Name"
                fullWidth
                variant="outlined"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleChange(e, "firstName")}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              {/* Last Name field */}
              <TextField
                label="Last Name"
                fullWidth
                variant="outlined"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleChange(e, "lastName")}
                required
              />
            </Grid>
            <Grid item xs={12}>
              {/* Email Address field */}
              <TextField
                label="Email Address"
                fullWidth
                variant="outlined"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange(e, "email")}
                required
              />
            </Grid>
          </Grid>
          {/* Second Grid container for phone number and country fields */}
          <Grid
            container
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{ padding: { xs: "10px 20px 10px 20px" } }}
          >
            {/* Phone Number field */}
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              sx={{
                color: "#11142D",
              }}
            >
              {/*The component for phone number input is imported from react-phone-input-2 library*/}
              <PhoneInput
                country={"Sri Lanka"}
                enableSearch={true}
                value={phone}
                placeholder="Add phone number"
                onChange={(phone) => setPhone(phone)}
                inputStyle={{
                  width: "100%",
                  fontFamily: "Mulish",
                }}
              />
            </Grid>
            {/* Country field */}
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                select
                label="Country"
                fullWidth
                value={country}
                variant="outlined"
                onChange={(country) =>
                  setCountry(country.target.value as string)
                }
              >
                {/* Menu items for country selection */}
                {countries.map((country) => (
                  <MenuItem key={country.cca2} value={country.cca2}>
                    {country.name.common}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          {/* Third Grid container for subject and message fields */}
          <Grid
            container
            spacing={{ xs: 1, sm: 1, md: 4 }}
            sx={{ padding: { xs: "10px 20px 10px 20px" } }}
          >
            {/* Subject field */}
            <Grid item xs={12}>
              <TextField
                label="Subject"
                fullWidth
                variant="outlined"
                type="subject"
                value={formData.subject}
                onChange={(e) => handleChange(e, "subject")}
              ></TextField>
            </Grid>
            {/* Message field */}
            <Grid item xs={12}>
              <TextField
                label="Message"
                fullWidth
                multiline
                rows={6}
                variant="outlined"
                type="message"
                value={formData.message}
                onChange={(e) => handleChange(e, "message")}
                required
              />
            </Grid>
          </Grid>
        </CardContent>
        {/* Box container for submit button */}
        <Box sx={{ textAlign: "right", padding: "0 40px 30px" }}>
          {/* Submit button */}

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#D7A754",
              color: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              padding: "12px 24px",
              textTransform: "none",

              "&:hover": {
                backgroundColor: "#C6944C",
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default ContactForm;
