const { productsModel, usersModel, shoppingcartsModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
const { getTokenData } = require("../config/jwt");

const getShoppingCart = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const shoppingcart = await shoppingcartsModel.findById(id);
    if (!shoppingcart) {
      handleHttpError(res, "NOT_SHOPPINGCART_OR_INCORRECT_ID");
      return;
    }
    res.send(shoppingcart);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_SHOPPINGCART");
  }
};

const addProductCart = async (req, res) => {
  try {
    const { id } = req.params;

    //!DECODIFICO TOKEN
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await getTokenData(token);

    //!BUSCO USER
    const user = await usersModel
      .findById(dataToken._id)
      .populate("shoppingcart");

    try {
      //!BUSCO PRODUCTO
      var product = await productsModel.findById(id);
    } catch (error) {
      handleHttpError(res, "PRODUCT_NOT_EXIST");
      return;
    }

    if (!user.shoppingcart) {
      //!CREO CARRITO AGREGANDO PRODUCTO
      let productToOrder = await shoppingcartsModel.create({
        order: {
          name: product.name,
          color: product.color,
          sizes: product.sizes,
          price: product.price,
          image: product.image.url,
        },
      });

      //!VINCULO CARRITO A USER
      user.shoppingcart = productToOrder._id;
      await user.save();

      //!VINCULO USER A CARRITO
      productToOrder.user = user._id;
      await productToOrder.save();

      //!RESPUESTA
      res.send({
        msg: "Producto agregado correctamente",
        shoppingCartId: productToOrder._id,
      });
    } else {
      //!VEO SI TENGO EL PRODUCTO REPETIDO
      const productRepeat = user.shoppingcart.order.filter(
        (n) => n.name === product.name
      );

      if (productRepeat.length === 0) {
        await shoppingcartsModel.updateOne(
          { _id: user.shoppingcart._id },
          {
            $push: {
              order: {
                name: product.name,
                color: product.color,
                sizes: product.sizes,
                price: product.price,
                image: product.image.url,
              },
            },
          }
        );

        //!RESPUESTA
        res.send({
          msg: "Producto agregado correctamente",
          shoppingCartId: user.shoppingcart._id,
        });
      } else {
        handleHttpError(res, "ERROR_PRODUCT_REPEAT");
      }
    }
  } catch (error) {
    handleHttpError(res, "ERROR_ADD_PRODUCT_TO_CART");
  }
};

const modifyAmount = async (req, res) => {
  try {
    const { id } = req.params;
    const { query } = req.query;

    //!DECODIFICO TOKEN
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await getTokenData(token);

    //!BUSCO USER
    const user = await usersModel
      .findById(dataToken._id)
      .populate("shoppingcart");

    try {
      //!BUSCO PRODUCTO
      var product = await productsModel.findById(id);
    } catch (error) {
      handleHttpError(res, "PRODUCT_NOT_EXIST");
      return;
    }

    try {
      //!BUSCO ORDEN
      var orders = await shoppingcartsModel.findById(
        user.shoppingcart._id.toString()
      );
    } catch (error) {
      handleHttpError(res, "ORDER_NOT_EXIST");
      return;
    }

    //!BUSCO SI EL PRODUCTO EXISTE EN LA ORDEN
    const productInOrder = user.shoppingcart.order.filter(
      (n) => n.name === product.name
    );
    if (productInOrder.length === 0) {
      handleHttpError(res, "PRODUCT_NOT_EXIST_IN_ORDER");
      return;
    }

    if (query === "add") {
      //!AUMENTO CANTIDAD EN 1
      orders.order.filter((n) => n.name === product.name)[0].amount =
        orders.order.filter((n) => n.name === product.name)[0].amount + 1;

      await orders.save();

      res.send("Cantidad aumentada");
    } else if (query === "del") {
      //!DISMINUYO CANTIDAD EN 1
      orders.order.filter((n) => n.name === product.name)[0].amount =
        orders.order.filter((n) => n.name === product.name)[0].amount - 1;

      await orders.save();

      res.send("Cantidad reducida");
    } else {
      handleHttpError(res, "ERROR_QUERY");
    }
  } catch (error) {
    handleHttpError(res, "ERROR_MODIFY_AMOUNT");
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    //!DECODIFICO TOKEN
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await getTokenData(token);

    //!BUSCO USER
    const user = await usersModel
      .findById(dataToken._id)
      .populate("shoppingcart");

    try {
      //!BUSCO PRODUCTO
      var product = await productsModel.findById(id);
    } catch (error) {
      handleHttpError(res, "PRODUCT_NOT_EXIST");
      return;
    }
    try {
      //!BUSCO ORDEN
      await shoppingcartsModel.findById(user.shoppingcart._id.toString());
    } catch (error) {
      handleHttpError(res, "ORDER_NOT_EXIST");
      return;
    }

    //!BUSCO SI EL PRODUCTO EXISTE EN LA ORDEN
    const productInOrder = user.shoppingcart.order.filter(
      (n) => n.name === product.name
    );
    if (productInOrder.length === 0) {
      handleHttpError(res, "PRODUCT_NOT_EXIST_IN_ORDER");
      return;
    }

    //!ELIMINO PRODUCTO
    await shoppingcartsModel.updateOne(
      { _id: user.shoppingcart._id },
      { $pull: { order: { name: product.name } } }
    );

    //!RESPUESTA
    res.send("Producto borrado correctamente");
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_PRODUCT");
  }
};

module.exports = {
  getShoppingCart,
  addProductCart,
  modifyAmount,
  deleteProduct,
};
