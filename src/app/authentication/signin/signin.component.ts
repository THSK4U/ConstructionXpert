import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserDto} from "../../services/models/user-dto";
import {ProjetService} from "../../services/operations/login";
import {Router} from "@angular/router";
import {TokenService} from "../../services/token/token.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;
  hidePassword = true;
  authRequirest: UserDto = {username: '',password: ''};
  errorMsg: Array<string> = [];

  constructor(
    private fb: FormBuilder,
    private authentication: ProjetService,
    private router : Router,
    private tokenService: TokenService

  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.errorMsg = [];
      this.authentication.Login(this.loginForm.value).subscribe(
        (data) => {
          if (data) {
            this.tokenService.token = data.body.token as string;
            console.log('Login successful:', data);
          }
        },
        (error) => {
          const errorMsg = error.error?.message || 'Login failed. Please try again.';
          this.errorMsg.push(errorMsg);
          console.error('Login error:', error);
        }
      );
    }
  }
}
