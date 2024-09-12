import { Injectable } from '@angular/core';
import {jwtDecode} from "jwt-decode";
import {JwtPayload} from "../models/JwtPayload";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private userId: number | null = null;
  private username: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  set token(token: string) {
      localStorage.setItem('jwt', token);
    }

    get token(){
        return localStorage.getItem('jwt') as string;
    }

  getSubFromJwt(token: string): string {
    const decodedToken = jwtDecode<JwtPayload>(token);
    return decodedToken.sub;
  }

  logout(): void {
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }
}
