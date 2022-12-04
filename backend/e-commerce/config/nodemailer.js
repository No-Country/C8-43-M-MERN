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
    await sendGrid.send(messageData);
  } catch (error) {
    console.log(error);
  }
};

const sendHelpFormEmail = async (email, subject, html) => {
  const messageData = {
    to: `${process.env.EMAIL_USER}`,
    from: `${process.env.EMAIL_USER}`,
    subject,
    text: "Prueba",
    html,
  };
  try {
    await sendGrid.send(messageData);
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
              href="https://c8-43-m-mern-api.vercel.app/auth/confirm/${token.token}"
              target="_blank"
          >Confirmar Cuenta</a>
      </div>
    `;
};

const getTemplateReset = (id, name, token) => {
  return `
      <div id="email___content">
          <h2>Hola ${name}</h2>
          <p>Este es un email para restaurar tu contraseña de Valen, ingrese al siguiente enlace.
          Si no has solicitado restaurar tu contraseña, por favor desestima esta email.</p>
          <a
              href="https://c8-43-m-mern-api.vercel.app/auth/resetpassword/${id}/${token.token}"
              target="_blank"
          >Restaurar Contraseña</a>
      </div>
    `;
};

const getTemplateHelpForm = (name, lastname, description, email) => {
  return `
      <div id="email___content">
          <h2>Consulta para administradores de: ${email}</h2>
          <p>${name} ${lastname} dice: ${description}</p>
      </div>
    `;
};

const getTemplateFollowers = (name, lastname) => {
  return `
      <div id="email___content">
          <h2>Nueva alerta</h2>
          <p>Hola! Este email es para avisarte que el vendedor ${name} ${lastname} a quien sigues, a agregado nuevas prendas a su tienda!</p>
      </div>
    `;
};

module.exports = {
  sendEmail,
  sendHelpFormEmail,
  getTemplate,
  getTemplateReset,
  getTemplateHelpForm,
  getTemplateFollowers,
};
