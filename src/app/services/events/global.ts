// global-events.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type GlobalEvent =
  | { type: 'RELOAD_USERS' }
  | { type: 'LOGOUT' }
  | { type: 'REFRESH_DATA'; payload?: any };

@Injectable({ providedIn: 'root' })

export class GlobalEventsService {

  private eventSubject = new Subject<GlobalEvent>();
  events$ = this.eventSubject.asObservable();

  emit(event: GlobalEvent) {
    this.eventSubject.next(event);
  }

}
