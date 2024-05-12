import { Box, Container } from '@mui/material';
import Footer from '../components/homePage/Footer';

// This component encapsulates the styling logic for the children component and the footer:

const MainContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          flex: '1 0 auto',
        }}
      >
        <div className="container">{children}</div>
      </Box>
      <Box
        sx={{
          flexShrink: 0,
          backgroundColor: '#1A242D',
          padding: '20px 0',
          width: '100%',
        }}
      >
        <Container>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default MainContent;