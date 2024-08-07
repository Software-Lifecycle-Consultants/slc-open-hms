import {
  Typography,
  Grid,
  TextField,
  Button,
  Link,
  Box,
  Stack,
  Container,
} from "@mui/material";
import { bannerData } from "@/data/blogPage";
// banner section of the blog page
const Banner = () => {
  return (
    
    <Container maxWidth="md">
      <Box style={{ textAlign: "center" }}>
        {/* text in the banner  */}
        <Typography variant='h4' color='#FFFFFF'>
          {bannerData.bannertext}
        </Typography>
        <Typography variant='h2' color='#FFFFFF' mt={2}>
          {bannerData.bannerTitle}
        </Typography>
        <Typography variant='body2' color='#FFFFFF' mt={2}>
          {bannerData.bannerDescription}
        </Typography>
      </Box>
      {/* text area to enter the email */}
      <Stack direction="row" justifyContent="flex-end" mx={{ xs: 4, md: 25, sm:28, s:2 }}> 
      <Box alignContent="center" mt={4}
        sx={{ width: "100%", justifyContent: "center", alignItems: "center", }}
      >
        <TextField
          id="filled-basic"
          label="Enter your email"
          variant="filled"
          sx={{
            backgroundColor: "white",
            borderRadius: "8px",
            height: "48px",
            width: { md: "70%", xs: "50%" },
            justifyContent: "center",
          }}
          aria-label="Email input field"
        />
        {/* button in the banner section */}
        <Button
          sx={{
            marginLeft: "10px",
            height: "48px",
            width: "auto",
          }}
          variant="contained"
          aria-label="Subscribe button"
        >
          {bannerData.buttonText}
        </Button>
        <Box>
        <Typography variant="h5" color='#FFFFFF' mt={2} mb={20}  sx={{alignItems:"center", }}>
          {bannerData.bannerSlogen}{" "}
          <Link href="/privacy-policy" style={{ color: "white" }}aria-label="Privacy policy">
           {bannerData.bannerLinkText}
          </Link>
        </Typography>
        </Box>
      </Box>
      </Stack>
    </Container>
  );
};
export default Banner;
