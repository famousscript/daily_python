import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ManagerNode } from './app.component';

interface ManagerNode {
  name: string;
  expanded?: boolean;
  children?: ManagerNode[];
}

@Component({
  selector: 'app-manager-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sidebar">
      <div *ngFor="let manager of managers" class="manager-container">
        <div 
          class="manager" 
          [class.active]="activeParent === manager"
          (click)="onParentClick(manager)"
        >
          <span class="arrow" (click)="toggleExpand(manager, $event)">
            {{ manager.expanded ? '▼' : '▶' }}
          </span>
          {{ manager.name }}
        </div>
        <div *ngIf="manager.expanded" class="children">
          <div 
            *ngFor="let child of manager.children" 
            class="child" 
            [class.active]="activeChild === child"
            (click)="onChildClick(child, $event)"
          >
            {{ child.name }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .sidebar {
      width: 40vw;
      height: 100vh;
      background: #f9f9f9;
      border-right: 1px solid #ddd;
      overflow-y: auto;
      padding: 8px;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }
    .manager-container {
      margin-bottom: 6px;
    }
    .manager {
      padding: 8px;
      cursor: pointer;
      user-select: none;
      border-radius: 4px;
    }
    .manager.active {
      background-color: #d0e7ff;
    }
    .arrow {
      display: inline-block;
      width: 20px;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
      margin-right: 6px;
    }
    .children {
      padding-left: 28px;
      margin-top: 4px;
    }
    .child {
      padding: 4px 8px;
      cursor: pointer;
      user-select: none;
      border-radius: 4px;
    }
    .child.active {
      background-color: #f0ffd0;
    }
  `]
})
export class ManagerSidebarComponent {
  @Input() managers: ManagerNode[] = [];
  @Output() parentClick = new EventEmitter<ManagerNode>();
  @Output() childClick = new EventEmitter<ManagerNode>();

  activeParent: ManagerNode | null = null;
  activeChild: ManagerNode | null = null;

  toggleExpand(manager: ManagerNode, event: MouseEvent) {
    event.stopPropagation();
    manager.expanded = !manager.expanded;
  }

  onParentClick(manager: ManagerNode) {
    this.activeParent = manager;
    this.activeChild = null;
    this.parentClick.emit(manager);
  }

  onChildClick(child: ManagerNode, event: MouseEvent) {
    event.stopPropagation();
    this.activeChild = child;
    this.activeParent = null;
    this.childClick.emit(child);
  }
}
