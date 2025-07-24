import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

interface ManagerNode {
  name: string;
  title: string;
  children?: ManagerNode[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manager-sidebar.component.html',
  styleUrls: ['./manager-sidebar.component.scss']
})
export class ManagerSidebarComponent {
  @Output() selectNode = new EventEmitter<string>();

  managerTree: ManagerNode[] = [
    {
      name: 'Alice',
      title: 'Manager',
      children: [
        {
          name: 'Bob',
          title: 'Sub-Manager',
          children: [
            { name: 'Carol', title: 'Sub-Sub-Manager' },
            { name: 'David', title: 'Sub-Sub-Manager' }
          ]
        },
        { name: 'Eve', title: 'Sub-Manager' }
      ]
    },
    {
      name: 'Frank',
      title: 'Manager',
      children: [
        { name: 'Grace', title: 'Sub-Manager' }
      ]
    }
  ];
  selectedName: string | null = null;

  onSelect(name: string) {
    this.selectedName = name;
    this.selectNode.emit(name);
  }

  // onSelect(name: string): void {
  //   this.selectedName = name;
  //   this.selectedName = name;
  // }
}
