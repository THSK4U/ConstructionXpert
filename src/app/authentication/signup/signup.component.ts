import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProjetService} from "../../services/operations/register";
import {AuthResponse} from "../../services/models/auth-response";
import {UserDto} from "../../services/models/user-dto";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  registerForm: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service : ProjetService
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.checkPasswords });
  }


  checkPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.service.register(this.registerForm.value).subscribe(
        (data: UserDto) => {
          console.log('Login successful:', data);
        },
      );
      this.router.navigate(['/']);
    }
  }
}
