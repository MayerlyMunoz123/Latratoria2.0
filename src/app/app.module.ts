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
import { Ambiente1Module} from './ambientes/ambiente1/ambiente1.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

    AmbientesComponent,
    NavbarComponent,
    FooterComponent,
    FormularioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ambiente1Module
  ],
  exports: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AmbientesComponent,
    NavbarComponent,
    FooterComponent,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
