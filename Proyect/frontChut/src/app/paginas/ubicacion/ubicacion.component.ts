import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { MapsAPILoader, MouseEvent } from '@agm/core';

import { Usuario } from "../../models/usuario";
import { Ubicacion } from "../../models/ubicacion";
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {

  title = 'frontChut';
  latitude: number;
  longitude: number;
  zoom:number; 
  private geoCorder;
  //@ViewChild('search')
  public searchElementRef: ElementRef; 

  lista:Ubicacion[];
  formulario3:boolean=false;
  public ubica:Ubicacion=new Ubicacion(0,0,'',0,'','');  
  constructor(public api:ApiService ,private router:Router,
    public mapsAPILoader: MapsAPILoader,public ngZone: NgZone) { }
  nuevo(){
    this.formulario3=true;
  }
  submit()
  { this.ubica.latitude= this.latitude;this.ubica.longitude=this.longitude;
    //formData.append('reina');      
    this.api.NuevoUbicacion(this.ubica)
      .subscribe(dato=>{
        if(dato.estado=='ok'){
          console.log("funciona");console.log(this.ubica.latitude);
          console.log(this.ubica.longitude);
          this.formulario3=false;
          this.lista.push(dato.nuevo);
        }else{
          //valida
        }
      });
  }
  cancelar()
  {
    this.formulario3=false;
    this.ubica=new Ubicacion();
    
  }
  Frater()
  {
    this.router.navigate(['/fraternidad']);
  }
  ngOnInit() 
  {
    this.api.getListUbicacion().subscribe(dato=>{
      if(dato.estado=='ok'){
        this.lista=dato.lista;
      }else{
        console.log('paso algo :.');
      }
    }) ;

    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      //this.geoCoder = new google.maps.Geocoder;
 
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
 
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
 
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

    private setCurrentLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 8;
          //this.getAddress(this.latitude, this.longitude);
        });
      }
    }

    markerDragEnd($event: MouseEvent) {
      console.log($event);
      this.latitude = $event.coords.lat;
      this.longitude = $event.coords.lng;
      //this.getAddress(this.latitude, this.longitude);
    }
    //this.setCurrentLocation();  
  
  }

