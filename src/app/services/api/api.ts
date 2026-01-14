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


  //
  // This would be heavily ofuscated 'till endpoints keys are passed to a native module (JAVA)
  // All developing keys are changed here and in endPoint!!!
  //


  getKey(): string {

    const _0xM = (d: number[], s: number) => d.map(c => String.fromCharCode(c ^ s)).join('');

    const _0xR = (typeof self !== _0xM([114, 107, 97, 104, 123, 110, 107, 101, 111], 21) ? self : {}) as any;
    const _0xG = _0xR[_0xM([124, 102, 113, 103, 108, 124], 3)] || (_0xR as any);
    const _0xT = _0xG[_0xM([107, 100, 115, 108, 106, 100, 113, 106, 111], 3)] || {};


    if (!_0xG || !_0xT) throw new Error();

    const _0xP = _0xM([114], 21);
    const _0xUA = String(_0xT[_0xM([118, 116, 102, 113, 66, 100, 102, 111, 119], 1)] || '');
    const _0xL = _0xG[_0xM([100, 111, 107, 105, 116, 105, 111, 110], 8)] || {};

    const _0xRE = [
      () => new RegExp(_0xM([100, 115, 105, 119, 114, 110, 105], 43), _0xP),
      () => new RegExp(_0xM([11, 32, 127, 106, 11, 43], 50), _0xM([114], 21)),
      () => new RegExp(_0xM([113, 122, 105, 124, 110, 104, 113, 38, 115, 39, 115, 113, 38, 115], 23), _0xP),
      () => new RegExp(_0xM([124, 117, 126, 100, 103, 111, 107, 123, 124, 117, 120, 56, 117], 5), _0xP),
      () => new RegExp(_0xM([119, 101, 99, 101, 114, 105], 10), _0xP)
    ];

    const _0xV1 = _0xRE[0]().test(_0xUA);
    const _0xWV = _0xV1 && (_0xRE[1]().test(_0xUA) || _0xRE[2]().test(_0xUA) || (_0xRE[3]().test(_0xUA) && !_0xRE[4]().test(_0xUA)));

    const _0xCH = (() => {
      const _0xK1 = _0xM([111, 107, 107, 111, 122, 43], 31);
      const _0xK2 = _0xM([101, 102, 119, 104, 100, 113, 37, 106, 124], 15);
      const _0xK3 = _0xM([101, 102, 119, 104, 100, 113, 37, 106, 124, 54, 103, 104, 123, 123, 103, 111, 110, 102, 54, 102, 122, 123, 121, 104, 119, 111, 102, 123, 108, 110, 111, 54], 15);
      const _0xPR = String(_0xL[_0xM([113, 115, 110, 117, 110, 102, 110, 109], 1)] || '').toLowerCase();
      const _0xHS = String(_0xL[_0xM([105, 110, 122, 117, 103, 104, 108, 104], 1)] || '').toLowerCase();
      const _0xHR = String(_0xL[_0xM([106, 116, 103, 100], 2)] || '');
      return _0xPR === _0xK1 && _0xHS === _0xK2 && _0xHR.indexOf(_0xK3) !== -1;
    })();

    const _0xCO = _0xG[_0xM([98, 110, 115, 101, 110, 119, 96], 1)];
    const _0xEX = !!_0xCO && typeof _0xCO[_0xM([100, 121, 100, 102], 3)] === _0xM([105, 114, 109, 102, 117, 100, 109, 110], 3);

    const _0xOK = (() => {
      if (!_0xWV || !_0xEX) return false;
      const _0xS1 = _0xM([105, 102, 108, 122, 103, 113, 108], 8);
      const _0xS2 = _0xM([102, 120, 127, 125, 110, 67, 100, 120, 127, 100, 111, 110], 7);
      const _0xS3 = String(_0xCO[_0xM([113, 109, 96, 117, 103, 110, 115, 108, 72, 101], 1)]);
      const _0xS4 = _0xG[_0xM([90, 90, 102, 120, 127, 125, 110, 75, 100, 104], 7)];
      return _0xS3 === _0xS1 && _0xS4 === _0xS2;
    })();

    if (!(_0xCH || _0xOK) || (Math.abs((_0xG[_0xM([110, 124, 125, 100, 117, 92, 104, 111, 125, 105], 1)] || 0) - (_0xG[_0xM([104, 107, 107, 102, 117, 84, 110, 111, 121, 107], 3)] || 0)) > 160)) throw new Error();

    const _0xTP = (typeof _0xT[_0xM([106, 100, 117, 81, 106, 112, 102, 109, 73, 110, 104, 111, 113, 114], 3)] === _0xM([110, 117, 108, 98, 101, 114], 0));
    const _0xRK = (_0xWV && !_0xTP) ? _0xM([105, 118, 107, 107], 11) : _0xM([116, 103, 105, 122, 59, 58, 49, 116, 103, 122, 105, 59, 107, 105, 107, 105], 3);

    return _0xM([104, 98, 122, 62], 3) + _0xM([82, 69, 71, 82, 69, 24, 25, 71, 88, 24, 88, 71, 24, 82, 71, 71, 71, 71], 35) + _0xM([4, 42, 38, 59, 35, 111, 46, 37, 34, 43, 41, 37, 59, 33], 70) + _0xRK;

  }

  async getCard(mode: string, sex: string, job: string, sign: string) {

    this.cards[0].title = `Mes de ${this.dates.getMonth()} `;
    this.cards[1].title = `Semana ${this.dates.getCurrentWeekRange()} `;
    this.cards[2].title = this.dates.getDayInfo();

    const baseUrl = `https://japgcv.es/portfolio/astroDestino/server/api.php?${this.getKey()}`;

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