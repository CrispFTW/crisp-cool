import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$: Observable<User>;

  constructor (
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router,
  ) {
    this.user$ = this.afAuth.authState
      .pipe(
        switchMap(user => {
          if (user) {
            // TODO: Check to see if user has filled out the questionaire
            // NOTE: if not, send them to the questionaire
            // If they have, send them to deals/dashboard
            return this.db.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        }),
      );
  }

  public async loginWithEmail (email: string, password: string): Promise<void> {
    const credential = await this.afAuth.auth.signInWithEmailAndPassword(email, password);

    return;
  }

  async signOut (): Promise<boolean> {
    await this.afAuth.auth.signOut();

    return this.router.navigate(['/login']);
  }

}
