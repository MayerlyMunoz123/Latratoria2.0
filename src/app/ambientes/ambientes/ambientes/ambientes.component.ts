// ambiente.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-ambientes',
  templateUrl: './ambientes.component.html',
  styleUrls: ['./ambientes.component.css']  // Cambia styleUrl a styleUrls
})
export class AmbientesComponent {
  isVisible: boolean = false;

  mostrarAmbientes() {
    this.isVisible = true;
  }

  ocultarAmbientes() {
    this.isVisible = false;
  }
}
