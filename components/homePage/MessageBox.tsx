import {
    Box,
    Button,
    Typography,
    Modal,
    DialogContent,
  } from "@mui/material";
import modalImage from "../../public/images/homePage/dialogBox/thumbUp.webp";
import Image from "next/image";
import { bannerDetails } from "../../data/homePage";
import * as React from "react";

// modal styles
const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "85%", sm: "60%", md: "35%" },
    height: "auto",
    bgcolor: "background.paper",
    boxShadow: 50,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
  };

  
// message box componant
const MessageBox = () => {
  //function to open and close the modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        // Messagebox modal
            <Modal
              keepMounted
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box sx={style}>
                <DialogContent
                // upper divider
                  dividers
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "lightgreen",
                    borderRadius: "10px",
                  }}
                >
                  {/* modal image */}
                  <Image
                    src={modalImage}
                    alt="test"
                    style={{ maxWidth: "25%", height: "auto" }}
                  />
                </DialogContent>
                  {/* body section with title */}
                <DialogContent
                  dividers
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  {/* modal title */}
                  <Typography
                    id="keep-mounted-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{
                      color: "#54BC2F",
                      fontSize: { xs: "15px", sm: "20px", md: "22px" },
                    }}
                  >
                    {bannerDetails.modalTitle}
                  </Typography>
                  {/* modal description */}
                  <Typography
                    id="keep-mounted-modal-description"
                    sx={{
                      mt: 2,
                      fontSize: { xs: "12px", sm: "18px", md: "20px" },
                    }}
                  >
                    {bannerDetails.modalContentText}
                  </Typography>
                  {/* modal button */}
                  <Button
                    variant="contained"
                    color="success"
                    autoFocus
                    onClick={handleClose}
                    sx={{
                      backgroundColor: "#52AA44",
                      width: "50%",
                      height: "5%",
                      borderRadius: "58px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "20px",
                    }}
                  >
                    <Typography
                      sx={{color: "#FFFFFF", fontSize: { xs: "12px", sm: "18px", md: "15px" },}}
                    >
                        {/* button caption */}
                      {bannerDetails.captionButton}
                    </Typography>
                  </Button>
                </DialogContent>
              </Box>
            </Modal>
    );
};

export default MessageBox;