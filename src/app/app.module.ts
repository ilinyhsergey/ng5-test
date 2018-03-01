import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './routing/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import {AuthGuardService} from './services/auth-guard.service';
import { StatusComponent } from './components/status/status.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RecaptchaDirective } from './directives/recaptcha.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StatusComponent,
    RecaptchaDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    AppRoutingModule
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
