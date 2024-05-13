// styles.js
//this style js use for both banner and contactNowBanner componants

/* Typography style for heading 5 */
export const typographyh5Style = {
  color: "#E97458",
  fontSize: { xs: "18px", sm: "22px", md: "18px" },
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",
  textTransform: "uppercase",
  marginTop: { xs: "14px", md: "5px" },
};

/* Typography style for heading 1 */
export const typographyh1Style = {
  color: "#FFFFFF",
  fontSize: { xs: "45px", sm: "70px", md: "80px" },
  lineHeight: "125%",
  fontStyle: "normal",
  letterSpacing: "-3.2px",
  fontWeight: "700",
  marginTop: "5px",
};

/* Typography style for body text */
export const typographyBody1Style = {
  color: "rgba(255, 255, 255, 0.70)",
  fontSize: { xs: "16px", sm: "22px", md: "24px" },
  lineHeight: "35px",
  fontStyle: "normal",
  letterSpacing: "-0.96px",
  fontWeight: "400",
};

/* Button style for contained variant */
export const buttonContainedStyle = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  borderRadius: "100px",
  textTransform: "none",
  fontWeight: "bold",
  color: "#0C111F",
  background: "var(--l-2, linear-gradient(135deg, #F9EC7D 0%, #F5B100 100%))",

  // Customize sizes for web and tablet view
  "@media (max-width: 1024px)": {
    padding: "10px 16px",
  },

  // Customize sizes for mobile view
  "@media (max-width: 767px)": {
    fontSize: "12px",
    padding: "8px 12px",
    margin: "3px",
  },
};

/* Button style for text variant */
export const buttonTextStyle = {
  color: "#FFF",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "180%",
  letterSpacing: "0.36px",
  margin: "5px",
  textTransform: "none",

  // Customize sizes for mobile view
  "@media (max-width: 767px)": {
    fontSize: "12px",
    padding: "8px 12px",
    margin: "3px",
  },
};

/* Common Button style for Login, Register & Booking */
export const orangebuttonCommonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  borderRadius: "8px",
  padding: "18px 24px",
  width: "100%",
  height: "50px",
  marginTop: "20px",
  fontSize: "20px",
  fontStyle:"normal",
  fontWeight: "600",
  lineHeight: "120%",
  letterSpacing: "0.08px",
  backgroundColor: "#C7923E",
  textAlign: "center",
  textTransform: "capitalize",
  transition: "background-color 0.3s ease",
  fontFamily: "'mulish', sans-serif",
  color: "white",
  ":hover": {
    backgroundColor: "#c7833e",
  },
};