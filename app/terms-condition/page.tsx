"use client";
import Typography from "@mui/material/Typography";
import termsAndConditionsData from "@/data/termscondition";


const TermsCondition = () => {
  const {
    pageDetails,
    headerDetails,
    headsection1,
    headsection2,
    subsection2,
    subsection4,
    headsection3,
    subsection6,
    headsection4,
    subsection8,
    headsection5,
    headsection6,
    headsection7,
  } = termsAndConditionsData;
  return (
    <>
      <div
        style={{
          maxWidth: "1220px",
          margin: "0 auto",
          padding: "35px",
          color: "#11142D",
        }}
      >
        {/* Assign header section of the Terms and Conditions page */}
        <Typography
          variant="h2"
          color="#11142D"
          marginTop="10px" 
        >
          {headerDetails.title}
        </Typography>
        <Typography
          variant="body2"
          fontWeight="700"
          color="#353535"
          marginTop="40px"
        >
          Effective Date:
          {headerDetails.effectiveDate}
        </Typography>
        <Typography
          variant="h4"
          marginTop="10px"
          color="#353535"
        >
          {headerDetails.description}
        </Typography>
        {/* Assign Details to the head section 1 */}
        <Typography
          variant="h3"
          fontWeight="600"
          marginTop="15px"
        >
          {headsection1.subsection1}
        </Typography>
        <Typography
          variant="h4"
          marginTop="8px"
          color="#353535"
        >
          {headsection1.title1}
        </Typography>
        <Typography variant="h4" color="#353535"> {headsection1.content1} </Typography>
        <Typography
          variant="h4"
          marginTop="12px"
          color="#353535"
        >
          {subsection2.title2}
        </Typography>
        <Typography variant="h4" color="#353535"> {subsection2.content2} </Typography>
        {/* Assign Details to the head section 2 */}
        <Typography
          variant="h3"
          fontWeight="600"
          marginTop="15px"
        >
          {headsection2.subsection3}
        </Typography>
        <Typography
          variant="h4"
          marginTop="8px"
          color="#353535"
        >
          {headsection2.title1}
        </Typography>
        <Typography variant="h4" color="#353535"> {headsection2.content1} </Typography>
        <Typography
          variant="h4"
          marginTop="10px"
          color="#353535"
        >
          {subsection4.title2}
        </Typography>
        <Typography variant="h4" color="#353535"> {subsection4.content2} </Typography>
        {/* Assign Details to the head section 3 */}
        <Typography
          variant="h3"
          fontWeight="600"
          marginTop="15px"
        >
          {headsection3.subsection5}
        </Typography>
        <Typography
          variant="h4"
          marginTop="8px"
          color="#353535"
        >
          {headsection3.title1}
        </Typography>
        <Typography variant="h4" color="#353535"> {headsection3.content1} </Typography>
        <Typography
          variant="h4"
          marginTop="12px"
          color="#353535"
        >
          {subsection6.title2}
        </Typography>
        <Typography variant="h4" color="#353535"> {subsection6.content2} </Typography>
        {/* Assign Details to the head section 4 */}
        <Typography
          variant="h3"
          fontWeight="600"
          marginTop="15px"
        >
          {headsection4.subsection7}
        </Typography>
        <Typography
          variant="h4"
          marginTop="8px"
          color="#353535"
        >
          {headsection4.title1}
        </Typography>
        <Typography variant="h4" color="#353535"> {headsection4.content1} </Typography>
        <Typography
          variant="h4"
          marginTop="12px"
          color="#353535"
        >
          {subsection8.title2}
        </Typography>
        <Typography variant="h4" color="#353535"> {subsection8.content2} </Typography>
        {/* Assign Details to the head section 5 */}
        <Typography
          variant="h3"
          fontWeight="600"
          marginTop="15px"
        >
          {headsection5.subsection9}
        </Typography>
        <Typography
          variant="h4"
          marginTop="8px"
          color="#353535"
        >
          {headsection5.content}
        </Typography>
        {/* Assign Details to the head section 6 */}
        <Typography
          variant="h3"
          fontWeight="600"
          marginTop="15px"
        >
          {headsection6.subsection10}
        </Typography>
        <Typography
          variant="h4"
          marginTop="8px"
          color="#353535"
        >
          {headsection6.content1}
        </Typography>
        {/* Assign Details to the head section 7 */}
        <Typography
          variant="h3"
          fontWeight="600"
          marginTop="15px"
        >
          {headsection7.subsection11}
        </Typography>
        <Typography
          variant="h4"
          marginTop="8px"
          marginBottom="50px"
          color="#353535"
        >
          {headsection7.content2}
        </Typography>
      </div>
    </>
  );
}
export default TermsCondition;