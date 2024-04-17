"use client";
import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { postData, postRegsiterData } from "@/services/api";
import { registerPageDetails } from "@/data/registerPage";
import Box from "@mui/material/Box";
import ArrowBack from "@mui/icons-material/ArrowBack";

/**
 * This page represents the registration page.
 */

interface RegisterData {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  username: string;
  password: string;
  confirm_pwd: string;
}
const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterData>({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    username: "",
    password: "",
    confirm_pwd: "",
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
  // Function to Post Api Data
  const PostApiData = async () => {
    try {
      const result = await postRegsiterData(
        "https://slc-open-hms-api.azurewebsites.net/register",
        formData
      ).then((response) => {
        console.log(response);
        if (!response.ok) {
          console.log("Post Request Unsucceeful", response);
          setRegistrationMessage(response.title);
          setErrorMessages(Object.values(response.errors));
        } else {
          console.log("Post Request Successfull", response);
          setRegistrationMessage("Registration successful!");
          setErrorMessages([]);
          clearFormData();
        }
      });
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };
  // Function to Clear Form Data
  const clearFormData = () => {
    setFormData({
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      username: "",
      password: "",
      confirm_pwd: "",
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
          {/* Assign to the Header Details */}
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                marginTop: "18px",
                fontWeight: "bold",
                color: "#11142D",
              }}>
              {registerPageDetails.registerPageTitle}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "8px",
                color: "#9A9AB0",
              }}>
              {registerPageDetails.registerPageSubtitle}
            </Typography>
          </Grid>
          {/* First Name Section */}
          <Grid
            item
            xs={5}
            sx={{
              color: "#11142D",
            }}>
            {registerPageDetails.registerPageFirstNameSection}
            <TextField
              fullWidth
              placeholder="john"
              variant="outlined"
              type="firstname"
              value={formData.firstname}
              onChange={(e) => handleChange(e, "firstname")}
              required
            />
          </Grid>
          {/* Last Name Section */}
          <Grid
            item
            xs={7}
            sx={{
              color: "#11142D",
            }}>
            {registerPageDetails.registerPageLastNameSection}
            <TextField
              fullWidth
              placeholder="Doe"
              variant="outlined"
              type="lastname"
              value={formData.lastname}
              onChange={(e) => handleChange(e, "lastname")}
              required
            />
          </Grid>
          {/* Phone Number Section */}
          <Grid
            item
            xs={12}
            sx={{
              color: "#11142D",
            }}>
            {registerPageDetails.registerPagePhoneNumSection}
            <TextField
              fullWidth
              placeholder="0754436874"
              variant="outlined"
              type="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => handleChange(e, "phone")}
              required
            />
          </Grid>
          {/* Email Section */}
          <Grid
            item
            xs={12}
            sx={{
              color: "#11142D",
            }}>
            {registerPageDetails.registerPageEmailSection}
            <TextField
              fullWidth
              placeholder="john23@gmail.com"
              variant="outlined"
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e, "email")}
              required
            />
          </Grid>
          {/* User Name Section */}
          <Grid item xs={12}>
            {registerPageDetails.registerPageUserNameSection}
            <TextField
              fullWidth
              placeholder="john23@gmail.com"
              variant="outlined"
              name="username"
              value={formData.username}
              onChange={(e) => handleChange(e, "username")}
              required
            />
          </Grid>
          {/* Password Section */}
          <Grid
            item
            xs={12}
            sx={{
              color: "#11142D",
            }}>
            {registerPageDetails.registerPagePasswordSection}
            <TextField
              fullWidth
              placeholder="*********"
              variant="outlined"
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e, "password")}
              required
            />
          </Grid>
          {/* Confirm Password Section */}
          <Grid
            item
            xs={12}
            sx={{
              color: "#11142D",
            }}>
            {registerPageDetails.registerPageConfirmPwdSection}
            <TextField
              fullWidth
              placeholder="*********"
              variant="outlined"
              type="password"
              name="password"
              value={formData.confirm_pwd}
              onChange={(e) => handleChange(e, "confirm_pwd")}
              required
            />
          </Grid>
          {/* Agree to the Ruls Section */}
          <Grid item xs={12} marginTop={1}>
            <FormControlLabel
              sx={{
                marginTop: "5px",
                color: "#11142D",
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
              label={
                <>
                  {registerPageDetails.registerPageAgreeRulesSection}
                   {/* Add link to Terms and Conditions section */}
                  <a
                    href="/terms-condition"
                    style={{ color: "rgba(0, 60, 112, 1)" }}>
                    {registerPageDetails.registerPageTermsandConditionsSection}
                  </a>
                </>
              }
            />
          </Grid>
          {/* Sign Up Section */}
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
                textAlign: "center",
              }}>
              {registerPageDetails.registerPageButtonSection}
            </Button>
            <Typography>{registrationMessage}</Typography>
          </Grid>
          {/* Render to Have an account the Login page */}
          <Grid
            item
            xs={12}
            sx={{
              color: "#11142D",
            }}>
            <Typography align="center">
              {registerPageDetails.registerPageHaveAccountSection}{" "}
              <a href="/login">
                {" "}
                {registerPageDetails.registerPageLoginSection}{" "}
              </a>
            </Typography>
          </Grid>
          {/* Render to Back to the Home page */}
          <Grid
            item
            xs={12}
            sx={{
              padding: "35px",
              color: "#11142D",
            }}
            container
            alignItems="center"
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
              {registerPageDetails.registerPageBackArroSection}
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
