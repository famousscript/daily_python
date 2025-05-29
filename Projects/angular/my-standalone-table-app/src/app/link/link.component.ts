import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AComponentComponent } from "../acomponent/acomponent.component";
import { BComponentComponent } from "../bcomponent/bcomponent.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-link',
  standalone: true,
  imports: [AComponentComponent, BComponentComponent, CommonModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {
  constructor(private router: Router) { }

  activeComponent: 'P' | 'Q' = 'P';

  showComponent(component: 'P' | 'Q') {
    this.activeComponent = component;
  }
}
