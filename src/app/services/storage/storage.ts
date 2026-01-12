import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class StorageService {

  getData(name: string): any | boolean {

    let r: any | boolean = false;

    try {
      r = localStorage.getItem(name);
      r = JSON.parse(r);
    }
    catch (e) { }

    return r;
  }

  setData(name: string, data: object): void {
    localStorage.setItem(name, JSON.stringify(data));
  }

}
