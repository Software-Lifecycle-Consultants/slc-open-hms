"use client"
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {postData } from '@/services/api';

//contact data
interface ContactData{
  name:string;
  email:string;
  message:string;
}

function ContactUs() {
  const [formData, setFormData] = useState<ContactData>({
    name: '',
    email: '',
    message: '',
  });

  const postApiData = async () => {
    try {
      //save base url in a config file later
      const result = await postData('https://slc-open-hms-api.azurewebsites.net/api/Contacts',formData)
      .then((response)=>{console.log("Post Request Successful:",response);
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

  const clearFormData = ()=>{
    setFormData({
    name: '',
    email: '',
    message: '',});
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();     
    postApiData();
    console.log('Form Data:', formData);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default ContactUs;
