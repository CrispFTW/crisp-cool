import { Injectable } from '@angular/core';
import { IDeal } from '@models/IDeal.model';
import { User } from 'firebase';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  userSubject: BehaviorSubject<User | null> = new BehaviorSubject(null);
  userState: Observable<User | null> = this.userSubject.asObservable();

  dealsSubject: BehaviorSubject<IDeal[] | null> = new BehaviorSubject(null);
  dealState: Observable<IDeal[] | null> = this.dealsSubject.asObservable();

  constructor () {}

  public updateUserState (user: User): void {
    // console.log(user);
    this.userSubject.next(user);
  }

  public updateDealState (deals: IDeal[]): void {
    this.dealsSubject.next(deals);
  }
}
