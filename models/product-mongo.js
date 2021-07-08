const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id1:{
      type:String,
      required:true
    },
    meslekkod:{
        type:String,
        required:true
    },
    meslekadi:{
        type:String,
        required:false
    },
    lastupdate:{
        type:String,
        required:true
    },
    createddate:{
      type:String,
      required:true
    },
    timestamp:{
      type:String,
      required:true
    }
},
{timestamps:false})  

module.exports = mongoose.model('Product',productSchema)