import express from "express";
import nodemailer from "nodemailer";

const router = express.Router()

router.post('/send', (req, res) => {
  const output = `
      <p>You have a new message</p>
      <h3>Message details:</h3>
      <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Phone number: ${req.body.phone}</li>
        <li>Email: ${req.body.email}</li>
        <li>Subject : ${req.body.subject}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "0bd00edd49a229", // generated ethereal user
      pass: "0e5a74f8bd8cad"  // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Nodemailer Contact" <0bd00edd49a229>', // sender address
    to: 'rayanubhab@gmail.com', // list of receivers
    subject: 'Message Notification', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    res.send({ msg: "Your message has been sent!" })
  });

});



export default router