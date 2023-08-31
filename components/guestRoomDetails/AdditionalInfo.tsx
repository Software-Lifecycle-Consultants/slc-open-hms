import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from '@mui/material';
import React from 'react'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AdditionalInfo = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            style={{
              color: "var(--light-text-color-title, #11142D)",
              fontFamily: "Lora",
              fontSize: "39px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "120%",
              letterSpacing: "0.195px",
            }}
          >
            Additional Information
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "var(--light-text-color-body-1, #515151)",
              fontFamily: "Mulish, sans-serif",
              fontSize: "16px",
              lineHeight: "125%",
              fontStyle: "normal",
              letterSpacing: "0.08px",
              fontWeight: "400",
              marginTop: "24px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            elit sed pretium, egestas sed sit. Fames tincidunt rhoncus viverra
            eu ut scelerisque. Erat orci scelerisque adipiscing potenti
            sollicitudin semper aliquam in ultricies. Sem vitae amet, egestas
            aliquam mi a arcu.Purus diam est vitae faucibus enim. Ultricies nunc
            vel magnis massa odio. Sed dictumst condimentum sit quis Lorem ipsum
            dolor sit egestas sed sit. Fames tincidunt rhoncus viverra eu ut sce
            scelerisque adipiscing potenti in ultricies. Sem vitae amet, egestas
            aliquam mi a arcu. Feugiat at dignissim massa ornare. Platea eu orci
            enim est egestas fusce cras.
          </Typography>
          <Typography
            variant="h6"
            style={{
              color: "var(--light-text-color-title, #11142D)",
              fontFamily: "Lora",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "120%",
              letterSpacing: "0.08px",
              marginTop: "32px",
            }}
          >
            Check in 15:00 - 23:59
          </Typography>
          <Typography
            variant="h6"
            style={{
              color: "var(--light-text-color-title, #11142D)",
              fontFamily: "Lora",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "120%",
              letterSpacing: "0.08px",
              marginTop: "24px",
            }}
          >
            Check Out 12:00
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ paddingTop: "67px", paddingLeft: { xs: "none", md:"24px"} }}>
            <Accordion
              elevation={0}
              sx={{
                border: "1px solid",
                borderRadius: "8px",
                borderColor:
                  "var(--light-separators-colors-secondary, #E1E1E1)",
                // marginLeft: { xs: "none", md: "50px" },
                flexShrink: "0",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#9A9AB0" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "var(--light-text-color-body-2, #9A9AB0)",
                    fontFamily: "Mulish, sans-serif",
                    fontSize: "16px",
                    lineHeight: "125%",
                    fontStyle: "normal",
                    letterSpacing: "0.08px",
                    fontWeight: "400",
                  }}
                >
                  What is the address of Best Western Hotel
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              elevation={0}
              sx={{
                border: "1px solid",
                borderRadius: "8px",
                borderColor:
                  "var(--light-separators-colors-secondary, #E1E1E1)",
                marginTop: "10px",
                // marginLeft: { xs: "none", md: "50px" },
                flexShrink: "0",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#9A9AB0" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "var(--light-text-color-body-2, #9A9AB0)",
                    fontFamily: "Mulish, sans-serif",
                    fontSize: "16px",
                    lineHeight: "125%",
                    fontStyle: "normal",
                    letterSpacing: "0.08px",
                    fontWeight: "400",
                  }}
                >
                  What are the facilities available in Best Western Hotel?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              elevation={0}
              sx={{
                border: "1px solid",
                borderRadius: "8px",
                borderColor:
                  "var(--light-separators-colors-secondary, #E1E1E1)",
                marginTop: "10px",
                // marginLeft: { xs: "none", md: "50px" },
                flexShrink: "0",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#9A9AB0" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "var(--light-text-color-body-2, #9A9AB0)",
                    fontFamily: "Mulish, sans-serif",
                    fontSize: "16px",
                    lineHeight: "125%",
                    fontStyle: "normal",
                    letterSpacing: "0.08px",
                    fontWeight: "400",
                  }}
                >
                  Does Best Western have a swimming pool?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              elevation={0}
              sx={{
                border: "1px solid",
                borderRadius: "8px",
                borderColor:
                  "var(--light-separators-colors-secondary, #E1E1E1)",
                marginTop: "10px",
                // marginLeft: { xs: "none", md: "50px" },
                flexShrink: "0",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#9A9AB0" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "var(--light-text-color-body-2, #9A9AB0)",
                    fontFamily: "Mulish, sans-serif",
                    fontSize: "16px",
                    lineHeight: "125%",
                    fontStyle: "normal",
                    letterSpacing: "0.08px",
                    fontWeight: "400",
                  }}
                >
                  Itaems that are not allowed
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              elevation={0}
              sx={{
                border: "1px solid",
                borderRadius: "8px",
                borderColor:
                  "var(--light-separators-colors-secondary, #E1E1E1)",
                marginTop: "10px",
                // marginLeft: { xs: "none", md: "50px" },
                flexShrink: "0",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#9A9AB0" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "var(--light-text-color-body-2, #9A9AB0)",
                    fontFamily: "Mulish, sans-serif",
                    fontSize: "16px",
                    lineHeight: "125%",
                    fontStyle: "normal",
                    letterSpacing: "0.08px",
                    fontWeight: "400",
                  }}
                >
                  Does Best Western have a swimming pool?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default AdditionalInfo
