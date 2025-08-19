
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.API_SENDGRID);

const sendMailController = async (req, res) => {
  try {
    const {
      name,
      email,
      msg
    } = req.body;

    // Validation
    if (!name || !email || !msg) {
      return res.status(400).send({
        success: false,
        message: "Please provide all fields",
      });
    }

    // 1️⃣ Mail to Visitor (confirmation)
    const userMail = {
      to: email,
      from: 'dwivedipooja732@gmail.com', // must be verified in SendGrid
      subject: `Thanks ${name} for contacting us!`,
      html: `
        <h4>Hello ${name},</h4>
        <p>We received your message and will get back to you shortly.</p>
        <h5>Your Message Details:</h5>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Message:</strong> ${msg}</li>
        </ul>
        <p>Regards,<br/>Team Portfolio</p>
      `,
    };

    // 2️⃣ Mail to YOU (notification)
    const adminMail = {
      to: 'dwivedipooja732@gmail.com', // your own inbox
      from: 'dwivedipooja732@gmail.com',
      subject: `📩 New Contact Form Submission from ${name}`,
      html: `
        <h4>New message received on your Portfolio:</h4>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Message:</strong> ${msg}</li>
        </ul>
      `,
    };

    // Send both mails in parallel
    await sgMail.send([userMail, adminMail]);

    console.log("✅ Both emails sent successfully!");

    return res.status(200).send({
      success: true,
      message: "Your message has been sent successfully!",
    });

  } catch (error) {
    console.error("❌ SendGrid Error:", error.response?.body || error.message);
    return res.status(500).send({
      success: false,
      message: "SendGrid email sending failed",
      error: error.message,
    });
  }
};

module.exports = {
  sendMailController
};