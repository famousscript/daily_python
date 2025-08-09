import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerSidebarComponent } from './manager-sidebar/manager-sidebar.component';
import { ManagerSearchComponent } from './manager-search/manager-search.component';
// import { ManagerNode } from './models/manager.model';

export interface ManagerNode {
  name: string;
  expanded?: boolean;
  children?: ManagerNode[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ManagerSidebarComponent, ManagerSearchComponent],
  template: `
    <app-manager-search (search)="filterManagers($event)"></app-manager-search>
    <app-manager-sidebar (parentClick)="onParentClick($event)"
        (childClick)="onChildClick($event)" [managers]="filteredManagers"></app-manager-sidebar>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {


  managers = Array.from({ length: 50 }, (_, i) => ({
    name: `Manager ${i + 1}`,
    expanded: false,
    children: Array.from({ length: 3 }, (_, j) => ({
      name: `Employee ${i + 1}.${j + 1}`,
      expanded: false,
      children: []
    }))
  }));

  //   {
  //     name: 'John Smith',
  //     expanded: false,
  //     children: [
  //       { name: 'Alice Johnson', expanded: false, children: [] },
  //       { name: 'Bob Williams', expanded: false, children: [] },
  //       { name: 'Michael Green', expanded: false, children: [] }
  //     ]
  //   },
  //   {
  //     name: 'Sarah Brown',
  //     expanded: false,
  //     children: [
  //       { name: 'Chris Taylor', expanded: false, children: [] },
  //       { name: 'David Lee', expanded: false, children: [] },
  //       { name: 'Emma Wilson', expanded: false, children: [] }
  //     ]
  //   },
  //   {
  //     name: 'Daniel White',
  //     expanded: false,
  //     children: [
  //       { name: 'James Anderson', expanded: false, children: [] },
  //       { name: 'Olivia Thomas', expanded: false, children: [] },
  //       { name: 'Sophia Martinez', expanded: false, children: [] }
  //     ]
  //   },
  //   {
  //     name: 'Laura Davis',
  //     expanded: false,
  //     children: [
  //       { name: 'Liam Harris', expanded: false, children: [] },
  //       { name: 'Mia Clark', expanded: false, children: [] },
  //       { name: 'Noah Lewis', expanded: false, children: [] }
  //     ]
  //   },
  //   {
  //     name: 'William King',
  //     expanded: false,
  //     children: [
  //       { name: 'Ethan Walker', expanded: false, children: [] },
  //       { name: 'Isabella Young', expanded: false, children: [] },
  //       { name: 'Mason Scott', expanded: false, children: [] }
  //     ]
  //   },
  //   {
  //     name: 'Olivia Roberts',
  //     expanded: false,
  //     children: [
  //       { name: 'Aaron Gray', expanded: false, children: [] },
  //       { name: 'Chloe Bennett', expanded: false, children: [] },
  //       { name: 'Ryan Cooper', expanded: false, children: [] }
  //     ]
  //   },
  //   {
  //     name: 'James Parker',
  //     expanded: false,
  //     children: [
  //       { name: 'Hannah Hughes', expanded: false, children: [] },
  //       { name: 'Liam Reed', expanded: false, children: [] },
  //       { name: 'Zoe Foster', expanded: false, children: [] }
  //     ]
  //   },
  //   {
  //     name: 'Megan Allen',
  //     expanded: false,
  //     children: [
  //       { name: 'Lucas Perry', expanded: false, children: [] },
  //       { name: 'Evelyn Sanders', expanded: false, children: [] },
  //       { name: 'Jackson Brooks', expanded: false, children: [] }
  //     ]
  //   },
  //   {
  //     name: 'Henry Mitchell',
  //     expanded: false,
  //     children: [
  //       { name: 'Scarlett Ward', expanded: false, children: [] },
  //       { name: 'Caleb Hayes', expanded: false, children: [] },
  //       { name: 'Victoria James', expanded: false, children: [] }
  //     ]
  //   },
  //   {
  //     name: 'Grace Turner',
  //     expanded: false,
  //     children: [
  //       { name: 'Owen Russell', expanded: false, children: [] },
  //       { name: 'Natalie Barnes', expanded: false, children: [] },
  //       { name: 'Eli Griffin', expanded: false, children: [] }
  //     ]
  //   },
  //   {
  //     name: 'Benjamin Carter',
  //     expanded: false,
  //     children: [
  //       { name: 'Madison Price', expanded: false, children: [] },
  //       { name: 'Levi Kelly', expanded: false, children: [] },
  //       { name: 'Hazel Rivera', expanded: false, children: [] }
  //     ]
  //   },
  //   {
  //     name: 'Ava Nelson',
  //     expanded: false,
  //     children: [
  //       { name: 'Mateo Howard', expanded: false, children: [] },
  //       { name: 'Aurora Ward', expanded: false, children: [] },
  //       { name: 'Elijah Bell', expanded: false, children: [] }
  //     ]
  //   },
  //   {
  //     name: 'Ethan Wright',
  //     expanded: false,
  //     children: [
  //       { name: 'Penelope Cox', expanded: false, children: [] },
  //       { name: 'Leo Myers', expanded: false, children: [] },
  //       { name: 'Sophie Hughes', expanded: false, children: [] }
  //     ]
  //   },
  //   {
  //     name: 'Sophia Clark',
  //     expanded: false,
  //     children: [
  //       { name: 'Mila Simmons', expanded: false, children: [] },
  //       { name: 'Ezra Peterson', expanded: false, children: [] },
  //       { name: 'Aiden Long', expanded: false, children: [] }
  //     ]
  //   },
  //   {
  //     name: 'Michael Hall',
  //     expanded: false,
  //     children: [
  //       { name: 'Aria Flores', expanded: false, children: [] },
  //       { name: 'Theodore Brooks', expanded: false, children: [] },
  //       { name: 'Layla Morris', expanded: false, children: [] }
  //     ]
  //   }
  // ]);


  filteredManagers: ManagerNode[] = [...this.managers];

  sortManagers(data: ManagerNode[]): ManagerNode[] {
    return data
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(manager => ({
        ...manager,
        children: manager.children?.sort((a, b) => a.name.localeCompare(b.name))
      }));
  }



  filterManagers(query: string) {
    const trimmed = (query || '').trim();
    if (!trimmed) {
      this.filteredManagers = this.sortManagers([...this.managers]);
      return;
    }

    const lowerQuery = trimmed.toLowerCase();
    const out: ManagerNode[] = [];

    function normalize(str: string) {
      return str.toLowerCase().replace(/\s+/g, '').replace(/^0+/, '');
    }

    for (const manager of this.managers) {
      const matchManager = normalize(manager.name).includes(normalize(lowerQuery));

      const matchedChildren: ManagerNode[] = (manager.children || [])
        .filter(child => normalize(child.name).includes(normalize(lowerQuery)))
        // ensure each child satisfies ManagerNode shape (no-op if already does)
        .map(child => ({ ...child })) as ManagerNode[];

      if (matchManager || matchedChildren.length > 0) {
        out.push({
          ...manager,
          children: matchedChildren,
          expanded: true
        } as ManagerNode);
      }
    }

    this.filteredManagers = this.sortManagers(out);
  }

  onParentClick(manager: ManagerNode) {
    console.log('Parent clicked:', manager.name);
  }

  onChildClick(child: ManagerNode) {
    console.log('Child clicked:', child.name);
  }

}
