"use client";
import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import { postData, postRegsiterData } from "@/services/api";
import {
  button,
  headerDetails,
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
  section7,
  section8,
  section9,
  section10
} from "@/data/registerPage";
import Box from "@mui/material/Box";
import ArrowBack from "@mui/icons-material/ArrowBack";

interface RegisterData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  confirm_pwd: string;
}
const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirm_pwd: ""
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
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      confirm_pwd: ""
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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 0, md: 3 }}>
      { /* Assign to the Header Details */ }
          <Grid item xs={10}>
            <Typography variant="h4" sx={{
              marginTop: "18px",
              fontWeight: "bold",
              color: '#11142D'
            }}>
              {headerDetails.title}
            </Typography>
            <Typography variant="body1" sx={{
              marginTop: "8px",
              color: '#9A9AB0'
            }}>
              {headerDetails.subtitle}
            </Typography>
          </Grid>
          {/* First Name Section */}
          <Grid item xs={5} sx={{
            color: '#11142D'
          }}>
            {section1.title}
            <TextField
              fullWidth
              label=""
              variant="outlined"
              type="firstname"
              value={formData.firstname}
              onChange={(e) => handleChange(e, "firstname")}
              required
            />
          </Grid>
          {/* Last Name Section */}
          <Grid item xs={6} sx={{
            color: '#11142D'
          }}>
            {section2.title}
            <TextField
              fullWidth
              label=""
              variant="outlined"
              type="lastname"
              value={formData.lastname}
              onChange={(e) => handleChange(e, "lastname")}
              required
            />
          </Grid>
          {/* Email Section */}
          <Grid item xs={11} sx={{
            color: '#11142D'
          }}>
            {section3.title}
            <TextField
              fullWidth
              label=""
              variant="outlined"
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e, "email")}
              required
            />
          </Grid>
          {/* Phone Number Section */}
          <Grid item xs={11} sx={{
            color: '#11142D'
          }}>
            {section4.title}
            <TextField
              fullWidth
              label=""
              variant="outlined"
              type="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => handleChange(e, "phone")}
              required
            />
          </Grid>
          {/* Password Section */}
          <Grid item xs={11} sx={{
            color: '#11142D'
          }}>
            {section5.title}
            <TextField
              fullWidth
              label=""
              variant="outlined"
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e, "password")}
              required
            />
          </Grid>
          {/* Confirm Password Section */}
          <Grid item xs={11} sx={{
            color: '#11142D'
          }}>
            {section6.title}
            <TextField 
              fullWidth
              label=""
              variant="outlined"
              type="password"
              name="password"
              value={formData.confirm_pwd}
              onChange={(e) => handleChange(e, "confirm_pwd")}
              required
            />
          </Grid>
          {/* Agree to the Ruls Section */}
          <Grid item xs={11} marginTop={1}>
            <FormControlLabel sx={{
              marginTop: "5px",
              color: '#11142D'
            }}
              control={
                <Checkbox
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: 20 },
                    color: "#C7923E",
                    "&.Mui-checked": {
                      color: "#C7923E",
                    },
                  }}
                />
              }
              label={section7.title}
            />
          </Grid>
          {/* Sign Up Section */}
          <Grid item xs={4} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{
                borderRadius: "15px",
                padding: "12px 20px",
              }}
              fullWidth
              sx={{
                backgroundColor: "#C7923E",
                "&:hover": {
                  backgroundColor: "#c7833e",
                },
                textAlign: "center"
              }}
            >
              {button.title}
            </Button>
            <Typography>{registrationMessage}</Typography>
          </Grid>
          {/* Render to Have an account the Login page */}
          <Grid item xs={11} sx={{
            color: '#11142D'
          }}>
            <Typography align="center">
              {section8.title} <a href="/login"> {section9.title} </a>
            </Typography>
          </Grid>
          {/* Render to Back to the Home page */}
          <Grid item xs={12} sx={{
              padding: '35px',
              color: '#11142D',
            }}
            container alignItems="center"
            justifyContent="center">
            <a href="/">
              <Box
                bgcolor="#CCCCCC"
                borderRadius="50%"
                display="flex"
                justifyContent="center"
                marginRight="10px">
                <ArrowBack style={{ color: "#000000" }} />{" "}
              </Box>
            </a>
            <Typography style={{ textAlign: "center", marginTop: "0px" }}>
              {section10.title}
            </Typography>
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