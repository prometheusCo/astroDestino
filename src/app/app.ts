import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UniverseComponent } from './components/universe/universe.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { BodyComponent } from './components/body/body.component'

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    UniverseComponent,
    DrawerComponent,
    BodyComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('astroDestino');


}
