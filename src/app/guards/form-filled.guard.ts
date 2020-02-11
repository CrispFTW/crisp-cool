import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { IUser } from '@models/IUser.model';
import { Observable, of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormFilledGuard implements CanActivate {

  constructor (
    private auth: AuthService,
    private router: Router,
  ) { }

  canActivate (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.user$.pipe(
      take(1),
      map((user: IUser) => {
        console.log(user);
        // TODO: Check to see if userType === 'newUser' (if so redirect to questionaire)

        return !!user.interestedIn;
      }),
      tap(formFilled => {
        console.log(formFilled);
        if (!formFilled) {
          console.log('form has not been filled out');
          this.router.navigate(['/questionaire']);
        }
      }),
    );
  }
}
