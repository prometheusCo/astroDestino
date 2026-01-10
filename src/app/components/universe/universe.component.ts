import { Component, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Star {
  x: number;
  y: number;
  size: number;
  duration: string;
}

@Component({
  selector: 'app-universe',
  imports: [CommonModule],
  templateUrl: 'universe.component.html',
  styleUrls: ['universe.component.css', '../../app.css'],
})

export class UniverseComponent implements OnInit {

  // Usamos signals para manejar la colección de estrellas de forma reactiva
  stars = signal<Star[]>([]);

  ngOnInit() {
    this.generateStars(60);
  }

  /**
   * Genera un array de estrellas con propiedades aleatorias
   */
  private generateStars(count: number): void {
    const newStars: Star[] = [];

    for (let i = 0; i < count; i++) {
      newStars.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5,
        duration: `${2 + Math.random() * 4}s`
      });
    }

    this.stars.set(newStars);
  }

}
