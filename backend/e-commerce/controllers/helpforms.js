const { formsModel, usersModel, sellersModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
const {
  sendHelpFormEmail,
  getTemplateHelpForm,
} = require("../config/nodemailer");

const sendQuestion = async (req, res) => {
  try {
    const body = matchedData(req);

    //! VERIFICO QUE EL USUARIO EXISTA
    let user = (await usersModel.findOne({ email: body.email })) || null;
    let seller = (await sellersModel.findOne({ email: body.email })) || null;

    if (user !== null || seller !== null) {
      //!CREO REPORTE
      const report = await formsModel.create(body);

      //!OBTENER TEMPLATE PARA EMAIL
      const template = getTemplateHelpForm(
        report.name,
        report.lastname,
        report.description,
        report.email
      );

      //!ENVIAR EMAIL DE CONFIRMACION
      await sendHelpFormEmail(report.email, report.issue, template);

      //!GUARDO REPORTE
      await report.save();

      //!RESPUESTA
      res.send({ msg: "Consulta enviada correctamente", report });
    } else {
      handleHttpError(res, "USER_SELLER_NOT_EXIST", 404);
      return;
    }
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_SEND_QUESTION");
  }
};

module.exports = {
  sendQuestion,
};
