// app.component.ts

import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isLoginPage: boolean = false;
  isAmbientePage: boolean = false;
  isMenuPage: boolean = false;
  isMenuVisible: boolean = false;  

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url.includes('/login');
        this.isAmbientePage = event.url.includes('/ambiente');
        this.isMenuPage = event.url.includes('/menu1') || event.url.includes('/menu2') || event.url.includes('/menu3');
        this.isMenuVisible = !this.isMenuPage;
      }
    });
  }
}
