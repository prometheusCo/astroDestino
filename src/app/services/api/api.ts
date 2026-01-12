import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ApiService {


  cards: any[] = [
    {
      title: 'Enero del 2026',
      text: ''
    },
    {
      title: 'Semana 12 - 19',
      text: ''
    },
    {
      title: 'Hoy lunes 12',
      text: ''
    },
  ];


  getCards() {
    return this.cards;
  }

}
