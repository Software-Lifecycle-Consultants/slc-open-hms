"use client";
import React, { useState } from "react";
import { Button, TextField, Typography, Container, Grid } from "@mui/material";
import { postData, postRegsiterData } from "@/services/api";

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterData>({
    username: "",
    email: "",
    password: "",
  });
  const [registrationMessage, setRegistrationMessage] = useState("");
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const PostApiData = async () => {
    try {
      const result = await postRegsiterData(
        "https://slc-open-hms-api.azurewebsites.net/register",formData)
        .then((response) => {
        console.log(response);
        if (!response.ok) {
          console.log("Post Request Unsucceeful", response);
          setRegistrationMessage(response.title);
          setErrorMessages(Object.values(response.errors));
        } else  {        
           console.log("Post Request Successfull", response);
          setRegistrationMessage('Registration successful!');
          setErrorMessages([]);
          clearFormData();
        }
      });
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  const clearFormData = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
    });

    setRegistrationMessage("");
    setErrorMessages([]);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();    
    PostApiData();
    console.log("Register Data:", formData);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Register
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              name="username"
              value={formData.username}
              onChange={(e) => handleChange(e, "username")}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e, "email")}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e, "password")}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Register
            </Button>
            <p>{registrationMessage}</p>
          
          </Grid>
        </Grid>
      </form>
      {errorMessages.length > 0 && (
              <ul>
                {errorMessages.map((errorMessage, index) => (
                  <li key={index}>{errorMessage}</li>
                ))}
              </ul>
            )}
    </Container>
  );
};

export default Register;
