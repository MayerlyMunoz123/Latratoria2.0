// ambiente1.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ambiente1',
  templateUrl: './ambiente1.component.html',
  styleUrls: ['./ambiente1.component.css']
})
export class Ambiente1Component {
  showMenu1: boolean = false;
  constructor(private router: Router) { }

irAlMenu() {
  this.router.navigate(['ambientes/ambiente1/menu1']);
}
}
