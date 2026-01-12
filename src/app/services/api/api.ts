import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ApiService {


  cards: any[] = [
    {
      title: 'Predicción Astral',
      text: 'Las estrellas alinean hoy una energía renovadora para ti. Un cambio inesperado en el ámbito creativo te permitirá desbloquear potencias que tenías dormidas. Confía en tu intuición lunar.'
    },
    // add more objects as needed
  ];


  getCards() {
    return this.cards;
  }

}
