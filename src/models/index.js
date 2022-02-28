'use strict';

const {Sequelize, DataTypes} = require('sequelize'); 
const Clothes = require('./clothes');
const Food = require('./food');

require('dotenv').config();

const POSTGRES_URL = process.env.DATABASE_URL;

let sequelizeOptions =  {
dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
        }
}
let sequelize = new Sequelize(POSTGRES_URL,sequelizeOptions);

module.exports = {
    db: sequelize, 
    Clothes: Clothes(sequelize,DataTypes),
    Food: Food(sequelize,DataTypes)
}