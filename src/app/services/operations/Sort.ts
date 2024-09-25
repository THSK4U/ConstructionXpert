import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ProjetsDto} from "../models/projets-dto";

@Injectable({
  providedIn: 'root'
})
export class SortService {


  private apiUrl = 'http://localhost:8200/Projets';

  constructor(private http:HttpClient) { }

  public sort(field: string, direction: string): Observable<ProjetsDto[]> {
    return this.http.get<ProjetsDto[]>(`${this.apiUrl}/sort/${field}/${direction}`);
  }

}
