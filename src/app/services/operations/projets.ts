import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjetsDto } from 'src/app/services/models/projets-dto';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {


  private apiUrl = 'http://localhost:8200';

  constructor(private http:HttpClient) { }

  public getProjets (): Observable<ProjetsDto[]>{
    return this.http.get<ProjetsDto[]>(`${this.apiUrl}/projets/`);
  }

  public addProjet(projet: ProjetsDto): Observable<ProjetsDto> {
    return this.http.post<ProjetsDto>(`${this.apiUrl}/projets/add`, projet, { responseType: 'text' as 'json' });
  }

  public getProjetById(idProjet: number): Observable<ProjetsDto> {
    return this.http.get<ProjetsDto>(`${this.apiUrl}/projets/idprojet?idprojet=${idProjet}`);
  }

  public updateProjet(idProjet: number, projet: ProjetsDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/projets/update/${idProjet}`, projet);
  }

  public deleteProjet(idProjet: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/projets/delete/${idProjet}`);
  }
}
