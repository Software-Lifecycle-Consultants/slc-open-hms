"use client";
import DetailBanner from "@/components/blogDetail/detailBanner";
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
  </>
)
}