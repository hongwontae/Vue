const DB = require('../util/DB-Setting');
const {DataTypes} = require('sequelize');

const RatingModel = DB.define('ratingData', {
    id : {
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,
        type : DataTypes.INTEGER
    },
    name : {
        allowNull : false,
        type : DataTypes.STRING
    },
    rating : {
        allowNull :false,
        type : DataTypes.STRING
    }
})

module.exports = RatingModel;