const express = require("express");
const router = express.Router();
const {getProducts} = require("../controllers/products");

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
 * /products:
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

router.get("/", getProducts);

module.exports = router;
