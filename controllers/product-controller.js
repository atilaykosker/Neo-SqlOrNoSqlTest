const Product = require("../models/product");

exports.createProduct = async (req, res, next) => {
   try {
      const datas = req.body.datas;

      //var arr = [];
      const dataProducts = [];
      await datas.forEach((data) => {
         const dataProduct = {
            ID: data._id,
            MeslekKod: data.meslekkod,
            MeslekAdi: data.meslekadi,
            LastUpdate: data.lastupdate,
            CreatedDate: data.createddate,
            TimeStamp: data.timestamp,
         };
         dataProducts.push(dataProduct);
      });
      Product.bulkCreate(dataProducts).then(()=>{
         res.status(200).json({
            message: "Total data: " + datas.length,
         });
      });
   } catch (err) {
      next(err);
   }
};
