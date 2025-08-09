import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manager-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <input [(ngModel)]="query" (input)="onSearch()" placeholder="Search..." />
  `,
  styles: [`
    input {
      width: 100%;
      padding: 6px;
      margin-bottom: 10px;
    }
  `]
})
export class ManagerSearchComponent {
  query: string = '';
  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.query);
  }
}
