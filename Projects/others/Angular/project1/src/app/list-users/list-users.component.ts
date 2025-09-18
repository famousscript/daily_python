import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css',
})
  
export class ListUsersComponent implements OnInit {

  @Input() childDatattt: string
  data: string;
  constructor( ) {
     
  }

  ngOnInit(): void {
    this.data = this.childDatattt;

    console.log(this.data);
    
  }


}
