import { Typography, Grid, Stack, Chip } from "@mui/material"
import Image from "next/image";
import sigiriRock from "@/public/images/blogDetails/sigiriRock.webp"

const DetailBanner = () => {
    return (
        <>
        <Grid container spacing={2}>
        
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}  >
            <Grid item xs sx={{alignItems:"center", textAlign:"center", }}>
            <ul style={{
            padding:"0",
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
            }} >
              {/* user name and date list on the card */}
                <li style={{color: "#7F56D9",
                margin: "5px",}}>
                Published
                </li>
                <li style={{color: "#7F56D9",
                margin: "5px",
                }}>
                27 may 2024
                </li>
              </ul> 
              <Typography variant="h4" gutterBottom sx={{color:"#11142D", fontWeight:"bold", fontSize:"48px",  }}>
              Sigiriya - Sri Lanka's Enigmatic Citadel Unveiled
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"20"}}>
              Explore the ancient mysteries and architectural marvels of Sigiriya, a UNESCO World Heritage Site nestled in the heart of Sri Lanka.
              </Typography>
            </Grid>
            <Grid item>
            <Stack spacing={1} alignItems="center">
      <Stack direction="row" spacing={1}>
        <Chip sx={{color:"#6941C6", bgcolor:"#F9F5FF"}} label="History" />
        <Chip sx={{color:"#C11574", bgcolor:"#FDF2FA"}} label="SriLanka"  />
        <Chip sx={{color:"#3538CD", bgcolor:"#EEF4FF"}} label="Mystry" />
      </Stack>
      </Stack>
            </Grid>
            <Grid item sx={{alignItems:"center", }}>
          <Image  src={sigiriRock} 
          alt="complex"
          width={1000}
          height={720}
          style={{
              width: "100%",
              height: "auto",
              flexShrink: 0,
            }}/>
        </Grid>
        </Grid>
    </Grid>
    </Grid>
</>
);
};
export default DetailBanner;