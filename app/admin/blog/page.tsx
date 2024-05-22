import { Container } from "@mui/material";
import BlogForm from "../components/blog/BlogForm";

const blog = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: "10px", marginBottom: "10px" }}>
        <BlogForm />
      </Container>
    </>
  );
};
export default blog;
