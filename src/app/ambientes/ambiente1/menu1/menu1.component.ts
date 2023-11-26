import { Component } from '@angular/core';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrl: './menu1.component.css'
})
export class Menu1Component {
  isVisible: boolean = false;

  mostrarMenu1() {
    this.isVisible = true;
  }

  ocultarMenu1() {
    this.isVisible = false;
  }
}