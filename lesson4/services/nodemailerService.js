const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function nodemailerService(body) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.meta.ua",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_TRANSPORTER_USER, // generated ethereal user
      pass: process.env.EMAIL_TRANSPORTER_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  const { userName, userEmail, userMessage } = body;

  const emailTemplate = `
  	<h1>
		You receive email from ${userName}
	</h1>
	<p>
		User contacts: ${userEmail}
	</p>
	<p>
		Message: ${userMessage}
	</p>`;

  const options = {
    from: process.env.EMAIL_TRANSPORTER_USER, // sender address
    to: process.env.EMAIL_RECEIVER_USER, // list of receivers
    subject: "Message from comment form", // Subject line
    text: userMessage, // plain text body
    html: emailTemplate, // html body
  };

  let info = await transporter.sendMail(options);

  console.log("Message sent: %s", info.messageId);
}

module.exports = nodemailerService;
