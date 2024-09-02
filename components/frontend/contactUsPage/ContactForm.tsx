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
  Typography,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { postData } from "@/services/api";
import { contactSeo } from "@/data/seo";
import { validateFormData } from "@/utils/validation";
import { contactFormSchema } from "@/schemas/frontendcontactForm.schema";
/*
This component represents a contact form where users can enter their details and submit a message.
 * It includes fields for first name, last name, email, phone number, country, subject, and message.
*/
// Define the form data type based on your schema
type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  subject: string;
  message: string;
};

// Interface for country data fetched from the API
interface Country {
  cca2: string;
  name: { common: string };
}

const ContactForm: React.FC = () => {
  // State to manage the form data
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    subject: "",
    message: "",
  });
  // State to manage validation errors
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  // State to store the list of countries fetched from the API
  const [countries, setCountries] = useState<Country[]>([]);
  // State to manage selected country
  const [country, setCountry] = useState("");
  // State to manage phone number input
  const [phone, setPhone] = useState("");

  // Fetch countries data from an API on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (response.ok) {
          const data = await response.json();
          setCountries(data);// Update state with fetched country data
        } else {
          console.error("Failed to fetch countries:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);
// Handle changes in the text fields and update the corresponding state
const handleChange = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = event.target;
  setFormData({
    ...formData,
    [name]: value, // Update the specific field in formData
  });
  setErrors({ ...errors, [name]: "" }); // Clear error message for the current field
};

// Handle changes in the phone input and update the corresponding state
const handlePhoneChange = (value: string) => {
  setPhone(value); // Update phone state
  setFormData({ ...formData, phone: value }); // Update phone in formData
  setErrors({ ...errors, phone: "" }); // Clear phone error message
};

// Handle form submission
const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Custom validation logic (initially assuming no errors)
  let hasErrors = false;
  const newErrors: Partial<ContactFormData> = {};

  // If no errors, proceed with form submission
  if (!hasErrors) {
    // Validate form data against schema
    const { errors: validationErrors, data } = validateFormData(
      contactFormSchema,
      { ...formData, country, phone }
    );

    if (validationErrors) {
      setErrors(validationErrors); // Set validation errors in state
    } else {
      PostApiData(data); // Submit form data if no validation errors
    }
  }
};
  // Function to make a POST request to submit form data to the backend API
  const PostApiData = async (data: ContactFormData) => {
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
    setCountry("");
    setPhone("");
    setErrors({});
  };
  return (
    // Form component with aria-label for accessibility
    <form onSubmit={handleSubmit}
    aria-label={contactSeo.contactFormAriaLabel1}
    >
      {/* Card component representing the contact form */}
      <Card
        sx={{
          width: "100%",
          height: "auto",

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
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
                aria-label={contactSeo.contactFormAriaLabel2}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              {/* Last Name field */}
              <TextField
                label="Last Name"
                fullWidth
                variant="outlined"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
                aria-label={contactSeo.contactFormAriaLabel3}
              />
            </Grid>
            <Grid item xs={12}>
              {/* Email Address field */}
              <TextField
                label="Email Address"
                fullWidth
                variant="outlined"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                aria-label={contactSeo.contactFormAriaLabel4}
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
            >
              {/*The component for phone number input is imported from react-phone-input-2 library*/}
              <PhoneInput
                country={"Sri Lanka"}
                enableSearch={true}
                value={phone}
                placeholder="Add phone number"
                onChange={handlePhoneChange}
                inputStyle={{
                  width: "100%",
                  fontFamily: "Mulish",
                  fontSize: "16px",
                  color:"#9A9AB0",
                  fontWeight: "bold",
                  borderColor: errors.phone ? "#d32f2f" : "rgba(0, 0, 0, 0.23)",
                  }}
                  aria-label={contactSeo.contactFormAriaLabel5}
              />
              {errors.phone && (
                <Typography variant="h6" fontFamily="sans-serif" color="error" ml={2}>
                  {errors.phone}
                </Typography>
              )}
            </Grid>
            {/* Country field */}
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                select
                label="Country"
                fullWidth
                value={country}
                variant="outlined"
                onChange={(e) => {
                  setCountry(e.target.value);
                  setErrors({ ...errors, country: "" });
                }}
                error={!!errors.country}
                helperText={errors.country}
                aria-label={contactSeo.contactFormAriaLabel6}
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
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={!!errors.subject}
                helperText={errors.subject}
                aria-label={contactSeo.contactFormAriaLabel7}
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
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                aria-label={contactSeo.contactFormAriaLabel8}
              />
            </Grid>
          </Grid>
        </CardContent>
        {/* Box container for submit button */}
        <Box sx={{ textAlign: "right", padding: "0 40px 30px" }}>
          {/* Submit button */}
          <Button
            variant="contained"
            type="submit"
            sx={{
              color: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              padding: "12px 24px",
              textTransform: "none",
              mt:{ xs: 1 , sm: 1 , md: 2},
              "&:hover": {
                backgroundColor: "#C6944C",
              },
            }}
            aria-label={contactSeo.contactFormAriaLabel9}
          >
            Send Message
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default ContactForm;
