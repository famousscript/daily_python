import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

interface ManagerNode {
  name: string;
  empId: string;
  expanded?: boolean;
  children?: ManagerNode[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './manager-sidebar.component.html',
  styleUrls: ['./manager-sidebar.component.scss']
})
export class ManagerSidebarComponent implements OnInit {

  @Output() selectNode = new EventEmitter<string>();
  selectedEmpId: string = '';

  managerTree: ManagerNode[] = [
    {
      name: 'Miller, Nick',
      empId: 'B2333',
      expanded: true,
      children: [
        { name: 'Vaughan, PJ', empId: '2007' },
        { name: 'Noonan, Geoff', empId: '25204' },
        {
          name: 'Chastain, Kevin',
          empId: '26704',
          expanded: false,
          children: [
            { name: 'Riese, Jeff', empId: '1206' },
            { name: 'Kreimeyer, Emily', empId: '12279' },
            { name: 'Proctor, Corey', empId: '18711' },
            { name: 'Whelan, Dennis', empId: '40389' },
          ]
        }
      ]
    },
    {
      name: 'Mindingall, Michael',
      empId: '16350',
      expanded: false,
      children: [
        { name: 'Babaran, Ellis', empId: '14900' },
        { name: 'Jaynes, John', empId: '16091' }
      ]
    }
  ];


  ngOnInit() {
    const firstEmp = this.managerTree[0]?.empId;
    if (firstEmp) {
      this.selectedEmpId = firstEmp;
      this.selectNode.emit(firstEmp);
    }
  }

  onSelect(empId: string) {
    this.selectedEmpId = empId;
    this.selectNode.emit(empId);
  }

  toggleExpand(node: ManagerNode, event: MouseEvent) {
    node.expanded = !node.expanded;
    event.stopPropagation(); // prevent triggering onSelect
  }

}
