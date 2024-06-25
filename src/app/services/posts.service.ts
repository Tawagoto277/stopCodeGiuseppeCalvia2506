import { Injectable } from '@angular/core';
import { Post, PostCategory } from '../models/blog';
import { BLOGS } from '../data/blogs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postPreferiti: Post[] = [];

  getPost(){
    return BLOGS.posts as Post[];
  }

  getCategory(){
    return BLOGS.postCategories as PostCategory[];
  }

  aggiungiPreferito(post : Post){
    if(!this.postPreferiti.find(p => p.id == post.id)){
      this.postPreferiti.push(post);
    }
  }

  rimuoviPreferito(post : Post){
    const p = this.postPreferiti.find(p => p.id == post.id);

    if(p){
      const i = this.postPreferiti.indexOf(p);
      this.postPreferiti.splice(i ,1);
    }
  }

  svuotaPreferiti(){
    this.postPreferiti = [];
  }
}
