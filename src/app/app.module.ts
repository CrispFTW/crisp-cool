import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

// import { CoreModule } from '@core/core.module';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
// import { LoginComponent } from './views/login/login.component';
// import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './ng.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,HelloComponent,
    // LoginComponent,
    // PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,FormsModule,
    BrowserAnimationsModule,
    // AppRoutingModule,
    // CoreModule,
    ReactiveFormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.full),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

