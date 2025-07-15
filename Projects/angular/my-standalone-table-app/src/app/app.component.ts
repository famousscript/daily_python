import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'; // Import MatTableModule directly
import { CommonModule } from '@angular/common'; // Needed for Angular directives like ngIf, ngFor
import { OnInit } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort'; // Imported MatSort and MatSortModule
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { CertificationTableComponent } from "./crttable/certification-table.component";
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    CertificationTableComponent,
    ComponentAComponent,
    ComponentBComponent
  ]
})
export class AppComponent { // Implemented AfterViewInit
  showA = true;
  showB = false;

  showComponent(component: 'A' | 'B') {
    this.showA = component === 'A';
    this.showB = component === 'B';
  }
}