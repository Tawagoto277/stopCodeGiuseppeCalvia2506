import { Component } from '@angular/core';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public ps : PostsService){}
}
