const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api/send-email', async (req, res) => {
  const { booking } = req.body;

  // Create transporter for sending emails
  let transporter = nodemailer.createTransport({
    service: 'gmail', // Adjust based on your email provider
    auth: {
      user: 'azeemshanr@gmail.com', // Replace with your email
      pass: 'Wolfe3541$$', // Replace with your email password or app-specific password
    },
  });

  // Email details
  let mailOptions = {
    from: 'your-email@gmail.com', // Sender's email
    to: 'azeemshanr@gmail.com', // Recipient's email (your email)
    subject: 'New Booking Details',
    text: `You have a new booking:\n
           Name: ${booking.name}\n
           Email: ${booking.email}\n
           Phone: ${booking.phone}\n
           Date: ${booking.date}\n
           Time: ${booking.time}\n
           Service: ${booking.service}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email');
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
