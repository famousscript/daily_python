import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = "https://jsonplaceholder.typicode.com/posts"

  constructor(private https: HttpClient) { }

  getPost() {
    return this.https.get(this.url)
  }


}
