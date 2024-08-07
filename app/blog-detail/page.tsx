"use client";
import DetailBanner from "@/components/frontend/blogDetailPage/DetailBanner";
import ContentBanner from "@/components/frontend/blogDetailPage/Content";
import { Box, Container, Grid, Stack, Typography,  } from "@mui/material";
import BlogCard from "@/components/frontend/blogPage/BlogCard";
import { blogData, bannerData } from '@/data/blogPage';
import { blogcontent, } from '@/data/blogDetail';
import {Button, Link} from "@mui/material";
import Head from "next/head";
import { blogdetailedSeo } from "@/data/seo";

export default function blogDetailed(){
    return(
   <> 
   <Head>
        <title>{blogdetailedSeo.metatitle}</title>
        <meta name="description" content= {blogdetailedSeo.metadescription} />
        <meta name="keywords" content={blogdetailedSeo.metakeyword}/>
        <meta property="og:title" content={blogdetailedSeo.metaogtitle} />
        <meta property="og:description" content={blogdetailedSeo.metaogdescription} />
        <meta property="og:type" content={blogdetailedSeo.metaogtype} />
        <meta property="og:url" content={blogdetailedSeo.metaogurl} />
        <meta property="og:image" content={blogdetailedSeo.metaogimage} />
        <link rel="canonical" href={blogdetailedSeo.canonicallink} />
      </Head>
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
    paddingTop:"50px",
    }}>
  <Container>
  <Typography fontSize="36px" fontFamily="Mulish" fontWeight="700" color="#11142D" marginBottom="25px"> {blogcontent.blogcardTitle}</Typography>
  <Typography sx={{fontFamily:"Mulish", fontSize: "20px", fontWeight:"200",marginRight:{md:"500px"},'@media (max-width:600px)': {
                lineHeight:"1.75rem",fontSize:"1.1rem",
              },}}> {blogcontent.blogcardDescription}</Typography>
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
      <Box mt={3} sx={{ 
    backgroundColor: "#FFFFF",
    width: "100%",
    }}>
    <Container>
    <Stack direction="row" justifyContent="flex-end">       
    <Link href="/blog" aria-label={blogdetailedSeo.blogcardAreaLable1}>
      <Button 
            variant="contained"
              style={{
                borderRadius: "8px",
                color: "#FFF",
                lineHeight: "180%",
                fontStyle: "normal",
                letterSpacing: "-0.14px",
                fontWeight: "200",
                marginBottom:"25px",
                marginTop:"25px",
                textTransform: "none",
              }}
          >
            View all posts
            
          </Button>
          </Link>
          </Stack>
    </Container>
  </Box>
  </>
)
}