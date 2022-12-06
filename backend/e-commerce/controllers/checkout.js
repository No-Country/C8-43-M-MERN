var mercadopago = require('mercadopago');

mercadopago.configure({
    access_token: 'APP_USR-8944861954598894-113021-f7df74c227bf516325bbc829dff5d4cf-1252212109'
});

const checkout = async (req, res) => {
  console.log("BODY: ", req.body)
  const fakeBody = {
    title: "Vestido de diseñador",
    description: "Vestido largo creado por estudiante de Diseño de Indumentaria",
    picture: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/170/640/products/_a745914-fa6a1fbc3378b380db16615921175902-640-0.jpg",
    price: 2250.00,
    quantity: 2
  }
  try {
    let preference = {
      items: [
        {
          title: fakeBody.title,
          description: fakeBody.description,
          picture_url: fakeBody.picture,
          unit_price: fakeBody.price,
          quantity: fakeBody.quantity,
        },
      ],

      back_urls: {
        success: "http://localhost:4000/pruebaSuccess",
        failure: "http://localhost:4000/pruebaSuccess",
        pending: "http://localhost:4000/pruebaSuccess",
      },
      auto_return: "approved",

      statement_descriptor: "VALEN",
          shipments: {
            cost: 2000,
            mode: "not_specified",
          },
    };
    
    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        // console.log(response.body)
        res.redirect(response.body.sandbox_init_point);
      })
      .catch(function (error) {
        console.log("PREFERENCE MERCADOPAGO: ",error);
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    checkout
};