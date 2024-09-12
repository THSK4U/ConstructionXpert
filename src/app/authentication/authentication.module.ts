import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [],
  exports: [

  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    HttpClientModule
  ]
})
export class AuthenticationModule { }
