const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.API_SENDGRID);

const sendMailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    if (!name || !email || !msg) {
      return res.status(400).send({
        success: false,
        message: "Please provide all fields",
      });
    }

    const message = {
      to: email, // ← send mail to user dynamically
      from: 'dwivedipooja732@gmail.com', // ← must be verified sender
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

    await sgMail.send(message);
    console.log("✅ Email sent successfully!");

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

module.exports = { sendMailController };
