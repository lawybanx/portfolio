// utils/sendEmail.js
import nodemailer from 'nodemailer';

const sendEmail = async formData => {
  try {
    const transporter = nodemailer.createTransport({
      // Setup your email transport options (SMTP, API key, etc.)
    });

    const message = {
      from: 'your-email@example.com',
      to: 'recipient-email@example.com',
      subject: `New Contact Form Submission - ${formData.subject}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}
        Message: ${formData.message}
      `,
    };

    await transporter.sendMail(message);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Error sending email');
  }
};

export default sendEmail;
