import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'; // Import MatTableModule directly
import { CommonModule } from '@angular/common'; // Needed for Angular directives like ngIf, ngFor
import { OnInit } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort'; // Imported MatSort and MatSortModule
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { CertificationTableComponent } from "./crttable/certification-table.component";


// Interface for the data structure (remains the same)
export interface CertificationData {
  contractWarranty: string;
  cy25q1: {
    cmHours: number;
    cmHc: number;
    pmHours: number;
    pmHc: number;
  };
  cy25q2: {
    cmHours: number;
    cmHc: number;
    pmHours: number;
    pmHc: number;
  };
  cy25q3: {
    cmHours: number;
    cmHc: number;
    pmHours: number;
    pmHc: number;
  };
  cy25q4: {
    cmHours: number;
    cmHc: number;
    pmHours: number;
    pmHc: number;
  };
}

// Sample data (remains the same)
const ELEMENT_DATA: CertificationData[] = [
  {
    contractWarranty: 'EX Certification',
    cy25q1: { cmHours: 108.2, cmHc: 0.7, pmHours: 53.1, pmHc: 0.3 },
    cy25q2: { cmHours: 96.8, cmHc: 0.4, pmHours: 50.1, pmHc: 0.3 },
    cy25q3: { cmHours: 108.2, cmHc: 0.4, pmHours: 53.1, pmHc: 0.4 },
    cy25q4: { cmHours: 112.1, cmHc: 0.4, pmHours: 122.3, pmHc: 0.4 },
  },
  {
    contractWarranty: '40X Certification',
    cy25q1: { cmHours: 108.2, cmHc: 0.4, pmHours: 53.1, pmHc: 0.2 },
    cy25q2: { cmHours: 108.2, cmHc: 0.4, pmHours: 53.1, pmHc: 0.2 },
    cy25q3: { cmHours: 108.2, cmHc: 0.4, pmHours: 53.1, pmHc: 0.2 },
    cy25q4: { cmHours: 108.2, cmHc: 0.4, pmHours: 53.1, pmHc: 0.2 },
  },
  {
    contractWarranty: 'SERIES Certification',
    cy25q1: { cmHours: 144.9, cmHc: 0.5, pmHours: 53.2, pmHc: 0.2 },
    cy25q2: { cmHours: 144.9, cmHc: 0.5, pmHours: 51.1, pmHc: 0.2 },
    cy25q3: { cmHours: 161.7, cmHc: 0.5, pmHours: 66.8, pmHc: 0.2 },
    cy25q4: { cmHours: 34.4, cmHc: 0.5, pmHours: 144.9, pmHc: 0.2 },
  },
  {
    contractWarranty: 'TUV Certification',
    cy25q1: { cmHours: 151.3, cmHc: 0.5, pmHours: 51.3, pmHc: 0.2 },
    cy25q2: { cmHours: 151.3, cmHc: 0.5, pmHours: 51.3, pmHc: 0.2 },
    cy25q3: { cmHours: 151.3, cmHc: 0.5, pmHours: 51.3, pmHc: 0.2 },
    cy25q4: { cmHours: 151.3, cmHc: 0.5, pmHours: 51.3, pmHc: 0.2 },
  },
  {
    contractWarranty: 'Quarterly Total',
    cy25q1: { cmHours: 2732.8, cmHc: 9.5, pmHours: 883.3, pmHc: 2.9 },
    cy25q2: { cmHours: 2732.8, cmHc: 8.0, pmHours: 883.3, pmHc: 2.9 },
    cy25q3: { cmHours: 3044.5, cmHc: 10.1, pmHours: 967.1, pmHc: 3.2 },
    cy25q4: { cmHours: 3044.5, cmHc: 10.1, pmHours: 967.1, pmHc: 3.2 },
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    CertificationTableComponent
  ]
})
export class AppComponent { // Implemented AfterViewInit

}