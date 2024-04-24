import { useState, useEffect } from "react";
import "./Cookie.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CookieIcon from '@mui/icons-material/Cookie';
import { ToggleButtonGroup, Box, ToggleButton, Typography   } from "@mui/material";
import { cookieData } from "../../data/homePage";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


export default function Cookie() {
   // State variable to track if the user has consented to cookies
  const [isConsented, setIsConsented] = useState<boolean>(false);

   

  const setCookie = (cname: string, cvalue: string, exdays: number) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    // Set the cookie with the provided name, value, expiration date, and path
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };

  // return cookie value function
  const getCookie = (cname: string) => {
    let name = cname + "=";
    let ca = document.cookie.split(';');

    //loop for checking the cookie value
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
    //checking and return cookie value 
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };
// alert box
  const checkCookie = () => {
    
    let user = getCookie("username");
    if (user !== "") {
      console.log("Welcome again " + user);
      setIsConsented(true);
      console.log(isConsented);
    } else {
      user = prompt("Please enter your name:", "") || "";
      if (user !== "") {
        setCookie("username", user, 365);
      }
      setIsConsented(true);
      console.log(isConsented);
    }
  };
 
// cookie reject function 
  const rejectCookie = () => {
    document.cookie = "username=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    setIsConsented(true);
    console.log(isConsented);
  };

  useEffect(() => {
    setIsConsented(false);
  }, []);
 
  
  return (
    <>
    {/* cookie bar */}
      {!isConsented && (
        <Box className="display-container">
          <div className="cookie-container">
            {/* cookie description */}
            <div className="description">
              {/* icon on the cookie */}
              <div>
              <CookieIcon sx={{ color: "#C7923E", fontSize: { xs: "25px", sm: "38px", md: "30px" }, marginTop: "2px",  rotate:"275deg",}} />
              </div>
              <div style={{marginLeft:"15px",}}>
                {cookieData.cookieDescription}
              {/* accept reject ButtonGroup */}
              <ToggleButtonGroup color="success" sx={{ height: "30px", marginLeft: "20px" }}>
                <ToggleButton value="accept" onClick={checkCookie} color="success" sx={{ background: "#C7923E", borderRadius: "8px", color: "white" }}>
                {cookieData.cookieButtonCaption}
                  <ArrowRightAltIcon sx={{ color: "#FFFFFF", gap: "15px" }} />
                </ToggleButton>
                <ToggleButton value="reject" onClick={rejectCookie} color="error" sx={{ borderRadius: "8px", color: "black", background: "white", borderColor: "#C7923E" }} >
                <Typography sx={{fontSize: "14px"}}>{cookieData.cookieButtonCaptionReject}</Typography>
                </ToggleButton>
              </ToggleButtonGroup>
              <IconButton
              edge="start"
              color="inherit"
              onClick={rejectCookie}
              aria-label="close"
              sx={{marginLeft:"50px"}}

            >
              <CloseIcon sx={{color:"#C7923E"}}/>
            </IconButton>
            </div>
            </div>
          </div>
        </Box>
      )}
    </>
  );
}
