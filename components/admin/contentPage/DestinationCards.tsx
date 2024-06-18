import React from 'react';
import { TextField, Grid, Card, Typography, Box, Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


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
            Videos
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: 30,
              borderColor: "#000",
              borderRadius: "8px",
              border: "1px solid #000",
            }}
          >
            <Typography ml={2}> Cappadocia</Typography>
            <IconButton color="secondary" aria-label="edit">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: 30,
              borderColor: "#000",
              borderRadius: "8px",
              border: "1px solid #000",
              mt: 2,
            }}
          >
            <Typography ml={2}> Cappadocia</Typography>
            <Button endIcon={<EditIcon />} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: 30,
              borderColor: "#000",
              borderRadius: "8px",
              border: "1px solid #000",
              mt: 2,
            }}
          >
            <Typography ml={2}> Cappadocia</Typography>
            <Button endIcon={<EditIcon />} />
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
            padding: "20px",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Add New Videos
          </Typography>
          <Typography sx={{ marginTop: "10px" }}>
            Video Title</Typography>
          <TextField
            fullWidth
            label="Enter Video  Title"
            variant="outlined"
            required
          />
          <Typography sx={{ marginTop: "10px" }}>
            Video Description </Typography>
          <TextField
            fullWidth
            label="Enter Description"
            variant="outlined"
            multiline
            rows={4}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default DestinationCards;
