const {Sequelize} = require('sequelize');

const DB = new Sequelize({
    dialect : 'mysql',
    host : 'localhost',
    username : 'root',
    password : 'YourRootPassword',
    database : 'node-complete'
});

module.exports = DB;
