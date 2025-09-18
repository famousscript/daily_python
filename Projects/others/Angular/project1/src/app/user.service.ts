import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:5000/profile"
  
  constructor(private https: HttpClient) { }

  getProfile() {
    return this.https.get(this.url)
  }

  postProfile(url:any, data:any, headers:any) {
    return this.https.post(url, data, headers)
  }

  getUserById(id: string) {
    return this.https.get<User>(`${this.url}/${id}`);
  }

  deletePost(id: any) {
    return this.https.delete(this.url+"/"+id)
  }

  updateUser(id:any, user: any, headers:any) {
    return this.https.put(this.url+"/"+id, user, headers);
  }

}
