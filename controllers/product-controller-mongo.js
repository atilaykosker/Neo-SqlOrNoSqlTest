const mongoose = require("mongoose");
const Product = require("../models/product-mongo");
const Data = require("../data/data.json")

const productArr = [];
exports.createProduct = async (req, res, next) => {
   try {
      const datas = Data.datas;

      datas.forEach((e) => {
         const product = requestToProduct(e, new Product());
         productArr.push(product);
      });

       await insertProducts(productArr);
      console.log("bastim")
      res.status(200).json({
         message: "Total data: " + datas.length,
      });
   } catch (err) {
      next(err);
   }
};

const requestToProduct = (req, product) => {
   product.alan1 = req._id;
   product.alan2 = req.meslekkod;
   product.alan3 = req.meslekadi;
   product.alan4 = req.lastupdate;
   product.alan5 = req.createddate;
   product.alan6 = req.timestamp;
   return product;
};

const insertProducts = async (arr) => {
   await Product.insertMany(arr);
   return true;
};
