import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav } from '@angular/material/sidenav';

@Component({

  selector: 'app-drawer',
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatSidenav,
  ],
  templateUrl: 'drawer.component.html',
  styleUrls: ['drawer.component.css', '../../app.css'],
})


export class DrawerComponent {

  @ViewChild('drawer') drawer!: MatSidenav;
  isMenuOpen = false;

  toggleMenu() {

    console.log(this.drawer);
    this.drawer.toggle();
    this.isMenuOpen = this.drawer.opened;
  }

}
