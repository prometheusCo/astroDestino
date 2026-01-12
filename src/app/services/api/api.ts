import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ApiService {


  cards: any[] = [
    {
      title: 'Enero del 2026',
      text: 'Las estrellas alinean hoy una energía renovadora para ti. Un cambio inesperado en el ámbito creativo te permitirá desbloquear potencias que tenías dormidas. Confía en tu intuición lunar.'
    },
    {
      title: 'Semana 12 - 19',
      text: 'Las estrellas alinean hoy una energía renovadora para ti. Un cambio inesperado en el ámbito creativo te permitirá desbloquear potencias que tenías dormidas. Confía en tu intuición lunar.'
    },
    {
      title: 'Hoy lunes 12',
      text: 'Las estrellas alinean hoy una energía renovadora para ti. Un cambio inesperado en el ámbito creativo te permitirá desbloquear potencias que tenías dormidas. Confía en tu intuición lunar.'
    },
  ];


  getCards() {
    return this.cards;
  }

}
