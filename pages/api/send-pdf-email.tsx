// api/send-pdf-email.tsx
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import htmlPdf from "html-pdf-node";
import { Readable } from "stream";
import { join } from "path";

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
<head></head>
<body>
  <div style="display: flex; flex-direction: column; font-weight: bold; justify-content: center; background-color: white; color: black; margin: 10px; padding: 10px;">
    <!-- PDF Heading -->
    <img style="width: 10px; height: 20px;" src="/public/images/admin/loginpage/adminlogo.webp" alt="Admin Logo">

    <h1 style="text-align: center; padding-top: 25px; padding-bottom: 25px; background-color: #E4E8FF;">Travala</h1>

    <!-- PDF Heading -->
    <div style="display: flex; flex-direction: row; gap: 20px;">
      <!-- View section 1 -->
      <div style="display: flex; flex-direction: column; background-color: white; padding: 10px 0;">
        <p style="text-align: left; font-size: 14px; width: 384px;">101 Independence Avenue</p>
      </div>

      <!-- View section 2 -->
      <div style="display: flex; flex-direction: column; background-color: white; padding: 10px 0;">
        <div style="display: flex; gap: 20px; flex-direction: row; background-color: white; border-color: white;">
          <p style="text-align: left; font-size: 14px; width: 384px;">+1 234 56 789</p>
          <p style="text-align: left; font-size: 14px; width: 384px;">t.travala@gmail.com</p>
        </div>
        <div style="display: flex; gap: 20px; flex-direction: row; background-color: white; border-color: white;">
          <p style="text-align: left; font-size: 14px; width: 384px;">www.holiday.com/travala</p>
        </div>
      </div>
    </div>

    <!-- Booking details content -->
    <h2 style="margin-top: 20px; margin-bottom: 20px; font-size: 24px; text-align: left; margin-left: 10px;">Booking Details</h2>

    <div style="display: flex; flex-direction: column; gap: 4px; font-weight: 500; color: black; background-color: white; padding: 5px; margin-left: 10px;">
      <!-- Check In -->
      <div style="display: flex; gap: 50px; flex-direction: row; background-color: white; border-color: white;">
        <p style="text-align: left; font-size: 14px; width: 384px;">Check In</p>
        <p style="text-align: left; font-size: 14px; width: 384px;">Monday 11, March, 2024</p>
      </div>

      <!-- Check out -->
      <div style="display: flex; gap: 50px; flex-direction: row; background-color: white; border-color: white;">
        <p style="text-align: left; font-size: 14px; width: 384px;">Check Out</p>
        <p style="text-align: left; font-size: 14px; width: 384px;">Monday 15, March, 2024</p>
      </div>

      <!-- Guests -->
      <div style="display: flex; gap: 50px; flex-direction: row; background-color: white; border-color: white;">
        <p style="text-align: left; font-size: 14px; width: 384px;">Guests</p>
        <p style="text-align: left; font-size: 14px; width: 384px;">2 Adults, 1 Child</p>
      </div>

      <!-- Rooms -->
      <div style="display: flex; gap: 50px; flex-direction: row; background-color: white; border-color: white;">
        <p style="text-align: left; font-size: 14px; width: 384px;">Rooms</p>
        <p style="text-align: left; font-size: 14px; width: 384px;">01</p>
      </div>

      <!-- Room Plan -->
      <div style="display: flex; gap: 50px; flex-direction: row; background-color: white; border-color: white;">
        <p style="text-align: left; font-size: 14px; width: 384px;">Room Plan</p>
        <p style="text-align: left; font-size: 14px; width: 384px;">President Luxury Double Room View NY City</p>
      </div>
    </div>
    <!-- Booking details content -->

    <!-- Booked by content -->
    <h2 style="margin-top: 20px; margin-bottom: 20px; font-size: 24px; text-align: left; margin-left: 10px;">Booked By</h2>

    <div style="display: flex; flex-direction: column; gap: 4px; font-weight: 500; color: black; background-color: white; padding: 5px; margin-left: 10px;">
      <div style="display: flex; flex-direction: row; gap: 20px;">
        <!-- View section 1 -->
        <div style="display: flex; flex-direction: column; background-color: white; padding: 10px 0;">
          <p style="text-align: left; font-size: 14px; width: 384px;">adrina sell</p>
          <p style="text-align: left; font-size: 14px; width: 384px;">adrina.sell@gmail.com</p>
          <p style="text-align: left; font-size: 14px; width: 384px;">+12 4444 88 969</p>
        </div>

        <!-- View section 2 -->
        <div style="display: flex; flex-direction: column; background-color: white; padding: 10px 0;">
          <div style="display: flex; gap: 20px; flex-direction: row; background-color: white; border-color: white;">
            <p style="text-align: left; font-size: 14px; width: 384px;">Booking #</p>
            <p style="text-align: left; font-size: 14px; width: 384px;">00000256</p>
          </div>
          <div style="display: flex; gap: 20px; flex-direction: row; background-color: white; border-color: white;">
            <p style="text-align: left; font-size: 14px; width: 384px;">Booking Date</p>
            <p style="text-align: left; font-size: 14px; width: 384px;">02/03/2024</p>
          </div>
          <div style="display: flex; gap: 20px; flex-direction: row; background-color: white; border-color: white;">
            <p style="text-align: left; font-size: 14px; width: 384px;">Status</p>
            <p style="text-align: left; font-size: 14px; width: 384px;">Draft</p>
          </div>
        </div>
      </div>
      <!--  -->
      <div style="display: flex; gap: 200px; background-color: #E4E8FF; padding: 15px; margin-top: 15px; margin-bottom: 10px;">
        <p style="text-align: left; font-size: 14px; width: 384px;">Products selected</p>
        <p style="text-align: left; font-size: 14px; width: 384px;">Amount</p>
      </div>
      <!-- Check In -->
      <div style="display: flex; gap: 200px; margin-left: 10px;">
        <p style="text-align: left; font-size: 14px; width: 384px;">President Luxury Double Room View NY City ( 4 Days )</p>
        <p style="text-align: left; font-size: 14px; width: 384px;">$ 240.00 </p>
      </div>

      <!-- Check out -->
      <div style="display: flex; gap: 200px; margin-left: 10px;">
        <p style="text-align: left; font-size: 14px; width: 384px;">Private Pool</p>
        <p style="text-align: left; font-size: 14px; width: 384px;">$ 35.00</p>
      </div>

      <!-- Guests -->
      <div style="display: flex; gap: 200px; margin-left: 10px;">
        <p style="text-align: left; font-size: 14px; width: 384px;">Spa</p>
        <p style="text-align: left; font-size: 14px; width: 384px;">$ 50.00</p>
      </div>

      <div style="display: flex; gap: 200px; background-color: #E4E8FF; padding: 15px; margin-top: 15px; margin-bottom: 10px;">
        <p style="text-align: left; font-size: 14px; width: 384px;">Services</p>
      </div>
      <!-- Check In -->
      <div style="display: flex; gap: 200px; margin-left: 10px;">
        <p style="text-align: left; font-size: 14px; width: 384px;">Laundry and Dry cleaning</p>
        <p style="text-align: left; font-size: 14px; width: 384px;">$ 35.00</p>
      </div>

      <!-- Check out -->
      <div style="display: flex; gap: 200px; margin-left: 10px;">
        <p style="text-align: left; font-size: 14px; width: 384px;">Airport pick-up ( 1 day )</p>
        <p style="text-align: left; font-size: 14px; width: 384px;">$ 80.00</p>
      </div>

      <div style="display: flex; gap: 200px; background-color: #E4E8FF; padding: 15px; margin-top: 15px; margin-bottom: 10px;">
        <p style="text-align: left; font-size: 14px; width: 384px;">Meals</p>
      </div>
      <!-- Check In -->
      <div style="display: flex; gap: 200px; margin-left: 10px;">
        <p style="text-align: left; font-size: 14px; width: 384px;">Breakfast (4 days)</p>
        <p style="text-align: left; font-size: 14px; width: 384px;">$ 35.00</p>
      </div>

      <!-- Check out -->
      <div style="display: flex; gap: 200px; margin-left: 10px;">
        <p style="text-align: left; font-size: 14px; width: 384px;">Dinner (4 days)</p>
        <p style="text-align: left; font-size: 14px; width: 384px;">$ 50.00</p>
      </div>
      <br><br><br><br><br><br><br><br>
      <div style="display: flex; gap: 200px; padding: 10px 15px; background-color: #FFF0E2; margin-top: 20px;">
        <p style="text-align: left; font-size: 14px; width: 384px;">Tax Rate</p>
        <p style="text-align: left; font-size: 14px; width: 384px;">15%</p>
      </div>
      <div style="display: flex; gap: 200px; padding: 10px 15px; background-color: #FCD1BF;">
        <p style="text-align: left; font-size: 14px; width: 384px;">Total</p>
        <p style="text-align: left; font-size: 14px; width: 384px;">$158.20</p>
      </div>
    </div>
    <p style="text-align: left; font-size: 12px; width: 384px; font-style: italic; margin-left: 8px; margin-top: 20px;">Special Instructions</p>
    <p style="text-align: left; font-size: 12px; width: 384px; font-style: italic; margin-left: 15px; margin-top: 5px;">refer to these criteria</p>
    <p style="text-align: left; font-size: 12px; width: 384px; font-style: italic; margin-left: 15px; margin-top: 5px;">refer to these criteria</p>
    <p style="text-align: left; font-size: 12px; width: 384px; font-style: italic; margin-left: 15px; margin-top: 5px;">refer to these criteria</p>
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
      to: email,
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
