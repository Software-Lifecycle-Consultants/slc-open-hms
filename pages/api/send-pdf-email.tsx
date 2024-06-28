// api/send-pdf-email.tsx
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import htmlPdf from "html-pdf-node";


// Define the request body type
type RequestBody = {
  email: string;
};

// Default export function to handle the API request
export default async function sendPdfEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Extract the email from the request body
  const { email }: RequestBody = req.body;

  try {
    // Define the HTML content for the PDF
    const htmlContent = `
    
  <html>
  <head>
    <style>
      html {
        -webkit-print-color-adjust: exact;
      }
      .container {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        justify-content: center;
        background-color: white;
        color: black;
        margin: 10px;
        padding: 10px;
      }
      .heading {
        text-align: center;
        padding-top: 25px;
        padding-bottom: 25px;
        background-color: #e4e8ff;
      }
      .sub-heading {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 24px;
        text-align: left;
        font-size: 32px;
        margin-left: 10px;
      }
      .details-view {
        display: flex;
        flex-direction: column;
        gap: 4px;
        font-weight: 500;
        color: black;
        background-color: white;
        padding: 5px;
        margin-left: 10px;
      }
      .details-row,
      .booking-row,
      .services-details-row,
      .subtitle,
      .subtotle,
      .total {
        display: flex;
        gap: 50px;
        flex-direction: row;
        background-color: white;
        border-color: white;
        font-size: 28px;
      }
      .booking-row {
        gap: 20px;
        font-size: 28px;
      }
      .services-details-row {
        margin-left: 10px;
        gap: 300px;
        font-size: 28px;
      }
      .subtitle {
        gap: 300px;
        background-color: #e4e8ff;
        padding: 15px;
        margin-top: 15px;
        margin-bottom: 10px;
        font-size: 28px;
      }
      .subtotle,
      .total {
        gap: 300px;
        padding: 10px 15px;
        font-size: 28px;
      }
      .subtotle {
        background-color: #fff0e2;
        margin-top: 20px;
      }
      .total {
        font-size: 28px;
        background-color: #fcd1bf;
      }
      .details {
        text-align: left;
        font-size: 24px;
        width: 384px;
      }
      .content {
        display: flex;
        flex-direction: row;
        gap: 20px;
      }
      .section {
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 10px 0;
      }
      .image {
        width: 10px;
        height: 20px;
      }
      .special-notice,
      .special-criteria {
        text-align: left;
        font-size: 12px;
        width: 384px;
        font-size: 28px;
        font-style: italic;
        margin-left: 8px;
        margin-top: 20px;
      }
      .special-criteria {
        font-size: 24px;
        margin-top: 5px;
        margin-left: 15px;
      }
      hr {
        border: 5px solid #A6B4FD;
     
      }
    </style>
  </head>
  <body>
    <div class="container">
      <!-- PDF Heading -->
     

      <h1 class="heading">Travala</h1>

      <!-- PDF Heading -->
      <div class="content">
        <!-- View section 1 -->
        <div class="section">
          <p class="details">101 Independence Avenue</p>
        </div>

        <!-- View section 2 -->
        <div class="section">
          <div class="booking-row">
            <p class="details"><span class="glyphicon glyphicon-earphone"></span>+1 234 56 789</p>
            <p class="details">t.travala@gmail.com</p>
          </div>
          <div class="booking-row">
            <p class="details">www.holiday.com/travala</p>
          </div>
        </div>
      </div>
	</div>
    
		<hr>
        <div class="container">
      <!-- Booking details content -->
      <h2 class="sub-heading">Booking Details</h2>

      <div class="details-view">
        <!-- Check In -->
        <div class="details-row">
          <p class="details">Check In</p>
          <p class="details">Monday 11, March, 2024</p>
        </div>

        <!-- Check out -->
        <div class="details-row">
          <p class="details">Check Out</p>
          <p class="details">Monday 15, March, 2024</p>
        </div>

        <!-- Guests -->
        <div class="details-row">
          <p class="details">Guests</p>
          <p class="details">2 Adults, 1 Child</p>
        </div>

        <!-- Rooms -->
        <div class="details-row">
          <p class="details">Rooms</p>
          <p class="details">01</p>
        </div>

        <!-- Room Plan -->
        <div class="details-row">
          <p class="details">Room Plan</p>
          <p class="details"><b>President Luxury Double Room View NY City</b></p>
        </div>
      </div>
      <!-- Booking details content -->

      <!-- Booked by content -->
      <h2 class="sub-heading">Booked By</h2>

      <div class="details-view">
        <div class="content">
          <!-- View section 1 -->
          <div class="section">
            <p class="details">adrina sell</p>
            <p class="details"><u>adrina.sell@gmail.com</u></p>
            <p class="details">+12 4444 88 969</p>
          </div>

          <!-- View section 2 -->
          <div class="section">
            <div class="booking-row">
              <p class="details">Booking #</p>
              <p class="details">00000256</p>
            </div>
            <div class="booking-row">
              <p class="details">Booking Date</p>
              <p class="details">02/03/2024</p>
            </div>
            <div class="booking-row">
              <p class="details">Status</p>
              <p class="details">Draft</p>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="subtitle">
          <p class="details">Products selected</p>
          <p class="details">Amount</p>
        </div>
        <!-- Check In -->
        <div class="services-details-row">
          <p class="details">
            President Luxury Double Room View NY City ( 4 Days )
          </p>
          <p class="details"><b>$ 240.00</b></p>
        </div>

        <!-- Check out -->
        <div class="services-details-row">
          <p class="details">Private Pool</p>
          <p class="details"><b>$ 35.00</b></p>
        </div>

        <!-- Guests -->
        <div class="services-details-row">
          <p class="details">Spa</p>
          <p class="details"><b>$ 50.00</b></p>
        </div>
        <br><br>
        <div class="subtitle">
          <p class="details">Services</p>
        </div>
        <!-- Check In -->
        <div class="services-details-row">
          <p class="details">Laundry and Dry cleaning</p>
          <p class="details"><b>$ 35.00</b></p>
        </div>

        <!-- Check out -->
        <div class="services-details-row">
          <p class="details">Airport pick-up ( 1 day )</p>
          <p class="details"><b>$ 80.00</b></p>
        </div>

        <div class="subtitle">
          <p class="details">Meals</p>
        </div>
        <!-- Check In -->
        <div class="services-details-row">
          <p class="details">Breakfast (4 days)</p>
          <p class="details"><b>$ 35.00</b></p>
        </div>

        <!-- Check out -->
        <div class="services-details-row">
          <p class="details">Dinner (4 days)</p>
          <p class="details"><b>$ 50.00</b></p>
        </div>

        <div class="subtotle">
          <p class="details">Tax Rate</p>
          <p class="details"><b>15%</b></p>
        </div>
        <div class="total">
          <p class="details"><b>Total</b></p>
          <p class="details"><b>$158.20</b></p>
        </div>
      </div>
      <p class="special-notice">Special Instructions</p>
      <p class="special-criteria">Check out before 11.00 a.m</p>
      <p class="special-criteria">No pets allowed</p>
      <p class="special-criteria">Check in from 2.00 p.m</p>
      <!-- Booked by content -->
    </div>
  </body>
</html>



    
    `;

    // Generate the PDF buffer from the HTML content
    const pdfBufferPromise = htmlPdf.generatePdf({ content: htmlContent }, {});
    const pdfBuffer = await new Promise<Buffer>((resolve, reject) => {
      htmlPdf.generatePdf({ content: htmlContent }, {}, (err, buffer) => {
        if (err) {
          return reject(err);
        }
        resolve(buffer);
      });
    });

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Configure the email options
    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.SMTP_EMAIL,
      to: `${email}, ${process.env.SMTP_EMAIL}`, // Send the email to both the recipient and the sender
      subject: "Your PDF Attachment",
      text: "Please find the attached PDF generated from HTML content.",
      attachments: [
        {
          filename: "document.pdf",
          content: pdfBuffer, // Ensure pdfBuffer is a Buffer
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
