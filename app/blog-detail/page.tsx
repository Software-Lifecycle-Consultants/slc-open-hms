"use client";
import DetailBanner from "@/components/blogDetail/detailBanner";
import ContentBanner from "@/components/blogDetail/content";
import { Box, Container, } from "@mui/material";
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
  </>
)
}