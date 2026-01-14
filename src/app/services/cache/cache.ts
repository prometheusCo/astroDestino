import { Injectable } from '@angular/core';
import { StorageService } from '../../services/storage/storage';
import { DatesService } from '../dates/dates';
import { sign } from 'crypto';

@Injectable({
  providedIn: 'root',
})

export class CacheService {

  constructor(
    private storage: StorageService,
    private date: DatesService,
  ) { }



  cacheMangement(card: any, mode: 'update' | 'get' | 'check', sign: string): any | void {

    sign = sign.trim().toLowerCase();
    const key = `${sign}_cache_${card.mode}`;
    const now = new Date();

    const dailyKey = now.toISOString().slice(0, 10);
    const monthlyKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    const weeklyKey = this.date.getISOWeekKey(now);

    const currentKey = card.mode === 'daily' ? dailyKey
      : (card.mode === 'weekly' ? weeklyKey : monthlyKey);


    if (mode === 'update') {

      card.date = currentKey;
      this.storage.setData(key, card);
      return true;
    }

    const savedCard = this.storage.getData(key);

    if (!savedCard) return false;

    if (mode === 'get') return savedCard;

    return savedCard.date === currentKey;

  }


}


