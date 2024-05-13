"use client";
import DetailBanner from "@/components/blogDetail/detailBanner";
import ContentBanner from "@/components/blogDetail/content";
import { Box, Container, Grid, Typography,  } from "@mui/material";
import BlogCard from "@/components/blogPage/blogcard";
import { blogData, bannerData } from '@/data/blogPage';
import { blogcontent, } from '@/data/blogDetail';
export default function blogDetailed(){
    return(
   <> 
   <Box sx={{ 
    backgroundColor: "#FFFFF",
    width: "100%",
    }}>
    <Container>
      <DetailBanner/>
    </Container>
  </Box>
  <Box sx={{ 
    mx: 'auto',
    alignItems:"center",
    backgroundColor: "#FFFFF",
    width: {md:"60%", },
    }}>
    <Container>
      <ContentBanner/>
    </Container>
  </Box>
  <Box mt={10} mb={5} sx={{ 
    backgroundColor: "#FFFFF",
    width: "100%",
    borderTop: "0.5px solid #E4E7EC",
    paddingTop:"50px"
    }}>
  <Container>
  <Typography variant="h5"> {blogcontent.blogcardTitle}</Typography>
  <Typography sx={{marginRight:{md:"500px"}}}> {blogcontent.blogcardDescription}</Typography>
</Container>
</Box>
 {/* blog cards */}
 <Box
        sx={{marginTop:"50px"}}>
        <Container>
        <Grid container spacing={2}>
        {blogData.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <BlogCard
              image={item.image}
              author={item.author}
              date={item.date}
              title={item.title}
              description={item.description}
              tag={item.tag}
              tag1= {item.tag1}
              tag2={item.tag2}
            />
          </Grid>
        ))}
      </Grid>
        </Container>
      </Box>
  </>
)
}