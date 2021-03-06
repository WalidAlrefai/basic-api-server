'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('food', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
    }
})

module.exports = Food;