const { handleHttpError } = require("../utils/handleError");
const nodemailer = require("nodemailer");
const VALEN_USER = process.env.VALEN_USER;
const VALEN_PASS = process.env.VALEN_PASS;

let transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: VALEN_USER,
    pass: VALEN_PASS,
  },
});

const sendEmail = async (email, subject, html) => {
  try {
    await transporter.sendMail({
      from: `Valen <${VALEN_USER}>`,
      to: email,
      subject,
      text: "Hello world?",
      html,
    });
  } catch (error) {
    console.log("ERROR_SEND_EMAIL", error);
  }
};

const getTemplate = (name, token) => {
  return `
      <head>
          <link rel="stylesheet" href="./style.css">
      </head>
      
      <div id="email___content">
          <img src="https://i.imgur.com/eboNR82.png" alt="">
          <h2>Hola ${name}</h2>
          <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
          <a
              href="http://localhost:${process.env.PORT}/users/confirm/${token.token}"
              target="_blank"
          >Confirmar Cuenta</a>
      </div>
    `;
};

module.exports = {
  sendEmail,
  getTemplate,
};
