import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Data {
  name: string;
  age: number;
  country: string;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  templateUrl: './data-table.component.html',
  styleUrls: [],
  imports: [
    // Import the required Angular Material modules in the standalone component
          MatTableModule,
          MatFormFieldModule,
          MatSelectModule,
          MatInputModule,
          ReactiveFormsModule
  ]
})
export class DataTableComponent {
  displayedColumns: string[] = ['name', 'age', 'country'];
  dataSource: Data[] = [
    { name: 'John', age: 25, country: 'USA' },
    { name: 'Alice', age: 30, country: 'Canada' },
    { name: 'Bob', age: 35, country: 'USA' },
    { name: 'Charlie', age: 28, country: 'UK' },
    { name: 'David', age: 40, country: 'Canada' },
  ];

  filterForm: FormGroup;
  countryOptions = ['USA', 'Canada', 'UK'];
  ageOptions = [25, 30, 35, 40];

  constructor() {
    this.filterForm = new FormGroup({
      age: new FormControl(''),
      country: new FormControl(''),
    });

    // Watch for form changes and apply the filter
    this.filterForm.valueChanges.subscribe(() => this.applyFilter());
  }

  // Filter data based on selected filters
  applyFilter() {
    let filteredData = this.dataSource;

    const ageFilter = this.filterForm.get('age')?.value;
    const countryFilter = this.filterForm.get('country')?.value;

    if (ageFilter) {
      filteredData = filteredData.filter((item) => item.age === ageFilter);
    }

    if (countryFilter) {
      filteredData = filteredData.filter((item) => item.country === countryFilter);
    }

    this.dataSource = filteredData;
  }
}
