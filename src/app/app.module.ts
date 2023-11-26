import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AmbientesComponent } from './ambientes/ambientes/ambientes/ambientes.component';
import { RouterModule } from '@angular/router';
import { FormularioComponent } from './auth/formulario/formulario.component';
import { Menu1Component } from './ambientes/ambiente1/menu1/menu1.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    Menu1Component,
    AmbientesComponent,
    NavbarComponent,
    FooterComponent,
    FormularioComponent
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  exports: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AmbientesComponent,
    NavbarComponent,
    FooterComponent,
    RouterModule,
    Menu1Component
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
