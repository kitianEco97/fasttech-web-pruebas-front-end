import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPosts } from '../models/Posts';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  // URI = 'http://localhost:4000/api/posts';
  URI_POSTS = environment.URI_POSTS;

  constructor( private http: HttpClient ) { }

  getPosts(): Observable<IPosts>{
    return this.http.get<IPosts>(`${this.URI_POSTS}`);
  }

}
