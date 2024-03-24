import { pageDetails, headerDetails, headsection1, headsection2, subsection2, subsection4, headsection3, subsection6, headsection4, subsection8, headsection5, headsection6, headsection7 } from "@/data/termscondition";
import Typography from '@mui/material/Typography';
import { Metadata } from "next"
export const metadata: Metadata = {
    title: 'HMS Dev | T&C',
    description: 'HMS System under development',
  }
export default function TermsCondition(){
    return (
    <>
    <div style={{
      maxWidth: '1220px',
      margin: '0 auto',
      padding: '25px'
    }}>
      
     <center> <Typography variant="h4"> 
          <b> { pageDetails.title } </b> 
          </Typography> 
     </center> 
     
     <center> 
      <Typography variant="h6"> 
           { pageDetails.subtitle } 
           </Typography> 
      </center>
<br />
       <Typography variant="h4"> 
       {headerDetails.title} 
       </Typography>
       
      <Typography variant="h5"> Effective Date: 
      {headerDetails.effectiveDate} 
      </Typography>

      <Typography variant="body1"> 
      {headerDetails.description} 
      </Typography>
<br />      
      <Typography variant="h4"> 
      { headsection1.subsection1} 
      </Typography>

      <Typography variant="body1"> 
        { headsection1.title1 }
        <br />
       { headsection1.content1} 
       </Typography>
<br />
      <Typography variant="body1"> 
      { subsection2.title2} 
        <br />
       { subsection2.content2 }
       </Typography>
<br />
      <Typography variant="h4"> 
      {headsection2.subsection3} 
      </Typography>

      <Typography variant="body1"> 
      { headsection2.title1 } 
        <br />
       { headsection2.content1 } 
       </Typography>
<br />
      <Typography variant="body1"> 
      { subsection4.title2 } 
        <br />
       { subsection4.content2 } 
       </Typography> 
<br />
      <Typography variant="h4"> 
      { headsection3.subsection5 } 
      </Typography>

      <Typography variant="body1"> 
      { headsection3.title1 } 
        <br />
      { headsection3.content1 } 
      </Typography>
<br /> 
      <Typography variant="body1"> 
      { subsection6.title2 }
        <br />
       { subsection6.content2 } 
       </Typography>
<br />
      <Typography variant="h4"> 
      { headsection4.subsection7 } 
      </Typography>

      <Typography variant="body1"> 
      { headsection4.title1 } 
        < br />
      { headsection4.content1 } 
      </Typography>

<br />
      <Typography variant="body1"> 
      { subsection8.title2 } 
<br />
      { subsection8.content2 } 
      </Typography>
<br />
      <Typography variant="h4"> 
      { headsection5.subsection9 } 
      </Typography>

      <Typography variant="body1"> 
      { headsection5.content } 
      </Typography>
<br />
      <Typography variant="h4"> 
      { headsection6.subsection10 } 
      </Typography>

      <Typography variant="body1"> 
      { headsection6.content1 } 
      </Typography>
<br />
      <Typography variant="h4"> 
        { headsection7.subsection11 } 
      </Typography>

      <Typography variant="body1"> 
        { headsection7.content2 } 
      </Typography>

<br />

      <center> 
        <Typography variant="h4"> 
          <b> We'd love to hear from you </b> 
        </Typography> 
      </center> 

      <center> 
        <Typography variant="h6"> 
          Chat to our friendly team. 
        </Typography> 
      </center>

</div>
    </>
    );   
}
