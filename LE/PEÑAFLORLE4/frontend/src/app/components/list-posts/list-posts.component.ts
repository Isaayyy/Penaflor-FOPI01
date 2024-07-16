import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent {
  posts: Post[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.http.get<Post[]>('http://localhost:4200/api/post')
      .subscribe({
        next: (data: Post[]) => {
          this.posts = data;
          console.log(this.posts);
        }
      })
  }
}


