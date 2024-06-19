import React from 'react';
import { TextField, Grid, Card, Typography, Box, Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { adminContentDestinationCard } from '@/data/admincontent';

const DestinationCards: React.FC = () => {
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
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {adminContentDestinationCard.adminContentDestinationCardHeaderTitle // Display the header title
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
            <Typography sx={{ flexGrow: 0.9 }}>
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
            <Typography sx={{ flexGrow: 0.9 }}>
              <Typography sx={{ flexGrow: 0.9 }}>
                {" "}
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
            <Typography sx={{ flexGrow: 0.9 }}>
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
            padding: "25px",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {
              adminContentDestinationCard.adminContentDestinationCardHeaderTitle1 // Display the header title
            }
          </Typography>
          <Typography sx={{ marginTop: "10px" }}>
            {adminContentDestinationCard.adminContentDestinationCardTitle // Display the video title
            }
          </Typography>
          <TextField
            fullWidth
            label="Enter Video  Title"
            variant="outlined"
            required
            sx={{ m: 1 }}
          />
          <Typography sx={{ marginTop: "10px" }}>
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
            sx={{ m: 1 }}
          />
          <Typography sx={{ marginTop: "10px" }}>
            {adminContentDestinationCard.adminContentDestinationCardTitle3 // Display the video URL 1
            }
          </Typography>
          <TextField
            fullWidth
            label="Enter Video URL 1 Link"
            variant="outlined"
            required
            sx={{ m: 1 }}
          />
          <Typography sx={{ marginTop: "10px" }}> 
            {adminContentDestinationCard.adminContentDestinationCardTitle4 // Display the video title
             }
          </Typography>
          <TextField
            fullWidth
            label="Enter City Name"
            variant="outlined"
            required
            sx={{ m: 1 }}
          />
          <Typography sx={{ marginTop: "10px" }}>
            {" "}
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
            sx={{ m: 1 }}
          />
          <Typography sx={{ marginTop: "10px" }}>
            {" "}
            {adminContentDestinationCard.adminContentDestinationCardTitle4 // Display the video title
            }
          </Typography>
          <TextField
            fullWidth
            label="Price"
            variant="outlined"
            required
            sx={{ m: 1 }}
          />
          <Typography sx={{ marginTop: "10px" }}>
            {adminContentDestinationCard.adminContentDestinationCardTitle5 // Display the custom tag
            }
          </Typography>
          <TextField
            fullWidth
            label="Enter Custom Tag"
            variant="outlined"
            required
            sx={{ m: 1 }}
          />
          <Typography sx={{ marginTop: "10px" }}>
            {adminContentDestinationCard.adminContentDestinationCardTitle6 // Display the button name
            }
          </Typography>
          <TextField
            fullWidth
            label="Enter Button Name"
            variant="outlined"
            required
            sx={{ m: 1 }}
          />
        </Card>
        <Box display="flex" justifyContent="end" alignItems="center">
          <Button
            sx={{
              textTransform: "none",
              marginTop: "7px",
              backgroundColor: "#4A5472",
              "&:hover": { backgroundColor: "#192959" },
              color: "white",
              width: "100px",
              height: "30px",
              borderRadius: "8px",
              marginLeft: "10px",
              textAlign: "center",
            }}
            variant="contained"
          >
            <Typography
              style={{
                color: "white",
              }}
            >
             {adminContentDestinationCard.adminContentDestinationCardSubmitButton // Display the submit button text
             }
            </Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DestinationCards;
