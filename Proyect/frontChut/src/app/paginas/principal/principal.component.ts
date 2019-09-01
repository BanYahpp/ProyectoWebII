import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from "../../models/usuario";
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  formulario:boolean=false;formulog:boolean=true;  
  usuario:Usuario =new Usuario('','','','');  
  constructor(public api:ApiService ,private router:Router) {}  
  nuevo(){
    this.formulario=true;this.formulog=false;
  }
  submit(){ 
    if(this.formulario == true)  
    {
      this.api.NuevoUsuario(this.usuario)
      .subscribe(dato=>{
        if(dato.estado=='ok'){
          this.formulario=false;
          this.formulog=true;
          console.log("funciona");
          this.usuario=new Usuario();
        }else{
          //valida
        }
      });
    }
    else
    {
      this.api.LoginUsuario(this.usuario)
      .subscribe(dato=>{
        if(dato.estado=='ok'){
          localStorage.setItem("token",dato.token);  
          this.router.navigate(['/fraternidad']);
          console.log("funciona");this.formulog=false;
        }else{
          this.router.navigate(['/']);
        }
      });
    }     
  }
  
  cancelar(){
    this.formulario=false;
    this.formulog=true;
    this.usuario=new Usuario();
    
    //this.edit=false;
  }
  LogOut()
  {
    localStorage.clear();this.router.navigate(['/']);this.formulog=true;this.usuario=new Usuario();
  }
  Ubicacion()
  {
    this.router.navigate(['/ubicacion']);
  }
  ngOnInit() {
  //this.api.getPrincipal().subscribe(dato=>{})
      
  }

}
