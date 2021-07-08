const Sequelize = require("sequelize");

   const sequelize = new Sequelize('NeoTest', 'sa', '12345', {
    logging: false,
       host: 'localhost',
       dialect:  'mssql',
       dialectOptions: {
         options: { "requestTimeout": 300000 }
       },
       pool: {
         max: 20,
         min: 0,
         acquire: 30000,
         idle: 10000
       }
     });



module.exports = sequelize;
