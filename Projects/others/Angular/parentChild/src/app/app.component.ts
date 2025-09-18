import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = "Hey this is parent data1111111"
  Counter = 5;

  countChangedHandler(count: any) {
    this.Counter = count;
    // console.log(count);
    
  }

}
