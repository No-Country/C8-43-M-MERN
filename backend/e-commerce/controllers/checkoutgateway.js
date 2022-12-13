const mercadopago = require("mercadopago");
const { handleHttpError } = require("../utils/handleError");
const { usersModel, shoppingcartsModel } = require("../models");
mercadopago.configure({
  access_token: process.env.ACCES_TOKEN_MP,
});

const generateItem = async (req, res) => {
  try {
    const { id } = req.params;

    //!BUSCO ORDEN
    const orders = await shoppingcartsModel.findById(id);

    let preference = {
      back_urls: {
        success: "http://localhost:3001",
      },
      items: [],

      notification_url: `https://ff94-181-31-19-200.sa.ngrok.io/checkoutgateway/notificar/${orders._id}`,
    };
    //!AGREGO ITEMS DEL CARRITO A LA PASARELA DE PAGO
    orders.order.forEach((o) => {
      preference.items.push({
        id: o._id.toString(),
        title: o.name,
        unit_price: o.price,
        quantity: o.amount,
        currency_id: "ARS",
      });
    });
    const response = await mercadopago.preferences.create(preference);
    res.redirect(response.body.init_point);
  } catch (error) {
    handleHttpError(res, "ERROR_MP");
  }
};

const notifyUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const { params } = req;

    //!BUSCO ORDEN
    const orders = await shoppingcartsModel.findById(id);

    const topic = req.query.topic;
    switch (topic) {
      case "payment":
        const paymentId = req.query.id || req.query("data.id");
        console.log(topic, "getting payment", paymentId);
        const payment = await mercadopago.payment.findById(paymentId);
        var merchantOrder = await mercadopago.merchant_orders.findById(
          payment.body.order.id
        );
        break;
    }

    var paidAmount = 0;
    merchantOrder.body.payments.forEach((payment) => {
      if (payment.status === "approved") {
        paidAmount += payment.transaction_amount;
      }
    });
    if (paidAmount >= merchantOrder.body.total_amount) {
      console.log("El pago se completo");

      //!ELIMINO REFERENCIA A LA ORDEN DEL USER
      await usersModel.updateOne(
        { _id: orders.user.toString() },
        { shoppingcart: null }
      );

      //!ELIMINO LA ORDEN
      await shoppingcartsModel.deleteOne({ _id: id });
    } else {
      console.log("El pago NO se completo");
    }

    res.send();
  } catch (error) {
    handleHttpError(res, "ERROR_MP");
  }
};

//! https://ff94-181-31-19-200.sa.ngrok.io/checkoutgateway/generate/639840da66233984136ba30e

module.exports = {
  generateItem,
  notifyUrl,
};
