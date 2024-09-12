import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserDto} from "../../services/models/user-dto";
import {ProjetService} from "../../services/operations/login";
import {Router} from "@angular/router";
import {TokenService} from "../../services/token/token.service";
import {AuthResponse} from "../../services/models/auth-response";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;
  hidePassword = true;
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
      console.log(this.loginForm.value)
      this.authentication.Login(this.loginForm.value).subscribe(
        (data: AuthResponse) => {
            this.tokenService.token = data.token as string;
            console.log('Login successful:', data);
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
