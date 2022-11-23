const express = require("express");
const router = express.Router();
const { getProducts, getProduct, getProductSearch } = require("../controllers/products");
const { validatorGetItem } = require("../validators/products");
const { authMiddleware } = require("../middlewares/session");



router.get("/", getProductSearch)

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - color
 *         - category
 *         - price
 *         - description
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the product
 *         color:
 *           type: string
 *           description: The color of the product
 *         category:
 *           type: string
 *           description: The category the product belongs to
 *         price:
 *           type: string
 *           description: The product's price
 *         description:
 *           type: string
 *           description: Description of the product
 */

/**
 * @swagger
 * /products/all:
 *   get:
 *     summary: Returns all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */

router.get("/all", authMiddleware, getProducts);
router.get("/:id", validatorGetItem, getProduct);


module.exports = router;
