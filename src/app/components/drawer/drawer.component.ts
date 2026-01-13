import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav } from '@angular/material/sidenav';
import { UserFormComponent } from '../forms/user/user.component';
import Swal from 'sweetalert2';
import { StorageService } from '../../services/storage/storage'
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({

  selector: 'app-drawer',
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatSidenav,
    MatListModule,
    MatIconModule,
    UserFormComponent
  ],
  templateUrl: 'drawer.component.html',
  styleUrls: ['drawer.component.css', '../../app.css'],
})


export class DrawerComponent {

  @ViewChild('drawer') drawer!: MatSidenav;
  isMenuOpen = false;
  userData: any;

  constructor(private storage: StorageService,) {
    this.userData = storage.getData("userData");

  }

  toggleMenu() {

    this.drawer.toggle();
    this.isMenuOpen = this.drawer.opened;
  }

  onDrawerClosed() {

    this.userData = this.storage.getData("userData");

    if (!!this.userData)
      return;

    Swal.fire({

      text: `Datos no introducidos!... Mueve el slider hasta dar con tu signo o haz click en el centro si ya esta seleccionado.`,
      icon: 'warning',
      background: 'rgb(29 26 34)',
      iconColor: '#856404',
      confirmButtonColor: 'green',
      color: 'whitesmoke',
      width: '85vw',
      confirmButtonText: 'De acuerdo',

    }).then((result) => { });


  }


  about() { }

  share() { }

}
