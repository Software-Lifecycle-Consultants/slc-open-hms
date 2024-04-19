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

interface Country {
  cca2: string;
  name: { common: string };
}

const ContactForm = ({}) => {
  const [countries, setCountries] = useState<Country[]>([]);

  const [countryCode, setCountryCode] = useState("");

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

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCountryCode(event.target.value as string);
  };
  return (
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
            <TextField label="First Name" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Last Name" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email Address" fullWidth variant="outlined" />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ padding: "20px 30px 20px 30px" }}>
          <Grid item xs={2}>
            <TextField
              select
              label="Country"
              fullWidth
              defaultValue=""
              variant="outlined"
              onChange={handleChange}
            >
              {countries.map((country) => (
                <MenuItem key={country.cca2} value={country.cca2}>
                  {country.name.common} {/* Accessing the common property */}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="Input your Phone Number Here"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              select
              label="Country"
              fullWidth
              defaultValue=""
              variant="outlined"
              onChange={handleChange}
            >
              {countries.map((country) => (
                <MenuItem key={country.cca2} value={country.cca2}>
                  {country.name.common} {/* Accessing the common property */}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ padding: "20px 30px 20px 30px" }}>
          <Grid item xs={12}>
            <TextField label="Subject" fullWidth variant="outlined"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              fullWidth
              multiline
              rows={6}
              variant="outlined"
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
  );
};

export default ContactForm;
