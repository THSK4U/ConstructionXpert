import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDto } from 'src/app/services/models/user-dto';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {


  private apiUrl = 'http://localhost:8200';

  constructor(private http:HttpClient) { }

  public Login(projet: UserDto): Observable<UserDto> {
    return this.http.post<UserDto>(`${this.apiUrl}/Auth/loginv`, projet, { responseType: 'text' as 'json' });
  }


}