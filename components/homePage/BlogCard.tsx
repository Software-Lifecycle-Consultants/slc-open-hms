import { blogCardText, dialogBox } from '@/data/homePage';
import { Box, Button, Card, CardActions, CardContent, Typography, Modal, DialogContent } from '@mui/material';
import Image from 'next/image';
import * as  React from 'react'
import { montserrat } from "../../app/fonts";
import erroimg from "../../public/images/homePage/dialogBox/thumbDown.webp"

/* DestinationCardDetails component displays details of a destination in a card. */

interface BlogCardProps {
  image: string; // The image URL of the destination.
  city: string; // The name of the city.
  description: string; // A brief description of the destination.
  price: number; // The price per person for the destination.
}
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  height: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 50,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  city,
  description,
  price,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Card component */}
      <Card
        elevation={0}
        sx={{
          maxWidth: 345,
          borderRadius: "20px",
          backgroundColor: "#F7F7F7",
        }}
      >
        <Box
          style={{
            position: "relative",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          {/* Image component */}
          <Image
            src={image}
            alt="test"
            width={400}
            height={284}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "20px 20px 0px 0px",
              flexShrink: 0,
            }}
          />
        </Box>
        <CardContent
          sx={{
            borderRadius: "0px 0px 30px 30px",
            backgroundColor: "#FFFFFF",
          }}
        >
          {/* Destination city */}
          <Typography
            gutterBottom
            variant="h5"
            className={montserrat.className}
            style={{
              color: "#0C111F",
              fontSize: "24px",
              lineHeight: "26px",
              fontStyle: "normal",
              fontWeight: "700",
            }}
          >
            {city}
          </Typography>
          {/* Destination description */}
          <Typography
            variant="body2"
            style={{
              color: "rgba(12, 17, 31, 0.60)",
              fontSize: "18px",
              lineHeight: "180%",
              fontStyle: "normal",
              fontWeight: "400",
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            borderRadius: "0px 0px 30px 30px",
            backgroundColor: "#F7F7F7",
          }}
        >
          <Box>
            {/* Price label */}
            <Typography
              gutterBottom
              variant="body2"
              style={{
                color: "rgba(12, 17, 31, 0.60)",
                fontSize: "18px",
                lineHeight: "155%",
                fontStyle: "normal",
                fontWeight: "400",
                letterSpacing: "-0.18px",
              }}
            >
              {blogCardText.customTag1}
            </Typography>
            <Box style={{ display: "flex" }}>
              {/* Price per person */}
              <Typography
                style={{
                  color: "#0C111F",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "24px",
                  lineHeight: "28px",
                  fontStyle: "normal",
                  fontWeight: "700",
                }}
              >
                ${price}
              </Typography>
              {/* Price per person label */}
              <Typography
                style={{
                  color: "rgba(12, 17, 31, 0.60)",
                  fontSize: "18px",
                  lineHeight: "155%",
                  fontStyle: "normal",
                  fontWeight: "400",
                  letterSpacing: "-0.18px",
                }}
              >
                {blogCardText.customTag2}
              </Typography>
            </Box>
          </Box>
          <Box
            style={{
              marginLeft: "60px",
            }}
          >
            {/* Button for ticket booking */}
            <Button
              variant="contained"
              onClick={handleOpen}
              style={{
                backgroundColor: "#7C46FE",
                borderRadius: "45px",
                color: "#FFF",
                fontSize: "14px",
                lineHeight: "180%",
                fontStyle: "normal",
                letterSpacing: "-0.14px",
                fontWeight: "500",
              }}
            >
              {blogCardText.blogctaCaption}
            </Button>
            <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"

      >
          <Box sx={style}> 
          <DialogContent
          dividers
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFD8D0',
            borderRadius:"10px",
          }}
        >
          <Image 
          src={erroimg} alt="test" style={{ maxWidth: '25%', height: 'auto',}} />
        </DialogContent>       
          
        <DialogContent
          dividers
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2" sx={{color: "#EF6161",}}>
          {dialogBox.errormodalTitle}
          </Typography>
          
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2, }}>
          {dialogBox.errorContentText}
          </Typography>
          <Button
              variant="contained"
              color="error"
              autoFocus
              onClick={handleClose}
              sx={{
                backgroundColor: "#E83B3B",
                width: "30%",
                height: "30px",
                borderRadius: "58px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
              }}

            >
              {dialogBox.errorcaptionButton}
            </Button>
            </DialogContent>
        </Box>
        </Modal>
          </Box>
        </CardActions>
      </Card>
    </>
  );
};

export default BlogCard;
