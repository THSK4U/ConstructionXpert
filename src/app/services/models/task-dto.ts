export interface Tache {
    id?: number;
    description: string;
    dateDebut: Date;
    dateFin: Date;
    statut: 'A_FAIRE' | 'EN_COURS' | 'TERMINE';
    projetId: number;
  }