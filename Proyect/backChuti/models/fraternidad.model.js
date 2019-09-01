var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var esquema= new Schema({
    nombre:{type:String,required:true},
    institucion:{type:String,required:true},
    presidente:{type:String,required:true},
    delegado:{type:String,required:true},
    reina:{type:String},
    cantidad:{type:Number,required:true},
    danza:{type:String},
    descripcion:{type:String},
    hora:{type:Number,required:true},
    dia:{type:Number,required:true},
});

module.exports=mongoose.model('Fraternidad',esquema);