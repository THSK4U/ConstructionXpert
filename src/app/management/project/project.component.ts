import {Component, computed, OnInit, signal} from '@angular/core';
import {Router} from "@angular/router";
import {ProjetService} from "../../services/operations/projets";
import {ProjetsDto} from "../../services/models/projets-dto";
import {FormAjouterComponent} from "./form-ajouter/form-ajouter.component";
import {FormBuilder} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {single} from "rxjs";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit{

  projects: ProjetsDto[]=[];
  constructor(
    private Service : ProjetService,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {
  }
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.Service.getProjets().subscribe(
      (data: ProjetsDto[]) => {
        this.projects = data;
        console.log(this.projects)
      },
      (error) => {
        console.log('Error fetching projets', error);
      }
    );
  }

  editProject(project: ProjetsDto) {

  }

  deleteProject(project: ProjetsDto) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
      this.Service.deleteProjet(project.id!).subscribe(
        () => {
          this.projects = this.projects.filter(p => p.id !== project.id);
          console.log('Project deleted successfully');
        },
        (error) => {
          console.error('Error deleting project', error);
        }
      );
    }
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(FormAjouterComponent, {
      width: '250px',
    });

  }

  searchText!: '';

  filteredProjects() {
      if (!this.searchText) {
          return this.projects;
      } else {
        return this.projects.filter(projet =>
          projet.nom?.toLowerCase().includes(this.searchText.toLowerCase()) ||
          projet.description?.toLowerCase().includes(this.searchText.toLowerCase())
        );
      }

}

}
