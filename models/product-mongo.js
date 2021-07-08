const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
   alan1:{
        type:String,
        required:true
    },
    alan2:{
        type:String,
        required:true
    },
    alan3:{
        type:String,
        required:false
    },
    alan4:{
        type:String,
        required:true
    },
    alan5:{
      type:String,
      required:true
    },
    alan6:{
      type:String,
      required:true
    }
},
{timestamps:true})  

module.exports = mongoose.model('Product',productSchema)
