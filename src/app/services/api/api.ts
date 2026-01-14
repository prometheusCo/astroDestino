import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { DatesService } from '../dates/dates';

@Injectable({
  providedIn: 'root',
})

export class ApiService {


  constructor(

    private http: HttpClient,
    private dates: DatesService,

  ) { }

  cards: any[] = [
    {
      title: '',
      mode: 'monthly',
      text: '',
      hidden: true,
    },
    {
      title: '',
      mode: 'weekly',
      text: '',
      hidden: true,
    },
    {
      title: '',
      mode: 'daily',
      text: '',
      hidden: true,
    },
  ];


  async getCard(mode: string, sex: string, job: string, sign: string) {

    this.cards[0].title = `Mes de ${this.dates.getMonth()} `;
    this.cards[1].title = `Semana ${this.dates.getCurrentWeekRange()} `;
    this.cards[2].title = this.dates.getDayInfo();

    const baseUrl = `https://japgcv.es/portfolio/astroDestino/server/api.php?`;

    const url =
      `${baseUrl}` +
      `&sex=${encodeURIComponent(sex)}` +
      `&job=${encodeURIComponent(job)}` +
      `&sign=${encodeURIComponent(sign)}` +
      `&mode=${encodeURIComponent(mode)}`;

    try {
      const data = await firstValueFrom(this.http.get<any>(url));
      const text = data?.choices?.[0]?.message?.content ?? "";
      return text;
    } catch (err) {
      console.error("HTTP failed:", err);
      throw err;
    }
  }


}