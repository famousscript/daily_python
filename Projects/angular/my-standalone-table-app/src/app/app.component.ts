import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'; // Import MatTableModule directly
import { CommonModule } from '@angular/common'; // Needed for Angular directives like ngIf, ngFor
import { OnInit } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort'; // Imported MatSort and MatSortModule
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { LinkComponent } from "./link/link.component";

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
    MatSortModule // Added MatSortModule here
    ,
    LinkComponent
  ]
})
export class AppComponent implements OnInit, AfterViewInit { // Implemented AfterViewInit
  @ViewChild(MatSort) sort!: MatSort; // Added ViewChild for MatSort

  // This array defines the column definitions used for the actual data rows.
  // These names map directly to the `matColumnDef` for data cells.
  dataColumns: string[] = [
    'contractWarranty_cell',
    'cy25q1_cmHours_cell', 'cy25q1_cmHc_cell', 'cy25q1_pmHours_cell', 'cy25q1_pmHc_cell',
    'cy25q2_cmHours_cell', 'cy25q2_cmHc_cell', 'cy25q2_pmHours_cell', 'cy25q2_pmHc_cell',
    'cy25q3_cmHours_cell', 'cy25q3_cmHc_cell', 'cy25q3_pmHours_cell', 'cy25q3_pmHc_cell',
    'cy25q4_cmHours_cell', 'cy25q4_cmHc_cell', 'cy25q4_pmHours_cell', 'cy25q4_pmHc_cell',
  ];

  // This array defines the columns for the *first* header row.
  // 'contractWarrantyHeader' is the name of the matColumnDef for the rowspan header.
  // 'cy25q1', 'cy25q2', etc. are the names of the matColumnDef for the colspan quarterly headers.
  firstHeaderRowCols: string[] = ['contractWarrantyHeader', 'cy25q1', 'cy25q2', 'cy25q3', 'cy25q4'];

  // This array defines the columns for the *second* header row.
  // 'emptyHeaderForContractWarranty' is a placeholder for the space taken by the
  // 'contractWarrantyHeader' in the first row.
  // The rest are the individual sub-headers under each quarter.
  secondHeaderRowCols: string[] = [
    'emptyHeaderForContractWarranty', // This aligns the second header row correctly
    'cy25q1_cmHours', 'cy25q1_cmHc', 'cy25q1_pmHours', 'cy25q1_pmHc',
    'cy25q2_cmHours', 'cy25q2_cmHc', 'cy25q2_pmHours', 'cy25q2_pmHc',
    'cy25q3_cmHours', 'cy25q3_cmHc', 'cy25q3_pmHours', 'cy25q3_pmHc',
    'cy25q4_cmHours', 'cy25q4_cmHc', 'cy25q4_pmHours', 'cy25q4_pmHc',
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
    // Custom sorting accessor for nested properties
    this.dataSource.sortingDataAccessor = (item: CertificationData, sortHeaderId: string): string | number => {
      if (sortHeaderId.includes('_')) {
        const parts = sortHeaderId.split('_');
        const quarter = parts[0];
        const property = parts.slice(1).join('_'); // Rejoin in case property name has underscores

        // Access the nested property dynamically
        if (item[quarter as keyof CertificationData] && typeof item[quarter as keyof CertificationData] === 'object') {
          return (item[quarter as keyof CertificationData] as any)[property];
        }
      }
      // For top-level properties like 'contractWarranty'
      return (item as any)[sortHeaderId];
    };
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

}