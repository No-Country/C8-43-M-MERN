const { productsModel, usersModel, sellersModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { getTokenData } = require("../config/jwt");

const addFavorite = async (req, res) => {
  try {
    const { id } = req.params;

    //!DECODIFICO TOKEN
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await getTokenData(token);

    //!BUSCO AL USER EN LA DB
    const user = await usersModel.findOne({ email: dataToken.email });

    //!VERIFICO QUE LA ID SEA DE UN PRODUCTO
    const product = await productsModel.findById(id);

    if (!product) {
      handleHttpError(res, "INCORRECT_ID");
      return;
    } else {
      //!VEO SI EL PRODUCTO YA ESTA EN FAVORITOS
      let favorite = user.favorites.filter((f) => f._id.toString() === id);

      if (favorite.length !== 0) {
        handleHttpError(res, "FAVORITE_ALREADY_EXIST");
      } else {
        //!AGREGO PRODUCTO AL SELLER
        user.favorites = user.favorites.concat(id);
        await user.save();

        //!RESPUESTA
        res.send("Producto agregado a favoritos");
      }
    }
  } catch (error) {
    handleHttpError(res, "ERROR_ADD_FAVORITE");
  }
};

const getFavorites = async (req, res) => {
  try {
    //!DECODIFICO TOKEN
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await getTokenData(token);

    //!BUSCO AL USER EN LA DB
    const user = await usersModel.findById(dataToken._id).populate("favorites");

    //!RESPUESTA
    res.send(user.favorites);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ALL_FAVORITES");
  }
};

const getFavorite = async (req, res) => {
  try {
    const { id } = req.params;

    //!DECODIFICO TOKEN
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await getTokenData(token);

    //!BUSCO AL USER EN LA DB
    const user = await usersModel.findById(dataToken._id).populate("favorites");

    //!BUSCO EL FAVORITO
    let favorite = user.favorites.filter((f) => f._id.toString() === id);

    if (favorite.length !== 0) {
      //!BUSCO AL PRODUCT EN LA DB
      const product = await productsModel.findById(id);

      //!RESPUESTA
      res.send(product);
    } else {
      handleHttpError(res, "ERROR_NOT_FAVORITE");
      return;
    }
  } catch (error) {
    handleHttpError(res, "ERROR_GET_FAVORITE");
  }
};

const deleteFavorite = async (req, res) => {
  try {
    const { id } = req.params;

    //!DECODIFICO TOKEN
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await getTokenData(token);

    //!BUSCO AL USER EN LA DB
    let user = await usersModel.findOne({ email: dataToken.email });

    //!BUSCO EL FAVORITO A ELIMINAR
    let favorite = user.favorites.filter((f) => f._id.toString() === id);

    if (favorite.length !== 0) {
      //!ELIMINO REFERENCIA AL FAVORITO DEL USER
      await usersModel.updateOne(
        { _id: dataToken._id },
        { $pull: { favorites: id } },
        { multi: true }
      );

      //!RESPUESTA
      res.send("Producto eliminado de favoritos");
    } else {
      handleHttpError(res, "ERROR_NOT_FAVORITE");
      return;
    }
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_FAVORITE");
  }
};

const followSeller = async (req, res) => {
  try {
    const { id } = req.params;

    //!DECODIFICO TOKEN
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await getTokenData(token);

    //!BUSCO AL USER EN LA DB
    const user = await usersModel.findOne({ email: dataToken.email });

    //!VERIFICO QUE LA ID SEA DE UN SELLER
    const seller = await sellersModel.findById(id);

    if (!seller) {
      handleHttpError(res, "INCORRECT_ID");
      return;
    } else {
      //!VEO SI YA SIGUE AL SELLER
      let follow = user.follows.filter((f) => f._id.toString() === id);

      if (follow.length !== 0) {
        handleHttpError(res, "ALREADY_FOLLOW");
      } else {
        //!LO SIGO
        user.follows = user.follows.concat(id);
        await user.save();

        //!AGREGO EMAIL DE SEGUIDOR A LA LISTA DEL VENDEDOR
        seller.followers = seller.followers.concat(user.email);
        await seller.save();

        //!RESPUESTA
        res.send("Vendedor seguido");
      }
    }
  } catch (error) {
    handleHttpError(res, "ERROR_FOLLOW_SELLER");
  }
};

const unFollow = async (req, res) => {
  try {
    const { id } = req.params;

    //!DECODIFICO TOKEN
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await getTokenData(token);

    //!BUSCO AL USER EN LA DB
    let user = await usersModel.findOne({ email: dataToken.email });

    //!BUSCO AL SELLER EN LA DB
    let sellerr = await sellersModel.findById(id);

    //!BUSCO EL VENDEDOR A ELIMINAR
    let seller = user.follows.filter((f) => f._id.toString() === id);

    if (seller.length !== 0) {
      //!ELIMINO REFERENCIA AL VENDEDOR DEL USER
      await usersModel.updateOne(
        { _id: dataToken._id },
        { $pull: { follows: id } },
        { multi: true }
      );

      //!ELIMINO REFERENCIA AL USER DEL VENDEDOR
      await sellersModel.updateOne(
        { _id: sellerr._id.toString() },
        { $pull: { followers: user.email } },
        { multi: true }
      );

      //!RESPUESTA
      res.send("Vendedor dejado de seguir");
    } else {
      handleHttpError(res, "SELLER_NOT_FOLLOWED");
      return;
    }
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_FOLLOWER");
  }
};

const getFollower = async (req, res) => {
  try {
    const { id } = req.params;

    //!DECODIFICO TOKEN
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await getTokenData(token);

    //!BUSCO AL USER EN LA DB
    const user = await usersModel.findById(dataToken._id).populate("follows");

    //!BUSCO EL VENDEDOR
    let seller = user.follows.filter((f) => f._id.toString() === id);

    if (seller.length !== 0) {
      //!BUSCO AL VENDEDOR EN LA DB
      const follow = await sellersModel.findById(id);

      //!RESPUESTA
      res.send(follow);
    } else {
      handleHttpError(res, "ERROR_NOT_FOLLOWING");
      return;
    }
  } catch (error) {
    handleHttpError(res, "ERROR_GET_FOLLOWING");
  }
};

const getFollowers = async (req, res) => {
  try {
    //!DECODIFICO TOKEN
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await getTokenData(token);

    //!BUSCO AL USER EN LA DB
    const user = await usersModel.findById(dataToken._id).populate("follows");

    //!RESPUESTA
    res.send(user.follows);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ALL_FOLLOWED");
  }
};

module.exports = {
  addFavorite,
  getFavorites,
  getFavorite,
  deleteFavorite,
  followSeller,
  unFollow,
  getFollower,
  getFollowers,
};
