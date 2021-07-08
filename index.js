const express = require("express");
const sequelize = require("./utilities/database");
const productRoutes = require("./routes/product-routes");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(
   express.urlencoded({
      limit: "50mb",
      extended: "true",
      parameterLimit: 50000,
   })
);

app.use(cors());

app.use("/", productRoutes);

app.use((err, req, res, next) => {
   console.log(err);
   res.status(err.status || 500).json({
      message: err.message,
      data: err.data,
   });
});

// sequelize.authenticate()
// .then(() => {
//       console.log("Running");
//       mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
//          console.log("Connected")
//       }).catch((err)=>console.log(err));
//       app.listen(2052).setTimeout(500000);
//    })
//    .catch((err) => console.log(err));

mongoose
   .connect("mongodb://localhost:27017/test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then((result) => {
      app.listen(2052).setTimeout(500000);
   })
   .catch((err) => console.log(err));
