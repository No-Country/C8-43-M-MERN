const sendGrid = require("@sendgrid/mail");
sendGrid.setApiKey(process.env.SENDGRID_TOKEN);

const sendEmail = async (email, subject, html) => {
  const messageData = {
    to: email,
    from: `${process.env.EMAIL_USER}`,
    subject,
    text: "Prueba",
    html,
  };
  try {
    await sendGrid.send(messageData)
    console.log("Email enviado");
  } catch (error) {
    console.log(error);
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
