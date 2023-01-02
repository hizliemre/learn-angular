import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface PostDTO {
  userId: number;
  id: number;
  title: string;
  body: string;
}


@Injectable({ providedIn: 'root' })
export class PostApi {

  #http = inject(HttpClient);

  getPosts(): Observable<PostDTO[]> {
    return this.#http.get<PostDTO[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
