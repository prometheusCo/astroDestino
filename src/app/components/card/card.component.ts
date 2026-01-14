import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ApiService } from '../../services/api/api';
import { StorageService } from '../../services/storage/storage'
import { DatesService } from '../../services/dates/dates';
import { ChangeDetectorRef } from '@angular/core';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { GlobalEventsService } from '../../services/events/global';

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

  sub?: Subscription;
  cards: any[];
  userData: any;

  constructor(

    private api: ApiService,
    private storage: StorageService,
    private dates: DatesService,
    private cdr: ChangeDetectorRef,
    private events: GlobalEventsService,

  ) {
    this.cards = api.cards;
  }


  openForm() {

    Swal.fire({

      text: 'Antes de que podamos predecir tu horóscopo necesitamos conecerte un poquito mejor :)',
      icon: 'warning',
      background: 'rgb(29 26 34)',
      iconColor: '#856404',
      confirmButtonColor: 'green',
      color: 'whitesmoke',
      width: '85vw',
      confirmButtonText: 'Vamos a ello!',
      allowOutsideClick: false,
      allowEscapeKey: false,

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

    this.userData = this.storage.getData("userData");

    if (!this.userData) {

      setTimeout(() => { this.openForm() }, 1000)
      return;
    }

    for (const [index, card] of this.cards.entries()) {

      let text = await this.api.getCard(
        card.mode,
        this.userData.gender,
        this.userData.profession,
        this.userData.sign
      );
      this.cards[index].text = text;
      this.cdr.detectChanges();

    }

  }


  ngOnInit() {

    setTimeout(() => { this.fillCards(); }, 500);

    this.sub = this.events.events$.subscribe((e) => {

      console.log("triggered");

      console.log(e);
      if (e?.type === 'RELOAD_CARDS') {



        this.cards.map((c) => { c.text = ''; return c });
        this.cdr.detectChanges();
        setTimeout(() => { this.fillCards(); }, 700)
      }

    });

  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

}
