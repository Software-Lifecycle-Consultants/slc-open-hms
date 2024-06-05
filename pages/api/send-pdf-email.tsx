// api/send-pdf-email.tsx
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import htmlPdf from 'html-pdf-node';
import { Readable } from 'stream';
import { join } from 'path';

type RequestBody = {
  email: string;
};

export default async function sendPdfEmail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email }: RequestBody = req.body;

  try {
    // Define the HTML content for the PDF
    const htmlContent = `
      <html>
        <head>
          <title>PDF Document</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
            }
            h1 {
              color: #333;
            }
            p {
              line-height: 1.5;
            }
          </style>
        </head>
        <body>
          <h1>~ PDF Title ~</h1>
          <p>This is an example of a PDF document generated from HTML content.</p>
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
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Configure the email options
    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: 'Your PDF Attachment',
      text: 'Please find the attached PDF generated from HTML content.',
      attachments: [
        {
          filename: 'document.pdf',
          content: pdfBuffer, // Ensure pdfBuffer is a Buffer
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}