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
        <Typography sx={{ fontSize: "16px" }}>
          {bannerData.bannertext}
        </Typography>
        <Typography mt={2} sx={{ fontSize: "48px" }}>
          {bannerData.bannerTitle}
        </Typography>
        <Typography mt={2} sx={{ fontSize: "20px" }}>
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
            fontSize: { md: "14px", xs: "10px" },
            justifyContent: "center",
          }}
        />
        {/* button in the banner section */}
        <Button
          sx={{
            marginLeft: "10px",
            height: "48px",
            width: "auto",
            background:
              "var(--l-2, linear-gradient(135deg, #8482FF 0%, #7723FE 100%))",
            borderRadius: "8px",
            fontSize: { md: "14px", xs: "12px", s:"6px" },
          }}
          variant="contained"
        >
          {bannerData.buttonText}
        </Button>
        <Box>
        <Typography mt={2} mb={20}  sx={{alignItems:"center", }}>
          {bannerData.bannerSlogen}{" "}
          <Link href="/privacy-policy" style={{ color: "white" }}>
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
