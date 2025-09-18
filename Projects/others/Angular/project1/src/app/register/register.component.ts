import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../user';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  host: { ngSkipHydration: 'true' }
})
export class RegisterComponent implements OnInit {

  user: any;
  signupForm: FormGroup;
  postUrl: any = "http://localhost:5000/profile"
  paramId?: string;
  constructor(private users: UserService, private router: Router, private route: ActivatedRoute) {
    //  alert('Hey constructor method called');
  }
  
  loadData() {
    this.users.getProfile().subscribe((res: any): any => {
      this.user = res;
    });
  }

  deleteUser(id: any) {
    this.users.deletePost(id).subscribe((res) => {
      alert("Record deleted Successfully!!");
      this.loadData();
    });
  }

  ngOnInit(): void {

    this.paramId = this.route.snapshot.params['id'];
  
    
    // alert('Hey oninit method called');
      this.signupForm = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(5)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required)
      });
    
    if (this.paramId) {
      // edit mode
      this.users.getUserById(this.paramId)
        .pipe(first())
        .subscribe(single => {
          this.signupForm.patchValue(single);
        });
    }
    
    this.loadData();
    // console.log(this.signupForm);
    
  
    
  }



  get f(){
    return this.signupForm.controls;
  }


  
  onSubmit() {
    let formValue = this.signupForm.value;
    console.log(formValue);
    
    const headers = { 'content-type': 'application/json' }
    const id = uuidv4();

    if (this.paramId) {
      this.users.updateUser(this.paramId, formValue, { 'headers': headers }).subscribe(res => {
        alert("Form Updated Successfully!!");
        this.loadData();
      })
    } else {
      this.users.postProfile(this.postUrl, { id, ...formValue }, { 'headers': headers }).subscribe((res) => {
        console.log(res);
        this.signupForm.reset();
        alert("Form Submitted Successfully!!");
        this.loadData();
      })
    }
    
  }

 

}