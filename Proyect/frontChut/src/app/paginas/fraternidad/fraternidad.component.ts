import { Component, OnInit } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost:3000/public/images';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from "../../models/usuario";
import { Fraternidad } from "../../models/fraternidad";
import { ApiService } from "../../services/api.service";
//import { Http, Response } from '@angular/http';
//import "rxjs/add/operator/do";
//import "rxjs/add/operator/map";


@Component({
  selector: 'app-fraternidad',
  templateUrl: './fraternidad.component.html',
  styleUrls: ['./fraternidad.component.css']
})
export class FraternidadComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url:URL,itemAlias: 'reina'});    
  
  lista:Fraternidad[];
  formulario2:boolean=false;
  public frater:Fraternidad=new Fraternidad('','','','','',0,'','',0,0);  
  constructor(public api:ApiService ,private router:Router) { }
  nuevo(){
    this.formulario2=true;
  }
  submit()
  { let formData = new FormData();   
    //formData.append('reina');
    this.frater.reina=URL+'reina'+this.frater.nombre+'.jpg';
    this.api.NuevoFraternidad(this.frater)
      .subscribe(dato=>{
        if(dato.estado=='ok'){
          console.log("funciona");
          this.formulario2=false;
          this.lista.push(dato.nuevo);
        }else{
          //valida
        }
      });
  }
  cancelar()
  {
    this.formulario2=false;
    this.frater=new Fraternidad();
    
  }
  ngOnInit() 
  {
    this.api.getListFraternidad().subscribe(dato=>{
      if(dato.estado=='ok'){
        this.lista=dato.lista;
      }else{
        console.log('paso algo :.');
      }
    })
  
  }

}
