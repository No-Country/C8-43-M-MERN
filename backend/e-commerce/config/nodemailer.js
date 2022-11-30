const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = async (email, subject, html) => {
  try {
    await transporter.sendMail({
      from: `Valen <${process.env.EMAIL_USER}>`,
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
              href="https://c8-43-m-mern-bmq8wfj1n-valennc.vercel.app/auth/confirm/${token.token}"
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
              href="https://c8-43-m-mern-bmq8wfj1n-valennc.vercel.app/auth/resetpassword/${id}/${token.token}"
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
