import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { Observable, of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActiveUserGuard implements CanActivate {

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
      map(user => user === null),
      tap(noActiveUser => {
        if (!noActiveUser) {
          this.router.navigate(['/dashboard']);
        }
      })
    );
  }
}
