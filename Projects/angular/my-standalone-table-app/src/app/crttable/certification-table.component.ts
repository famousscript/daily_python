import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-certification-table',
  templateUrl: './certification-table.component.html',
  styleUrls: ['./certification-table.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class CertificationTableComponent {


  @Input() selectedManager = '';
  quarters = ['CY25Q1', 'CY25Q2', 'CY25Q3', 'CY25Q4'];

  // Manager-specific certification data
  managerData: { [managerName: string]: any[] } = {
    'Alice': [
      {
        cert: "236X Certification",
        certData: [
          { quarterCy: "CY25Q1", cmHours: 89.7, cmHC: 0.3, pmHours: 96.8, pmHC: 0.3 },
          { quarterCy: "CY25Q2", cmHours: 89.7, cmHC: 0.3, pmHours: 96.8, pmHC: 0.3 },
          { quarterCy: "CY25Q3", cmHours: 112.1, cmHC: 0.4, pmHours: 120.9, pmHC: 0.4 },
          { quarterCy: "CY25Q4", cmHours: 112.1, cmHC: 0.4, pmHours: 120.9, pmHC: 0.4 }
        ]
      }
    ],
    'Bob': [
      {
        cert: "SP1 Certification",
        certData: [
          { quarterCy: "CY25Q1", cmHours: 188.5, cmHC: 0.6, pmHours: 39.6, pmHC: 0.1 },
          { quarterCy: "CY25Q2", cmHours: 188.5, cmHC: 0.6, pmHours: 39.6, pmHC: 0.1 },
          { quarterCy: "CY25Q3", cmHours: 188.5, cmHC: 0.6, pmHours: 39.6, pmHC: 0.1 },
          { quarterCy: "CY25Q4", cmHours: 188.5, cmHC: 0.6, pmHours: 39.6, pmHC: 0.1 }
        ]
      },
      {
        cert: "SP2 Certification",
        certData: [
          { quarterCy: "CY25Q1", cmHours: 39.3, cmHC: 0.1, pmHours: 15.1, pmHC: 0.1 },
          { quarterCy: "CY25Q2", cmHours: 39.3, cmHC: 0.1, pmHours: 15.1, pmHC: 0.1 },
          { quarterCy: "CY25Q3", cmHours: 39.3, cmHC: 0.1, pmHours: 15.1, pmHC: 0.1 },
          { quarterCy: "CY25Q4", cmHours: 39.3, cmHC: 0.1, pmHours: 15.1, pmHC: 0.1 }
        ]
      }
    ],
    'Frank': [
      {
        cert: "240X Certification",
        certData: [
          { quarterCy: "CY25Q1", cmHours: 108.2, cmHC: 0.4, pmHours: 53.1, pmHC: 0.2 },
          { quarterCy: "CY25Q2", cmHours: 108.2, cmHC: 0.4, pmHours: 53.1, pmHC: 0.2 },
          { quarterCy: "CY25Q3", cmHours: 108.2, cmHC: 0.4, pmHours: 53.1, pmHC: 0.2 },
          { quarterCy: "CY25Q4", cmHours: 108.2, cmHC: 0.4, pmHours: 53.1, pmHC: 0.2 }
        ]
      },
      {
        cert: "SP5 Certification",
        certData: [
          { quarterCy: "CY25Q1", cmHours: 17.1, cmHC: 0.1, pmHours: 0.0, pmHC: 0.0 },
          { quarterCy: "CY25Q2", cmHours: 17.1, cmHC: 0.1, pmHours: 0.0, pmHC: 0.0 },
          { quarterCy: "CY25Q3", cmHours: 17.1, cmHC: 0.1, pmHours: 0.0, pmHC: 0.0 },
          { quarterCy: "CY25Q4", cmHours: 17.1, cmHC: 0.1, pmHours: 0.0, pmHC: 0.0 }
        ]
      }
    ]
  };

  // selectedManager = 'Alice'; // Default manager

  // get contractWarranty() {
  //   return this.managerData[this.selectedManager] || [];
  // }

  // getQuarterData(row: any, quarter: string) {
  //   return row.certData.find((d: any) => d.quarterCy === quarter);
  // }

  get managerList() {
    return Object.keys(this.managerData);
  }

  selectManager(manager: string) {
    this.selectedManager = manager;
  }


  get contractWarranty() {
    return this.managerData[this.selectedManager] || [];
  }

  getQuarterData(row: any, quarter: string) {
    return row.certData.find((d: any) => d.quarterCy === quarter);
  }


}
