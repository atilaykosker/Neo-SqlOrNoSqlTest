const Sequelize = require("sequelize");
const sequelize = require("../utilities/database");
const Product = sequelize.define(
   "Meslek",
   {
      ID: {
         type: Sequelize.STRING(50),
         primaryKey: true,
         allowNull: true,
      },
      MeslekKod: {
         type: Sequelize.STRING(50),
         allowNull: true,
      },
      MeslekAdi: { 
         type: Sequelize.STRING(4000),
         allowNull: true,
      },
      LastUpdate: { 
         type: Sequelize.STRING(4000),
         allowNull: true,
      },      
      CreatedDate: { 
         type: Sequelize.STRING(4000),
         allowNull: true,
      },      
      TimeStamp: { 
         type: Sequelize.STRING(4000),
         allowNull: true,
      },
      
   },
   { freezeTableName: true, timestamps: false }
);

module.exports = Product;
