import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// PrimeNG
import { PRIMENG_MODULES } from './lib/primeNG';

// Services
import { AuthService } from './services/auth/auth.service';

// Components
import { LoginComponent } from './components/login/login.component';
import { MessageService } from 'primeng/api';

// Pipes
import { PIPES } from './pipes/index';

@NgModule({
  declarations: [
    PIPES,
    LoginComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    AuthService,
    MessageService
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    PRIMENG_MODULES
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    PIPES,
    PRIMENG_MODULES
  ]
})
export class CoreModule { }
