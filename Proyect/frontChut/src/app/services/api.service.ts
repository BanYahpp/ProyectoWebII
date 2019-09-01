import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public urlServer:string = 'http://localhost:3000/';
  constructor(public http:HttpClient) { }
  public getPrincipal():Observable<any>{
    return this.http.get(this.urlServer+'principal/');
  }
  public NuevoUsuario(usuario):Observable<any>{
    delete usuario._id;
    return this.http.post(this.urlServer+'principal/Nuevo',usuario);
  }
  public LoginUsuario(log):Observable<any>{
    delete log._id;
    return this.http.post(this.urlServer+'principal/Iniciar',log);
  }
  getListFraternidad():Observable<any>{
    return this.http.get(this.urlServer+'fraternidad/Listar/?token='+localStorage.getItem("token"));
    
  }
  public NuevoFraternidad(frater):Observable<any>{
    delete frater._id;
    //this.http.post(URL, formData) => res)
    return this.http.post(this.urlServer+'fraternidad/Nuevo/?token='+localStorage.getItem("token"),frater);
  }
  getListUbicacion():Observable<any>{
    return this.http.get(this.urlServer+'ubicacion/Listar/?token='+localStorage.getItem("token"));
    
  }
  public NuevoUbicacion(ubica):Observable<any>{
        delete ubica._id;    
    return this.http.post(this.urlServer+'ubicacion/Nuevo/?token='+localStorage.getItem("token"),ubica);
  }

}
