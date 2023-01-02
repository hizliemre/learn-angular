import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PostApi, PostDTO } from './api/posts-api.service';
import { CardComponent } from './card/card.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CardComponent, NgIf, AsyncPipe, NgFor]
})
export class AppComponent implements OnInit {

  posts: PostDTO[] = [];

  #postApi = inject(PostApi);
  #posts$ = this.#postApi.getPosts();

  ngOnInit(): void {
    this.#posts$.subscribe((posts) => this.posts = posts);
  }

  cardButtonClick(index: number): void {

    this.posts.splice(index, 1);
  }

}
