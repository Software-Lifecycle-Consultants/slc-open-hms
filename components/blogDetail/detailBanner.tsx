import { Typography, Grid, Stack, Chip, List, ListItem, Box } from "@mui/material";
import Image from "next/image";
import sigiriRock from "@/public/images/blogDetails/sigiriRock.webp";
import {blogcontent} from "@/data/blogDetail"

const DetailBanner = () => {
  return (
    <>
      {/* Main grid container */}
      <Grid container spacing={2}>
        <Grid item xs={12} mt={8} sm container>
          {/* Nested grid container */}
          <Grid item xs container direction="column" spacing={2}>
            {/* Grid item for alignment and title */}
            <Grid item xs sx={{ alignItems: "center", textAlign: "center" }}>
              {/* Published date */}
              <Box sx={{width:"250px", mx:"auto", display:"flex", gap:"10px", color:"#7F56D9"}}>
                
                  
                    <Typography> Published </Typography>
                    <Typography> 27 may 2024 </Typography>
                
              </Box>
              {/* Main title */}
              <Typography
                variant="h4"
                gutterBottom
                sx={{ color: "#11142D", fontWeight: "bold", fontSize: "48px" }}
              >
                {blogcontent.blogMainTitle}
              </Typography>
              {/* Subtitle */}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "20" }}
              >
                {blogcontent.blogSubtitle}
              </Typography>
            </Grid>
            {/* Grid item for tags */}
            <Grid item>
              <Stack spacing={1} alignItems="center">
                <Stack direction="row" spacing={1}>
                  {/* Tags */}
                  <Chip
                    sx={{ color: "#6941C6", bgcolor: "#F9F5FF" }}
                    label="History"
                  />
                  <Chip
                    sx={{ color: "#C11574", bgcolor: "#FDF2FA" }}
                    label="SriLanka"
                  />
                  <Chip
                    sx={{ color: "#3538CD", bgcolor: "#EEF4FF" }}
                    label="Mystery"
                  />
                </Stack>
              </Stack>
            </Grid>
            {/* Grid item for image */}
            <Grid item sx={{ alignItems: "center" }}>
              {/* Image */}
              <Image
                src={sigiriRock}
                alt="complex"
                width={1000}
                height={720}
                style={{
                  width: "100%",
                  height: "auto",
                  flexShrink: 0,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default DetailBanner;
