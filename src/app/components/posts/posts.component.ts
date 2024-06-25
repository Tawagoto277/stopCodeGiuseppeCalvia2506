import { Component } from '@angular/core';
import { Blog, Post } from '../../models/blog';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: Post[] = []
  constructor(private ps : PostsService){ }

  ngOnInit(){
    this.posts = this.ps.getPost()
  }
}
