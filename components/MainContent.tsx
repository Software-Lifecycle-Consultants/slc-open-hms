// MainContent.tsx
import { Box, Container } from '@mui/material';
import Footer from '../components/homePage/Footer';

interface MainContentProps {
  children: React.ReactNode;
  showFooter?: boolean; // Optional prop to control footer visibility
}

const MainContent = ({ children, showFooter = true }: MainContentProps) => {
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
      {showFooter && ( // Render footer only if showFooter is true
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
      )}
    </Box>
  );
};

export default MainContent;