// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ambiente1Component } from './ambientes/ambiente1/ambiente1.component';
import { Ambiente2Component } from './ambientes/ambiente2/ambiente2.component';
import { Ambiente3Component } from './ambientes/ambiente3/ambiente3.component';
import { LoginComponent } from './auth/login/login.component';
import { Menu1Component } from './ambientes/ambiente1/menu1/menu1.component';
import { Menu2Component } from './ambientes/ambiente1/menu2/menu2.component';
import { Menu3Component } from './ambientes/ambiente1/menu3/menu3.component';


const routes: Routes = [
  { path: 'ambiente1', component: Ambiente1Component },
  { path: 'ambiente2', component: Ambiente2Component },
  { path: 'ambiente3', component: Ambiente3Component },
  { path: 'login', component: LoginComponent },
  { path: 'ambientes/ambiente1/menu1', component: Menu1Component },
  { path: 'menu2', component: Menu2Component },
  { path: 'menu3', component: Menu3Component },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
