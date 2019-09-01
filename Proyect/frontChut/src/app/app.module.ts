import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { FileSelectDirective } from 'ng2-file-upload';


import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FraternidadComponent } from './paginas/fraternidad/fraternidad.component';
import { UbicacionComponent } from './paginas/ubicacion/ubicacion.component';

const appRoutes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'fraternidad', component: FraternidadComponent },
  { path: 'ubicacion' , component: UbicacionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    FraternidadComponent,FileSelectDirective, UbicacionComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFjbQcU69YG-s1mttgKMAkjCjFjgQACFk',
      libraries: ['places']
    }),
    AppRoutingModule
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
