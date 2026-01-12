import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ApiService } from '../../services/api/api';
import { StorageService } from '../../services/storage/storage'
import { DatesService } from '../../services/dates/dates';
import { ChangeDetectorRef } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  imports: [
    CommonModule,
    MatCardModule,
  ],
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css', '../../app.css'],
})


export class CardComponent {


  cards: any[];
  userData: any;
  sign: string;

  constructor(

    private api: ApiService,
    private storage: StorageService,
    private dates: DatesService,
    private cdr: ChangeDetectorRef

  ) {

    this.userData = storage.getData("userData");
    this.cards = api.cards; console.log(this.cards);
    this.sign = "";

    if (!this.userData)
      return;

    this.sign = this.dates.getZodiacSign(new Date(this.userData.birthdate));
  }


  openForm() {

    Swal.fire({

      text: 'Antes de que podamos predecir tu horóscopo necesitamos conecerte un poquito mejor',
      icon: 'warning',
      background: 'rgb(29 26 34)',
      iconColor: '#856404',
      confirmButtonColor: 'green',
      color: 'whitesmoke',
      width: '85vw',
      confirmButtonText: 'Vamos a ello!',

    }).then((result) => {

      if (!result.isConfirmed)
        return;

      const btn = document.getElementById('menuBtn') as HTMLElement;
      if (btn) {
        setTimeout(() => { btn.click(); }, 400)
      }

    });


  }

  async fillCards() {

    if (!this.userData) {

      setTimeout(() => { this.openForm() }, 1000)
      return;
    }

    for (const [index, card] of this.cards.entries()) {

      let text = await this.api.getCard(
        card.mode,
        this.userData.gender,
        this.userData.profession,
        this.sign
      );
      this.cards[index].text = text;
      this.cdr.detectChanges();

    }

  }


  ngOnInit() {

    console.log("fillings cards...");
    setTimeout(() => { this.fillCards(); }, 700)

  }

}
