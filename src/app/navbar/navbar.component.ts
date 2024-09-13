import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../services/token/token.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router,
  private Service : TokenService
) {
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('jwt');
  }

  logout() {
    this.Service.logout();

  }

  login() {
    this.router.navigate(['/']);
  }

  signup() {
    this.router.navigate(['/Register']);
  }
}
