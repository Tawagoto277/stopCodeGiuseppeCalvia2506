import { Component, Input } from '@angular/core';
import { Post } from '../../../models/blog';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  @Input()
  post?: Post

  constructor(public ps : PostsService){}
}
