var express = require('express');
var router = express.Router();
var multer =require('multer');
var Fraternidad = require('../../models/fraternidad.model');
var bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');
var Verificar=require('../../middleware/autenticacion');

var DIR = './public/images';
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
var upload = multer({dest: DIR}).single('reina');

router.get('/Listar',Verificar.VerificarToken,(req,res,next)=>{        
    Fraternidad.find({},(err,query)=>{
        if(err){
            res.status(300).json({lista:[],error:err,estado:'fail'});
        }
        if(!query){
            res.status(302).json({lista:[],error:'que??',estado:'fail'});
        }
        return res.status(200).json({estado:1,lista:query,estado:'ok'});
    });   
});
router.post('/Nuevo',Verificar.VerificarToken,(req,res,next)=>{
    let datos=req.body;    
    let p=new Fraternidad(datos);
    var path = '';
     /*upload(req, res, function (err) {
        if (err) {
          // An error occurred when uploading
          console.log(err);
          return res.status(422).send("an Error occured")
        }  
       // No error occured.
        path = req.file.path;
        return res.send("Upload Completed for "+path); 
    });&*/    
    p.save((err,nuevo)=>{
        if(err){
            path = req.file.path;             
            res.status(300).json({nuevo:[],error:err,estado:'fail'});
        }
        if(!nuevo){
            res.status(302).json({error:'que paso??',estado:'fail'});
        }
        return res.status(200).json({nuevo:nuevo,estado:'ok'});
    });
});
module.exports = router;