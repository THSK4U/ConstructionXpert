import { NgModule } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "../app.component";
import {MatIconModule} from "@angular/material/icon";
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    ProjectComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    ProjectComponent
  ]
})
export class ManagementModule { }
