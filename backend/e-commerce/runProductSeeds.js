require("dotenv").config();
const { faker } = require('@faker-js/faker');
const mongoose = require("mongoose");

const dbConnect = require("./config/mongo");
const Product = require('./models/nosql/Product')

const seedDB = async () => {
    try {
        const client = dbConnect();

        for (let i = 0; i < 20; i++) {
            const name = faker.commerce.productName();
            const color = faker.commerce.color();
            const category = faker.commerce.department();
            const price = faker.commerce.price();
            const description = faker.commerce.productDescription();

            const newProduct = new Product({name, color, category, price, description});
            await newProduct.save();
        }

        console.log("Database seeded! :)");
        mongoose.connection.close()
    } catch (err) {
        console.log(err.stack);
    }
}

seedDB();