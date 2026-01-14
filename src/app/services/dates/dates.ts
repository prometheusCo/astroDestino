import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


export class DatesService {

  getZodiacSign(date: any): string {

    const day = date.getDate();
    const month = date.getMonth() + 1; // Enero = 0

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
    return (month === 12 && day >= 22) || (month === 1 && day <= 19) ? "Capricorn" : "";
  }


  getMonth(date: Date | string = new Date(), lang_iso_code: string = 'es-ES'): string {

    if (!date) return '';

    date = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat(lang_iso_code, { month: 'long' }).format(date);

  }


  getCurrentWeekRange(date: Date | string = new Date(), lang_iso_code: string = 'es-ES'): string {

    const current = new Date(date);

    const dayOfWeek = current.getDay();
    const diffToMonday = current.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);

    const monday = new Date(current.setDate(diffToMonday));
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };

    const from = monday.toLocaleDateString(lang_iso_code, options);
    const to = sunday.toLocaleDateString(lang_iso_code, options);

    return ` ${from} -  ${to}`;
  }


  getDayInfo(date: Date = new Date(), lang_iso_code: string = 'es-ES'): string {

    const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
    const dayName = new Intl.DateTimeFormat(lang_iso_code, options).format(date);

    const dayNumber = date.getDate();
    return `${dayName} ${dayNumber}`;
  }



  getISOWeekKey(date: Date): string {

    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const day = d.getUTCDay() || 7; // Mon=1..Sun=7

    // Shift date to nearest Thursday (ISO week rule)
    d.setUTCDate(d.getUTCDate() + 4 - day);

    const year = d.getUTCFullYear();
    const yearStart = new Date(Date.UTC(year, 0, 1));
    const week = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);

    return `${year}-W${String(week).padStart(2, '0')}`;

  }


}
