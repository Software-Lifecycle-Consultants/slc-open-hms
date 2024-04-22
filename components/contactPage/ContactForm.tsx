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

interface ContactFormData {
  firstname: string;
  lastname: string;
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
    firstname: "",
    lastname: "",
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

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const clearFormData = () => {
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      country: "",
      subject: "",
      message: "",
    });
    setSubmitMessage("");
    setErrorMessages([]);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    PostApiData();
    console.log("Contact Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card
        sx={{
          width: "100%",
          height: "700px",

          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <CardContent>
          <Grid container spacing={4} sx={{ padding: "20px 30px 20px 30px" }}>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                fullWidth
                variant="outlined"
                type="firstName"
                value={formData.firstname}
                onChange={(e) => handleChange(e, "firstName")}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name"
                fullWidth
                variant="outlined"
                type="lastName"
                value={formData.lastname}
                onChange={(e) => handleChange(e, "lastName")}
                required
              />
            </Grid>
            <Grid item xs={12}>
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
          <Grid container spacing={4} sx={{ padding: "20px 30px 20px 30px" }}>
            <Grid
              item
              xs={6}
              sx={{
                color: "#11142D",
              }}
            >
              <PhoneInput
                country={"Sri Lanka"}
                enableSearch={true}
                value={phone}
                placeholder="Enter phone number"
                onChange={(phone) => setPhone(phone)}
                inputStyle={{
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item xs={6}>
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
                {countries.map((country) => (
                  <MenuItem key={country.cca2} value={country.cca2}>
                    {country.name.common}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Grid container spacing={4} sx={{ padding: "20px 30px 20px 30px" }}>
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
              />
            </Grid>
          </Grid>
        </CardContent>
        <Box sx={{ textAlign: "right", padding: "0 40px 30px" }}>
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
