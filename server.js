import express from 'express'
import cors from 'cors';
import nodemailer from 'nodemailer'
import dotenv from 'dotenv';
import logger from 'morgan';


const router = express.Router();

const app = express();

dotenv.config()

app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(logger("dev"));

app.listen(3040, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (request, response) => {
  const name = `${request.body.firstName} ${request.body.lastName}`;
  const email = request.body.email;
  const message = request.body.message;
  const phone = request.body.phone;
  const mail = {
    from: name,
    to: process.env.GMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      response.json(error);
    } else {
      response.json({ code: 200, status: "Message Sent" });
    }
  });
});