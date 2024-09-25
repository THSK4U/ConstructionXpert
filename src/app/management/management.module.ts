import { NgModule } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "../app.component";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import { FormAjouterComponent } from './project/form-ajouter/form-ajouter.component';
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    ProjectComponent,
    FormAjouterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatPaginatorModule
  ],
  exports: [
    ProjectComponent
  ]
})
export class ManagementModule { }
