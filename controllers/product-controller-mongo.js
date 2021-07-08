const mongoose = require("mongoose");
const Product = require("../models/product-mongo");

exports.createProduct = async (req, res, next) => {
   // Product.insertMany(req.body.datas, { ordered: false }).then((res) => {
   //       console.log("bastim")
   //       res.status(200).json({
   //          message: "Total data: " + req.body.datas.length,
   //       });
   //   }).catch = (err) => {
   //    console.log(err);
   // }

   try {
      Product.insertMany(req.body.datas, { ordered: false }).then(()=>{
         console.log("bastim");
         res.status(200).json({
            message: "Total data: " + req.body.datas.length,
         });
      });
     
   } catch (e) {
      print(e);
   }
};


exports.selectCompany = async (req, res, next) => {
const datas = req.body.datas

   try {
      Product.insertMany(req.body.datas, { ordered: false }).then(()=>{
         console.log("bastim");
         res.status(200).json({
            message: "Total data: " + req.body.datas.length,
         });
      });
     
   } catch (e) {
      print(e);
   }
};