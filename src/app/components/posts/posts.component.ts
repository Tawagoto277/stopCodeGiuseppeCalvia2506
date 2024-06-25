import { Component, OnInit } from '@angular/core';
import { Blog, Post } from '../../models/blog';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{

  posts: Post[] = []

  constructor(private ps : PostsService){ }

  //Funzione imlementata da angular non appena caricato il componente
  ngOnInit(){
    this.posts = this.ps.getPost();
  }
}
