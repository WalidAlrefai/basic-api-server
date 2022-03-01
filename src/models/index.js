'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const Clothes = require('./clothes');
const Food = require('./food');
require('dotenv').config();

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
} : {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

module.exports = {
    db: sequelize,
    Clothes: Clothes(sequelize, DataTypes),
    Food: Food(sequelize, DataTypes)
}