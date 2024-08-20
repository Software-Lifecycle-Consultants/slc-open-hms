import { Box, Grid, Typography, Container, Button } from "@mui/material";
import Image from "next/image";
import Head from "next/head"; // Import Head for setting meta tags
import { galleryPage, imagePaths } from "@/data/galleryPage"; // Importing gallery data
import { gallerySeo } from "@/data/seo";
const GalleryPage = () => {
  return (
    <>
      {/* Meta Tags for SEO */}
      <Head>
        <title>{gallerySeo.metatitle}</title>
        <meta name="description" content={gallerySeo.metadescription} />
        <meta name="keywords" content={gallerySeo.metakeyword} />
        <meta property="og:title" content={gallerySeo.metaogtitle} />
        <meta property="og:description" content={gallerySeo.metaogdescription}/>
        <meta property="og:type" content={gallerySeo.metaogtype} />
        <meta property="og:url" content={gallerySeo.metaogurl} />
        <meta property="og:image" content={gallerySeo.metaogimage} />
        <link rel="canonical" href={gallerySeo.canonicallink} />
      </Head>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h2" align="center" gutterBottom>
          {galleryPage.galleryPageTitle}
        </Typography>
        <Typography variant="body2" align="center" paragraph sx={{ mb: 4 }}>
          {galleryPage.galleryPageDescription}
        </Typography>

        <Grid container spacing={2}>
          {imagePaths.map((src, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`} // Descriptive alt text
                  width={300}
                  height={300}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* "Book Now" Button */}
        <Box textAlign="center" mt={4}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            aria-label={gallerySeo.ButtonAriaLabel}
          >
            {galleryPage.galleryPageButton}
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default GalleryPage;
