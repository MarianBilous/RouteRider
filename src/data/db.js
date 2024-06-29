const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.resolve(__dirname, 'courierApp.sqlite')
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Parcel = require('../models/parcel')(sequelize, DataTypes);
db.Users = require('../models/users')(sequelize, DataTypes);

sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    });

module.exports = db;
