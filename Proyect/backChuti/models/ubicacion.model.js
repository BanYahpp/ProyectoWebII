var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var esquema= new Schema({
    latitude:{type:Number},
    longitude:{type:Number},
    fraternidad:{type:String,required:true},    
    dia:{type:Number,required:true},
    estado:{type:Number,default:1},
    comentario:{type:String},
    fotodir:{type:String},
    fecha:{type:Date,default:Date.now},
});

module.exports=mongoose.model('Ubicacion',esquema);