import { Typography,Grid,TextField,Button, Link, Box } from "@mui/material";
import { bannerData } from '@/data/blogPage';
// banner section of the blog page
const Banner = () => {
  return(
    <div style={{textAlign:"center"}}>
      {/* text in the banner  */}
    <Typography  sx={{fontSize:"16px"}}>{bannerData.bannertext}</Typography>
    <Typography mt={2} sx={{fontSize:"48px"}}>{bannerData.bannerTitle}</Typography>
    <Typography mt={2} sx={{fontSize:"20px"}}>{bannerData.bannerDescription}</Typography>
    {/* text area to enter the email */}
    <div style={{alignItems:"center", marginTop:"40px",}}>
      <Box mx={"auto"} >
    <TextField id="filled-basic" label="Enter your email" variant="filled" sx={{backgroundColor:"white",borderRadius:"8px",height:"48px",
        width:{md:"30%", xs:"50%"}, fontSize:{md:"14px", xs:"10px"}, justifyContent:"center"}}/>
    {/* button in the banner section */}
      <Button sx={{
        marginLeft:"15px",
        height:"48px",
        width:"auto",
        background: "var(--l-2, linear-gradient(135deg, #8482FF 0%, #7723FE 100%))",
        borderRadius:"8px",
        fontSize:{md:"14px", xs:"12px"},
      }} 
      variant="contained" >
      {bannerData.buttonText}
      </Button>
      <Typography ml={{md:"250px", xs:"40px", sm:"130px", lg:"345px", xl:""}} sx={{marginBottom: "12%", marginTop:"1%", textAlign:"left"}}>{bannerData.bannerSlogen} <Link href="/privacy-policy" style={{color:"white",}}>{bannerData.bannerLinkText}</Link></Typography>
      </Box>
    </div>
    </div>
    
  
  );
}
export default Banner;