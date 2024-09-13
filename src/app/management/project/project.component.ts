import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProjetService} from "../../services/operations/projets";
import {ProjetsDto} from "../../services/models/projets-dto";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit{

  projects: ProjetsDto[]=[];
  constructor(
    private Service : ProjetService,
  ) {
  }
  ngOnInit(): void {
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
}
