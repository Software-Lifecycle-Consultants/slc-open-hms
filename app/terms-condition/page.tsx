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
    pageEnd,
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
        {/* Assign to the Page Details of the Terms and Conditions page */}
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginTop: "10px",
            fontWeight: "bold",
          }}
        >
          {pageDetails.title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
          }}
        >
          {pageDetails.subtitle}
        </Typography>
        {/* Assign header section of the Terms and Conditions page */}
        <Typography
          variant="h4"
          sx={{
            marginTop: "10px",
          }}
        >
          {headerDetails.title}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginTop: "10px",
          }}
        >
          Effective Date:
          {headerDetails.effectiveDate}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "10px",
          }}
        >
          {headerDetails.description}
        </Typography>
        {/* Assign Details to the head section 1 */}
        <Typography
          variant="h4"
          sx={{
            marginTop: "15px",
          }}
        >
          {headsection1.subsection1}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "8px",
          }}
        >
          {headsection1.title1}
        </Typography>
        <Typography variant="body1"> {headsection1.content1} </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "12px",
          }}
        >
          {subsection2.title2}
        </Typography>
        <Typography variant="body1"> {subsection2.content2} </Typography>
        {/* Assign Details to the head section 2 */}
        <Typography
          variant="h4"
          sx={{
            marginTop: "15px",
          }}
        >
          {headsection2.subsection3}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "8px",
          }}
        >
          {headsection2.title1}
        </Typography>
        <Typography variant="body1"> {headsection2.content1} </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "12px",
          }}
        >
          {subsection4.title2}
        </Typography>
        <Typography variant="body1"> {subsection4.content2} </Typography>
        {/* Assign Details to the head section 3 */}
        <Typography
          variant="h4"
          sx={{
            marginTop: "15px",
          }}
        >
          {headsection3.subsection5}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "8px",
          }}
        >
          {headsection3.title1}
        </Typography>
        <Typography variant="body1"> {headsection3.content1} </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "12px",
          }}
        >
          {subsection6.title2}
        </Typography>
        <Typography variant="body1"> {subsection6.content2} </Typography>
        {/* Assign Details to the head section 4 */}
        <Typography
          variant="h4"
          sx={{
            marginTop: "15px",
          }}
        >
          {headsection4.subsection7}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "8px",
          }}
        >
          {headsection4.title1}
        </Typography>
        <Typography variant="body1"> {headsection4.content1} </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "12px",
          }}
        >
          {subsection8.title2}
        </Typography>
        <Typography variant="body1"> {subsection8.content2} </Typography>
        {/* Assign Details to the head section 5 */}
        <Typography
          variant="h4"
          sx={{
            marginTop: "15px",
          }}
        >
          {headsection5.subsection9}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "8px",
          }}
        >
          {headsection5.content}
        </Typography>
        {/* Assign Details to the head section 6 */}
        <Typography
          variant="h4"
          sx={{
            marginTop: "15px",
          }}
        >
          {headsection6.subsection10}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "8px",
          }}
        >
          {headsection6.content1}
        </Typography>
        {/* Assign Details to the head section 7 */}
        <Typography
          variant="h4"
          sx={{
            marginTop: "15px",
          }}
        >
          {headsection7.subsection11}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "8px",
          }}
        >
          {headsection7.content2}
        </Typography>
        {/* Assign Details to the pageEnd section */}
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginTop: "30px",
            fontWeight: "bold",
          }}
        >
          {pageEnd.subtitle}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
          }}
        >
          {pageEnd.title}
        </Typography>
      </div>
    </>
  );
}
export default TermsCondition;