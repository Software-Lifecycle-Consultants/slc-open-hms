"use client";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { postData } from "@/services/api";
import HeaderSection from "@/components/contactPage/HeaderSection";
import { Box } from "@mui/material";
import ContactCard from "@/components/contactPage/ContactCard";

//Contact data captured from the front-end
interface ContactData {
  name: string;
  email: string;
  message: string;
}

/**
 * ContactUs component represents the Contact Us screen of the website.
 * It includes feilds to input user's name, email, messsge and Submit button.
 */

const ContactUs = () => {
  /*const [formData, setFormData] = useState<ContactData>({
    name: '',
    email: '',
    message: '',
  });

  const postApiData = async () => {
    try {
      //save base url in a config file later
      const result = await postData('https://slc-open-hms-api.azurewebsites.net/api/Contacts', formData)
        .then((response) => {
          console.log("Post Request Successful:", response);
          clearFormData();
          console.log(response);
        });

    }
    catch (error) {
      console.error('Error making POST request:', error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const clearFormData = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    postApiData();
    console.log('Form Data:', formData);
  };*/

  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          color: "white",
          height: { xs: "200px", sm: "250px", md: "300px", lg: "300px" },
          width: "100%",
          display: "inline-block",
          marginLeft: { xs: "10px", sm: "15px", md: "30px", lg: "60px" },
          paddingBottom: "10px",
        }}
      >
        <HeaderSection />
      </Box>

      <Box
        sx={{
          display: "flex",
        }}
      >
        <ContactCard />
      </Box>
    </>
  );
};

export default ContactUs;
