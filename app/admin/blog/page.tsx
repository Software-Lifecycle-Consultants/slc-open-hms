import { Box, Container } from "@mui/material";
import BlogForm from "../components/blog/BlogForm";

const blog = () => {
  return (
    <>
    <Box sx={{backgroundColor:'#EEF5FF'}}>
      <Container maxWidth="lg" sx={{ marginTop: "10px", marginBottom: "10px"}}>
        <BlogForm />
      </Container>
      </Box>
    </>
  );
};
export default blog;
