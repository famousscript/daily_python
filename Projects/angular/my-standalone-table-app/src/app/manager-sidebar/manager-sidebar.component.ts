import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

interface ManagerNode {
  name: string;
  empId: string;
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
  selectedEmpId: string = '';

  managerTree: ManagerNode[] = [
    {
      name: 'Miller, Nick',
      empId: 'B2333',
      children: [
        { name: 'Vaughan, PJ', empId: '2007' },
        { name: 'Noonan, Geoff', empId: '25204' },
        {
          name: 'Chastain, Kevin',
          empId: '26704',
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
      children: [
        { name: 'Babaran, Ellis', empId: '14900' },
        { name: 'Jaynes, John', empId: '16091' },
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

}
