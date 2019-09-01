var express = require('express');
var router = express.Router();
var Ubicacion = require('../../models/ubicacion.model');
var Verificar=require('../../middleware/autenticacion');


router.get('/Listar',Verificar.VerificarToken,(req,res,next)=>{        
    Ubicacion.find({},(err,query)=>{
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
    let u=new Ubicacion(datos);    
    u.save((err,nuevo)=>{
        if(err){                        
            res.status(300).json({nuevo:[],error:err,estado:'fail'});
        }
        if(!nuevo){
            res.status(302).json({error:'que paso??',estado:'fail'});
        }
        return res.status(200).json({nuevo:nuevo,estado:'ok'});
    });
});
module.exports = router;