import {Component, computed, OnInit, signal} from '@angular/core';
import {Router} from "@angular/router";
import {ProjetService} from "../../services/operations/projets";
import {ProjetsDto} from "../../services/models/projets-dto";
import {FormAjouterComponent} from "./form-ajouter/form-ajouter.component";
import {FormBuilder} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {single} from "rxjs";
import {SortService} from "../../services/operations/Sort";
import {PaginationService} from "../../services/operations/Pagination";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit{

  currentSortField: string = 'id';
  currentSortDirection: string = 'asc';
  projects: ProjetsDto[]=[];
  totalProjects: number = 0;
  pageSize: number = 5;
  currentPage: number = 0;


  constructor(
    private Service : ProjetService,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private sortService: SortService,
    private pagService: PaginationService,
  ) {
  }

  ngOnInit(): void {
    this.getSortedProjets('id', 'asc');
    this.getPaginatedProjects(this.currentPage, this.pageSize);
  }

  getProjets(): void {
      this.Service.getProjets().subscribe(
          (data: ProjetsDto[]) => {
            this.totalProjects = data.length;
          },
          (error) => {
              console.log('Error fetching projects', error);
          }
      );
  }

  getSortedProjets(field: string, direction: string): void {
    this.sortService.sort(field, direction).subscribe(
      (data: ProjetsDto[]) => {
        this.projects = data;
        this.totalProjects = data.length;
        console.log(this.projects);
      },
      (error) => {
        console.log('Error fetching sorted projects', error);
      }
    );
  }

  getPaginatedProjects(page: number, size: number): void {
    this.pagService.pagination(page, size).subscribe(
      (data: ProjetsDto[]) => {
        this.projects = data;
      },
      (error) => {
        console.log('Error fetching paginated projects', error);
      }
    );
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getPaginatedProjects(this.currentPage, this.pageSize);
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

  sort(field: string) {
    if (this.currentSortField === field) {
      this.currentSortDirection = this.currentSortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.currentSortField = field;
      this.currentSortDirection = 'asc';
    }

    this.getSortedProjets(this.currentSortField, this.currentSortDirection);

  }
}
