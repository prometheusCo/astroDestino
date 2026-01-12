import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ApiService } from '../../services/api/api'

@Component({
  selector: 'app-card',
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css', '../../app.css'],
})


export class CardComponent {

  cards: any[];

  constructor(
    private api: ApiService,
  ) {
    this.cards = this.api.getCards();
  }



}
