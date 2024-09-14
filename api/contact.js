import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});


export default async function handler(req, res) {
console.log("GMAIL_USER:", process.env.GMAIL_USER);
  if (req.method === 'POST') {
    const { firstName, lastName, email, message, phone } = req.body;
    const name = `${firstName} ${lastName}`;
    const mail = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };

    try {
      await contactEmail.sendMail(mail);
    console.log('Email sent successfully');
      res.status(200).json({ code: 200, status: "Message Sent" });
    } catch (error) {
      res.status(500).json({ error: "Error sending message" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
