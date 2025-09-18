import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListUsersComponent } from "../list-users/list-users.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ListUsersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  parentMessage = "Hi data is coming from parent component"

}
