import Image from 'next/image'
import { Box, Container, Grid, Typography, Button } from '@mui/material'
import Banner from "../components/Banner";
export default function Home() {
  return (
    <>
      {/* Banner Section */}
      <Box
        sx={{
          backgroundColor: "#0C111F",
          color: "white",
          padding: "40px 0",
          flexGrow: 1,
        }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box>
                <Banner
                  title="The best deals on the world's best destinations"
                  subtitle="Best travel and destinations"
                  description="With travala you can experience new travel and the best tourist destinations that we have to offer"
                  primaryButtonLabel="Our Destination"
                  secondaryButtonLabel="Our Gallery"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}>
                <img
                  src="https://res.cloudinary.com/de9zkpp0w/image/upload/v1690446713/thilini/Group_48095510_odtoo3.png"
                  width="100%"
                  height="auto"
                  alt="main Image"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Sections 3-6 */}
      {[...Array(9)].map((_, index) => (
        <Box
          key={`section-${index + 3}`}
          sx={{
            backgroundColor: index % 2 === 0 ? "lightgray" : "white",
            color: index % 2 === 0 ? "black" : "black",
            padding: "40px 0",
          }}>
          <Container>
            <Typography variant="h1">Section {index + 3}</Typography>
          </Container>
        </Box>
      ))}
    </>
  )
}
