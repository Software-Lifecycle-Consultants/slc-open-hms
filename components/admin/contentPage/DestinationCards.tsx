import React, { useState } from 'react';
import { TextField, Grid, Card, Typography, Box, Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { adminContentDestinationCard } from '@/data/admincontent';
import { validateFormData } from "@/utils/validation";
import { schemaAdminDestinationCards } from '@/schemas/adminDestinationCards.schema';

type DestinationFormData = {
  videoTitle: string;
  videoDescription: string;
  videoUrl1: string;
  cityName: string;
  description: string;
  price: string;
  customTag: string;
  buttonName: string;
};

const DestinationCards: React.FC = () => {

  const [formData, setFormData] = useState<DestinationFormData>({
    videoTitle: '',
    videoDescription: '',
    videoUrl1: '',
    cityName: '',
    description: '',
    price: '',
    customTag: '',
    buttonName: '',
  });
  const [errors, setErrors] = useState<Partial<DestinationFormData>>({});

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "", // Reset error message for the field being changed
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { errors: validationErrors, data } = validateFormData(schemaAdminDestinationCards, formData);

    if (validationErrors) {
      setErrors(validationErrors);
    } else {
      console.log(data);
    }
  };

  return (
    <Grid container spacing={2}>
      {/* Display the Videos cards  */}
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Card
          elevation={0}
          sx={{
            height: "auto",
            width: "100%",
            border: "1px solid",
            borderRadius: "8px",
            borderColor: "#000",
            flexShrink: "0",
            marginTop: "20px",
            padding: "15px",
          }}
        >
          {/* Display the header title */}
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            {
              adminContentDestinationCard.adminContentDestinationCardHeaderTitle // Display the header title
            }
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              height: 30,
              borderColor: "#000",
              borderRadius: "8px",
              border: "1px solid #000",
            }}
          >
            <Typography variant="h3" sx={{ flexGrow: 0.9 }}>
              {
                adminContentDestinationCard.adminContentDestinationCardButtonCard1 // Display the button card 1
              }
            </Typography>
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              height: 30,
              borderColor: "#000",
              borderRadius: "8px",
              border: "1px solid #000",
              mt: 2,
            }}
          >
            <Typography variant="h3" sx={{ flexGrow: 0.9 }}>
              <Typography sx={{ flexGrow: 0.9 }}>
                {
                  adminContentDestinationCard.adminContentDestinationCardButtonCard2 // Display the button card 2
                }
              </Typography>
            </Typography>
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: 30,
              borderColor: "#000",
              borderRadius: "8px",
              border: "1px solid #000",
              mt: 2,
              justifyContent: "end",
            }}
          >
            <Typography variant="h3" sx={{ flexGrow: 0.9 }}>
              {
                adminContentDestinationCard.adminContentDestinationCardButtonCard3 // Display the button card 3
              }
            </Typography>
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Box>
        </Card>
      </Grid>
      {/* Display the New Videos cards  */}
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} component='form' onSubmit={handleSubmit}>
        <Card
          elevation={0}
          sx={{
            height: "auto",
            width: "100%",
            border: "1px solid",
            borderRadius: "8px",
            borderColor: "#000",
            flexShrink: "0",
            marginTop: "20px",
            padding: "25px",
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            {
              adminContentDestinationCard.adminContentDestinationCardHeaderTitle1 // Display the header title
            }
          </Typography>
          <Typography variant="h3" sx={{ marginTop: "10px" }}>
            {
              adminContentDestinationCard.adminContentDestinationCardTitle // Display the video title
            }
          </Typography>
          <TextField
            fullWidth
            label="Enter Video  Title"
            variant="outlined"
            required
            name='videoTitle'
            value={formData.videoTitle}
            onChange={handleChange}
            error={!!errors.videoTitle}
            helperText={errors.videoTitle}
            sx={{ m: 1 }}
          />
          <Typography variant="h3" sx={{ marginTop: "10px" }}>
            {
              adminContentDestinationCard.adminContentDestinationCardDescription2 // Display the video description
            }{" "}
          </Typography>
          <TextField
            fullWidth
            label="Enter Description"
            variant="outlined"
            multiline
            rows={4}
            name='videoDescription'
            value={formData.videoDescription}
            onChange={handleChange}
            error={!!errors.videoDescription}
            helperText={errors.videoDescription}
            sx={{ m: 1 }}
          />
          <Typography variant="h3" sx={{ marginTop: "10px" }}>
            {
              adminContentDestinationCard.adminContentDestinationCardTitle1 // Display the video URL 1
            }
          </Typography>
          <TextField
            fullWidth
            label="Enter Video URL 1 Link"
            variant="outlined"
            required
            name='videoUrl1'
            value={formData.videoUrl1}
            onChange={handleChange}
            error={!!errors.videoUrl1}
            helperText={errors.videoUrl1}
            sx={{ m: 1 }}
          />
          <Typography variant="h3" sx={{ marginTop: "10px" }}>
            {
              adminContentDestinationCard.adminContentDestinationCardTitle4 // Display the video title
            }
          </Typography>
          <TextField
            fullWidth
            label="Enter City Name"
            variant="outlined"
            required
            name='cityName'
            value={formData.cityName}
            onChange={handleChange}
            error={!!errors.cityName}
            helperText={errors.cityName}
            sx={{ m: 1 }}
          />
          <Typography variant="h3" sx={{ marginTop: "10px" }}>
            {
              adminContentDestinationCard.adminContentDestinationCardDescription2 // Display the video description
            }
          </Typography>
          <TextField
            fullWidth
            label="Enter Description"
            variant="outlined"
            multiline
            rows={4}
            name='description'
            value={formData.description}
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.description}
            sx={{ m: 1 }}
          />
          <Typography variant="h3" sx={{ marginTop: "10px" }}>
            {
              adminContentDestinationCard.adminContentDestinationCardTitle3 // Display the video title
            }
          </Typography>
          <TextField
            fullWidth
            label="Price"
            variant="outlined"
            required
            name='price'
            value={formData.price}
            onChange={handleChange}
            error={!!errors.price}
            helperText={errors.price}
            sx={{ m: 1 }}
          />
          <Typography variant="h3" sx={{ marginTop: "10px" }}>
            {
              adminContentDestinationCard.adminContentDestinationCardTitle5 // Display the custom tag
            }
          </Typography>
          <TextField
            fullWidth
            label="Enter Custom Tag"
            variant="outlined"
            required
            name='customTag'
            value={formData.customTag}
            onChange={handleChange}
            error={!!errors.customTag}
            helperText={errors.customTag}
            sx={{ m: 1 }}
          />
          <Typography variant="h3" sx={{ marginTop: "10px" }}>
            {
              adminContentDestinationCard.adminContentDestinationCardTitle6 // Display the button name
            }
          </Typography>
          <TextField
            fullWidth
            label="Enter Button Name"
            variant="outlined"
            required
            name='buttonName'
            value={formData.buttonName}
            onChange={handleChange}
            error={!!errors.buttonName}
            helperText={errors.buttonName}
            sx={{ m: 1 }}
          />
        </Card>
        <Grid my={4}>
          <Box display="flex" justifyContent="end" alignItems="center">
            <Button
              type='submit'
              variant="outlined"
              sx={{
                borderColor: "#4A5472", // Set outline color
                "&:hover": {
                  backgroundColor: "#192959", // Set hover background color
                },
              }}
            >
              <Typography
                style={{
                  color: "white",
                }}
              >
                {
                  adminContentDestinationCard.adminContentDestinationCardSubmitButton // Display the submit button text
                }
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DestinationCards;
