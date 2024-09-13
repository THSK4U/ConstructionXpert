
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tache } from '../models/task-dto';

@Injectable({
  providedIn: 'root'
})
export class TachesService {
  private apiUrl = 'http://votre-api-url/api';
  constructor(private http:HttpClient) { }

  getAllTaches(): Observable<Tache[]> {
    return this.http.get<Tache[]>(`${this.apiUrl}/Taches`);
  }

  getTacheById(id: number): Observable<Tache> {
    return this.http.get<Tache>(`${this.apiUrl}/Taches/${id}`);
  }

  creerTache(tache: Tache): Observable<Tache> {
    return this.http.post<Tache>(`${this.apiUrl}/Taches/Creer`, tache);
  }

  mettreAjourTache(id: number, tache: Tache): Observable<Tache> {
    return this.http.put<Tache>(`${this.apiUrl}/Taches/MettreAjour/${id}`, tache);
  }

  supprimerTache(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Taches/Delete/${id}`);
  }

  getTachesByProjetId(projetId: number): Observable<Tache[]> {
    return this.http.get<Tache[]>(`${this.apiUrl}/Projet/${projetId}`);
  }
}