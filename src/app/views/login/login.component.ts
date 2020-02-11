import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { FirebaseError } from 'firebase';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;
  userForm: FormGroup;
  showLoginForm: boolean = false;
  wrongPasswordEntered: boolean;
  tooManyAttempts: boolean;
  emailNotOnFile: boolean;
  unknownLoginError: boolean;

  get firstName (): AbstractControl {
    return this.userForm.get('registerForm').get('firstName');
  }

  get lastName (): AbstractControl {
    return this.userForm.get('registerForm').get('lastName');
  }


  get phone (): AbstractControl {
    return this.userForm.get('registerForm').get('phone');
  }

  get email (): AbstractControl {
    return this.userForm.get('loginForm').get('email');
  }

  get password (): AbstractControl {
    return this.userForm.get('loginForm').get('password');
  }

  constructor (
    private fb: FormBuilder,
    private router: Router,
    private afAuth: AngularFireAuth,
    private auth: AuthService,
  ) { }

  ngOnInit () {
    this.userForm = this.fb.group({
      registerForm: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phone: [
          '',
          [
            Validators.required,
            // Validators.pattern(''),
            Validators.minLength(10),
            Validators.maxLength(10),
          ],
        ],
      }),
      loginForm: this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      }),
    });
  }

  public async handleUser (): Promise<void> {
    console.warn('login/register not yet set up');
    if (this.showLoginForm) {
      this.logUserIn();
    } else {
      this.registerNewUser();
    }

    return;
  }

  public isFormCompleted (): boolean {
    if (!this.showLoginForm) {
      return this.userForm.get('registerForm').valid;
    }

    if (this.showLoginForm) {
      return this.userForm.get('loginForm').valid;
    }

    return false;
  }

  public async logUserIn (): Promise<void> {
    // login new user
    this.resetGeneralErrors();
    console.warn('login not yet set up');
    await this.auth.loginWithEmail(this.email.value, this.password.value)
      .then(() => {
        this.wrongPasswordEntered = false;
        this.unknownLoginError = false;
        this.router.navigate(['/dashboard']);
      })
      .catch((err: FirebaseError) => {
        console.warn(err.code);
        switch (err.code) {
          case 'auth/wrong-password':
            this.wrongPasswordEntered = true;
            break;
          case 'auth/too-many-requests':
            this.tooManyAttempts = true;
            break;
          case 'auth/user-not-found':
            this.emailNotOnFile = true;
            break;
          default:
            this.unknownLoginError = true;
        }

        return undefined;
      });
  }

  public toggleFormType (): void {
    this.resetGeneralErrors();
    this.showLoginForm = !this.showLoginForm;
  }

  public resetPassword (): void {
    console.log('reset password not yet set up', this.email.value);
  }

  private resetGeneralErrors (): void {
    this.wrongPasswordEntered = false;
    this.unknownLoginError = false;
    this.tooManyAttempts = false;
    this.emailNotOnFile = false;
  }

  public registerNewUser (): void {
    console.warn('register not yet set up');
    // register new user
  }

}
