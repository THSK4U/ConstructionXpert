import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ProjetsDto} from "../models/projets-dto";

@Injectable({
  providedIn: 'root'
})
export class PaginationService {


  private apiUrl = 'http://localhost:8200/Projets';

  constructor(private http:HttpClient) { }

  public pagination(page: number, size: number): Observable<ProjetsDto[]> {
    return this.http.get<ProjetsDto[]>(`${this.apiUrl}?page=${page}&size=${size}`);
  }

}
