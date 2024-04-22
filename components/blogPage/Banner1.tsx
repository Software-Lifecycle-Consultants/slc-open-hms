import { Typography,Grid,TextField,Button } from "@mui/material";
// banner section of the blog page
const Banner = () => {
  return(
    <div style={{textAlign:"center"}}>
      {/* text in the banner  */}
    <Typography sx={{fontSize:"16px"}}>blog</Typography>
    <Typography sx={{fontSize:"48px"}}>Sri Lankan Marvels</Typography>
    <Typography sx={{fontSize:"20px"}}>Celebrate the Beauty of Sri Lanka: Explore, Discover, and Be Enchanted!</Typography>
    {/* text area to enter the email */}
    <div style={{alignItems:"center", marginTop:"15px",}}>
    <TextField id="filled-basic" label="Enter your email" variant="filled" sx={{backgroundColor:"white",borderRadius:"8px",height:"48px",
        width:"25%", fontSize:"14px",}}/>
    {/* button in the banner section */}
      <Button sx={{
        marginLeft:"15px",
        height:"48px",
        width:"auto",
        background: "var(--l-2, linear-gradient(135deg, #8482FF 0%, #7723FE 100%))",
        borderRadius:"8px",
      }} 
      variant="contained" >
      Subscribe
      </Button>
      <Typography sx={{marginBottom: "12%"}}>We care about your data in our <a href="/privacy-policy">privacy policy</a></Typography>
    </div>
    </div>
    
  
  );
}
export default Banner;