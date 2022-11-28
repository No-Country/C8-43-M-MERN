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
      text: "Prueba",
      html,
    });
  } catch (error) {
    console.log("ERROR_SEND_EMAIL", error)
  }
};

const getTemplate = (name, token) => {
  return `
      <div id="email___content">
          <h2>Hola ${name}</h2>
          <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
          <a
              href="${process.env.PUBLIC_URL}/auth/confirm/${token.token}"
              target="_blank"
          >Confirmar Cuenta</a>
      </div>
    `;
};

const getTemplateReset = (id, name, token) => {
  return `
      <div id="email___content">
          <h2>Hola ${name}</h2>
          <p>Para restaurar tu contraseña, ingrese al siguiente enlace</p>
          <a
              href="${process.env.PUBLIC_URL}/auth/resetpassword/${id}/${token.token}"
              target="_blank"
          >Restaurar Contraseña</a>
      </div>
    `;
};

module.exports = {
  sendEmail,
  getTemplate,
  getTemplateReset,
};
