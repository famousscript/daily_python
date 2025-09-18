import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {

  // Simulating data returned from a mock API
  getTableData(filters: any): Observable<any[]> {
    const data = [
      { id: 1, name: 'John', status: 'Active', category: 'Admin' },
      { id: 2, name: 'Jane', status: 'Inactive', category: 'User' },
      { id: 3, name: 'Doe', status: 'Active', category: 'Manager' },
      { id: 4, name: 'Alice', status: 'Inactive', category: 'User' },
      { id: 5, name: 'Bob', status: 'Active', category: 'Admin' },
    ];

    // Filtering data based on the selected filters
    let filteredData = data.filter(item => {
      let match = true;
      if (filters.status.length > 0 && !filters.status.includes(item.status)) {
        match = false;
      }
      if (filters.category.length > 0 && !filters.category.includes(item.category)) {
        match = false;
      }
      return match;
    });

    return of(filteredData); // Return the filtered data as an observable
  }
}
