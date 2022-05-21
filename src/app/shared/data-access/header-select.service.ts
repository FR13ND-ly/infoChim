import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderSelectService {

  constructor() { }

  indexUpdated : BehaviorSubject<number> = new BehaviorSubject<number>(0)

  getIndexUpdateListener() : Observable<number> {
    return this.indexUpdated.asObservable()
  }

  changeIndex(i : number) : void {
    this.indexUpdated.next(i)
  }
}
