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
  getKey() {


    const _0x1f2e = (function () {
      // A: Shuffled String Heap (Encrypted signatures for environment checks and keys)
      const _0x5a = [
        'YTI0NmF6UnZkVzUwYVc1dg==', 'YTI0NmF6UnZkVzUwYVc1dmVXVnlhVzl1WVcxbA==',
        'YTI0NmF6UnZkVzUwYVc1dmRHOXVaWGRwZGVXNW1hVzU=', 'YTI0NmF6UnZkVzUwYVc1dmNtVnhkV2x5WlE9PQ==',
        'aHR0cHM6Ly9qYXBnY3YuZXMvcG9ydGZvbGlvL2FzdHJvRGVzdGluby8=', 'YXN0cm9EZXN0aW5v',
        'YTI0NmF6UnZkVzUwYVc1dmIzSndiM0ps', 'YTI0NmF6UnZkVzUwYVc1dmNtVnhkV2x5WlE9PQ==',
        'a2V5PQ==', 'c2RmZGZzZnNmeWR5NTQ0NDU0NDU0NTQ1', 'JnBsYXlTdG9yZUtleT0=',
        'a2RmZGRha2TDoHM0NTM0NDNkactivea'
      ];

      // B: Recursive Decoder
      const _0x3b = (i: number) => atob(_0x5a[i]);

      // C: Environment Verification (Hardened Logic)
      const _0x2c = (function () {
        const _w: any = window;
        const _n: any = navigator;

        // Obfuscated string resolution for 'cordova', 'BuildInfo', 'packageName'
        const _cStr = atob('Y29yZG92YQ==');
        const _bStr = atob('QnVpbGRJbmZv');
        const _pStr = atob('cGFja2FnZU5hbWU=');

        const _uCheck = _w['\x6c\x6f\x63\x61\x74\x69\x6f\x6e']['\x68\x72\x65\x66'] === _0x3b(4);

        const _isAnd = /Android/i.test(_n['\x75\x73\x65\x72\x41\x67\x65\x6e\x74']);
        const _isCord = !!_w[_cStr];

        let _idV = false;
        try {
          _idV = (_w[_bStr] && _w[_bStr][_pStr] === _0x3b(5)) ||
            (_w[_cStr] && _w[_cStr]['\x72\x65\x71\x75\x69\x72\x65']('cordova/plugin/BuildInfo')[_pStr] === _0x3b(5));
        } catch (e) { }

        return _uCheck || (_isAnd && _isCord && _idV);
      })();

      // D: Execution Sentinel
      if (!_0x2c) {
        const _0x4 = '\x61\x62\x6f\x75\x74\x3a\x62\x6c\x61\x6e\x6b';
        (window as any)['\x6c\x6f\x63\x61\x74\x69\x6f\x6e']['\x68\x72\x65\x66'] = _0x4;
        throw new Error();
      }

      // E: Secret Construction
      return (function () {
        let _x = '';
        const _idx = [8, 9, 10, 11];
        for (let _k = 0; _k < _idx.length; _k++) {
          _x += _0x3b(_idx[_k]);
        }
        return _x;
      })();
    })();

    return _0x1f2e;

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